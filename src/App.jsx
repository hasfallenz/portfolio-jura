import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Instagram, 
  Linkedin, 
  Mail, 
  ChevronRight,
  Award,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

const greetings = [
  { text: "Halo",       bgColor: "#020617", textColor: "#34d399" },
  { text: "Hello",      bgColor: "#0f172a", textColor: "#60a5fa" },
  { text: "Hola",       bgColor: "#09090b", textColor: "#fb7185" },
  { text: "Bonjour",    bgColor: "#171717", textColor: "#fbbf24" },
  { text: "Ciao",       bgColor: "#0c0a09", textColor: "#2dd4bf" },
  { text: "Konnichiwa", bgColor: "#020617", textColor: "#a78bfa" },
  { text: "Annyeong",   bgColor: "#18181b", textColor: "#f472b6" },
  { text: "Namaste",    bgColor: "#0a0a0a", textColor: "#fb923c" },
  { text: "Nǐ Hǎo",    bgColor: "#0f172a", textColor: "#22d3ee" },
  { text: "Guten Tag",  bgColor: "#1c1917", textColor: "#818cf8" },
];

const techSkills = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#8CC84B" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Python", color: "#3776AB" },
  { name: "Docker", color: "#2496ED" },
  { name: "Git", color: "#F05032" },
  { name: "Tailwind CSS", color: "#38BDF8" },
  { name: "Express.js", color: "#FFFFFF" },
  { name: "MongoDB", color: "#4DB33D" },
  { name: "Redis", color: "#DC382D" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Linux", color: "#FCC624" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "PHP", color: "#777BB4" },
  { name: "MySQL", color: "#4479A1" },
];

const certificates = [
  {
    id: 1,
    title: "Fullstack Web Development",
    issuer: "Dicoding Indonesia",
    date: "Januari 2024",
    credentialId: "XXXXX-XXXXX",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    badge: "bg-emerald-500/10 text-emerald-400",
    link: "#",
    icon: "🏆",
  },
  {
    id: 2,
    title: "React & Redux Developer",
    issuer: "Udemy",
    date: "Maret 2023",
    credentialId: "UC-XXXXXXXX",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/30",
    badge: "bg-blue-500/10 text-blue-400",
    link: "#",
    icon: "⚛️",
  },
  {
    id: 3,
    title: "Backend Engineering with Node.js",
    issuer: "Coursera",
    date: "Juli 2023",
    credentialId: "CERT-XXXXXXXX",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    badge: "bg-violet-500/10 text-violet-400",
    link: "#",
    icon: "🛠️",
  },
  {
    id: 4,
    title: "Database Design & PostgreSQL",
    issuer: "freeCodeCamp",
    date: "September 2023",
    credentialId: "FCC-XXXXXXXX",
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/30",
    badge: "bg-amber-500/10 text-amber-400",
    link: "#",
    icon: "🗄️",
  },
  {
    id: 5,
    title: "Cloud Fundamentals - AWS",
    issuer: "Amazon Web Services",
    date: "November 2023",
    credentialId: "AWS-XXXXXXXX",
    color: "from-rose-500/20 to-pink-500/10",
    border: "border-rose-500/30",
    badge: "bg-rose-500/10 text-rose-400",
    link: "#",
    icon: "☁️",
  },
  {
    id: 6,
    title: "Docker & Containerization",
    issuer: "LinkedIn Learning",
    date: "Februari 2024",
    credentialId: "LI-XXXXXXXX",
    color: "from-cyan-500/20 to-sky-500/10",
    border: "border-cyan-500/30",
    badge: "bg-cyan-500/10 text-cyan-400",
    link: "#",
    icon: "🐳",
  },
];

const doubledSkills = [...techSkills, ...techSkills];

