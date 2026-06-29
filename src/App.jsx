import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ChevronRight,
  ChevronDown,
  Award,
  ExternalLink,
  Menu,
  X,
  BookOpen,
  Terminal,
  Check,
  Copy,
  Sparkles,
  Filter,
  Database,
  Code
} from 'lucide-react';

const greetings = [
  { text: "Halo", bgColor: "#020617", textColor: "#34d399" },
  { text: "Hello", bgColor: "#0f172a", textColor: "#60a5fa" },
  { text: "Hola", bgColor: "#09090b", textColor: "#fb7185" },
  { text: "Bonjour", bgColor: "#171717", textColor: "#fbbf24" },
  { text: "Ciao", bgColor: "#0c0a09", textColor: "#2dd4bf" },
  { text: "Konnichiwa", bgColor: "#020617", textColor: "#a78bfa" },
  { text: "Annyeong", bgColor: "#18181b", textColor: "#f472b6" },
  { text: "Namaste", bgColor: "#0a0a0a", textColor: "#fb923c" },
  { text: "Nǐ Hǎo", bgColor: "#0f172a", textColor: "#22d3ee" },
  { text: "Guten Tag", bgColor: "#1c1917", textColor: "#818cf8" },
  { text: "Olá", bgColor: "#020617", textColor: "#10b981" },
  { text: "Privet", bgColor: "#0c0a09", textColor: "#f43f5e" },
  { text: "Marhaban", bgColor: "#18181b", textColor: "#e11d48" },
  { text: "Jambo", bgColor: "#0a0a0a", textColor: "#f59e0b" },
  { text: "Merhaba", bgColor: "#0f172a", textColor: "#a855f7" },
];

const techSkills = [
  { name: "React", color: "#61DAFB", level: "Intermediate", desc: "Membangun SPA interaktif dengan Hook dan State." },
  { name: "Astro.js", color: "#FF5D01", level: "Intermediate", desc: "Membangun website statis & SSR yang ultra cepat." },
  { name: "Sanity CMS", color: "#F04336", level: "Intermediate", desc: "Mengelola konten headless CMS secara real-time." },
  { name: "Laravel", color: "#FF2D20", level: "Intermediate", desc: "Membuat REST API dan backend server MVC." },
  { name: "Python", color: "#3776AB", level: "Beginner", desc: "Mengembangkan script otomasi dan pemrosesan data." },
  { name: "Next.js", color: "#FFFFFF", level: "Beginner", desc: "Mempelajari rendering SSR & SSG untuk SEO." },
  { name: "Tailwind CSS", color: "#38BDF8", level: "Advanced", desc: "Merancang UI modern, responsive, dan respons kilat." },
  { name: "Node.js", color: "#8CC84B", level: "Beginner", desc: "Membuat REST API backend sederhana." },
];

const projectsData = [
  {
    id: 'barwice-cafe',
    title: {
      ID: 'Barwice Cafe',
      EN: 'Barwice Cafe'
    },
    desc: {
      ID: 'Website modern Barwice Cafe dengan integrasi Headless CMS untuk manajemen konten real-time.',
      EN: 'Modern website for Barwice Cafe with Headless CMS integration for real-time content management.'
    },
    longDesc: {
      ID: 'Proyek website resmi untuk Barwice Cafe. Dibangun menggunakan Astro.js untuk kecepatan loading maksimal dan SEO optimal, serta diintegrasikan dengan Sanity CMS agar tim cafe dapat memperbarui menu, promo, dan informasi terbaru secara fleksibel.',
      EN: 'Official website project for Barwice Cafe. Engineered using Astro.js for blazing-fast loading speeds and optimal SEO, integrated with Sanity CMS enabling cafe staff to dynamically update menus, offers, and announcements.'
    },
    category: 'Astro',
    image: '/barwice-cafe.png',
    tags: ['Astro.js', 'Sanity CMS', 'Tailwind CSS', 'Vercel'],
    stats: {
      ID: 'Live Website',
      EN: 'Live Website'
    },
    githubUrl: 'https://github.com/hasfallenz',
    demoUrl: 'https://barwice-cafe.vercel.app'
  }
];
const certificatesData = [];

