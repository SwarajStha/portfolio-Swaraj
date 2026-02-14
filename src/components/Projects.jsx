import { useState } from "react";
import ProjectItem from "./ProjectItem";
import ProjectEditorModal from "./ProjectEditorModal";
import ProjectWorkstation from "./ProjectWorkstation";

// Organize all project data in one place
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
    category: "data",
    img: "/images/CampusChallenge_LLM(0).png",
    images: [
      "/images/CampusChallenge_LLM(2).png",
      "/images/CampusChallenge_LLM(0).png",
      "/images/CampusChallenge_LLM(1).png",
    ],
    description: `
This project, developed for the Campus Challenge - Successful investing with AI and Large Language Models, investigates (via Prompt Engineering)whether sentiment extracted from financial headlines has predictive power for stock price movements through rigorous statistical analysis of time-lagged correlations.

## Project Overview
The Sentiment-Return Analysis Framework implements a comprehensive pipeline that transforms qualitative financial news into quantitative sentiment scores, then tests if these scores can predict future stock returns across different investment horizons.

## What the Program Does
The program processes thousands of financial headlines through a multi-stage analytical pipeline:

**Sentiment Scoring Engine:**
Uses Large Language Models (LLMs) via the Groq API to convert raw headlines into numerical sentiment scores on a continuous [-1, +1] scale, where -1 represents strong bearish sentiment and +1 represents strong bullish optimism.

**Time-Lagged Data Alignment:**
Implements critical temporal offset logic by adding +1 day (daily analysis) or +1 month (monthly analysis) to sentiment timestamps before merging with return data. This ensures the framework tests predictive relationships rather than concurrent correlations—measuring whether today's sentiment forecasts tomorrow's returns.

**Multi-Scale Aggregation:**
Supports both daily (high-frequency) and monthly (noise-reduced) analysis pipelines. The monthly workflow aggregates daily sentiment scores by ticker and month, reducing noise while preserving longer-term trends.

**Statistical Visualization:**
Generates comprehensive 4-panel plots per ticker (raw time series, z-score normalized comparison, scatter with regression, rolling correlation) plus aggregate cross-ticker analysis showing sentiment-return relationships across the entire dataset.

## Core Methodology: Flexible Prompt Engineering & Statistical Correlation

The sentiment scoring system employs a **flexible parsing architecture** that supports multiple prompt strategies without code changes:

**Multi-Format Parser:**
The sentiment analysis module dynamically detects response format and applies appropriate extraction logic:
- **Persona-based format**: Parses multiple investor perspective scores, detects regime classification, calculates weighted averages in Python
- **Simple format**: Extracts direct numerical scores with fallback handling for malformed responses
- **Tag-enhanced scoring**: Incorporates article keywords (e.g., "earnings," "FDA," "bankruptcy") to provide additional context beyond headlines

**Regime-Adaptive Weighting:**
Automatically adjusts scoring weights based on detected market conditions (meme stock characteristics vs. normal fundamentals-driven stocks), reflecting different investor compositions across stock categories.

**Bias Mitigation:**
Addresses inherent LLM positivity bias through balanced example calibration, explicit negative anchoring, and multi-perspective analysis to generate more symmetric score distributions.

## Technical Components & Technologies

The project evolved from basic sentiment extraction to a robust statistical framework addressing real-world financial analysis challenges:

**Core Language:**
Python with extensive use of Pandas for time-series manipulation, datetime arithmetic, and grouped aggregations.

**Statistical Methods:**
- **Z-Score Normalization**: Standardizes returns and scores to enable fair comparison across tickers with different volatility profiles
- **Pearson Correlation**: Quantifies linear relationship strength between sentiment and returns
- **Rolling Correlation**: Captures time-varying dynamics with adaptive windows (5-day for daily, 3-month for monthly)
- **Linear Regression (OLS)**: Models predictive relationship magnitude via least-squares fitting
- **Quantile Analysis**: Divides returns into deciles to examine sentiment distribution across performance tiers

**Data Flow Engineering:**
Implements a three-stage pipeline per time scale:
- **Scoring**: Headlines → LLM API → Sentiment scores with reasoning
- **Merging**: Sentiment[t] + Returns[t+1] → Time-lagged dataset via \`timedelta\` (daily) or \`DateOffset\` (monthly)
- **Analysis**: Statistical computation + multi-panel visualization + CSV export

**Robust Error Handling:**
- NaN and infinite value filtering to prevent numerical instabilities
- Variance checks before polynomial fitting to avoid singular matrices
- Try-catch blocks around trend line calculations with graceful degradation
- Minimum observation thresholds for rolling window computations

**Aggregate Analysis Tools:**
Beyond per-ticker analysis, the framework provides cross-sectional insights:
- **Binned scatter plots**: Show average sentiment for each 2.5% return bin with standard error bars
- **2D density heatmaps**: Reveal joint distribution clustering patterns
- **Sorted movement patterns**: Display co-movement via moving averages on sorted data
- **Joint distributions with marginals**: Combined scatter and histogram views
- **Quantile comparisons**: Bar charts showing sentiment across return performance tiers

## Architectural Highlights

**Separation of Concerns:**
Modular design with distinct responsibilities:
- \`api_client.py\`: LLM communication layer with retry logic
- \`prompt_engine.py\`: Template management and message construction
- \`sentiment_analysis.py\`: Format-agnostic response parsing
- \`run_analysis.py\`: Orchestration and CSV I/O
- \`merge_data*.py\`: Time-lagged join operations
- \`plot_data*.py\`: Visualization generation
- \`aggregate_analysis.py\`: Cross-ticker statistical analysis

**Dual Time-Scale Support:**
Parallel pipelines for daily and monthly analysis with appropriate parameter adjustments:
- Rolling windows scaled to data frequency
- Date formatting adapted to granularity
- Visual marker sizes adjusted for data density
- Column naming conventions to distinguish aggregation levels

**Flexible Configuration:**
File paths, prompt versions, and analysis parameters configurable via constants at module tops, enabling rapid experimentation with different datasets and prompt strategies.

## Documentation & Reproducibility

The project includes comprehensive documentation files:
- **README.md**: Complete directory structure, component descriptions, and step-by-step workflow instructions
- **Used_Statistics.md**: Mathematical formulas, statistical interpretations, and relevance explanations for all metrics
- **Criticisms.md**: Honest assessment of 18 major limitations including LLM bias, correlation vs. causation, and market efficiency concerns

## Key Engineering Challenges Solved

**LLM Positivity Bias:**
Developed balanced prompt calibration with explicit negative examples to counteract models' tendency toward optimistic scores.

**Flexible Parsing:**
Created adaptive parser supporting multiple response formats to enable prompt experimentation without code refactoring.

**Temporal Causality:**
Implemented time-offset logic ensuring sentiment precedes returns measurement, addressing look-ahead bias.

**Numerical Stability:**
Added data cleaning, variance validation, and error handling to prevent SVD convergence failures and division-by-zero errors.

**Multi-Scale Analysis:**
Designed parallel workflows for daily (event-driven) and monthly (trend-focused) time horizons with appropriate statistical adaptations.

## Future Outlook

The framework provides a foundation for more sophisticated financial NLP research:
- Integration of transformer-based embeddings for semantic similarity clustering
- Implementation of Granger causality tests for formal temporal precedence validation
- Incorporation of options market data (implied volatility) to enhance sentiment signals
- Development of trading simulators with transaction cost modeling for practical strategy evaluation
- Exploration of alternative LLM architectures (domain-specific financial models, ensemble approaches) to further reduce bias`,
    tech: ["Python", "Pandas", "Groq API (Qwen3-32B)", "NumPy", "Matplotlib", "Scipy", "Jupyter"],
    githubLink: "",
    liveLink: "",
  },
  {
    id: "proj5",
    title: "PROMPTIST Reproduction",
    category: "desktop",
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
    tech: ["Python", "PyTorch (CUDA 12.4)", "Hugging Face Transformers & Diffusers", "BitsAndBytes (8-bit Quantization)", "Stable Diffusion v1.5", "GPT-2 (Microsoft Promptist)", "TRLX (Reinforcement Learning)"],
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
    description: `The FaceTrack project is a Python-based productivity and analytics tool designed to monitor and visualize a user's engagement during online classes or meetings. By leveraging computer vision, it provides objectiv insights into focus levels and screen-time habits.

## Project Overview
Developed as an "Online Class Face-Tracker," this program serves as a personal attention auditor. It uses a webcam feed to monitor the user's presence and eye movements in real-time, helping users understand their distraction patterns during long digital sessions.

## What the Program Does
- **Real-Time Tracking**: Continuously monitors the user's face and eyes while they are active in an online course or video conference.
- **Attention Analysis**: Determines whether the user is looking at the screen or looking away (distracted).
- **Visual Analytics**: Generates comprehensive graphs at the end of a session to show the percentage of time spent focused versus distracted.

## Main Algorithm & Logic
The core functionality follows a real-time computer vision pipeline:
- **Frame Capture**: Accesses the webcam stream to capture live video frames.
- **Face & Eye Detection**: Utilizes detection models to locate the user's facial features and pinpoint the position of the eyes.
- **Gaze Estimation Logic**: Implements a heuristic or geometric algorithm to determine if the user's gaze is directed toward the monitor or elsewhere.
- **Temporal Data Logging**: Records "focused" and "distracted" states over time.
- **Analytics Generation**: Processes the logged data to produce engagement metrics and visual charts.

## Technical Components & Technologies
- **Core Language**: Python — Chosen for its robust ecosystem in data science and computer vision.
- **Computer Vision**: Likely utilizes OpenCV for real-time image processing and Haar Cascades (or similar models) for feature detection.
- **Data Visualization**: Uses libraries such as Matplotlib or Seaborn to transform raw attention data into readable, portfolio-ready graphs.
- **Environment**: Built to run as a standalone script on local machines during active sessions.`,
    tech: ["Python", "OpenCV", "Matplotlib"],
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
    liveLink: "https://swarajstha.com",
  },
  {
    id: "proj4",
    title: "St. Margaret's Bay Conservation Site",
    category: "web",
    img: "/images/conservation-site.png",
    description: `The St. Margaret’s Bay Area Woodland Conservation Site project is a web-based platform developed as a service-learning initiative for a Software Engineering course. It serves as a digital management and engagement tool for a real-world community partner dedicated to woodland conservation.

## Project Overview
This project was built to provide a professional digital presence for the St. Margaret’s Bay Area Woodland Conservation Site. It emphasizes modern software engineering principles, including rigorous requirement specification, detailed design, and comprehensive testing.

## What the Program Does
- **Digital Management**: Facilitates the organization and documentation of conservation efforts and site requirements.
- **Community Engagement**: Offers a user-friendly interface to showcase the site’s projects and skills to the public.
- **Search Optimization**: Enhances the visibility of the conservation site through integrated SEO strategies, ensuring that the project ranks effectively on search engines.
- **Responsive Design**: Provides a visually appealing experience that scales across mobile and desktop devices.

## Main Process & Methodology: Agile Lifecycle
Rather than a single mathematical algorithm, the project follows the Agile development methodology. This involved iterative cycles of scheduling, requirement analysis, software design, and testing to ensure the final product met the specific needs of the community partner.

## Technical Components & Technologies
- **Frontend Framework**: React.js — Used to build a dynamic and responsive single-page application.
- **Styling**: Tailwind CSS — Utilized for rapid, modern UI development and responsive layouts.
- **SEO Engine**: React Helmet — Implemented to manage the document head and improve search engine optimization.
- **Deployment & Infrastructure**: DigitalOcean App Platform — Hosted using a CI/CD (Continuous Integration/Continuous Delivery) pipeline to ensure seamless updates and high availability.
- **Development Tools**: Built using a modern stack that includes Git for version control and Figma for initial design mockups.`,
    tech: ["React", "Tailwind CSS", "React Helmet"],
    githubLink: "https://github.com/SwarajStha/conservation-site",
    liveLink: "",
  },
];

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  // Separate the featured project (Class Photo Scheduler) from the rest
  const featuredProject = projectData[0];

  // Filter other projects based on active category
  const otherProjects = projectData.slice(1).filter(project => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  const categories = ['all', 'web', 'data', 'desktop'];

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

            {/* Featured Project: Mobile Workstation Theme */}
            <div className="mb-24">
              <ProjectWorkstation
                project={featuredProject}
                onExpand={() => handleOpenModal(featuredProject)}
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
