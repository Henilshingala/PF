"use client";

import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/utils";

type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  imageTitle: string;
  imageSubtitle: string;
  gradient: string;
  live?: string;
  github: string;
  image?: string;
};

const projects: Project[] = [
  // =========================
  // 1. MOST ADVANCED PROJECTS
  // =========================
  {
    title: "Nirbhaya (WhoSafe) - Women Safety Emergency Alert System",
    category: "Android Development · Emergency Safety Application",
    description:
      "A real-time women safety Android application focused on emergency response, SOS activation, and reliable background alert delivery. Built using Kotlin, Jetpack Compose, MVVM architecture, Room Database, Retrofit, and Firebase Realtime Database. The application supports one-tap SOS triggering, IoT-based emergency activation, foreground emergency services, real-time GPS location sharing, emergency group alerts, encrypted local storage, and persistent notification systems.",
    tech: ["Kotlin", "Jetpack Compose", "Material 3", "MVVM", "Room DB", "Retrofit", "Firebase", "Maps API"],
    imageTitle: "Nirbhaya",
    imageSubtitle: "Real-Time SOS Platform",
    gradient: "from-blue-950 via-slate-900 to-red-700",
    live: "https://play.google.com/store/apps/details?id=com.whosafe.app",
    github: "https://github.com/Henilshingala/Nirbhaya-Who-Safe",
    image: "/projects/nirbhaya.png",
  },
  {
    title: "Krishi Mitra - AI Crop Recommendation System",
    category: "AI/ML · Smart Agriculture",
    description:
      "A sophisticated smart farming ecosystem that leverages machine learning to revolutionize agricultural productivity. The system analyzes NPK soil values, rainfall patterns, and climate data to suggest the most profitable crops for farmers. Beyond recommendations, it features a multilingual interface (22+ languages), real-time weather forecasting via OpenWeather API, a curated database of government agricultural schemes, and an intelligent AI chatbot.",
    tech: ["Python", "Django", "Machine Learning", "SQLite", "OpenWeather API"],
    imageTitle: "Krishi Mitra",
    imageSubtitle: "AI Crop Intelligence",
    gradient: "from-green-900 to-emerald-700",
    live: "https://crop-recomandation-system.vercel.app/",
    github: "https://github.com/Henilshingala/crop-recomandation-system",
    image: "/projects/CRS.png",
  },
  {
    title: "Emotion-Based Music Player",
    category: "AI / ML Project",
    description:
      "An intelligent web app that detects user emotions via webcam using computer vision and machine learning, then recommends music accordingly. Trained custom RandomForest and SVM models on real selfie data. Handles real-time inference and playlist management for a personalized listening experience.",
    tech: ["Python", "Django", "OpenCV", "Scikit-learn", "NumPy", "JavaScript"],
    imageTitle: "Emotion Music",
    imageSubtitle: "AI/ML · Computer Vision",
    gradient: "from-indigo-950 to-indigo-800",
    github: "https://github.com/Henilshingala/emotion-music-player",
    image: "/projects/emotion-based-music-player.png",
  },
  {
    title: "Raivat Stones - Jewelry E-Commerce Platform",
    category: "Client Project · E-Commerce",
    description:
      "Built and deployed a production-ready jewelry e-commerce platform for a real client. Features secure authentication, shopping cart, order management, admin dashboard for non-technical owners, geo-based pricing, and Razorpay payment integration.",
    tech: ["Python", "Django", "SQLite", "AWS", "Razorpay"],
    imageTitle: "Raivat Stones",
    imageSubtitle: "raivatstones.com",
    gradient: "from-emerald-900 to-emerald-700",
    live: "https://raivatstones.com",
    github: "https://github.com/Henilshingala/Raivat",
    image: "/projects/raivat-stones.png",
  },
  {
    title: "JiyashCreation - Full Stack Jewelry E-Commerce Platform",
    category: "Full Stack Development · Django E-Commerce System",
    description:
      "A complete full-stack jewelry e-commerce platform developed using Django. The project includes dynamic product management, wishlist functionality, shopping cart system, discount calculation engine, authentication system, responsive UI, admin dashboard, and secure checkout flow. Features elegant layouts with glassmorphism effects and dynamic pricing logic.",
    tech: ["Python", "Django", "SQLite3", "HTML5", "CSS3", "JavaScript", "E-Commerce Logic"],
    imageTitle: "JiyashCreation",
    imageSubtitle: "Luxury E-Commerce",
    gradient: "from-emerald-950 via-green-900 to-zinc-900",
    github: "https://github.com/Henilshingala/JiyashCreation",
    image: "/projects/jiyashcreation.png",
  },
  {
    title: "Bilipefirs - Web3 Car Selling Platform",
    category: "Web3 · Blockchain",
    description:
      "Full-stack car listing and selling platform with traditional Django backend combined with MetaMask-based crypto payments. Users can buy/sell vehicles with Web3 wallet interaction. Deployed live on PythonAnywhere with secure transaction flows.",
    tech: ["Python", "Django", "SQLite", "MetaMask", "Web3"],
    imageTitle: "Bilipefirs",
    imageSubtitle: "Web3 · Crypto Payments",
    gradient: "from-orange-900 to-orange-700",
    live: "https://henilshingala.pythonanywhere.com",
    github: "https://github.com/Henilshingala/bilipefirs",
    image: "/projects/Bilipefirs.png",
  },

  // =========================
  // 2. STRONG ANDROID PROJECTS
  // =========================
  {
    title: "SplitEase - Smart Expense Sharing App",
    category: "Android · Finance Management",
    description:
      "A comprehensive Android financial utility designed to take the friction out of group expenses. Built with a robust MVVM architecture and Kotlin, SplitEase provides real-time data synchronization using Firebase Firestore. The app features advanced balance-splitting algorithms that suggest the most efficient way to settle debts among groups.",
    tech: ["Kotlin", "Android", "Firebase", "Firestore", "Firebase Auth", "Material UI", "MVVM"],
    imageTitle: "SplitEase",
    imageSubtitle: "Smart Bill Splitting",
    gradient: "from-violet-900 to-purple-700",
    github: "https://github.com/Henilshingala/splitEase",
    image: "/projects/SplitEase.png",
  },
  {
    title: "Anesthesia Calculator Pro - Medical Dosage App",
    category: "Android · Medical Healthcare",
    description:
      "Professional Android medical application designed for anesthesiologists to calculate accurate drug dosages based on patient parameters. The app supports patient management, real-time dosage calculations, safety-focused workflows, and local patient history storage using Room DB.",
    tech: ["Kotlin", "Android", "SQLite", "Material Design", "MVVM", "Room DB"],
    imageTitle: "Anesthesia Pro",
    imageSubtitle: "Medical Dosage Intelligence",
    gradient: "from-indigo-900 to-blue-700",
    github: "https://github.com/Henilshingala/aenesthesia-calculator-pro",
    image: "/projects/ACP.png",
  },

  // =========================
  // 3. MEDIUM FULL STACK / WEB
  // =========================
  {
    title: "Plant Shop - E-Commerce Plant Selling Platform",
    category: "Web Development · E-Commerce Platform",
    description:
      "A complete plant-selling e-commerce platform developed using PHP and MySQL. Allows users to browse plants and gardening products through a modern responsive interface. Features include secure authentication, product listings, category filtering, and shopping cart functionality.",
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    imageTitle: "Plant Shop",
    imageSubtitle: "Modern Online Nursery",
    gradient: "from-green-950 via-emerald-900 to-lime-700",
    live: "https://plant647.free.nf",
    github: "https://github.com/Henilshingala/plant",
    image: "/projects/plant.png",
  },
  {
    title: "TDEC (IT) Blog - College Activity & Gallery Platform",
    category: "Web Development · College Platform",
    description:
      "A modern department showcase platform developed for Tapi Diploma Engineering College. Built using PHP, it highlights classroom activities, student achievements, and events through an interactive media-rich gallery system with dark/light theme switching.",
    tech: ["PHP", "HTML5", "CSS3", "JavaScript", "Glassmorphism UI", "Dark Mode"],
    imageTitle: "TDEC IT Blog",
    imageSubtitle: "College Activities & Media",
    gradient: "from-black via-zinc-900 to-yellow-700",
    live: "https://tdec.free.nf",
    github: "https://github.com/Henilshingala/tdec",
    image: "/projects/tdec-blog.png",
  },
  {
    title: "Ocean Dust Cafe - Digital Menu Experience",
    category: "Frontend · Cafe Branding",
    description:
      "A visually stunning digital menu platform designed to elevate the dining experience at Ocean Dust Cafe. The project focuses on high-fidelity aesthetics with fluid ocean-inspired animations, a responsive grid for menu categories, and a mobile-first UI for on-table browsing.",
    tech: ["HTML", "CSS", "JavaScript", "Canva", "Vercel"],
    imageTitle: "Ocean Dust Cafe",
    imageSubtitle: "Digital Cafe Menu",
    gradient: "from-cyan-900 to-teal-700",
    live: "https://oceandust.vercel.app/",
    github: "https://github.com/Henilshingala/OceanDust",
    image: "/projects/OceanDustCafe.png",
  },

  // =========================
  // 4. FRONTEND / STATIC APPS
  // =========================
  {
    title: "Child Learn - Interactive Kids Learning Platform",
    category: "Educational Website · Kids Platform",
    description:
      "Child Learn is a colorful and interactive educational platform designed for children aged 3-8. Features alphabet puzzles, memory games, math mazes, and spelling challenges designed with a kid-friendly UI and smooth animations.",
    tech: ["HTML5", "CSS3", "JavaScript", "Educational Games", "Interactive UI"],
    imageTitle: "Child Learn",
    imageSubtitle: "Fun Educational Games",
    gradient: "from-green-400 via-lime-400 to-emerald-600",
    live: "https://Henilshingala.github.io/children",
    github: "https://github.com/Henilshingala/children",
    image: "/projects/child.png",
  },
  {
    title: "Koffee - Coffee Shop Website",
    category: "Web Development · Coffee Business",
    description:
      "A modern and aesthetic coffee shop website built using pure HTML5, CSS3, and JavaScript. The platform showcases premium coffee varieties, café ambience, and menu sections through a warm and visually rich user interface with smooth animations.",
    tech: ["HTML5", "CSS3", "JavaScript", "Modern UI", "Animation Effects"],
    imageTitle: "Koffee Café",
    imageSubtitle: "Modern Coffee Experience",
    gradient: "from-[#2b1810] via-[#6f4e37] to-[#c08b5c]",
    live: "https://Henilshingala.github.io/coffee",
    github: "https://github.com/Henilshingala/coffee",
    image: "/projects/coffee.png",
  },
  {
    title: "Shreemad Bhagvat Geeta - Spiritual Learning Platform",
    category: "Web Development · Spiritual Website",
    description:
      "A beautifully designed spiritual website presenting all 18 Adhyayas of the Bhagavad Gita. Features chapter-wise navigation, Sanskrit shlokas, and verse explanations with elegant typography and glowing spiritual aesthetics.",
    tech: ["HTML5", "CSS3", "Dark Theme UI", "Typography Design", "Glow Effects"],
    imageTitle: "Bhagvat Geeta",
    imageSubtitle: "18 Adhyayas • Spiritual Learning",
    gradient: "from-black via-amber-950 to-orange-900",
    live: "https://Henilshingala.github.io/shreemad-bhagvat-geeta",
    github: "https://github.com/Henilshingala/shreemad-bhagvat-geeta",
    image: "/projects/SBG.png",
  },

  // =========================
  // 5. BEGINNER PROJECTS
  // =========================
  {
    title: "Currency Converter - Exchange Rate Calculator",
    category: "Web App · Finance Utility",
    description:
      "Modern web-based currency exchange calculator designed for fast and accurate real-time currency conversion. Built using HTML, CSS, and JavaScript with instant results and live exchange rate calculations via API.",
    tech: ["HTML5", "CSS3", "JavaScript", "Exchange Rate API"],
    imageTitle: "Currency",
    imageSubtitle: "Exchange Rate Calculator",
    gradient: "from-pink-600 to-indigo-600",
    live: "https://Henilshingala.github.io/currency",
    github: "https://github.com/Henilshingala/currency",
    image: "/projects/CC.png",
  },
  {
    title: "Calculator - Simple Web Calculator",
    category: "Web Development · Utility Tool",
    description:
      "A clean and responsive web-based calculator supporting essential arithmetic operations. Designed with a modern UI and smooth user experience for quick everyday calculations across all devices.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    imageTitle: "Calculator",
    imageSubtitle: "Fast • Clean • Functional",
    gradient: "from-zinc-900 to-orange-600",
    live: "https://Henilshingala.github.io/calculator",
    github: "https://github.com/Henilshingala/calculator",
    image: "/projects/calculator.png",
  },
];