const translations = {
  ID: {
    navHome: "Home",
    navAbout: "Tentang",
    navExperience: "Pengalaman",
    navProjects: "Proyek",
    navContact: "Kontak",
    hello: "Halo, saya",
    fullstack: "Fullstack Developer",
    heroDesc: "Saya adalah seorang pengembang web serba bisa yang gemar merancang sistem backend kokoh serta tampilan antarmuka front-end yang dinamis, interaktif, dan modern.",
    contactBtn: "Kontak Saya",
    aboutSmall: "Tentang Saya",
    aboutTitle: "I AM",
    aboutP1: "Hai, saya Zufa Rahmat Ramadhan, saya biasa di panggil zura oleh kawan-kawan saya. Saya Mahasiswa Semester 5 di Universitas Muhammadiyah Tangerang. Alasan saya ambil jurusan Teknik Informatika karena saya tertarik untuk mengembangkan suatu teknologi.",
    aboutP2: "Untuk hobi saya yaitu memainkan alat gitar dan bernyanyi. Kesibukan saya untuk sekarang yaitu hanya berkuliah.",
    aboutP3: "Dan tujuan saya sekarang adalah ingin bekerja di Perusahaan yang besar, itu impian saya dari awal masuk kuliah",
    aboutName: "NAMA LENGKAP:",
    aboutEmail: "EMAIL:",
    aboutStatus: "STATUS:",
    aboutStatusVal: "MAHASISWA SEMESTER 5",
    aboutLocation: "LOKASI:",
    aboutLocationVal: "Kota Tangerang, Indonesia",
    techSmall: "Tech Stack",
    techTitle: "Teknologi yang Saya Kuasai",
    techDesc: "Kumpulan teknologi modern yang aktif saya gunakan dalam membangun aplikasi",
    certSmall: "Pencapaian",
    certTitle: "Sertifikasi & Lisensi",
    certDesc: "Sertifikat yang telah saya raih dalam perjalanan belajar",
    certTitlePrefix: "Sertifikat",
    expSmall: "Perjalanan Karir",
    expTitle: "Riwayat Pengalaman",
    expJobTitle: "TUGAS KAMPUS (PROJECT UTAMA)",
    expJobDesc: "Membuat aplikasi berbasis web untuk mengelola data buku dan peminjaman perpustakaan kampus.",
    projSmall: "Karya Terbaik",
    projTitle: "Proyek Pilihan",
    projDesc: "Melihat portofolio kode kustom yang dibangun dengan performa tinggi.",
    contactSmall: "Hubungi Saya",
    contactTitle: "Hubungi Saya Kapan Saja",
    contactDesc: "Apakah Anda memiliki proyek besar yang ingin dikerjakan bersama, memiliki pertanyaan spesifik, atau ingin membangun kolaborasi yang solid? Silakan hubungi saya melalui media sosial atau chat cepat di bawah.",
    copied: "Tersalin!",
    copy: "Salin",
    viewDetails: "Lihat Detail",
    filterAll: "Semua Kategori",
    statsTitle: "Statistik Portofolio",
    statsProjects: "Proyek Aktif",
    statsCertificates: "Sertifikasi",
    statsSemesters: "Semester Kuliah",
    statsCommits: "GitHub Commits",
    projectDetails: "Detail Proyek",
    closeBtn: "Tutup",
    githubBtn: "Lihat Kode",
    demoBtn: "Kunjungi Web",
    copiedToast: "Email berhasil disalin ke papan klip!",
    emptyCertificates: "Belum ada sertifikasi atau lisensi saat ini.",
    emptyProjects: "Belum ada proyek pilihan saat ini."
  },
  EN: {
    navHome: "Home",
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Projects",
    navContact: "Contact",
    hello: "Hello, I am",
    fullstack: "Fullstack Developer",
    heroDesc: "I am a versatile web developer who loves designing robust backend systems as well as dynamic, interactive, and modern front-end interfaces.",
    contactBtn: "Contact Me",
    aboutSmall: "About Me",
    aboutTitle: "I AM",
    aboutP1: "Hi, I am Zufa Rahmat Ramadhan, my friends usually call me Zura. I am a 5th-semester student at Universitas Muhammadiyah Tangerang. The reason I chose Informatics Engineering is because I am interested in developing technology.",
    aboutP2: "For my hobbies, I play the guitar and sing. Currently, my daily activity is only studying.",
    aboutP3: "And my current goal is to work in a large company, which has been my dream since I started college.",
    aboutName: "FULL NAME:",
    aboutEmail: "EMAIL:",
    aboutStatus: "STATUS:",
    aboutStatusVal: "5TH SEMESTER STUDENT",
    aboutLocation: "LOCATION:",
    aboutLocationVal: "Tangerang City, Indonesia",
    techSmall: "Tech Stack",
    techTitle: "Technologies I Master",
    techDesc: "A collection of modern technologies I actively use in building applications",
    certSmall: "Achievements",
    certTitle: "Certifications & Licenses",
    certDesc: "Certificates I have earned during my learning journey",
    certTitlePrefix: "Certificate",
    expSmall: "Career Journey",
    expTitle: "Work Experience",
    expJobTitle: "COLLEGE PROJECT (MAIN PROJECT)",
    expJobDesc: "Developed a web-based application to manage book data and library loans for the campus.",
    projSmall: "Best Works",
    projTitle: "Selected Projects",
    projDesc: "Take a look at custom portfolio projects engineered with high performance.",
    contactSmall: "Contact Me",
    contactTitle: "Get In Touch Anytime",
    contactDesc: "Do you have a great project in mind, a specific question, or want to build a solid collaboration? Please contact me through social media or quick chat below.",
    copied: "Copied!",
    copy: "Copy",
    viewDetails: "View Details",
    filterAll: "All Categories",
    statsTitle: "Portfolio Stats",
    statsProjects: "Active Projects",
    statsCertificates: "Certifications",
    statsSemesters: "Semesters",
    statsCommits: "GitHub Commits",
    projectDetails: "Project Details",
    closeBtn: "Close",
    githubBtn: "View Code",
    demoBtn: "Visit Live Web",
    copiedToast: "Email copied to clipboard successfully!",
    emptyCertificates: "No certifications or licenses available at the moment.",
    emptyProjects: "No selected projects available at the moment."
  }
};

