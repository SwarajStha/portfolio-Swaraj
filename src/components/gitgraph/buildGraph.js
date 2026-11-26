// Turns the experience list into a git-style commit graph:
//   - every role is a commit on its `branch`, dated by its start month
//   - a feature branch forks off the main commit just before its first role
//   - a feature branch merges back into main when its last role ends
//     (no merge while a role on it is still "Present")
// Rows are ordered newest first, like `git log`.

const MONTHS = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
};

// "September 2022" -> months since year 0 (sortable); "Present" -> null
const parseMonth = (text) => {
  const m = text.trim().toLowerCase().match(/^([a-z]+)\s+(\d{4})$/);
  if (!m || !(m[1] in MONTHS)) return null;
  return Number(m[2]) * 12 + MONTHS[m[1]];
};

export const formatMonth = (value) => {
  const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${names[value % 12]} ${Math.floor(value / 12)}`;
};

// Short, stable pseudo-hash for merge commits
const pseudoHash = (text) => {
  let h = 2166136261;
  for (const c of text) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return (h >>> 0).toString(16).padStart(8, "0").slice(0, 7);
};

export const BRANCH_COLORS = {
  main: "#e5e7eb",
  "feature/smu-academic": "#22d3ee",
  "feature/smu-residence": "#f472b6",
  "feature/smu-research": "#fbbf24",
};
const FALLBACK_COLORS = ["#a78bfa", "#34d399", "#fb923c", "#60a5fa"];

export const buildGraph = (experiences, mainBranch = "main") => {
  // 1. Commit rows
  const commits = experiences.map((exp) => {
    const [startText, endText = ""] = exp.year.split(" - ");
    return {
      type: "commit",
      exp,
      branch: exp.branch,
      hash: exp.commitHash,
      date: parseMonth(startText),
      end: parseMonth(endText), // null = Present
    };
  });

  // 2. Merge rows: one per finished feature branch, at its last end date
  const branches = [...new Set(commits.map((c) => c.branch))].filter((b) => b !== mainBranch);
  const merges = branches
    .map((branch) => {
      const own = commits.filter((c) => c.branch === branch);
      if (own.some((c) => c.end === null)) return null; // still open
      const date = Math.max(...own.map((c) => c.end));
      return { type: "merge", branch, into: mainBranch, hash: pseudoHash(branch), date };
    })
    .filter(Boolean);

  // 3. Newest first; at the same month a merge sits above a commit
  const rows = [...merges, ...commits].sort(
    (a, b) => b.date - a.date || (a.type === "merge" ? -1 : 1) - (b.type === "merge" ? -1 : 1)
  );
  rows.forEach((row, i) => {
    row.index = i;
    row.onMain = row.type === "merge" || row.branch === mainBranch;
  });

  // 4. Parents (edges point from a row down to its parent row)
  const nextMainBelow = (i) => rows.findIndex((r, j) => j > i && r.onMain);
  const nextOnBranchBelow = (i, branch) =>
    rows.findIndex((r, j) => j > i && r.type === "commit" && r.branch === branch);

  const edges = [];
  rows.forEach((row, i) => {
    if (row.onMain) {
      const p = nextMainBelow(i);
      if (p !== -1) edges.push({ from: i, to: p, branch: mainBranch, kind: "straight" });
      if (row.type === "merge") {
        const top = nextOnBranchBelow(i, row.branch);
        edges.push({ from: i, to: top, branch: row.branch, kind: "merge" });
      }
    } else {
      const below = nextOnBranchBelow(i, row.branch);
      if (below !== -1) edges.push({ from: i, to: below, branch: row.branch, kind: "straight" });
      else edges.push({ from: i, to: nextMainBelow(i), branch: row.branch, kind: "fork" });
    }
  });

  // 5. Lanes: main is lane 0; each feature branch takes the lowest free lane
  //    for the rows it spans (from its merge/top commit down to its fork point)
  const span = {};
  edges.forEach((e) => {
    if (e.branch === mainBranch) return;
    const s = (span[e.branch] ||= { top: Infinity, bottom: -Infinity });
    s.top = Math.min(s.top, e.from);
    s.bottom = Math.max(s.bottom, e.to);
  });
  const laneOf = { [mainBranch]: 0 };
  const taken = []; // { lane, top, bottom }
  Object.entries(span)
    .sort((a, b) => a[1].top - b[1].top)
    .forEach(([branch, s]) => {
      let lane = 1;
      while (taken.some((t) => t.lane === lane && t.top < s.bottom && s.top < t.bottom)) lane += 1;
      taken.push({ lane, ...s });
      laneOf[branch] = lane;
    });

  rows.forEach((row) => {
    row.lane = row.onMain ? 0 : laneOf[row.branch];
  });
  edges.forEach((e) => {
    e.fromLane = rows[e.from].lane;
    e.toLane = e.kind === "merge" ? laneOf[e.branch] : rows[e.to].lane;
  });

  let fallback = 0;
  const colorOf = (branch) => (BRANCH_COLORS[branch] ||= FALLBACK_COLORS[fallback++ % FALLBACK_COLORS.length]);
  // A merge commit lives on main (main's colour); its incoming line keeps the branch colour
  rows.forEach((row) => {
    row.branchColor = colorOf(row.branch);
    row.color = row.type === "merge" ? colorOf(mainBranch) : row.branchColor;
  });
  edges.forEach((e) => (e.color = colorOf(e.branch)));

  const laneCount = Math.max(...rows.map((r) => r.lane), ...edges.map((e) => e.toLane)) + 1;
  const headIndex = rows.findIndex((r) => r.onMain && r.type === "commit");

  return { rows, edges, laneCount, headIndex, mainBranch };
};