export default function FeaturedProjects() {
  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative overflow-hidden bg-[var(--bg-dark-2)] py-16 md:py-24 lg:py-32"
    >
      {/* Glow blob */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(37,99,235,0.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-widest text-accent">SELECTED WORK</p>
            <h2 className="mt-2 text-3xl font-black text-white md:text-5xl">
              Projects That Ship
            </h2>
          </div>
          <a
            href="https://github.com/Henilshingala"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit border-b border-accent pb-0.5 text-sm text-accent"
          >
            View All on GitHub →
          </a>
        </div>

        {/* Projects list */}
        <div className="space-y-6">
          {projects.map((project, i) => {
            const odd = i % 2 === 0;

            const imagePanel = (
              <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#08080E]">
                {project.image ? (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                    style={{ willChange: "transform" }}
                    /* 
                      object-contain → entire image always visible, never cropped.
                      p-4 gives a small breathing room around the image.
                    */
                    className="h-full w-full object-contain p-4"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="h-32 w-56 rounded-xl border border-white/10 bg-white/5" />
                  </div>
                )}
              </div>
            );

            const infoPanel = (
              <div className="flex h-full flex-col justify-between bg-white/[0.03] p-6 md:p-8 lg:p-10">
                <div className="flex flex-col gap-3">
                  {/* Category badge */}
                  <span className="inline-flex w-fit rounded-full border border-accent px-3 py-1 text-[11px] leading-tight text-accent">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold leading-snug text-white md:text-2xl">
                    {project.title}
                  </h3>

                  {/* Description — clamped to 4 lines so cards stay uniform */}
                  <p className="line-clamp-4 text-sm leading-relaxed text-[var(--text-muted-dark)]">
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-[var(--text-muted-dark)] transition-all duration-300 group-hover:border-accent/40 group-hover:text-white/80 group-hover:shadow-[0_0_6px_rgba(37,99,235,0.15)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA buttons — pinned to bottom */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 group-hover:shadow-[0_0_16px_rgba(37,99,235,0.5)]"
                    >
                      View Live →
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      project.live ? "" : "flex-1 text-center"
                    } rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 group-hover:border-accent/30 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.2)]`}
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            );

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: Math.min(i * 0.05, 0.3),
                }}
                /*
                  Fixed height on lg so both halves are always equal.
                  On mobile the card stacks vertically; each half gets its own
                  natural height (image 260px, info auto).
                */
                className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15),0_0_60px_rgba(37,99,235,0.05)] lg:grid-cols-2 lg:h-[420px]"
                style={{ willChange: "transform" }}
              >
                {/* Image side */}
                <div
                  className={`order-1 h-[260px] lg:h-full ${
                    odd ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {imagePanel}
                </div>

                {/* Info side */}
                <div
                  className={`order-2 lg:h-full ${
                    odd ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {infoPanel}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