const getSkillIcon = (name) => {
  switch (name) {
    case 'React':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10 sm:w-12 sm:h-12 text-[#61DAFB] fill-none stroke-current stroke-[1.2] transition-transform duration-700 group-hover:rotate-180">
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <g stroke="currentColor" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'Astro.js':
      return (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12 text-[#FF5D01] fill-current transition-transform duration-500 group-hover:scale-110">
          <path d="M19.305 15.003c-.991-.355-2.071.144-2.426 1.136-.356.991.144 2.071 1.136 2.426.991.356 2.071-.144 2.426-1.136.355-.992-.145-2.071-1.136-2.426zm-14.61 0c-.991.355-1.491 1.434-1.136 2.426.355.992 1.435 1.492 2.426 1.136.992-.355 1.492-1.435 1.136-2.426-.355-.992-1.435-1.491-2.426-1.136zM12 2C6.477 2 2 6.477 2 12c0 2.236.734 4.302 1.975 5.975l2.67-4.153C6.237 13.11 6 12.075 6 11c0-3.314 2.686-6 6-6s6 2.686 6 6c0 1.075-.237 2.11-.645 2.822l2.67 4.153C21.266 16.302 22 14.236 22 12c0-5.523-4.477-10-10-10zm0 4a5 5 0 100 10 5 5 0 000-10z" />
        </svg>
      );
    case 'Sanity CMS':
      return (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12 text-[#F04336] fill-current transition-transform duration-500 group-hover:scale-110">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8 12 11.2 4.8 8 12 4.8zM4 9.6l7 3.5v7.1l-7-3.5V9.6zm9 10.6v-7.1l7-3.5v7.1l-7 3.5z" />
        </svg>
      );
    case 'Laravel':
      return (
        <svg viewBox="0 0 512 512" className="w-10 h-10 sm:w-12 sm:h-12 text-[#FF2D20] fill-current transition-transform duration-500 group-hover:scale-110">
          <path d="M439 122.3l-123.5-70c-15.5-8.8-35.5-8.8-51 0L141 122.3c-15.5 8.8-25.5 25.3-25.5 43v140c0 17.7 10 34.2 25.5 43l123.5 70c15.5 8.8 35.5 8.8 51 0l123.5-70c15.5-8.8 25.5-25.3 25.5-43v-140c0-17.7-10-34.2-25.5-43zM270 410.7l-120-68V210.7l120 68v132zm20-164l-120-68 120-68 120 68-120 68zm120 96l-120 68V278.7l120-68v132z" />
        </svg>
      );
    case 'Python':
      return (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-500 group-hover:rotate-12">
          <path d="M12.002 2c-5.522 0-5.002 4.757-5.002 4.757h5.002v1.486H5.048S2 7.828 2 12.824c0 4.996 2.762 5.178 2.762 5.178h1.644v-2.3c0-2.485 2.025-2.485 2.025-2.485h5.571s2.002 0 2.002-1.939V6.757C16.004 2.81 12.002 2 12.002 2z" fill="#3776AB" />
          <path d="M11.998 22c5.522 0 5.002-4.757 5.002-4.757H11.99v-1.486h6.96s3.048.415 3.048-4.581c0-4.996-2.762-5.178-2.762-5.178h-1.644v2.3c0 2.485-2.025 2.485-2.025 2.485H9.996s-2.002 0-2.002 1.939v5.571c0 3.947 4.002 4.757 4.002 4.757z" fill="#FFD43B" />
          <circle cx="9.002" cy="5.25" r="0.75" fill="#fff" />
          <circle cx="15.002" cy="18.75" r="0.75" fill="#fff" />
        </svg>
      );
    case 'Next.js':
      return (
        <svg viewBox="0 0 180 180" className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-current transition-transform duration-500 group-hover:scale-110">
          <circle cx="90" cy="90" r="90" fill="#000" stroke="#334155" strokeWidth="4" />
          <path d="M140 138L85 64H73V116H81V76L130 138H140Z" fill="#fff" />
          <path d="M115 64H123V116H115V64Z" fill="url(#next-gradient)" />
          <defs>
            <linearGradient id="next-gradient" x1="119" y1="64" x2="119" y2="116" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12 text-[#38BDF8] fill-current transition-transform duration-500 group-hover:skew-x-6">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.002 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.513 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case 'Node.js':
      return (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12 text-[#68a063] fill-current transition-transform duration-500 group-hover:scale-110">
          <path d="M12 1L3 6.2v10.4L12 23l9-5.2V6.2L12 1zm7 14.4l-7 4-7-4V7.8l7-4 7 4v7.6z M12 6c-.8 0-1.5.7-1.5 1.5S11.2 9 12 9s1.5-.7 1.5-1.5S12.8 6 12 6zm0 4.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function App() {
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [copiedText, setCopiedText] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ID');

  // Custom states for premium features
  const [scrollProgress, setScrollProgress] = useState(0);
  const [projectFilter, setProjectFilter] = useState('All');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const t = translations[language];
  const filterRef = useRef(null);

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'experience', label: t.navExperience },
    { id: 'projects', label: t.navProjects },
    { id: 'contact', label: t.navContact },
  ];

  // Splash Screen Sequence
  useEffect(() => {
    if (currentGreetingIndex < greetings.length - 1) {
      const timer = setTimeout(() => {
        setCurrentGreetingIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setAnimateOut(true);
        const closeTimer = setTimeout(() => {
          setShowSplash(false);
        }, 800);
        return () => clearTimeout(closeTimer);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentGreetingIndex]);

  // Scroll Progress and Scroll Reveal Observer
  useEffect(() => {
    const handleScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    const handleActiveSection = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    // Close project filter dropdown when clicking outside
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setIsFilterDropdownOpen(false);
      }
    };

    // Scroll reveal intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScrollProgress);
    window.addEventListener('scroll', handleActiveSection);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScrollProgress);
      window.removeEventListener('scroll', handleActiveSection);
      document.removeEventListener('mousedown', handleClickOutside);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(type);
      showToast(t.copiedToast);
      setTimeout(() => setCopiedText(''), 2000);
    }).catch(() => {
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      setCopiedText(type);
      showToast(t.copiedToast);
      setTimeout(() => setCopiedText(''), 2000);
    });
  };

  const filteredProjects = projectFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === projectFilter);

  const current = greetings[currentGreetingIndex];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-400 relative overflow-x-hidden">
      
      {/* ── SCROLL PROGRESS BAR ── */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-500 z-50 transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* ── TOAST NOTIFICATION ── */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-emerald-950/90 border border-emerald-500/30 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-float">
          <Sparkles size={18} className="text-emerald-400" />
          <span className="text-xs font-semibold text-slate-200">{toastMessage}</span>
        </div>
      )}

      {/* LANGUAGE SELECTOR DESKTOP */}
      <div className="hidden md:flex fixed top-5 right-5 z-50 items-center bg-slate-900/90 backdrop-blur-xl border border-slate-800/70 rounded-full p-1 shadow-2xl">
        <button
          onClick={() => setLanguage('ID')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${language === 'ID' ? 'bg-emerald-400 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
        >
          ID
        </button>
        <button
          onClick={() => setLanguage('EN')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${language === 'EN' ? 'bg-emerald-400 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
        >
          EN
        </button>
      </div>

      {/* SPLASH SCREEN */}
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4"
        style={{
          backgroundColor: current.bgColor,
          transform: animateOut ? 'translateY(-100%)' : 'translateY(0)',
          opacity: animateOut ? 0.92 : 1,
          pointerEvents: animateOut ? 'none' : 'all',
          visibility: showSplash ? 'visible' : 'hidden',
          transition: animateOut
            ? 'transform 0.8s cubic-bezier(0.85,0,0.15,1), opacity 0.8s ease'
            : 'background-color 0.17s ease',
          willChange: 'transform',
        }}
      >
        <div className="text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-wider mb-2"
            style={{
              color: current.textColor,
              transition: 'color 0.17s ease',
            }}
          >
            {current.text}
          </h1>
        </div>
      </div>

      {/* BACKGROUND DECORATIONS (High-End Glows) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[8%] left-[5%] w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-indigo-500/10 blur-[130px] animate-pulse-glow" />
        <div className="absolute bottom-[20%] right-[8%] w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full bg-emerald-500/8 blur-[160px] animate-pulse-glow" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] md:w-[650px] md:h-[650px] rounded-full bg-violet-500/5 blur-[180px]" />
      </div>

      {/* ── NAVBAR DESKTOP (md+) ── */}
      <nav className="hidden md:block fixed top-5 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-1 bg-slate-900/80 backdrop-blur-xl border border-slate-800/70 rounded-full px-2.5 py-2.5 shadow-2xl shadow-black/65">
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  active 
                    ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/20' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── NAVBAR MOBILE ── */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-b border-slate-900/60">
        <div className="flex items-center justify-between px-4 py-3.5">
          <span className="text-white font-black text-sm tracking-widest">ZURA<span className="text-emerald-400">.</span></span>
          <div className="flex items-center gap-3">
            {/* Language Switcher Mobile */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-full p-0.5">
              <button
                onClick={() => setLanguage('ID')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-black transition-all duration-200 ${language === 'ID' ? 'bg-emerald-400 text-slate-950 shadow-sm' : 'text-slate-400'}`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('EN')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-black transition-all duration-200 ${language === 'EN' ? 'bg-emerald-400 text-slate-950 shadow-sm' : 'text-slate-400'}`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className="overflow-hidden transition-all duration-300 bg-slate-950/98 border-b border-slate-900"
          style={{ maxHeight: mobileMenuOpen ? '320px' : '0px' }}
        >
          <div className="px-4 pb-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{
                    backgroundColor: active ? 'rgba(52,211,153,0.1)' : 'transparent',
                    color: active ? '#34d399' : '#94a3b8',
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28">

        {/* ── SECTION 1: HOME ── */}
        <section id="home" className="min-h-[85vh] flex flex-col md:flex-row items-center justify-center md:justify-between py-8 md:py-12 gap-10 md:gap-12 reveal-on-scroll">
          
          {/* Photo */}
          <div className="flex justify-center w-full md:flex-1 md:order-2">
            <div className="relative group">
              {/* Outer double glowing ring */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-400 via-teal-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-indigo-500 rounded-3xl opacity-10 group-hover:opacity-20 transition-all duration-700" />
              
              <div className="relative w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[420px] bg-slate-900 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl hover:border-emerald-400/40 transition-all duration-500">
                <img
                  src="/fotohome.png"
                  alt="Zufa Rahmat Ramadhan"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                />
                {/* Visual glass gradient sheet */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 space-y-6 text-center md:text-left md:order-1 w-full mt-4 md:mt-0">
            <div className="space-y-3.5">
              <span className="px-3.5 py-1 bg-slate-900 border border-slate-800 text-emerald-400 rounded-full font-mono text-xs font-bold tracking-widest inline-block uppercase shadow-lg shadow-black/30">
                🚀 Welcome to my space
              </span>
              <h1 className="text-slate-400 font-sans text-base sm:text-xl tracking-wider">{t.hello}</h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.25] sm:leading-[1.2] md:leading-tight">
                ZUFA RAHMAT<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400">
                  RAMADHAN
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-300 tracking-wide font-mono flex items-center justify-center md:justify-start gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.fullstack}
              </p>
            </div>

            <p className="text-slate-400 max-w-lg text-sm leading-relaxed mx-auto md:mx-0">
              {t.heroDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center md:justify-start">
              <div className="flex items-center space-x-3 bg-slate-900/60 border border-slate-800/80 p-1.5 rounded-2xl shadow-xl">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-950 border border-slate-800/60 hover:border-emerald-500/50 hover:text-emerald-400 text-slate-300 rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                  <Github size={18} />
                </a>
                <a href="https://instagram.com/has.fallenz" target="_blank" rel="noreferrer" className="p-3 bg-slate-950 border border-slate-800/60 hover:border-emerald-500/50 hover:text-emerald-400 text-slate-300 rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                  <Instagram size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-950 border border-slate-800/60 hover:border-emerald-500/50 hover:text-emerald-400 text-slate-300 rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                  <Linkedin size={18} />
                </a>
              </div>
              <span className="hidden sm:block text-slate-800 font-mono">|</span>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 px-6 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-xl tracking-wider text-xs uppercase shadow-xl shadow-emerald-400/10 hover:shadow-emerald-400/25 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <span>{t.contactBtn}</span>
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </section>

        {/* ── STATS COUNTER ── */}
        <section className="py-10 border-t border-slate-900/60 reveal-on-scroll">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 max-w-6xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase text-center mb-6">{t.statsTitle}</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-1.5">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-400 font-mono">{projectsData.length}</span>
                <span className="block text-xs text-slate-400 font-semibold">{t.statsProjects}</span>
              </div>
              <div className="space-y-1.5 md:border-l md:border-slate-800/60">
                <span className="block text-2xl sm:text-3xl font-black text-indigo-400 font-mono">0</span>
                <span className="block text-xs text-slate-400 font-semibold">{t.statsCertificates}</span>
              </div>
              <div className="space-y-1.5 md:border-l md:border-slate-800/60">
                <span className="block text-2xl sm:text-3xl font-black text-violet-400 font-mono">5</span>
                <span className="block text-xs text-slate-400 font-semibold">{t.statsSemesters}</span>
              </div>
              <div className="space-y-1.5 md:border-l md:border-slate-800/60 font-mono">
                <span className="block text-2xl sm:text-3xl font-black text-teal-400 font-mono">0</span>
                <span className="block text-xs text-slate-400 font-semibold">{t.statsCommits}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: ABOUT ── */}
        <section id="about" className="py-16 md:py-24 border-t border-slate-900/60 reveal-on-scroll">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            
            {/* About Image wrapper */}
            <div className="flex justify-center w-full md:flex-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-3xl blur-2xl opacity-15 group-hover:opacity-30 transition-all duration-500" />
                <div className="relative w-56 h-72 sm:w-72 sm:h-96 md:w-80 md:h-[420px] bg-slate-900 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl hover:border-emerald-500/40 transition-all duration-500">
                  <img
                    src="/fotoabout.png"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                    alt="About Zura"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* About text info */}
            <div className="flex-grow space-y-6 w-full md:flex-1">
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">{t.aboutSmall}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-relaxed">
                  {t.aboutTitle}{" "}
                  <span className="relative inline-block px-3 py-1 bg-violet-600 rounded shadow-md shadow-violet-600/20">
                    <span className="relative text-white font-bold text-lg sm:text-2xl">ZURA</span>
                  </span>
                </h2>
              </div>

              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>{t.aboutP1}</p>
                <p>{t.aboutP2}</p>
                <p>{t.aboutP3}</p>
              </div>

              {/* Bio Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-900 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-bold">{t.aboutName}</span>
                  <span className="text-slate-300">Zufa Rahmat Ramadhan</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-bold">{t.aboutEmail}</span>
                  <span className="text-slate-300">hasfallenz12@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-bold">{t.aboutStatus}</span>
                  <span className="text-emerald-400">{t.aboutStatusVal}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-bold">{t.aboutLocation}</span>
                  <span className="text-slate-300">{t.aboutLocationVal}</span>
                </div>
              </div>
            </div>
          </div>

          {/* TECH SKILLS GRID */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">{t.techSmall}</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">{t.techTitle}</h3>
              <p className="text-slate-500 text-xs mt-2">{t.techDesc}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto px-2 sm:px-4">
              {techSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative bg-slate-900/30 border border-slate-900 hover:border-slate-800 rounded-3xl p-5 sm:p-6 flex flex-col items-center justify-center gap-4 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 overflow-hidden"
                >
                  {/* Glowing background on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300 blur-xl pointer-events-none"
                    style={{
                      backgroundColor: skill.color,
                    }}
                  />

                  {/* Icon Wrapper */}
                  <div
                    className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center transition-all duration-300 group-hover:border-slate-700"
                  >
                    {getSkillIcon(skill.name)}
                  </div>

                  {/* Name and level badge */}
                  <div className="text-center relative z-10 space-y-1">
                    <h4 className="font-extrabold text-white text-sm tracking-wide group-hover:text-emerald-400 transition-colors duration-300">
                      {skill.name}
                    </h4>
                    <span className="inline-block px-2 py-0.5 bg-slate-950/90 text-slate-500 font-mono text-[9px] font-bold rounded-full group-hover:text-slate-300 transition-colors">
                      {skill.level}
                    </span>
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed max-w-[140px] pt-1 hidden sm:block">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🏆 SERTIFIKAT */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">{t.certSmall}</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">{t.certTitle}</h3>
              <p className="text-slate-500 text-xs mt-2">{t.certDesc}</p>
            </div>

            {/* Clear Placeholder when certificates are empty */}
            {certificatesData.length === 0 ? (
              <div className="text-center py-12 px-6 border border-dashed border-slate-800 rounded-3xl max-w-md mx-auto bg-slate-900/10">
                <Award className="mx-auto text-slate-700 mb-3" size={32} />
                <p className="text-xs text-slate-500 font-mono tracking-wider">
                  {t.emptyCertificates}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certificatesData.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => setSelectedCertificate(cert)}
                    className="group relative bg-slate-900/35 border border-slate-900 hover:border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md cursor-pointer hover:shadow-xl hover:shadow-black/30"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div 
                          className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-950 border border-slate-800 transition-colors group-hover:border-slate-700"
                          style={{ color: cert.color }}
                        >
                          <Award size={18} />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-950/50 px-2 py-1 rounded-full">{cert.date}</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-white text-xs sm:text-sm tracking-wide leading-snug group-hover:text-emerald-400 transition-colors duration-300">
                          {language === 'ID' ? cert.title.ID : cert.title.EN}
                        </h4>
                        <p className="text-[10px] text-slate-400 font-medium">{cert.issuer}</p>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-950/50 flex items-center justify-between text-[9px] font-mono text-slate-500">
                      <span>ID: {cert.credentialId}</span>
                      <span className="text-emerald-400 group-hover:underline">{t.viewDetails} →</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── SECTION 3: EXPERIENCE ── */}
        <section id="experience" className="py-16 md:py-24 border-t border-slate-900/60 reveal-on-scroll">
          <div className="space-y-2 mb-12 text-center">
            <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">{t.expSmall}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{t.expTitle}</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="border-l-2 border-slate-900 pl-6 ml-2 space-y-8 relative">
              
              {/* College Project Timeline item */}
              <div className="relative">
                {/* Glowing pointer ball */}
                <span className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-400/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </span>
                
                <div className="glass-panel p-6 rounded-2xl shadow-xl space-y-3.5 border-l-2 border-l-emerald-400">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="space-y-0.5">
                      <h4 className="font-extrabold text-white text-base leading-snug">{t.expJobTitle}</h4>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <Database size={13} className="text-indigo-400" />
                        <span>Laravel & XAMPP DB Server</span>
                      </div>
                    </div>
                    <span className="px-3.5 py-1 text-2xs font-mono font-bold rounded-full bg-emerald-500/10 text-emerald-400 w-max border border-emerald-500/15">
                      2026
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{t.expJobDesc}</p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2 py-0.5 bg-slate-950 text-slate-400 rounded-full font-mono text-[9px]">Laravel API</span>
                    <span className="px-2 py-0.5 bg-slate-950 text-slate-400 rounded-full font-mono text-[9px]">MySQL Integration</span>
                    <span className="px-2 py-0.5 bg-slate-950 text-slate-400 rounded-full font-mono text-[9px]">XAMPP Setup</span>
                    <span className="px-2 py-0.5 bg-slate-950 text-slate-400 rounded-full font-mono text-[9px]">CRUD Engine</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SECTION 4: PROJECTS ── */}
        <section id="projects" className="py-16 md:py-24 border-t border-slate-900/60 reveal-on-scroll">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">{t.projSmall}</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{t.projTitle}</h2>
              <p className="text-slate-500 text-xs">{t.projDesc}</p>
            </div>

            {/* Filter Dropdown (Solves Mobile/Android Overflow Issue) */}
            <div ref={filterRef} className="relative z-30 mx-auto sm:mx-0">
              <button
                onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                className="flex items-center justify-between gap-2.5 px-4.5 py-2.5 bg-slate-900/80 border border-slate-800 hover:border-emerald-400/40 rounded-xl text-xs font-bold text-slate-200 hover:text-white transition-all shadow-lg min-w-[150px]"
              >
                <div className="flex items-center gap-2">
                  <Filter size={13} className="text-emerald-400" />
                  <span>{projectFilter === 'All' ? t.filterAll : projectFilter}</span>
                </div>
                <ChevronDown size={14} className={`text-slate-500 transition-transform duration-300 ${isFilterDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isFilterDropdownOpen && (
                <div className="absolute right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-0 mt-2 w-[160px] bg-slate-900 border border-slate-800/80 rounded-2xl shadow-2xl py-1.5 animate-fade-in border-slate-800">
                  {['All', 'Astro', 'React', 'Laravel', 'Python'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setProjectFilter(cat);
                        setIsFilterDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4.5 py-2 text-xs font-semibold transition-colors duration-250 hover:bg-slate-800/60 ${
                        projectFilter === cat 
                          ? 'text-emerald-400 bg-emerald-500/5' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat === 'All' ? t.filterAll : cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Clear Placeholder when projects are empty */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 px-6 border border-dashed border-slate-800 rounded-3xl max-w-xl mx-auto bg-slate-900/10 w-full">
              <Code className="mx-auto text-slate-700 mb-3" size={36} />
              <p className="text-xs text-slate-500 font-mono tracking-wider">
                {t.emptyProjects}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((proj) => (
                <div 
                  key={proj.id} 
                  className="group bg-slate-900/30 border border-slate-900 hover:border-slate-800 rounded-2xl p-4.5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl hover:shadow-black/45"
                >
                  <div>
                    {/* Visual mockup graphics / image */}
                    <div className="w-full h-44 bg-slate-950 rounded-xl mb-4 overflow-hidden border border-slate-800/60 relative flex flex-col items-center justify-center select-none group-hover:border-emerald-500/30 transition-colors">
                      {proj.image ? (
                        <img
                          src={proj.image}
                          alt={language === 'ID' ? proj.title.ID : proj.title.EN}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="p-3 w-full h-full flex flex-col items-center justify-center">
                          {proj.mockupType === 'library' && (
                            <div className="w-full h-full flex flex-col justify-between text-[8px] font-mono text-emerald-400">
                              <div className="flex items-center justify-between border-b border-emerald-950 pb-1">
                                <span>📦 BookVerse v1.0</span>
                                <span className="text-2xs text-indigo-400">ADMIN PANEL</span>
                              </div>
                              <div className="grid grid-cols-3 gap-1 my-1">
                                <div className="bg-slate-900/60 p-1 rounded border border-slate-800/50">
                                  <span className="block text-slate-500">Books</span>
                                  <span className="text-white font-bold">482</span>
                                </div>
                                <div className="bg-slate-900/60 p-1 rounded border border-slate-800/50">
                                  <span className="block text-slate-500">Loans</span>
                                  <span className="text-emerald-400 font-bold">29 Active</span>
                                </div>
                                <div className="bg-slate-900/60 p-1 rounded border border-slate-800/50">
                                  <span className="block text-slate-500">Overdue</span>
                                  <span className="text-rose-400 font-bold">3 Alert</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5 bg-slate-900/80 px-1.5 py-1 rounded text-slate-400 border border-slate-800/50">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                                <span>GET /api/v1/catalog/search?q=informatics</span>
                              </div>
                            </div>
                          )}

                          {proj.mockupType === 'music' && (
                            <div className="relative w-full h-full flex items-center justify-center">
                              <div className="absolute w-20 h-20 rounded-full border border-dashed border-indigo-500/40 animate-spin" style={{ animationDuration: '10s' }} />
                              <div className="absolute w-14 h-14 rounded-full bg-slate-900 border border-indigo-400/40 flex items-center justify-center">
                                <Music size={20} className="text-indigo-400 animate-float" />
                              </div>
                              <div className="absolute bottom-1 left-1 right-1 flex items-end justify-between px-2 text-[7px] font-mono text-indigo-300">
                                <span>Zenith Player</span>
                                <span>Web Audio Node: connected</span>
                              </div>
                            </div>
                          )}

                          {proj.mockupType === 'ai' && (
                            <div className="w-full h-full flex flex-col justify-between text-[7px] font-mono text-indigo-400 bg-slate-950 rounded p-1.5">
                              <div className="flex items-center gap-1 border-b border-indigo-950 pb-1 text-slate-500">
                                <Terminal size={10} />
                                <span>python sentiment_analyzer.py --csv reviews.csv</span>
                              </div>
                              <div className="space-y-1.5 my-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-slate-400">Total samples:</span>
                                  <span className="text-white">12,482</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-emerald-400">[+] Positive sentiment:</span>
                                  <span>81.2%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-rose-400">[-] Negative sentiment:</span>
                                  <span>18.8%</span>
                                </div>
                              </div>
                              <span className="text-2xs text-emerald-400">SUCCESS: accuracy=92.34% [elapsed=4.2s]</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-extrabold text-white text-sm sm:text-base group-hover:text-emerald-400 transition-colors leading-snug">
                        {language === 'ID' ? proj.title.ID : proj.title.EN}
                      </h3>
                      <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2 min-h-[34px]">
                        {language === 'ID' ? proj.desc.ID : proj.desc.EN}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3.5 pt-3.5 mt-3.5 border-t border-slate-950/60">
                    <div className="flex flex-wrap gap-1">
                      {proj.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-slate-950 text-slate-500 rounded font-mono text-[9px] font-semibold border border-slate-800/40">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-emerald-400/90 font-bold">{language === 'ID' ? proj.stats.ID : proj.stats.EN}</span>
                      <button
                        onClick={() => setSelectedProject(proj)}
                        className="px-3.5 py-1.5 bg-slate-900 border border-slate-800/80 hover:border-emerald-500/30 hover:text-emerald-400 text-slate-300 font-bold rounded-xl text-[10px] uppercase transition-all duration-300 flex items-center gap-1.5"
                      >
                        <span>{t.viewDetails}</span>
                        <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ── SECTION 5: CONTACT ── */}
        <section id="contact" className="py-16 md:py-24 border-t border-slate-900/60 reveal-on-scroll">
          <div className="max-w-6xl mx-auto space-y-10">
            
            <div className="space-y-3 text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase block">{t.contactSmall}</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">{t.contactTitle}</h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {t.contactDesc}
              </p>
            </div>

            {/* Centered layout with 3 clean contact cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto w-full">
              
              <a href="https://instagram.com/has.fallenz" target="_blank" rel="noreferrer" className="flex flex-col justify-between p-6 bg-slate-900/40 border border-slate-900 hover:border-pink-500/30 rounded-2xl transition-all duration-300 group shadow-lg hover:shadow-pink-500/5 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-pink-500/10 text-pink-400 rounded-xl border border-pink-500/20">
                      <Instagram size={22} />
                    </div>
                    <ChevronRight size={18} className="text-slate-600 group-hover:text-pink-400 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white text-base font-bold">Instagram</h4>
                    <p className="text-slate-400 text-xs mt-0.5">DM atau ikuti aktivitas harian saya</p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-900/80">
                  <span className="text-pink-400 text-xs font-mono font-semibold">@has.fallenz</span>
                </div>
              </a>

              <div className="flex flex-col justify-between p-6 bg-slate-900/40 border border-slate-900 hover:border-indigo-500/30 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
                      <Mail size={22} />
                    </div>
                    <button
                      onClick={() => handleCopy('hasfallenz12@gmail.com', 'email')}
                      className="text-xs font-mono bg-slate-950 border border-slate-800 hover:border-indigo-500/40 px-3 py-1.5 rounded-xl text-slate-300 hover:text-white transition-all active:scale-95"
                    >
                      {copiedText === 'email' ? t.copied : t.copy}
                    </button>
                  </div>
                  <div>
                    <h4 className="text-white text-base font-bold">Email</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Kirim pesan resmi atau penawaran kerja</p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-900/80">
                  <span className="text-indigo-400 text-xs font-mono font-semibold truncate block">hasfallenz12@gmail.com</span>
                </div>
              </div>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex flex-col justify-between p-6 bg-slate-900/40 border border-slate-900 hover:border-blue-500/30 rounded-2xl transition-all duration-300 group shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20">
                      <Linkedin size={22} />
                    </div>
                    <ChevronRight size={18} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white text-base font-bold">LinkedIn</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Terhubung secara profesional</p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-900/80">
                  <span className="text-blue-400 text-xs font-mono font-semibold">Zufa Rahmat Ramadhan</span>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-slate-900/60">
          <p className="text-slate-600 text-xs font-mono">© 2026 Zufa Rahmat Ramadhan. {language === 'ID' ? 'Hak cipta dilindungi undang-undang.' : 'All rights reserved.'}</p>
        </footer>
      </main>

      {/* ── PROJECT DETAIL MODAL ── */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-float">
            
            {/* Modal header/cover visual */}
            {selectedProject.image ? (
              <div className="w-full h-52 bg-slate-950 relative border-b border-slate-800">
                <img 
                  src={selectedProject.image} 
                  alt={language === 'ID' ? selectedProject.title.ID : selectedProject.title.EN} 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[9px] font-mono font-bold text-emerald-400 bg-slate-950/80 w-max px-2.5 py-1 rounded-full uppercase tracking-wider mb-1 border border-emerald-500/20">
                    {selectedProject.category} Project
                  </span>
                  <h3 className="font-extrabold text-white text-base sm:text-xl tracking-wide leading-snug">
                    {language === 'ID' ? selectedProject.title.ID : selectedProject.title.EN}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors z-10"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="h-28 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-indigo-500/20 border-b border-slate-800 flex items-center justify-between p-6">
                <div>
                  <span className="text-[9px] font-mono font-bold text-emerald-400 bg-slate-950 px-2 py-0.5 rounded-full uppercase tracking-wider">{selectedProject.category} Project</span>
                  <h3 className="font-extrabold text-white text-base sm:text-lg tracking-wide leading-snug mt-1">
                    {language === 'ID' ? selectedProject.title.ID : selectedProject.title.EN}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-850 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            {/* Modal Content */}
            <div className="p-6 space-y-4 text-xs">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Deskripsi Lengkap</span>
                <p className="text-slate-300 leading-relaxed">
                  {language === 'ID' ? selectedProject.longDesc.ID : selectedProject.longDesc.EN}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-slate-950/40 border border-slate-950 rounded-2xl p-4.5">
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Metrik Proyek</span>
                  <span className="text-slate-200 font-bold font-mono">{language === 'ID' ? selectedProject.stats.ID : selectedProject.stats.EN}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Kategori</span>
                  <span className="text-indigo-400 font-bold font-mono uppercase">{selectedProject.category}</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Teknologi Terkait</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-950 text-slate-400 border border-slate-800 rounded font-mono text-[9px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal actions */}
            <div className="p-6 bg-slate-950 border-t border-slate-850 flex items-center justify-end gap-2.5">
              <a 
                href={selectedProject.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="px-4.5 py-2.5 bg-slate-900 border border-slate-850/80 hover:border-slate-700 text-slate-300 hover:text-white rounded-xl text-[10px] font-bold uppercase transition-all duration-300 flex items-center gap-1.5"
              >
                <Github size={13} />
                <span>{t.githubBtn}</span>
              </a>
              <a 
                href={selectedProject.demoUrl} 
                className="px-4.5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 shadow-md shadow-emerald-400/10"
              >
                <ExternalLink size={13} />
                <span>{t.demoBtn}</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* ── CERTIFICATE LIGHTBOX MODAL ── */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl relative animate-float">
            
            <div className="absolute top-4 right-4 z-10">
              <button 
                onClick={() => setSelectedCertificate(null)}
                className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-850 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Certificate visual render */}
            <div className="bg-slate-950 p-6 flex flex-col justify-between aspect-[4/3] relative border-b border-slate-800 overflow-hidden">
              {/* Badge glows */}
              <div 
                className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: selectedCertificate.color }}
              />

              <div className="flex items-start justify-between">
                <span className="text-[8px] font-mono tracking-widest text-slate-500 uppercase">OFFICIAL DOCUMENT</span>
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-900 border border-slate-850"
                  style={{ color: selectedCertificate.color }}
                >
                  <Award size={20} />
                </div>
              </div>

              <div className="space-y-3.5 my-auto text-center">
                <span className="text-[9px] font-mono tracking-wider font-bold text-emerald-400 uppercase">CERTIFICATE OF COMPLETION</span>
                <h3 className="font-extrabold text-white text-base sm:text-lg tracking-wide leading-snug">
                  {language === 'ID' ? selectedCertificate.title.ID : selectedCertificate.title.EN}
                </h3>
                <p className="text-slate-400 text-xs italic">Presented to: <strong>Zufa Rahmat Ramadhan</strong></p>
              </div>

              <div className="flex items-end justify-between text-[8px] font-mono text-slate-500 border-t border-slate-900 pt-3">
                <div className="text-left">
                  <span>ISSUER: {selectedCertificate.issuer}</span>
                  <br />
                  <span>DATE: {selectedCertificate.date}</span>
                </div>
                <div className="text-right">
                  <span>CREDENTIAL ID:</span>
                  <br />
                  <span className="text-slate-400">{selectedCertificate.credentialId}</span>
                </div>
              </div>
            </div>

            {/* Certificate details */}
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Keahlian yang Dipelajari</span>
                <div className="flex flex-wrap gap-1">
                  {selectedCertificate.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2.5 py-1 bg-slate-950 text-slate-300 font-mono text-[9px] rounded-lg border border-slate-850/60"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Close actions */}
            <div className="p-4 bg-slate-950 border-t border-slate-850 flex justify-end">
              <button 
                onClick={() => setSelectedCertificate(null)}
                className="px-5 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-bold rounded-xl text-xs uppercase transition-all duration-300"
              >
                {t.closeBtn}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}