export default function App() {
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [copiedText, setCopiedText] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (currentGreetingIndex < greetings.length - 1) {
      const timer = setTimeout(() => {
        setCurrentGreetingIndex(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setAnimateOut(true);
        const closeTimer = setTimeout(() => {
          setShowSplash(false);
        }, 1200);
        return () => clearTimeout(closeTimer);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentGreetingIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).catch(() => {
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    });
    setCopiedText(type);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const current = greetings[currentGreetingIndex];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-400 relative overflow-x-hidden">
      
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
            ? 'transform 1.1s cubic-bezier(0.85,0,0.15,1), opacity 1.1s ease'
            : 'background-color 0.18s ease',
          willChange: 'transform',
        }}
      >
        <div className="text-center">
          <h1
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-wider mb-2"
            style={{
              color: current.textColor,
              transition: 'color 0.18s ease',
            }}
          >
            {current.text}
          </h1>
        </div>
      </div>

      {/* BACKGROUND DECORATIONS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-emerald-500/5 blur-[150px]" />
        <div className="absolute top-[60%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-violet-500/3 blur-[180px]" />
      </div>

      {/* ── NAVBAR DESKTOP (md+) — top center pill ── */}
      <nav className="hidden md:block fixed top-5 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-1 bg-slate-900/90 backdrop-blur-xl border border-slate-800/70 rounded-full px-3 py-3 shadow-2xl shadow-black/50">
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300"
                style={{
                  backgroundColor: active ? '#34d399' : 'transparent',
                  color: active ? '#0f172a' : '#94a3b8',
                  boxShadow: active ? '0 4px 15px rgba(52,211,153,0.25)' : 'none',
                }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.backgroundColor = 'rgba(51,65,85,0.5)'; }}}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.backgroundColor = 'transparent'; }}}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── NAVBAR MOBILE — top bar with hamburger ── */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/60">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-white font-black text-sm tracking-widest">ZURA<span className="text-emerald-400">.</span></span>
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: mobileMenuOpen ? '300px' : '0px' }}
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
      {/* pt-16 on mobile (for mobile topbar), pt-28 on md+ (for pill navbar) */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-28">

        {/* SECTION 1: HOME */}
        <section id="home" className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between py-10 md:py-12 gap-8 md:gap-12">
          
          {/* Photo — on mobile, shown first and smaller */}
          <div className="flex justify-center w-full md:flex-1 md:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-indigo-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500" />
              {/* Mobile: w-48 h-64, larger on sm+, full size on md+ */}
              <div className="relative w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[420px] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-emerald-500/40 transition-all duration-500">
                <img
                  src="image2.png"
                  alt="Zufa Rahmat Ramadhan"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/25 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 space-y-5 text-center md:text-left md:order-1 w-full">
            <div className="space-y-3">
              <h1 className="text-slate-400 font-sans text-base sm:text-xl tracking-wider">Hello, I am</h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                ZUFA RAHMAT<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400">
                  RAMADHAN
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-300 tracking-wide font-mono">
                Fullstack Developer
              </p>
            </div>

            <p className="text-slate-400 max-w-lg text-sm leading-relaxed mx-auto md:mx-0">
              Saya adalah seorang pengembang web serba bisa yang gemar merancang sistem backend kokoh serta tampilan antarmuka front-end yang dinamis, interaktif, dan modern.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center md:justify-start">
              <div className="flex items-center space-x-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 text-slate-300 rounded-xl transition-all duration-300 hover:-translate-y-1">
                  <Github size={20} />
                </a>
                <a href="https://instagram.com/has.fallenz" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 text-slate-300 rounded-xl transition-all duration-300 hover:-translate-y-1">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 text-slate-300 rounded-xl transition-all duration-300 hover:-translate-y-1">
                  <Linkedin size={20} />
                </a>
              </div>
              <span className="hidden sm:block text-slate-800 font-mono">|</span>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 px-6 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-xl tracking-wider text-sm shadow-lg shadow-emerald-400/10 hover:shadow-emerald-400/25 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <span>Kontak Saya</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: ABOUT */}
        <section id="about" className="py-16 md:py-24 border-t border-slate-900">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            
            <div className="flex justify-center w-full md:flex-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-3xl blur-2xl opacity-15 group-hover:opacity-30 transition-all duration-500" />
                <div className="relative w-56 h-72 sm:w-72 sm:h-96 md:w-80 md:h-[420px] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-emerald-500/40 transition-all duration-500">
                  <img 
                    src="/image1.png"  
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    alt="About"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/25 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-6 w-full">
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">Tentang Saya</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-relaxed">
                  I AM <span className="inline-block">ZURA</span>
                  <br />
                  <span className="relative inline-block px-3 py-1 mt-2 bg-violet-500 rounded-sm">
                    <span className="relative text-white font-bold text-lg sm:text-2xl">FULLSTACK DEVELOPER</span>
                  </span>
                </h2>
              </div>

              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  Saya adalah seorang Fullstack Developer profesional yang berbasis di Indonesia. Saya berspesialisasi dalam merancang aplikasi web berskala besar, cepat, serta mudah dikelola. Dengan keahlian di bidang frontend modern dan arsitektur backend yang kokoh, saya berusaha keras memberikan solusi digital terbaik yang mulus bagi pengguna.
                </p>
                <p>
                  Sejak memulai perjalanan saya di bidang rekayasa perangkat lunak, saya terus mempelajari teknologi baru guna mengikuti perkembangan industri yang serba cepat. Saya fokus menulis kode yang bersih, terdokumentasi dengan baik, dan memprioritaskan performa situs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-900">
                <div className="space-y-1">
                  <span className="text-xs text-slate-500 block font-mono">NAMA LENGKAP:</span>
                  <span className="font-semibold text-slate-200 text-xs sm:text-sm">ZUFA RAHMAT RAMADHAN</span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-500 block font-mono">EMAIL:</span>
                  <span className="font-semibold text-slate-200 text-xs sm:text-sm break-all">hasfallenz12@gmail.com</span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-500 block font-mono">STATUS:</span>
                  <span className="font-semibold text-emerald-400 text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                    MAHASISWA SEMESTER 4
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-500 block font-mono">LOKASI:</span>
                  <span className="font-semibold text-slate-200 text-xs sm:text-sm">Kota Tangerang, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* TECH SKILLS MARQUEE */}
          <div className="mt-16 md:mt-20">
            <div className="text-center mb-8">
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">Tech Stack</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">Teknologi yang Saya Kuasai</h3>
            </div>

            <div className="relative overflow-hidden py-3">
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
              <div
                className="flex gap-3"
                style={{
                  animation: 'marquee-left 30s linear infinite',
                  width: 'max-content',
                }}
              >
                {doubledSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 border border-slate-800 rounded-full whitespace-nowrap"
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: skill.color, boxShadow: `0 0 6px ${skill.color}80` }}
                    />
                    <span className="text-xs sm:text-sm font-semibold text-slate-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden py-3 mt-2">
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
              <div
                className="flex gap-3"
                style={{
                  animation: 'marquee-right 35s linear infinite',
                  width: 'max-content',
                }}
              >
                {[...doubledSkills].reverse().map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900/40 border border-slate-800/60 rounded-full whitespace-nowrap"
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: skill.color, boxShadow: `0 0 6px ${skill.color}80` }}
                    />
                    <span className="text-xs sm:text-sm font-semibold text-slate-400">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SERTIFIKAT */}
          <div className="mt-16 md:mt-20">
            <div className="text-center mb-8 md:mb-10">
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">Pencapaian</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">Sertifikasi & Lisensi</h3>
              <p className="text-slate-500 text-sm mt-2">Sertifikat yang telah saya raih dalam perjalanan belajar</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className={`group relative bg-gradient-to-br ${cert.color} border ${cert.border} rounded-2xl p-4 sm:p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden`}
                >
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-white/5 opacity-40" />
                  <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full border border-white/5 opacity-30" />

                  <div className="flex items-start justify-between">
                    <span className="text-2xl sm:text-3xl">{cert.icon}</span>
                    <span className={`text-xs font-mono px-2 py-1 rounded-full ${cert.badge} font-semibold`}>
                      {cert.date}
                    </span>
                  </div>

                  <div className="flex-1 space-y-1">
                    <h4 className="font-bold text-white text-sm sm:text-base leading-snug">{cert.title}</h4>
                    <p className="text-xs text-slate-400 font-mono">{cert.issuer}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div className="space-y-0.5 min-w-0 mr-2">
                      <span className="text-[10px] text-slate-500 font-mono uppercase block">Credential ID</span>
                      <span className="text-xs text-slate-400 font-mono truncate block">{cert.credentialId}</span>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex-shrink-0"
                    >
                      Lihat
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* SECTION 3: EXPERIENCE */}
        <section id="experience" className="py-16 md:py-24 border-t border-slate-900">
          <div className="space-y-2 mb-10 md:mb-12 text-center">
            <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">Perjalanan Karir</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Riwayat Pengalaman</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-l border-slate-800 pl-5 ml-2 space-y-8 relative">
              
              {[
                {
                  title: "Senior Fullstack Developer",
                  company: "TechLabs Corp • Full-time",
                  date: "2024 - Sekarang",
                  active: true,
                  desc: "Memimpin pengembangan frontend dan backend untuk platform e-commerce dan aplikasi SaaS, meningkatkan kecepatan loading web hingga 40% dan mengoptimalkan query database relasional."
                },
                {
                  title: "Backend Engineer",
                  company: "Nusa Solusindo • Kontrak",
                  date: "2022 - 2024",
                  active: false,
                  desc: "Merancang, menguji, dan mendokumentasikan API RESTful berperforma tinggi untuk aplikasi keuangan seluler. Berkolaborasi erat dengan tim desainer UI/UX serta tim pengembangan Android/iOS."
                },
                {
                  title: "Fullstack Developer Intern",
                  company: "Startup Digital Raya • Magang",
                  date: "2021 - 2022",
                  active: false,
                  desc: "Membantu memelihara sistem internal perusahaan, menangani perbaikan bug tampilan front-end, dan menambahkan integrasi sistem pembayaran eksternal."
                },
              ].map((job, i) => (
                <div key={i} className="relative">
                  <span className={`absolute -left-[27px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 flex items-center justify-center ${job.active ? 'border-emerald-400' : 'border-slate-800'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${job.active ? 'bg-emerald-400' : 'bg-slate-800'}`} />
                  </span>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-bold text-white text-sm sm:text-base">{job.title}</h4>
                      <span className={`inline-block px-3 py-1 text-xs rounded-full font-mono w-max ${job.active ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-900 text-slate-400'}`}>
                        {job.date}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-400">{job.company}</p>
                    <p className="text-sm text-slate-400">{job.desc}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* SECTION 4: PROJECTS */}
        <section id="projects" className="py-16 md:py-24 border-t border-slate-900">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">Karya Terbaik</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Proyek Pilihan</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((n) => (
              <div key={n} className="group bg-slate-900/40 border border-slate-900 hover:border-emerald-500/30 rounded-2xl p-4 sm:p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-md">
                <div className="w-full h-36 sm:h-40 bg-slate-950 rounded-xl mb-4 overflow-hidden border border-slate-800 flex items-center justify-center">
                  <img src={`/project${n}.jpg`} alt={`Project ${n}`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-2 flex-grow">
                  <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">KOSONG</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">Empty.</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-900/50 mt-4" />
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: CONTACT */}
        <section id="contact" className="py-16 md:py-24 border-t border-slate-900">
          <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
            
            <div className="space-y-3 text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase block">Hubungi Saya</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">Hubungi Saya Kapan Saja</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Apakah Anda memiliki proyek besar yang ingin dikerjakan bersama, memiliki pertanyaan spesifik, atau ingin membangun kolaborasi yang solid? Silakan hubungi saya melalui media sosial atau chat cepat di bawah.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              
              <a href="https://wa.me/6281385280346" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-slate-900/30 border border-slate-900 rounded-2xl hover:border-emerald-500/20 transition-all duration-300 group">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="p-2.5 sm:p-3 bg-emerald-500/10 text-emerald-400 rounded-xl flex-shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 12.008 0c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 12.004-11.95 12.004-.003 0-.005 0-.007 0-2.005-.001-3.975-.51-5.729-1.479L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.528 1.975 14.061 1.95 11.43 1.95c-5.438 0-9.863 4.374-9.867 9.802 0 1.714.475 3.393 1.374 4.869l-.997 3.64 3.734-.967z"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white text-sm sm:text-base font-bold">WhatsApp</h4>
                    <span className="text-emerald-400 text-xs font-mono truncate block">ZURA RAHMAT RAMADHAN</span>
                  </div>
                </div>
                <ChevronRight size={18} className="text-slate-500 group-hover:text-emerald-400 flex-shrink-0 ml-2" />
              </a>

              <a href="https://instagram.com/has.fallenz" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-slate-900/30 border border-slate-900 rounded-2xl hover:border-pink-500/20 transition-all duration-300 group">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="p-2.5 sm:p-3 bg-pink-500/10 text-pink-400 rounded-xl flex-shrink-0">
                    <Instagram size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white text-sm sm:text-base font-bold">Instagram</h4>
                    <span className="text-pink-400 text-xs font-mono">@has.fallenz</span>
                  </div>
                </div>
                <ChevronRight size={18} className="text-slate-500 group-hover:text-pink-400 flex-shrink-0 ml-2" />
              </a>

              <div className="flex items-center justify-between p-4 bg-slate-900/30 border border-slate-900 rounded-2xl hover:border-indigo-500/20 transition-all duration-300">
                <div className="flex items-center space-x-3 min-w-0 flex-1 mr-2">
                  <div className="p-2.5 sm:p-3 bg-indigo-500/10 text-indigo-400 rounded-xl flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white text-sm sm:text-base font-bold">Email</h4>
                    <span className="text-indigo-400 text-xs font-mono block truncate">hasfallenz12@gmail.com</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy('hasfallenz12@gmail.com', 'email')}
                  className="text-xs font-mono bg-slate-950 border border-slate-800 hover:border-indigo-500/30 px-2.5 py-1.5 rounded-xl text-slate-400 hover:text-white transition-all active:scale-95 flex-shrink-0"
                >
                  {copiedText === 'email' ? 'Tersalin!' : 'Salin'}
                </button>
              </div>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-slate-900/30 border border-slate-900 rounded-2xl hover:border-blue-500/20 transition-all duration-300 group">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="p-2.5 sm:p-3 bg-blue-500/10 text-blue-400 rounded-xl flex-shrink-0">
                    <Linkedin size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white text-sm sm:text-base font-bold">LinkedIn</h4>
                    <span className="text-blue-400 text-xs font-mono">Zufa Rahmat Ramadhan</span>
                  </div>
                </div>
                <ChevronRight size={18} className="text-slate-500 group-hover:text-blue-400 flex-shrink-0 ml-2" />
              </a>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-slate-900">
          <p className="text-slate-600 text-xs font-mono">© 2024 Zufa Rahmat Ramadhan. All rights reserved.</p>
        </footer>

      </main>

      {/* MARQUEE KEYFRAMES */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}