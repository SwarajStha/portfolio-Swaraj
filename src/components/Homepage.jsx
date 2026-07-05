import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.6, 0.35, 1] } },
};

const Homepage = () => {
  return (
    <section id="homepage" className="relative flex min-h-[100svh] w-full items-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-7xl px-5 md:px-8"
      >
        <motion.p variants={item} className="mb-4 font-mono text-sm text-accent md:text-base">
          {"//"} hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-[clamp(3rem,11vw,8.5rem)] font-bold leading-[0.95] text-white"
        >
          SWARAJ
          <br />
          SHRESTHA<span className="text-accent">.</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-6 flex flex-wrap items-baseline font-mono text-xl text-slate-400 md:text-3xl"
        >
          <span className="mr-2 text-accent">&gt;</span> I&apos;m a
          <TypeAnimation
            sequence={[
              "Developer.", 2000,
              "Coder.", 2000,
              "Problem Solver.", 2000,
              "Tech Enthusiast.", 2000,
            ]}
            wrapper="span"
            speed={40}
            cursor={true}
            className="pl-2 text-slate-200"
            repeat={Infinity}
          />
        </motion.h2>

        <motion.p variants={item} className="mt-6 max-w-xl leading-relaxed text-slate-400">
          M.Sc. student at the Technical University of Munich, previously database
          developer at the Canada Border Services Agency. I build software that
          streamlines the boring parts — and I take photos when I&apos;m not debugging.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="/Resume.pdf"
            download
            className="group inline-flex items-center gap-2 rounded border border-accent/60 px-7 py-3 font-mono text-sm text-accent transition-all duration-300 hover:bg-accent/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          >
            <FaArrowDown className="transition-transform group-hover:translate-y-0.5" size={12} />
            resume.pdf
          </a>
          <a
            href="https://www.linkedin.com/in/swaraj-shrestha/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://github.com/SwarajStha"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
          >
            <FaGithub size={18} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#education"
        aria-label="Scroll to education"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-accent"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
          <span className="block h-10 w-px animate-pulse-soft bg-gradient-to-b from-accent to-transparent" />
        </div>
      </motion.a>
    </section>
  );
};

export default Homepage;
