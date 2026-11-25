import { useRef, useState } from "react";
import ProjectItem from "./ProjectItem";
import ProjectEditorModal from "./ProjectEditorModal";
import FeaturedShowcase from "./showcase/FeaturedShowcase";

// Organize all project data in one place.
//
// A project with a `showcase` block also appears in the featured showcase at
// the top of the section, on the device that matches it:
//   device:     "phone" | "laptop" | "headset"
//   label:      switcher tab text
//   order:      position in the switcher
//   screens:    image paths, or { src, label, path } objects
//               (laptop: `path` is shown in the browser's address bar)
//   host/tabTitle (laptop only): address-bar host and browser tab title
//   path, status ("ACTIVE" | "COMPLETE"), statusNote, logs: terminal panel
const projectData = [
  {
    id: "proj1",
    title: "CourseNotes",
    category: "mobile",
    img: "/images/KotlinApp.jpg",
    layout: "portrait-4",
    images: [
      "/images/Class_Scheduler(0).png",
      "/images/Class_Scheduler(2).png",
      "/images/Class_Scheduler(3).png",
      "/images/Class_Scheduler(5).png",
    ],
    description: `The CourseNotes project is a native Android application designed as a comprehensive academic organizer for students. By integrating course scheduling, note-taking with photo capabilities, and a filterable image gallery, it serves as an all-in-one digital companion for managing university or college coursework.

## Project Overview
Developed as a mobile-first "Course Notes & Schedule Manager," this application provides students with a structured way to keep track of their class schedules, capture and organize visual notes (like whiteboard snapshots or textbook pages), and easily retrieve information. It modernizes traditional academic planning by combining scheduling and note-taking into a single, cohesive platform, designed with a clean, Material Design 3 interface that adapts to both light and dark modes.

## What the Program Does
- **Course Scheduling**: Allows users to create, edit, and delete their course schedules. Details include course name, semester, class days (Monday-Friday), and start/end times using interactive time pickers.
- **Photo Note-Taking**: Features an in-app camera function for taking pictures relevant to courses. Users can capture images directly and associate them with a specific class.
- **Centralized Photo Gallery**: Provides a dedicated gallery to view all captured photos. This gallery can be filtered by course, allowing a student to quickly find all notes for a specific class like "Calculus II" or "Organic Chemistry."
- **Photo Filtering System**: Implements an advanced filtering mechanism within the photo gallery. Users can apply filters such as "High Contrast" and "Black & White" to enhance the readability of captured text or diagrams, making notes easier to study from.
- **Intuitive Navigation**: Utilizes a modern bottom navigation bar for seamless switching between the three main sections: Camera, Schedule, and Gallery.

## Main Algorithm & Logic
The core of the application is built around the Android Jetpack architecture components, ensuring a robust and maintainable structure.

- **Data Persistence (Room)**: Course schedules and photo metadata (URI and associated course) are stored in a local SQLite database managed by the Room Persistence Library. This enables offline access and reliable data management.
- **UI/Data Separation (MVVM)**: The Model-View-ViewModel architectural pattern is employed.
    - **View**: Fragments (ScheduleFragment, PhotoGridFragment) display data and observe changes from the ViewModel.
    - **ViewModel**: Acts as a bridge, holding UI-related data and surviving configuration changes.
    - **Model**: The Repository pattern abstracts the data source, fetching from Room via background coroutines.
- **Navigation**: Managed by the Jetpack Navigation Component using a single-Activity architecture.
- **Photo Handling & Filtering**:
    - **CameraX**: Simplifies in-app camera operations.
    - **Coil**: Used for efficient image loading and asynchronous filter application.

## Technical Components & Technologies
- **Core Language**: Kotlin — Chosen for its modern features and Android interoperability.
- **Architecture**: Android Jetpack Suite (MVVM, Room, ViewModel, LiveData, Navigation, Coroutines).
- **User Interface**: Material Components (Material 3), XML Layouts (ConstraintLayout), RecyclerView, View Binding.
- **Environment**: Built using Android Studio and Gradle for native Android devices.`,
    tech: ["Kotlin", "Android Studio", "XML", "Android Jetpack", "Material 3", "Coil", "PhotoView"],
    githubLink: "", // Add link when available
    liveLink: "",
    showcase: {
      device: "phone",
      label: "coursenotes.apk",
      order: 1,
      screens: [
        "/images/Class_Scheduler(0).png",
        "/images/Class_Scheduler(1).png",
        "/images/Class_Scheduler(2).png",
        "/images/Class_Scheduler(3).png",
        "/images/Class_Scheduler(4).png",
        "/images/Class_Scheduler(5).png",
        "/images/Class_Scheduler(6).png",
        "/images/Class_Scheduler(7).png",
        "/images/Class_Scheduler(8).png",
        "/images/Class_Scheduler.png",
      ],
      path: "~/projects/coursenotes",
      status: "ACTIVE",
      statusNote: "Working prototype",
      logs: [
        { type: "INFO", msg: "Starting emulator..." },
        { type: "DEBUG", msg: "Loading class data..." },
        { type: "DEBUG", msg: "Initializing Room Database..." },
        { type: "DEBUG", msg: "Pre-populating CourseDAO..." },
        { type: "SUCCESS", msg: "Local SQLite Connected" },
        { type: "INFO", msg: "Binding ViewModel Providers..." },
        { type: "SUCCESS", msg: "MainActivity Rendered" },
        { type: "WATCH", msg: "Observing LiveData changes..." },
      ],
    },
  },
  {
    id: "proj_gtmagent",
    title: "GTMAgent: AI Lead-Generation Pipeline",
    category: ["ai", "web"],
    img: "/images/GTMAgent(1).png",
    images: [
      "/images/GTMAgent(1).png",
      "/images/GTMAgent(2).png",
      "/images/GTMAgent(3).png",
    ],
    description: `GTMAgent is a B2B lead-generation pipeline for the EU construction-tech sector, built as a 7-person team project for the TUM course Foundations and Application of Generative AI (May – July 2026). I led the team as project lead. The system matches live EU public tenders to the companies most likely to win them and drafts evidence-grounded outreach emails for both sides of the deal.

## Project Overview
Public procurement notices are published daily on TED (Tenders Electronic Daily), but finding the right supplier for a tender, or the right tender for a supplier, is still manual work. GTMAgent monitors TED, learns who has won similar contracts from **21,000+ historical contract awards (15,000+ companies)**, ranks likely bidders for every new tender, and drafts outreach a human can review and send. A Claude tool-use agent can orchestrate the whole flow on demand.

## What the Program Does
- **Tender Ingestion**: Polls the TED API for new contract notices with idempotent upserts, back-fills historical award notices with entity resolution, and downloads tender dossiers (PDFs) for full-text extraction.
- **Tender Understanding**: Claude extracts a structured tender profile (requirements, certifications, scope), which is then validated before it is stored.
- **Company Matching**: Ranks the most suitable suppliers for each tender and shows the top factors behind every score, so each recommendation is explainable.
- **Two-Sided Email Drafting**: Writes supplier outreach emails and buyer recommendation digests grounded in real tender and award evidence, with a deterministic template fallback when no API key is configured.
- **Feedback Loop**: Good fit / poor fit feedback is stored and used to retrain the ranker's weights.
- **Agent Mode**: A streaming, resumable agent plans and executes multi-step goals (find a tender → match → draft) and pauses to ask the user when a request is ambiguous (human-in-the-loop).

## Main Algorithm & Logic
The LLM only extracts and drafts; embeddings, rules and a trained ranker keep every score explainable.

- **Stage 1 – Hard Filter**: Narrows ~15k companies to ≤200 candidates using CPV codes, buyer country and contract value, relaxing the criteria progressively when too few candidates remain.
- **Stage 2 – Logistic Regression Ranker**: Scores each candidate on 10 features, including MiniLM semantic similarity between tender text and company award history, CPV and NUTS region matches, and contract-value fit.
- **Evaluation**: Replays 500 held-out past tenders (chronological, leakage-safe split) and checks whether the company that actually won, per official EU award records, appears in the matcher's top results.

## Results
- **Hit@1: 44.2%**, **Hit@3: 54.0%**, **Hit@5: 57.6%** on 500 held-out tenders
- When the true winner survives the Stage 1 filter, **Hit@3 rises to ~74%**

## My Role
- Bootstrapped the repository, CI and stub interfaces so seven people could build in parallel.
- Built the data-ingestion layer: TED API polling with idempotent upserts, award back-fill with entity resolution, and PDF dossier extraction.
- Designed the hybrid matcher and the tool-using agent, and defined how matching quality was measured.

## Technical Components & Technologies
- **Backend**: Python 3.11, FastAPI, SQLAlchemy, Alembic, APScheduler
- **Database**: PostgreSQL 16 + pgvector
- **ML**: sentence-transformers (paraphrase-multilingual-MiniLM-L12-v2), scikit-learn
- **LLM**: Claude API (Anthropic SDK) for extraction, drafting, the agent and its reflection loop
- **Frontend**: Vue 3, TypeScript, Pinia, Tailwind CSS
- **DevOps**: Docker Compose, GitHub Actions CI (pytest, lint and build, migration smoke tests)`,
    tech: ["Python", "Claude API", "FastAPI", "PostgreSQL + pgvector", "Vue 3 + TypeScript", "MiniLM", "scikit-learn", "Docker"],
    githubLink: "https://github.com/SwarajStha/GTMAgent",
    liveLink: "",
    showcase: {
      device: "laptop",
      label: "gtmagent.web",
      order: 2,
      host: "localhost:5173",
      tabTitle: "GTM Agent",
      screens: [
        { src: "/images/GTMAgent(1).png", label: "Command", path: "/" },
        { src: "/images/GTMAgent(4).png", label: "Tenders", path: "/tenders" },
        { src: "/images/GTMAgent(2).png", label: "Matches", path: "/matches" },
        { src: "/images/GTMAgent(5).png", label: "Emails", path: "/emails" },
        { src: "/images/GTMAgent(3).png", label: "Agent", path: "/agent" },
      ],
      path: "~/projects/gtmagent",
      status: "COMPLETE",
      statusNote: "Course project, Jul 2026",
      logs: [
        { type: "INFO", msg: "Starting FastAPI + Postgres (pgvector)..." },
        { type: "DEBUG", msg: "Polling TED API for contract notices..." },
        { type: "SUCCESS", msg: "100 tenders loaded" },
        { type: "DEBUG", msg: "Embedding tender text (MiniLM)..." },
        { type: "INFO", msg: "Ranking candidates (LR, 10 features)..." },
        { type: "SUCCESS", msg: "Top matches ready (Hit@3: 54%)" },
        { type: "WATCH", msg: "Agent waiting for user input..." },
      ],
    },
  },
  {
    id: "proj_kplanar",
    title: "K-Planar Graph Minimizer",
    category: "data",
    img: "/images/K-Planar.png",
    images: [
      "/images/K-Planar.png",
      "/images/K-Planar(2).png",
    ],
    description: `This project, developed for the TOMFoolery Hackathon, focuses on the algorithmic challenge of minimizing the maximum number of crossings per edge (the k in k-plane drawings) to create clearer, more readable graph visualizations.

## Project Overview
The Heilbronn 43 project implements a high-performance "K-Planar Graph Minimizer". Unlike standard layout algorithms that minimize total crossings, this program specifically targets "local" crossings, ensuring that no single edge is overly congested with intersections.

## What the Program Does
The program takes a graph (typically in JSON format) and optimizes node positions through a multi-phase pipeline to reduce its "energy," which is a proxy for edge crossings:

- **Initial Layout**: Uses the FMME (Fast Multipole Multilevel Embedder) engine to create a topologically sound starting point.
- **Local Crossing Reduction**: Aggressively targets edges with high crossing counts (red edges) using iterative optimization.
- **Real-Time Visualization**: Provides an interactive interface to zoom, pan, and manually drag nodes, while displaying real-time statistics like the current K-value and total crossings.

## Main Algorithm: Simulated Annealing (SA)
The core optimization engine is based on the Simulated Annealing meta-heuristic:

- **Soft-Max Energy Function**: Instead of a simple count, it uses a Soft-Max cost function to disproportionately penalize edges with the highest crossing counts, creating a smoother gradient for the optimizer to follow.
- **Bottleneck Heuristic**: At lower "temperatures" (later stages of the algorithm), the system shifts from global node swaps to specific interventions on the most congested edges.
- **Deterministic Hill Climbing**: Once the annealing process completes, a final hill-climbing step removes any remaining trivial inefficiencies.

## Technical Components & Technologies
The project evolved from a slow Python baseline to a high-performance GPU-accelerated solution to handle the O(E^2) complexity of crossing checks:

- **Core Language**: Python.
- **Acceleration (JIT)**: Numba JIT Compiler translates critical numerical loops (like energy calculations) into optimized machine code, bypassing Python's interpreter overhead.
- **Massive Parallelism (CUDA)**: Utilizes NVIDIA CUDA and CuPy to offload edge-intersection tasks to the GPU. Each GPU thread calculates intersections for a single edge against all others in parallel, achieving significant speedups over CPU-based methods.
- **Spatial Optimization**: Uniform Grid Spatial Hashing is used to reduce the number of necessary crossing checks during the evaluation of energy changes (ΔE).

## Future Outlook
The project aims to integrate Reinforcement Learning (RL) models to optimize node selection during the annealing process, biasing moves toward nodes that have the highest potential for reducing crossings without creating new "chaos" in the layout.`,
    tech: ["Python", "Numba", "CUDA", "CuPy"],
    githubLink: "https://github.com/SwarajStha/Hackathon-Nov-25-Heilbronn43",
    liveLink: "",
  },
  {
    id: "proj_invest_ai",
    title: "Investing with AI (using Qwen3)",
    category: ["data", "ai"],
    img: "/images/CampusChallenge_LLM(0).png",
    images: [
      "/images/CampusChallenge_LLM(0).png",
      "/images/CampusChallenge_LLM(2).png",
      "/images/CampusChallenge_LLM(3).png",
    ],
    description: `
This project, developed for the Campus Challenge - Successful Investing with AI and Large Language Models, evaluates whether LLM-generated sentiment scores from financial news can predict stock returns and generate statistically significant alpha after controlling for established risk factors.

## Project Overview
The Sentiment-Based Trading Strategy Framework implements a comprehensive quantitative finance pipeline that transforms financial news headlines into actionable trading signals. Using a novel multi-persona prompting approach, the system constructs long-short portfolios and validates performance through rigorous factor model analysis (CAPM, Fama-French 3/5-Factor), cross-sectional regressions (Fama-MacBeth), and transaction cost sensitivity analysis. The framework achieved **+14.95% cumulative return over 6 months (32.73% annualized)** with **+35.48% gross alpha** and **t=3.50*** cross-sectional significance, demonstrating economically viable outperformance beyond traditional risk factors.

## Performance Metrics:
- **+14.95% cumulative return** over 6 months (weekly value-weighted long-short)
- **+32.73% annualized return** (July-December 2024)
- **+35.48% gross alpha** (Fama-French 5-Factor model, t=1.16)
**t=3.50*** Cross-Sectional Significance (Fama-MacBeth monthly, p<0.01)
- **+27.27% net alpha** after 20 bps transaction costs (survives at 50 bps with +14.94%)

## What the Program Does
The program processes thousands of financial headlines through a multi-stage quantitative pipeline:

**Sentiment Scoring Engine:**
Uses Large Language Models (Qwen via Groq API) to extract nuanced sentiment through a **multi-persona framework** modeling four investor archetypes: retail novice, conviction fanatic, day/swing trader, and long-term fundamentalist. Features **regime-adaptive weighting** that dynamically adjusts to meme-stock (40/20/30/10%) vs. normal market (20/10/30/40%) conditions, producing continuous [-1, +1] sentiment scores.

**Portfolio Construction:**
Ranks stocks by sentiment scores within rebalancing periods. Top quintile (20% highest sentiment) forms long positions, bottom quintile forms short positions, creating **market-neutral long-short portfolios**. Tests four configurations: weekly/monthly rebalancing × equal/value weighting to identify optimal implementation.

**Factor Model Analysis:**
Performs time-series regressions against Fama-French factors (Market, Size, Value, Profitability, Investment) using **Newey-West HAC standard errors** (10 lags) to isolate genuine alpha from known risk exposures. Runs 36 regressions across 3 models (CAPM/FF3/FF5) × 4 configurations × 3 portfolio types.

**Transaction Cost Validation:**
Evaluates economic viability under realistic implementation costs (10/20/50 basis points), calculating net alpha after turnover and rebalancing costs. Weekly value-weighted strategy survives with **+27.27% net alpha** after 20 bps costs.

**Cross-Sectional Testing:**
Implements Fama-MacBeth methodology running monthly/weekly cross-sectional regressions to test if sentiment predicts returns across stocks, not just within portfolios. Computes time-series averages of slopes with Newey-West standard errors for significance testing.

**Comprehensive Visualization:**
Generates 24 publication-quality charts (300 DPI): cumulative returns, drawdown analysis, rolling Sharpe ratios, alpha comparisons, factor exposures, gross vs net alpha, Fama-MacBeth slopes, and integrated dashboards.

## Core Methodology: Multi-Persona Prompting & Factor Decomposition

The sentiment system employs **regime-aware persona ensemble** architecture:

**Multi-Perspective Aggregation:**
Each headline evaluated by four investor types with distinct risk horizons and information processing: NOVICE (momentum-driven, short-term), FANATIC (conviction-based, narrative-focused), DAY/SWING (technical patterns, volatility), LONG-TERM (fundamental value, sustainability). Weighted ensemble produces final sentiment with automatic regime detection.

**Flexible Parsing Architecture:**
Parser dynamically handles multiple LLM response formats without code changes: persona-based (extracts individual scores + regime + calculates weights in Python), simple format (direct score extraction), tag-enhanced (incorporates article keywords), enabling prompt experimentation across 8 versions (v1-v8) without pipeline refactoring.

**Bias Mitigation:**
Addresses LLM positivity bias through balanced example calibration (3 positive: -0.93 bankruptcy, -0.72 FDA rejection, -0.81 meme collapse; 3 neutral), explicit negative anchoring in instructions, and multi-perspective analysis to generate more symmetric score distributions.

**Statistical Validation Framework:**
Four-phase validation ensures robustness:

1. **Factor Models** - Time-series regressions isolate alpha from market beta, size, value, profitability, investment factors
2. **Cost Analysis** - Tests survival under 10/20/50 bps transaction costs with turnover calculations
3. **Fama-MacBeth** - Cross-sectional validation confirms predictive power across stocks (t=3.50*** monthly, t=2.87*** weekly)
4. **Factor Exposure Decomposition** - Negative market beta (-0.82) validates market-neutral design; low R² (28%) confirms alpha independence from known factors

## Technical Components & Technologies

The project implements institutional-grade quantitative finance methodology:

**Core Language:**
Python with extensive Pandas for panel data manipulation, datetime arithmetic, grouped aggregations, and multi-index operations for ticker-date hierarchies.

**Statistical Infrastructure:**
- **Newey-West HAC Standard Errors**: 10-lag correction for autocorrelation/heteroskedasticity in time-series regressions
- **Linear Regression (OLS)**: Factor model decomposition with statsmodels for coefficient estimation
- **Cross-Sectional Regressions**: Period-by-period regressions across stocks testing predictive power
- **Z-Score Normalization**: Standardizes metrics across tickers with different volatility profiles
- **Rolling Window Analysis**: Adaptive 5-day (daily) / 3-month (monthly) correlation windows capturing time-varying dynamics

**LLM Integration:**
- **API Client** (api_client.py): Groq API communication with retry logic and error handling
- **Prompt Engine** (prompt_engine.py): Template management supporting tag-enhanced context injection, modular prompt versioning
- **Sentiment Parser** (sentiment_analysis.py): Format-agnostic regex extraction supporting persona scores, regime detection, simple formats, fallback parsing

**Data Processing Pipeline:**
Three-stage workflow per time scale:
- **Extraction** (Extract_Data.py): Regex parsing of unstructured LLM outputs, weighted score calculation, ticker validation (removes ~7.5% mismatches), 6-decimal standardization
- **Merging** (merge_data*.py): Time-lagged joins (Sentiment[t] → Returns[t+1]) via timedelta (daily) or DateOffset (monthly) ensuring causal precedence
- **Validation** (clean/validate_signal_return_panel.py): Panel structure verification, missing data handling, sorting by ticker+date

**Portfolio Analytics:**
- **Backtesting Engine** (portfolio_backtest.py): Quintile-based construction, 4 configuration testing (weekly/monthly × equal/value), long/short/long-short returns, Sharpe/drawdown/volatility metrics
- **Factor Analysis** (factor_alpha.py): 36-regression suite with comprehensive 8-section interpretations (α magnitude, model comparison, stability, factor exposures, leg breakdown, strategy insights, assessment)
- **Cost Analysis** (transaction_cost_analysis.py): Turnover-based cost modeling under 3 scenarios with net alpha calculation
- **Cross-Sectional** (fama_macbeth.py): Period assignment, slope extraction, mean testing with detailed interpretations

**Visualization Suite:**
- **Matplotlib/Seaborn**: 24-chart comprehensive visualization (cumulative returns, drawdowns, rolling Sharpe, alpha comparisons, R², factor betas, gross vs net, FM slopes, dashboards)
- **4-Panel Diagnostic Plots**: Raw time-series, z-score normalized, scatter with regression, rolling correlation per ticker
- **Professional Styling**: Color-coded strategies (green/red/blue for long/short/long-short), 300 DPI publication quality, UTF-8 Unicode support for mathematical symbols

## Architectural Highlights

**Separation of Concerns:**
Modular design with 15+ specialized scripts:
- Sentiment layer: api_client, prompt_engine, sentiment_analysis, run_analysis
- Data layer: Extract_Data, data_cleanup_returns, prepare/clean/validate_panel, merge_data*
- Analytics layer: portfolio_backtest, factor_alpha, transaction_cost_analysis, fama_macbeth
- Visualization layer: plot_data*, create_visualizations, aggregate_analysis

**Dual Time-Scale Support:**
Parallel pipelines for daily (event-driven) and monthly (trend-focused) with adaptive parameters: rolling windows scaled to frequency, date formatting (YYYY-MM-DD vs YYYY-MM), visual marker density, aggregation functions (mean for monthly, alignment for daily).

**Prompt Evolution Framework:**
8 prompt versions (v1-v8) with structured progression: v1-v3 (initial experiments) → v4 (persona breakthrough) → v5 (balanced examples, regime variants) → v6 (tag-enhanced) → v7 (refined) → v8 (FINAL optimized). Flexible parser supports all versions without code changes, enabling systematic A/B testing.

**Comprehensive Documentation:**
- **README.md**: 800-line comprehensive guide with directory structure, component descriptions, workflow instructions
- **Executive_Summary.md**: 50+ page analytical report with methodology, results, discussion, limitations
- **Criticisms.md**: 18 major limitations including LLM bias, data quality, statistical concerns, market dynamics
- **Data_Cleaning_Methodology.md**: Detailed extraction logic, validation stages, quality metrics
- **Used_Statistics.md**: Mathematical formulas, interpretations, statistical relevance for all metrics
- **Walkthrough.md**: Step-by-step execution guide for reproduction

## Key Results

**Statistical Validation:**
- **Fama-MacBeth t=3.50*** (monthly), **t=2.87*** (weekly) - highly significant cross-sectional predictability
- **Alpha stability**: <2% change across CAPM/FF3/FF5 - genuine alpha, not factor disguise
- **Low R² (28%)**: Strategy independent of known risk factors
- **Negative market beta (-0.82)**: Validates market-neutral design

**Asymmetric Signal Power:**
- **Short leg: -38.70% alpha** (t=-2.20**) - excels at identifying overvalued stocks
- **Long leg: +1.82% alpha** (t=0.15) - neutral long performance
- **Implication**: Signal strength in losers identification rather than winners prediction

## Engineering Challenges Solved

**LLM Positivity Bias:**
Developed balanced prompt calibration with explicit negative examples (-0.93, -0.72, -0.81), regime-adaptive weighting, and multi-persona ensemble to counteract models' optimistic tendencies.

**Flexible Parsing:**
Created adaptive regex parser supporting persona-based, simple, and tag-enhanced response formats, enabling prompt experimentation without pipeline refactoring across 8 prompt versions.

**Temporal Causality Enforcement:**
Implemented time-offset logic (+1 day/month via timedelta/DateOffset) ensuring sentiment precedes returns measurement, eliminating look-ahead bias in predictive testing.

**Robust Statistical Inference:**
Applied Newey-West HAC standard errors (10 lags) to account for autocorrelation/heteroskedasticity in daily financial returns, preventing inflated t-statistics and false significance.

**Data Validation Pipeline:**
Built two-stage validation: Stage 1 filters missing fields, Stage 2 cross-validates ticker consistency, removing ~1,272 mismatches (~7.5%) with detailed diagnostics for quality assurance.

**Economic Viability Testing:**
Designed transaction cost framework with turnover-based calculations under 3 scenarios (10/20/50 bps), demonstrating strategy survives real-world implementation costs.

## Future Outlook

The framework establishes foundation for advanced quantitative finance research:
- **Regime-specific analysis**: Test strategy performance across bull/bear/volatile market conditions to validate robustness
- **Granger causality tests**: Formal temporal precedence validation beyond time-lagged correlation
- **Alternative data integration**: Incorporate options implied volatility, social media sentiment, insider trading for signal enhancement
- **Machine learning meta-models**: Train ML models on factor exposures and regime features to predict when sentiment signals are strongest
- **Domain-specific LLMs**: Explore financial-specialized models (BloombergGPT-style) to reduce bias and improve sentiment accuracy
- **Multi-asset expansion**: Extend framework to bonds, commodities, cryptocurrencies for diversified signal generation`,
    tech: ["Python", "Pandas", "Groq API (Qwen3-32B)", "NumPy", "Matplotlib", "Scipy", "Jupyter"],
    githubLink: "https://github.com/SwarajStha/CampusChallenge-Group-15",
    liveLink: "",
  },
  {
    id: "proj5",
    title: "PROMPTIST Reproduction",
    category: ["desktop", "ai"],
    img: "/images/PROMPTIST(1).png",
    images: [
      "/images/PROMPTIST(1).png",
      "/images/PROMPTIST(2).png",
    ],
    description: `The Promptist Reproduction project is a machine learning application that successfully replicates Microsoft Research's **Promptist** model—a reinforcement learning-based prompt optimizer—on consumer-grade hardware with significant VRAM constraints. This project demonstrates advanced optimization techniques for running large language models and diffusion models sequentially on limited GPU memory.

  ## Project Overview

  Developed as a comprehensive reproduction study for a Machine Learning course, this application tackles the challenge of running state-of-the-art AI models (GPT-2 based text optimizer + Stable Diffusion image generator) on a laptop GPU with only 6GB VRAM. The original Microsoft implementation required high-end server hardware and outdated dependencies incompatible with modern Windows systems and RTX 40-series GPUs. This reproduction modernizes the entire stack while implementing aggressive memory management strategies to enable local, offline inference.

  ## What the Program Does

  **Prompt Optimization**: Takes simple, user-provided text prompts and transforms them into aesthetically-enhanced, detailed prompts optimized for text-to-image generation. The Promptist model (fine-tuned GPT-2) uses reinforcement learning to append artistic modifiers, technical specifications, and style descriptors.

  **Image Generation Pipeline**: Generates side-by-side comparison images using Stable Diffusion v1.5, showing the visual difference between baseline (original prompt) and optimized prompt outputs. This provides empirical validation of the prompt optimization quality.

  **Memory-Constrained Execution**: Implements a sophisticated two-phase pipeline with explicit VRAM management. Phase 1 loads the 8-bit quantized Promptist model for text optimization, then completely unloads it. Phase 2 loads Stable Diffusion in float16 precision for image generation—all within a 6GB memory budget.

  **Batch Processing**: Supports batch evaluation across diverse prompt categories (Fantasy, Cyberpunk, Nature, etc.) with automated prompt extraction to JSON and reproducible image generation from saved prompt pairs.

  **Offline Operation**: All model weights are stored locally in checkpoints, eliminating runtime downloads and ensuring reproducibility without internet dependency.

  ## Main Algorithm & Logic

  The core innovation lies in the memory management strategy and dependency modernization:

  **8-bit Quantization (BitsAndBytes)**: The Promptist GPT-2 model (originally ~500MB in float32) is loaded using 'BitsAndBytesConfig' with 8-bit precision, reducing memory footprint by ~75% while maintaining generation quality. This was critical for fitting the model on Windows with CUDA 12.4 support.

  **Sequential Model Loading with Aggressive Cleanup**: 
  - **Phase 1**: Load Promptist → Generate optimized text → Explicitly delete model object → Run Python garbage collection ('gc.collect()') → Clear CUDA cache ('torch.cuda.empty_cache()')
  - **Phase 2**: Load Stable Diffusion (float16) → Generate images → Cleanup
  - This pattern prevents out-of-memory (OOM) errors that would occur if both models were loaded simultaneously.

  **Dependency Patching**:
  - **TRLX Library**: Modified 'setup.cfg' to remove the hard dependency on DeepSpeed (incompatible with Windows build tools), allowing the inference modules to load without the full RL training stack.
  - **Diffusers Library**: Patched 'dynamic_modules_utils.py' to remove deprecated 'huggingface_hub.cached_download' imports that caused runtime errors with modern Transformers versions.

  **Prompt Engineering Pipeline**:
  - Input: Simple prompt (e.g., "A cat in the rain")
  - Promptist Processing: Appends aesthetic modifiers using learned RL policy
  - Output: Enhanced prompt (e.g., "cat in the rain, heavy rain, tears in rain, cinematic lighting, sharp focus, intricate, 8k, detailed, art by artgerm and greg rutkowski and alphonse mucha")

  ## Technical Components & Technologies

  **Core Language**: Python 3.11 — Required for compatibility with PyTorch 2.6 and modern CUDA toolkits.

  **Deep Learning Framework**: PyTorch 2.6.0+cu124 — Upgraded from the original PyTorch 1.x to support NVIDIA RTX 40-series GPUs and CUDA 12.4.

  **Model Optimization**: BitsAndBytes 0.49.1 — Enables 8-bit quantization on Windows, a feature previously limited to Linux systems.

  **NLP & Generation**: 
  - Hugging Face Transformers — For loading and running the GPT-2 based Promptist model
  - TRLX (Patched) — Reinforcement learning library for prompt optimization inference

  **Image Generation**: 
  - Hugging Face Diffusers (Patched) — For Stable Diffusion v1.5 pipeline
  - Stable Diffusion v1.5 — Text-to-image generation model

  **Environment**: Windows 10/11 with NVIDIA CUDA 12.4, developed using PowerShell automation scripts for reproducible setup.

  **Custom Scripts**:
  - reproduce_results_v2.py — Inference verification with 8-bit loading
  - generate_report_images.py — End-to-end pipeline with VRAM management
  - batch_test_v2.py — Batch image generation from JSON prompt pairs
  - setup_env.ps1 — Automated environment installation
  - export_report.py — Report conversion to PDF/HTML formats`,
    tech: ["Python", "PyTorch (CUDA 12.4)", "BitsAndBytes (8-bit Quantization)", "Hugging Face Transformers & Diffusers", "Stable Diffusion v1.5", "GPT-2 (Microsoft Promptist)", "TRLX (Reinforcement Learning)"],
    githubLink: ['https://github.com/SwarajStha/PROMPTIST_reproduction', 'https://github.com/microsoft/LMOps/tree/main/promptist'],
    liveLink: '',

  },
  {
    id: "proj2",
    title: "Online Class Face-Tracker",
    category: "data",
    img: "/images/face(1).png",
    images: [
      "/images/face(1).png",
      "/images/face(2).png",
      "/images/face(3).png",
    ],
    description: `FaceTrack is a Python computer-vision tool that estimates how attentive a student is during an online class or video call. It runs alongside any video-call software, tracks the user's face through the webcam, and reports an attentiveness score when the session ends.

## Project Overview
Built when online learning became the norm, this "Online Class Face-Tracker" acts as a personal attention auditor. It records, frame by frame, whether the user is in front of the screen and how close they are to it, then summarises the session as a graph and a single attentiveness percentage.

## What the Program Does
- **Live Tracking Window**: Opens a webcam window that draws a green box around the detected face and red boxes around the detected eyes. Press "q" to end the session.
- **Per-Frame Attention Score**: Gives every frame a score from 0 to 100 based on how close the face is to the webcam and whether the eyes are visible. Frames without a face score 0.
- **Session Graph**: Plots each frame's score as a scatter chart, showing when the user was engaged or away.
- **Attentiveness Result**: A small desktop window reports the session's attentiveness: the percentage of frames in which a face was detected.

## Main Algorithm & Logic
- **Frame Capture**: Reads frames from the default webcam with OpenCV and converts them to grayscale.
- **Face Detection**: Uses OpenCV's pre-trained Haar cascade classifier (frontal face) to locate the face in each frame.
- **Eye Detection**: Runs a second Haar cascade (eyes) only inside the detected face region, which is faster and cuts false positives.
- **Distance Heuristic**: Uses the face bounding-box width as a proxy for distance to the screen (≥ 250 px scores 100, very small faces score 5–15, and widths in between scale linearly), with a bonus when the eyes are detected.
- **Efficiency Metric**: Divides the frames with a detected face by the total frames recorded.

## Technical Components & Technologies
- **Core Language**: Python
- **Computer Vision**: OpenCV (Haar cascade face and eye detection)
- **Data Visualization**: Matplotlib scatter plot of the per-frame scores
- **User Interface**: Tkinter window for the final attentiveness result
- **Environment**: Runs as a standalone script on a local machine with a webcam`,
    tech: ["Python", "OpenCV", "Matplotlib", "Tkinter"],
    githubLink: "https://github.com/SwarajStha/faceTrack",
    liveLink: "",
  },
  {
    id: "proj3",
    title: "Personal Portfolio",
    category: "web",
    img: "/images/portfolio-Swaraj.png",
    images: [
      "/images/portfolio-Swaraj.png",
      "/images/portfolio-Swaraj(2).png",
      "/images/portfolio-Swaraj(3).png",
    ],
    description: `This interactive developer portfolio serves as a central hub for my professional identity, uniquely designed to mimic a sophisticated command-line interface while maintaining modern web standards. It balances a distinct "hacker" aesthetic with intuitive UX patterns.

## Project Overview
More than just a static resume, this application demonstrates my frontend engineering capabilities through complex, custom-built components. It provides an immersive "Operating System" feel, complete with window management, terminal commands, and responsive layouts that adapt the terminal metaphor to mobile devices.

## Key Features
- **Terminal-Core Design:** Custom styled components featuring "drwxr-xr-x" file permissions, git branch status indicators, and commit hash metadata to create an authentic developer environment.
- **Interactive Workspace:** Features a draggable "About Me" window and an interactive "Technologies" terminal that visualizes skill proficiency through animated progress bars.
- **Dynamic Content Engine:** Utilizes a custom Bento-grid layout for project showcases and photography, integrated with a deep-dive modal system for detailed content presentation.
- **Responsive Architecture:** Fully fluid design that seamlessly translates the desktop terminal experience to touch interfaces without losing the core aesthetic identity.

## Technical Architecture
- **Component-Driven:** Built with a modular React architecture, separating concerns between layout engines (Grids, Modals) and presentation layers (Cards, Terminals).
- **Utility-First Styling:** Heavily leverages Tailwind CSS for rapid, consistent styling, utilizing custom utility classes for glassmorphism effects and complex 3D shadows.
- **Performance Optimized:** Uses Vite for lightning-fast HMR and optimized production builds, ensuring the animation-heavy interface remains performant on all devices.`,
    tech: ["React", "Tailwind CSS", "Vite", "React Icons", "React Modal"],
    githubLink: "https://github.com/SwarajStha/portfolio-Swaraj",
    liveLink: "https://swarajshrestha.tech",
  },
];

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const showcaseRef = useRef(null);

  // Projects with a `showcase` block, in switcher order
  const featuredProjects = projectData
    .filter((p) => p.showcase)
    .sort((a, b) => a.showcase.order - b.showcase.order);
  const [featuredId, setFeaturedId] = useState(featuredProjects[0]?.id);

  // "★ featured" badge on a grid card: show that project in the showcase
  const showInShowcase = (id) => {
    setFeaturedId(id);
    const el = showcaseRef.current;
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  // Grid: every project (featured ones too, marked with a badge)
  const otherProjects = projectData.filter(project => {
    if (activeCategory === 'all') return true;
    const cats = Array.isArray(project.category) ? project.category : [project.category];
    return cats.includes(activeCategory);
  });

  const categories = ['all', 'ai', 'web', 'mobile', 'data', 'desktop'];

  return (
    <>
      <div id="projects" className="bg-white/40 pt-5 pb-0">
        <div
          className="w-full py-12 text-white bg-gradient-to-l from-[#f9731699] from-20% via-[#7c2d1280] via-75% to-[#6b463c]"
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-white text-4xl md:text-5xl font-bold inline-block border-b-4 border-cyan-400 pb-2">
                PROJECTS
              </h1>
              <div className="mt-4 font-mono text-cyan-400 text-sm">
                swaraj@portfolio:~/projects$ ls -l
              </div>
            </div>

            {/* Featured projects, each on its own device */}
            <div ref={showcaseRef} className="mb-24">
              <FeaturedShowcase
                projects={featuredProjects}
                activeId={featuredId}
                onSelect={setFeaturedId}
                onOpen={handleOpenModal}
              />
            </div>

            {/* CLI Navigation & Grid */}
            <div className="max-w-[1240px] mx-auto">
              {/* Custom CLI Navigation Tabs */}
              <div className="flex flex-wrap items-center gap-4 mb-8 font-mono text-sm md:text-base border-b border-gray-700 pb-4">
                <span className="text-green-400 font-bold">swaraj@portfolio:~/projects$</span>
                <span className="text-gray-300">ls</span>

                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1 rounded transition-all duration-200 ${activeCategory === cat
                      ? "bg-blue-500/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    --{cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
                {otherProjects.map((project) => (
                  <ProjectItem
                    key={project.id}
                    title={project.title}
                    img={project.img}
                    tech={project.tech} // Pass tech for metadata
                    category={project.category}
                    onSelect={() => handleOpenModal(project)}
                    onShowFeatured={project.showcase ? () => showInShowcase(project.id) : undefined}
                  />
                ))}

                {otherProjects.length === 0 && (
                  <div className="col-span-full text-center py-20 text-gray-500 font-mono">
                    Directory is empty. No projects found for this category.
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        <ProjectEditorModal
          project={selectedProject}
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default Projects;
