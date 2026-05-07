import React from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MessageSquare, Video, Calendar, Headphones,
  Folders, Shield, CheckCircle2, XCircle,
  Star, Users, Download, Code2, Hash, ArrowRight
} from 'lucide-react';
import { TestimonialsColumn } from '../components/ui/testimonials-columns-1';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const features = [
  {
    icon: MessageSquare,
    color: "bg-purple-500",
    title: "Real-time Messaging",
    desc: "Threaded conversations with rich media support. Instant delivery powered by WebSockets."
  },
  {
    icon: Video,
    color: "bg-green-500",
    title: "HD Video Calls",
    desc: "Crystal clear 1080p video conferencing with screen sharing and virtual backgrounds."
  },
  {
    icon: Calendar,
    color: "bg-cyan-500",
    title: "Smart Scheduling",
    desc: "AI-powered calendar integration with timezone intelligence and availability sharing."
  },
  {
    icon: Headphones,
    color: "bg-pink-500",
    title: "Voice Rooms",
    desc: "Drop-in audio channels for quick syncs and informal team hangouts."
  },
  {
    icon: Folders,
    color: "bg-orange-500",
    title: "Workspaces",
    desc: "Organize teams, projects, and external partners into dedicated isolated spaces."
  },
  {
    icon: Shield,
    color: "bg-yellow-500",
    title: "E2E Encryption",
    desc: "Enterprise-grade security ensuring your communications remain private and secure."
  }
];

const testimonialsData = [
  {
    text: "BitStream revolutionized our team communication, streamlining both development and operations. The platform keeps us synchronized, even remotely.",
    image: "https://i.pravatar.cc/150?u=1",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing BitStream was smooth and quick. The neobrutalist interface is not just beautiful but incredibly intuitive for our developers.",
    image: "https://i.pravatar.cc/150?u=2",
    name: "Bilal Ahmed",
    role: "Engineering Lead",
  },
  {
    text: "The security features are exceptional, giving us peace of mind with end-to-end encryption across all our team discussions.",
    image: "https://i.pravatar.cc/150?u=3",
    name: "Saman Malik",
    role: "Security Analyst",
  },
  {
    text: "The seamless integration of chat, video, and calendar has enhanced our business efficiency ten-fold. Highly recommend for modern teams.",
    image: "https://i.pravatar.cc/150?u=4",
    name: "Omar Raza",
    role: "CEO @ DevScale",
  },
  {
    text: "Its robust features and ultra-fast performance have transformed our daily standups, making us significantly more productive.",
    image: "https://i.pravatar.cc/150?u=5",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The open-source nature exceeded our expectations. We were able to self-host and customize it perfectly for our infrastructure.",
    image: "https://i.pravatar.cc/150?u=6",
    name: "Aliza Khan",
    role: "DevOps Engineer",
  },
  {
    text: "Our internal collaboration improved drastically with the user-friendly design and high-performance message delivery.",
    image: "https://i.pravatar.cc/150?u=7",
    name: "Farhan Siddiqui",
    role: "Backend Developer",
  },
  {
    text: "They delivered a communication solution that perfectly understands developer needs. It's the Slack alternative we were waiting for.",
    image: "https://i.pravatar.cc/150?u=8",
    name: "Sana Sheikh",
    role: "Product Designer",
  },
  {
    text: "Using BitStream, our response times and project tracking significantly improved, boosting our overall team performance.",
    image: "https://i.pravatar.cc/150?u=9",
    name: "Hassan Ali",
    role: "Lead Architect",
  },
];

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const [email, setEmail] = React.useState('');
  const [isJoined, setIsJoined] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('Dashboard');

  const tabBackgrounds: Record<string, string> = {
    'Dashboard': 'bg-white',
    'Projects': 'bg-purple-50',
    'Chat': 'bg-green-50',
    'Files': 'bg-orange-50'
  };

  const bigCardBackgrounds: Record<string, string> = {
    'Dashboard': 'from-purple-500 to-purple-600',
    'Projects': 'from-blue-500 to-blue-600',
    'Chat': 'from-green-500 to-green-600',
    'Files': 'from-orange-500 to-orange-600'
  };

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsJoined(true);
      setEmail('');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-bg-primary text-black font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden relative">

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-purple-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* 1. NAVBAR - Extracted */}
      <Navbar />

      {/* 2. HERO SECTION - Spacious & Balanced */}
      <section className="relative pt-28 pb-24 px-6 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Floating Background Shapes - High Density */}
        <motion.div
          animate={{ rotate: 360, y: [0, 30, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-20 left-[5%] w-32 h-32 bg-yellow-400 border-[3.5px] border-black rounded-full shadow-[10px_10px_0_0_#0F172A] opacity-30 hidden xl:block z-0"
        />
        <motion.div
          animate={{ rotate: -360, x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute bottom-1/4 right-[2%] w-40 h-40 bg-purple-500 border-[3.5px] border-black rounded-[3rem] shadow-[12px_12px_0_0_#0F172A] opacity-30 hidden xl:block z-0"
        />
        <motion.div
          animate={{ rotate: 180, scale: [1, 1.2, 1], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-[45%] left-[2%] w-24 h-24 bg-green-400 border-[3.5px] border-black rounded-xl shadow-[8px_8px_0_0_#0F172A] opacity-30 hidden lg:block z-0"
        />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0], rotate: 45 }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute top-[10%] right-[10%] w-20 h-20 bg-cyan-400 border-[3.5px] border-black shadow-[6px_6px_0_0_#0F172A] opacity-30 hidden lg:block z-0"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: -45 }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute bottom-10 left-[15%] w-16 h-16 bg-pink-500 border-[3.5px] border-black rotate-12 shadow-[4px_4px_0_0_#0F172A] opacity-30 hidden lg:block z-0"
        />

        <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-16 items-center relative z-10">

          {/* 2A. Left Content */}
          {/* 2A. Left Content */}
          <div className="lg:col-span-5 space-y-7">
            {/* Badge - Subtle & Clean */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white border-[2px] border-black px-3 py-1.5 rounded-full"
              style={{ boxShadow: '2px 2px 0 0 #0F172A' }}
            >
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="font-bold text-[10px] tracking-wider text-gray-800 uppercase">Public Beta</span>
            </motion.div>

            {/* Headline - Smoother and Benefit-Driven */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="font-black text-[4rem] lg:text-[4.5rem] leading-[1.05] tracking-tight text-gray-900">
                <span className="block mb-1">Unify your </span>
                <span className="block text-purple-600 relative inline-block">
                  Communication.
                  {/* Subtle underline depth */}
                  <div className="absolute bottom-2 left-0 w-full h-4 bg-yellow-300/60 -z-10 transform -rotate-1 rounded-sm" />
                </span>
              </h1>
            </motion.div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 font-medium leading-relaxed max-w-md"
            >
              Chat, video, and files — in one fast, private workspace. Built for engineering teams who value deep work over distractions.
            </motion.p>

            {/* Icon Pills - Standardized */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex gap-5 pt-1 pb-2"
            >
              {[
                { icon: MessageSquare, label: 'Chat', color: 'text-purple-600', bg: 'bg-purple-100' },
                { icon: Video, label: 'Video', color: 'text-green-600', bg: 'bg-green-100' },
                { icon: Folders, label: 'Files', color: 'text-orange-600', bg: 'bg-orange-100' },
                { icon: Calendar, label: 'Calendar', color: 'text-pink-600', bg: 'bg-pink-100' },
                { icon: Star, label: 'Star', color: 'text-yellow-600', bg: 'bg-yellow-100' },
                { icon: Users, label: 'Users', color: 'text-blue-600', bg: 'bg-blue-100' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 ${item.bg} border-[2px] border-black rounded-xl flex items-center justify-center cursor-pointer`}
                    style={{ boxShadow: '2px 2px 0 0 #0F172A' }}
                  >
                    <item.icon size={22} strokeWidth={2.5} className={item.color} />
                  </motion.div>
                  <span className="font-bold text-[10px] text-gray-500 uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Link
                to="/signup"
                className="bg-green-500 border-[2.5px] border-black px-8 py-3.5 rounded-xl font-black text-base text-white hover:bg-green-600 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2 group"
                style={{ boxShadow: '0 4px 0 0 #0F172A' }}
              >
                Get started <ArrowRight size={20} strokeWidth={4} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white border-[2.5px] border-black px-8 py-3.5 rounded-xl font-bold text-base text-black hover:bg-gray-50 hover:-translate-y-1 transition-all active:scale-95"
                style={{ boxShadow: '0 4px 0 0 #0F172A' }}
              >
                Explore
              </button>
            </motion.div>
          </div>

          {/* 2B. Right Dashboard */}
          <div className="lg:col-span-7 relative h-[650px] hidden lg:block">
            {/* Main Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className={`absolute top-12 left-0 right-16 bottom-24 border-[3px] border-black rounded-2xl p-5 overflow-hidden transition-colors duration-500 ${tabBackgrounds[activeTab] || 'bg-white'}`}
              style={{ boxShadow: '12px 12px 0 0 #0F172A' }}
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b-[2px] border-gray-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-purple-500 border-[2px] border-black rounded-md" />
                  <span className="font-bold text-sm">BitStream Dashboard</span>
                </div>

                <div className="flex gap-1.5">
                  {['Dashboard', 'Projects', 'Chat', 'Calendar'].map((tab) => (
                    <div
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3.5 py-1.5 border-[2px] border-black rounded-lg font-bold text-xs transition-all cursor-pointer ${activeTab === tab
                        ? 'bg-purple-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                      style={activeTab === tab ? { boxShadow: '0 2px 0 0 #0F172A' } : {}}
                    >
                      {tab}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[calc(100%-65px)]">
                {activeTab === 'Dashboard' && (
                  <motion.div
                    key="Dashboard"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                    className="grid grid-cols-6 grid-rows-4 gap-3 h-full"
                  >
                    {/* Video Call Card */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className={`col-span-4 row-span-3 bg-gradient-to-br ${bigCardBackgrounds[activeTab] || 'from-purple-500 to-purple-600'} border-[2.5px] border-black rounded-xl p-5 relative overflow-hidden cursor-pointer transition-colors duration-500`}
                      style={{ boxShadow: '4px 4px 0 0 #0F172A' }}
                    >
                      <div className="absolute top-3 left-3 bg-white/90 border-[2px] border-black px-2.5 py-1 rounded-md backdrop-blur-sm">
                        <span className="font-black text-[9px] tracking-wider uppercase">Live Now</span>
                      </div>

                      <div className="absolute bottom-5 left-5 text-white max-w-[60%]">
                        <div className="font-black text-3xl mb-1.5 leading-tight">Project Nova</div>
                        <div className="font-semibold text-sm opacity-90">Team standup · 4 active</div>
                      </div>

                      <div className="absolute bottom-5 right-5 grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="w-16 h-16 bg-white/15 backdrop-blur-sm border-[2px] border-white/30 rounded-lg" />
                        ))}
                      </div>

                      <div className="absolute top-16 left-5 bg-yellow-400 border-[2px] border-black px-2.5 py-1 rounded-md">
                        <span className="font-black text-[9px]">DESIGN REVIEW</span>
                      </div>
                    </motion.div>

                    <div
                      className="col-span-2 bg-gradient-to-br from-green-400 to-green-500 border-[2.5px] border-black rounded-xl p-3 flex flex-col justify-center"
                      style={{ boxShadow: '3px 3px 0 0 #0F172A' }}
                    >
                      <div className="text-white/70 font-bold text-[8px] tracking-wider uppercase">Messages</div>
                      <div className="text-white font-black text-3xl leading-none my-1">24</div>
                      <div className="text-white/90 font-semibold text-[10px]">Unread</div>
                    </div>

                    <div
                      className="col-span-2 bg-gradient-to-br from-cyan-400 to-cyan-500 border-[2.5px] border-black rounded-xl p-3 flex flex-col justify-center"
                      style={{ boxShadow: '3px 3px 0 0 #0F172A' }}
                    >
                      <div className="text-white/70 font-bold text-[8px] tracking-wider uppercase">Today</div>
                      <div className="text-white font-black text-3xl leading-none my-1">3</div>
                      <div className="text-white/90 font-semibold text-[10px]">Meetings</div>
                    </div>

                    <div
                      className="col-span-2 bg-gradient-to-br from-orange-400 to-orange-500 border-[2.5px] border-black rounded-xl p-3 flex flex-col justify-center"
                      style={{ boxShadow: '3px 3px 0 0 #0F172A' }}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-white/70 font-bold text-[8px] tracking-wider uppercase">Shared Files</div>
                          <div className="text-white font-black text-2xl leading-none mt-1">156</div>
                        </div>
                        <div className="bg-white/90 border-[2px] border-black px-1.5 py-0.5 rounded-md">
                          <span className="font-black text-[7px]">VIEW</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-span-2 bg-gradient-to-br from-pink-400 to-pink-500 border-[2.5px] border-black rounded-xl p-3 flex flex-col justify-center"
                      style={{ boxShadow: '3px 3px 0 0 #0F172A' }}
                    >
                      <div className="text-white/70 font-bold text-[8px] tracking-wider uppercase">Team</div>
                      <div className="text-white font-black text-3xl leading-none my-1">12</div>
                      <div className="text-white/90 font-semibold text-[10px]">Online</div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'Projects' && (
                  <motion.div
                    key="Projects"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                    className="grid grid-cols-6 grid-rows-4 gap-3 h-full"
                  >
                    <div className="col-span-6 row-span-2 bg-gradient-to-br from-blue-500 to-blue-600 border-[2.5px] border-black rounded-xl p-5 relative overflow-hidden flex flex-col justify-between cursor-pointer" style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
                      <div className="flex justify-between items-start relative z-10">
                        <div className="text-white/70 font-bold text-[10px] tracking-wider uppercase">Active Sprints</div>
                        <div className="bg-white text-black border-[2px] border-black px-2.5 py-1 rounded-md text-[9px] font-black uppercase shadow-[2px_2px_0_0_#0F172A]">View All</div>
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-white font-black text-4xl mb-3">Q3 Roadmap Update</h3>
                        <div className="w-full bg-black/20 h-3 rounded-full border-[2px] border-black overflow-hidden relative">
                          <div className="absolute top-0 left-0 bg-yellow-400 h-full w-[70%] border-r-[2px] border-black" />
                        </div>
                        <div className="text-white font-bold text-xs mt-2">70% Complete</div>
                      </div>
                    </div>

                    <div className="col-span-3 row-span-2 bg-yellow-400 border-[2.5px] border-black rounded-xl p-5 flex flex-col justify-center" style={{ boxShadow: '3px 3px 0 0 #0F172A' }}>
                      <div className="text-black/70 font-bold text-[10px] tracking-wider uppercase">Tasks Due</div>
                      <div className="text-black font-black text-6xl my-1">14</div>
                      <div className="text-black/80 font-bold text-xs">This week</div>
                    </div>

                    <div className="col-span-3 row-span-2 bg-pink-500 border-[2.5px] border-black rounded-xl p-5 flex flex-col justify-center relative overflow-hidden" style={{ boxShadow: '3px 3px 0 0 #0F172A' }}>
                      <div className="text-white/90 font-bold text-[10px] tracking-wider uppercase relative z-10">Velocity</div>
                      <div className="text-white font-black text-6xl my-1 relative z-10">+24%</div>
                      <div className="text-white/90 font-bold text-xs relative z-10">vs Last Sprint</div>
                      <div className="absolute -right-4 -bottom-4 opacity-20 transform">
                        <Hash size={120} strokeWidth={3} className="text-black" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'Chat' && (
                  <motion.div
                    key="Chat"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                    className="grid grid-cols-6 grid-rows-4 gap-3 h-full"
                  >
                    <div className="col-span-4 row-span-4 bg-gradient-to-br from-green-400 to-green-500 border-[2.5px] border-black rounded-xl p-5 relative overflow-hidden flex flex-col" style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
                      <div className="flex items-center gap-3 mb-5 border-b-[2.5px] border-black/10 pb-4">
                        <div className="w-10 h-10 bg-white border-[2.5px] border-black rounded-lg flex items-center justify-center font-black text-xl shadow-[2px_2px_0_0_#0F172A]">#</div>
                        <div>
                          <div className="text-white font-black text-xl leading-tight">engineering</div>
                          <div className="text-white/90 font-bold text-[10px]">124 members online</div>
                        </div>
                      </div>
                      <div className="space-y-4 flex-1">
                        {[1, 2, 3].map(i => (
                          <div key={i} className={`flex gap-3 ${i === 2 ? 'flex-row-reverse' : ''}`}>
                            <div className="w-8 h-8 bg-white/20 border-[2.5px] border-black rounded-md flex-shrink-0" />
                            <div className={`w-2/3 bg-white border-[2.5px] border-black p-3 shadow-[2px_2px_0_0_#0F172A] ${i === 2 ? 'rounded-xl rounded-tr-none bg-yellow-100' : 'rounded-xl rounded-tl-none'}`}>
                              <div className="w-3/4 h-2 bg-black/10 rounded-full mb-2" />
                              <div className="w-1/2 h-2 bg-black/10 rounded-full" />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 bg-white border-[2.5px] border-black rounded-lg p-3 flex items-center gap-2 shadow-[2px_2px_0_0_#0F172A]">
                        <div className="text-gray-400 font-bold text-xs">Type a message…</div>
                      </div>
                    </div>

                    <div className="col-span-2 row-span-2 bg-white border-[2.5px] border-black rounded-xl p-4 flex flex-col justify-center text-center" style={{ boxShadow: '3px 3px 0 0 #0F172A' }}>
                      <div className="font-black text-6xl text-pink-500 mb-1">8</div>
                      <div className="font-bold text-[10px] tracking-wider uppercase text-gray-500">Mentions</div>
                    </div>

                    <div className="col-span-2 row-span-2 bg-cyan-400 border-[2.5px] border-black rounded-xl p-4 flex flex-col justify-center" style={{ boxShadow: '3px 3px 0 0 #0F172A' }}>
                      <div className="text-black/70 font-bold text-[9px] tracking-wider uppercase mb-3">Active Voice</div>
                      <div className="flex -space-x-3 justify-center">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className={`w-10 h-10 bg-white border-[2px] border-black rounded-full shadow-[2px_2px_0_0_#0F172A] relative z-[${10 - i}]`} />
                        ))}
                      </div>
                      <button className="mt-4 bg-white border-[2px] border-black rounded-lg py-1.5 font-black text-[10px] uppercase shadow-[2px_2px_0_0_#0F172A] hover:-translate-y-0.5 transition-transform">Join Room</button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'Calendar' && (
                  <motion.div
                    key="Calendar"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                    className="grid grid-cols-6 grid-rows-4 gap-3 h-full"
                  >
                    <div className="col-span-4 row-span-4 bg-white border-[2.5px] border-black rounded-xl p-5 flex flex-col relative overflow-hidden" style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
                      <div className="flex justify-between items-center mb-6">
                        <div className="font-black text-2xl">This Week</div>
                        <div className="flex gap-2">
                          <div className="w-8 h-8 bg-gray-100 border-[2px] border-black rounded-lg flex items-center justify-center font-bold cursor-pointer hover:bg-gray-200">&lt;</div>
                          <div className="w-8 h-8 bg-gray-100 border-[2px] border-black rounded-lg flex items-center justify-center font-bold cursor-pointer hover:bg-gray-200">&gt;</div>
                        </div>
                      </div>

                      <div className="flex-1 flex gap-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                          <div key={day} className="flex-1 flex flex-col gap-2">
                            <div className="text-center font-bold text-[10px] uppercase text-gray-500 mb-2">{day}</div>
                            {i === 0 && (
                              <div className="bg-purple-100 border-[2px] border-black rounded-lg p-2 shadow-[2px_2px_0_0_#0F172A] mt-4">
                                <div className="font-bold text-[9px] text-black">9:00 AM</div>
                                <div className="font-black text-xs text-black leading-tight mt-1">Kickoff</div>
                              </div>
                            )}
                            {i === 1 && (
                              <div className="bg-purple-500 border-[2px] border-black rounded-lg p-2 shadow-[2px_2px_0_0_#0F172A]">
                                <div className="font-bold text-[9px] text-white">10:00 AM</div>
                                <div className="font-black text-xs text-white leading-tight mt-1">Design Sync</div>
                              </div>
                            )}
                            {i === 2 && (
                              <div className="bg-cyan-400 border-[2px] border-black rounded-lg p-2 shadow-[2px_2px_0_0_#0F172A] mt-8">
                                <div className="font-bold text-[9px] text-black">1:30 PM</div>
                                <div className="font-black text-xs text-black leading-tight mt-1">All Hands</div>
                              </div>
                            )}
                            {i === 3 && (
                              <div className="bg-yellow-400 border-[2px] border-black rounded-lg p-2 shadow-[2px_2px_0_0_#0F172A] mt-12">
                                <div className="font-bold text-[9px] text-black">3:00 PM</div>
                                <div className="font-black text-xs text-black leading-tight mt-1">Client Call</div>
                              </div>
                            )}
                            {i === 4 && (
                              <div className="bg-green-400 border-[2px] border-black rounded-lg p-2 shadow-[2px_2px_0_0_#0F172A] mt-2">
                                <div className="font-bold text-[9px] text-black">10:30 AM</div>
                                <div className="font-black text-xs text-black leading-tight mt-1">Review</div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-2 row-span-2 bg-gradient-to-br from-pink-400 to-pink-500 border-[2.5px] border-black rounded-xl p-4 flex flex-col justify-center text-center" style={{ boxShadow: '3px 3px 0 0 #0F172A' }}>
                      <div className="text-white/90 font-bold text-[10px] tracking-wider uppercase mb-1">Upcoming</div>
                      <div className="text-white font-black text-6xl">15</div>
                      <div className="text-white/90 font-bold text-[10px] mt-1 uppercase">Mins to next meeting</div>
                    </div>

                    <div className="col-span-2 row-span-2 bg-purple-600 border-[2.5px] border-black rounded-xl p-4 flex flex-col justify-center items-center text-center relative overflow-hidden" style={{ boxShadow: '3px 3px 0 0 #0F172A' }}>
                      <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-green-400 animate-pulse border border-black" />
                      <div className="text-white/80 font-bold text-[10px] uppercase tracking-wider mb-2">Focus Time</div>
                      <div className="text-white font-black text-4xl">2.5<span className="text-2xl">h</span></div>
                      <div className="text-white/80 font-bold text-[10px] mt-1">Scheduled today</div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>


            {/* Bottom Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -5 }}
              className="absolute bottom-20 right-0 w-52 bg-white border-[3px] border-black rounded-xl p-4 z-20 cursor-pointer"
              style={{ boxShadow: '6px 6px 0 0 #0F172A' }}
            >
              <div className="bg-pink-500 border-[2px] border-black px-2.5 py-1 rounded-md inline-block mb-3">
                <span className="font-black text-[9px] text-white tracking-wider uppercase">Community</span>
              </div>
              <div className="font-black text-4xl mb-1">&gt;240</div>
              <p className="text-xs font-semibold text-gray-600 mb-3">Contributors worldwide</p>
              <button
                className="w-full bg-green-500 border-[2.5px] border-black py-2 rounded-lg font-bold text-xs text-white hover:bg-green-600 transition-colors active:scale-95"
                style={{ boxShadow: '0 3px 0 0 #0F172A' }}
              >
                Join Discord
              </button>
            </motion.div>

            {/* Bottom Center Stats */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-yellow-400 border-[3px] border-black px-8 py-4 rounded-xl z-30"
              style={{ boxShadow: '8px 8px 0 0 #0F172A' }}
            >
              <div className="text-center">
                <div className="font-black text-4xl mb-0.5">&gt;5K</div>
                <div className="font-bold text-xs text-gray-800">teams worldwide</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF - Simpler Layout */}
      <section className="py-12 border-y-[3px] border-black bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { icon: Star, count: "10K+", text: "GitHub Stars", color: "bg-yellow-400" },
            { icon: Users, count: "500+", text: "Contributors", color: "bg-cyan-500" },
            { icon: Download, count: "50K+", text: "Deployments", color: "bg-pink-500" }
          ].map((stat, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              key={i}
              className="bg-white border-[3px] border-black rounded-xl p-5 flex items-center gap-4 cursor-default"
              style={{ boxShadow: '4px 4px 0 0 #0F172A' }}
            >
              <div className={`w-12 h-12 ${stat.color} border-[2.5px] border-black rounded-lg flex items-center justify-center flex-shrink-0`}>
                <stat.icon size={20} strokeWidth={2.5} className="text-white" />
              </div>
              <div>
                <div className="font-black text-2xl">{stat.count}</div>
                <div className="font-semibold text-sm text-gray-600">{stat.text}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. FEATURES - Premium Grid */}
      <section id="features" className="py-32 px-6 bg-white scroll-mt-20 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        
        {/* Floating Shapes for Features - High Density */}
        <motion.div
          animate={{ rotate: 360, y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-40 left-[2%] w-32 h-32 bg-purple-400 border-[3.5px] border-black rounded-[2.5rem] shadow-[8px_8px_0_0_#0F172A] opacity-25 hidden xl:block"
        />
        <motion.div
          animate={{ rotate: -360, x: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute bottom-40 right-[2%] w-40 h-40 bg-green-400 border-[3.5px] border-black rounded-full shadow-[10px_10px_0_0_#0F172A] opacity-25 hidden xl:block"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: 45 }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-1/2 right-[5%] w-24 h-24 bg-cyan-400 border-[3.5px] border-black rotate-45 shadow-[6px_6px_0_0_#0F172A] opacity-25 hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] w-16 h-16 bg-orange-400 border-[3.5px] border-black rounded-lg rotate-12 shadow-[5px_5px_0_0_#0F172A] opacity-25 hidden lg:block"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: -45 }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="absolute bottom-20 left-[5%] w-20 h-20 bg-pink-400 border-[3.5px] border-black rounded-full shadow-[6px_6px_0_0_#0F172A] opacity-25 hidden lg:block"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-100 border-[2.5px] border-purple-600 px-4 py-1.5 rounded-full mb-6" style={{ boxShadow: '2px 2px 0 0 #7C3AED' }}>
              <Star size={12} strokeWidth={3} className="text-purple-600" />
              <span className="font-black text-purple-700 text-[11px] tracking-widest uppercase">Platform Features</span>
            </div>

            <h2 className="font-black text-5xl lg:text-7xl tracking-tighter mb-6 leading-[1.1]">
              Powerful tools.<br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-purple-600">Beautifully unified.</span>
                <div className="absolute bottom-2 left-0 w-full h-6 bg-yellow-300/60 -z-10 transform -rotate-1 rounded-sm" />
              </span>
            </h2>
            <p className="text-xl font-medium text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything your engineering team needs in one lightning-fast, highly secure workspace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, i) => {
              const bgColors = ['bg-purple-50', 'bg-green-50', 'bg-cyan-50', 'bg-pink-50', 'bg-orange-50', 'bg-yellow-50'];
              const cardBg = bgColors[i % bgColors.length];

              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.4, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
                  whileTap={{ scale: 0.98 }}
                  key={i}
                  className={`${cardBg} border-[3px] border-black rounded-2xl p-8 group cursor-pointer relative transition-all flex flex-col h-full`}
                  style={{ boxShadow: '8px 8px 0 0 #0F172A' }}
                >
                  <div className="flex justify-between items-start mb-10">
                    <div className={`w-16 h-16 ${feature.color} border-[3px] border-black rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}
                      style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
                      <feature.icon size={28} strokeWidth={2.5} className="text-white" />
                    </div>
                    <div className="w-10 h-10 bg-white border-[2.5px] border-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0"
                      style={{ boxShadow: '1px 1px 0 0 #0F172A' }}>
                      <ArrowRight size={20} strokeWidth={4} className="transform -rotate-45 text-black" aria-label="Learn more" />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-black text-2xl mb-3 text-black group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                    <p className="text-gray-700 font-medium leading-relaxed text-base">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. COMPARISON - The Better Way */}
      <section id="why-bitstream" className="py-32 px-6 bg-white scroll-mt-20 relative overflow-hidden">
        {/* Decorative Shapes - High Intensity */}
        <motion.div
          animate={{ rotate: -180, scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-1/4 left-[-2%] w-64 h-64 bg-yellow-400 border-[4px] border-black rounded-full opacity-20 hidden xl:block shadow-[15px_15px_0_0_rgba(0,0,0,0.1)]"
        />
        <motion.div
          animate={{ y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute bottom-10 right-[5%] w-48 h-48 bg-purple-400 border-[4px] border-black rounded-3xl rotate-12 opacity-20 hidden xl:block shadow-[12px_12px_0_0_rgba(0,0,0,0.1)]"
        />
        <motion.div
          animate={{ rotate: 90, scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-10 right-[15%] w-24 h-24 bg-green-400 border-[3.5px] border-black rounded-xl opacity-20 hidden lg:block"
        />
        <motion.div
          animate={{ x: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="absolute bottom-1/4 left-[8%] w-32 h-32 bg-cyan-400 border-[3.5px] border-black rounded-full opacity-20 hidden lg:block"
        />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 bg-green-100 border-[2.5px] border-green-600 px-4 py-1.5 rounded-full mb-6 shadow-[2px_2px_0_0_#16A34A]">
              <Shield size={12} strokeWidth={3} className="text-green-600" />
              <span className="font-black text-green-700 text-[11px] tracking-widest uppercase">The Better Way</span>
            </div>
            <h2 className="font-black text-5xl lg:text-7xl tracking-tighter mb-6 leading-tight">
              Why settle for <span className="text-gray-400 line-through">less?</span><br />
              Choose BitStream.
            </h2>
            <p className="text-xl font-bold text-gray-500 max-w-2xl mx-auto">
              Everything you need to ship faster, without the bloated costs and privacy trade-offs.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Main BitStream Card */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.01 }}
              className="lg:col-span-7 bg-[#22C55E] border-[4px] border-black rounded-[2rem] p-10 lg:p-14 relative overflow-hidden flex flex-col justify-between"
              style={{ boxShadow: '16px 16px 0 0 #0F172A' }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                  <h3 className="font-black text-4xl lg:text-5xl text-white">BitStream</h3>
                  <div className="bg-yellow-300 border-[3px] border-black px-4 py-2 rounded-xl shadow-[4px_4px_0_0_#0F172A] transform rotate-6">
                    <span className="font-black text-xs uppercase tracking-tight text-black">Recommended</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
                  {[
                    { label: "Ownership", val: "100% Open Source" },
                    { label: "Deployment", val: "Self-host Anywhere" },
                    { label: "Performance", val: "Rust-powered Core" },
                    { label: "Security", val: "Military-grade E2EE" },
                    { label: "Capacity", val: "Unlimited Users" },
                    { label: "Cost", val: "$0.00 Forever" },
                    { label: "Customization", val: "Full API Access" },
                    { label: "Integrations", val: "50+ Built-in Tools" },
                    { label: "Code Snippets", val: "Native Syntax Highlighting" },
                    { label: "Terminal", val: "Powerful CLI Tool" },
                    { label: "Threads", val: "Context-first Chat" },
                    { label: "Permissions", val: "Granular RBAC Control" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-white border-[2px] border-black rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 size={16} strokeWidth={3} className="text-green-600" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-white/70 uppercase tracking-widest">{item.label}</div>
                        <div className="font-black text-lg text-white">{item.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 bg-black/10 border-[3px] border-white/20 p-6 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="font-black text-4xl text-white">$0</div>
                  <div className="font-bold text-white/70 text-xs">per user / forever</div>
                </div>
                <button className="bg-white border-[3px] border-black px-8 py-3 rounded-xl font-black text-sm text-black hover:bg-yellow-300 transition-colors shadow-[4px_4px_0_0_#0F172A] active:translate-x-1 active:translate-y-1 active:shadow-none">
                  Get Started Free
                </button>
              </div>
            </motion.div>

            {/* Alternatives Group */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {[
                { 
                  title: "Legacy SaaS", 
                  price: "$20+", 
                  color: "bg-purple-100",
                  icon: XCircle,
                  cons: ["Proprietary Lock-in", "Per-user pricing", "Cloud Only", "Siloed Features", "Complex App Management", "3rd Party Data Sharing"] 
                },
                { 
                  title: "Casual Tools", 
                  price: "Free*", 
                  color: "bg-pink-100",
                  icon: XCircle,
                  cons: ["Gaming-first UI", "No E2E Security", "Limited Admin Control", "Ads / Promotions", "No 'Work Mode' focus", "No SLA Guarantee"] 
                }
              ].map((alt, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 8 }}
                  className={`${alt.color} border-[3px] border-black rounded-3xl p-8 flex-1 flex flex-col justify-between`}
                  style={{ boxShadow: '8px 8px 0 0 #0F172A' }}
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="font-black text-2xl text-black">{alt.title}</h4>
                      <div className="font-black text-xl text-black/50">{alt.price}</div>
                    </div>
                    <div className="space-y-3">
                      {alt.cons.map((con, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <alt.icon size={18} strokeWidth={3} className="text-pink-500" />
                          <span className="font-bold text-gray-600 text-sm">{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t-[2px] border-black/5">
                    <span className="text-[10px] font-black text-black/40 uppercase tracking-widest">The Risk</span>
                    <p className="font-bold text-sm text-black/70">Hidden costs & data privacy concerns.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS - Scrolling Grid */}
      <section id="testimonials" className="py-32 px-6 bg-gray-50 border-y-[3px] border-black overflow-hidden relative">
        {/* Neobrutalist background elements - High Density */}
        <motion.div 
          animate={{ rotate: 360, y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-20 left-[5%] w-32 h-32 bg-yellow-400 border-[3.5px] border-black rounded-full shadow-[8px_8px_0_0_#0F172A] opacity-40 hidden lg:block" 
        />
        <motion.div 
          animate={{ rotate: -360, x: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute bottom-40 right-[4%] w-40 h-40 bg-cyan-400 border-[3.5px] border-black rounded-2xl shadow-[10px_10px_0_0_#0F172A] opacity-40 hidden lg:block" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: 45 }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-1/2 left-[3%] w-20 h-20 bg-pink-500 border-[3.5px] border-black rotate-45 shadow-[6px_6px_0_0_#0F172A] opacity-40 hidden lg:block" 
        />
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: -15 }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute top-40 right-[8%] w-24 h-24 bg-green-500 border-[3.5px] border-black rounded-full shadow-[8px_8px_0_0_#0F172A] opacity-40 hidden lg:block" 
        />
        <motion.div 
          animate={{ x: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute bottom-10 left-[20%] w-16 h-16 bg-purple-500 border-[3.5px] border-black rounded-lg shadow-[5px_5px_0_0_#0F172A] opacity-40 hidden lg:block" 
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="relative inline-block">
              {/* Community Love Pill */}
              <div className="inline-flex items-center gap-2 bg-pink-100 border-[2.5px] border-pink-600 px-4 py-1.5 rounded-full mb-6 shadow-[4px_4px_0_0_#DB2777] transform -rotate-2">
                <Star size={12} strokeWidth={3} className="text-pink-600" />
                <span className="font-black text-pink-700 text-[11px] tracking-widest uppercase">Community Love</span>
              </div>
              
              <h2 className="font-black text-5xl lg:text-7xl tracking-tighter mb-6 leading-[1.1]">
                Trusted by <span className="text-pink-600">thousands</span><br />
                of users.
              </h2>
              {/* Neobrutalist Badge */}
              <motion.div
                animate={{ rotate: [12, 15, 12] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute -top-6 -right-16 bg-yellow-300 border-[3px] border-black px-4 py-2 rounded-xl shadow-[4px_4px_0_0_#0F172A] transform rotate-12 hidden md:flex items-center gap-2 z-20"
              >
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                <span className="font-black text-xs uppercase tracking-tight">100% Verified Reviews</span>
              </motion.div>
            </div>

            <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4">
              Join the growing community of engineering teams who have unified their workflow with BitStream.
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={testimonialsData.slice(0, 3)} duration={20} />
            <TestimonialsColumn testimonials={testimonialsData.slice(3, 6)} className="hidden md:block" duration={25} />
            <TestimonialsColumn testimonials={testimonialsData.slice(6, 9)} className="hidden lg:block" duration={22} />
          </div>
        </div>
      </section>

      {/* 7. CTA - The Launchpad */}
      <section id="waitlist" className="py-32 px-6 bg-white scroll-mt-20 relative overflow-hidden">
        {/* Background Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-yellow-400 border-[4px] border-black rounded-[3rem] p-12 lg:p-20 relative overflow-hidden"
               style={{ boxShadow: '20px 20px 0 0 #0F172A' }}>
            
            {/* Decorative Stickers/Shapes - High Density */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [-12, -15, -12], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-48 h-48 bg-purple-600 border-[4px] border-black rounded-full flex items-center justify-center shadow-[12px_12px_0_0_#0F172A] opacity-50 hidden lg:flex"
            >
              <Code2 size={80} className="text-white" strokeWidth={2.5} />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0], rotate: [12, 15, 12], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-16 -left-16 w-56 h-56 bg-green-600 border-[4px] border-black rounded-[2.5rem] flex items-center justify-center shadow-[15px_15px_0_0_#0F172A] opacity-50 hidden lg:flex"
            >
              <Users size={100} className="text-white" strokeWidth={2.5} />
            </motion.div>
            
            <motion.div
              animate={{ rotate: 360, x: [0, 30, 0] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute top-1/2 right-[5%] w-24 h-24 bg-pink-500 border-[4px] border-black rotate-12 opacity-30 hidden xl:block"
            />
            
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: -45 }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              className="absolute top-[10%] left-[10%] w-12 h-12 bg-cyan-400 border-[3.5px] border-black rounded-md shadow-[4px_4px_0_0_#0F172A] opacity-30 hidden lg:block"
            />
            
            <motion.div
              animate={{ y: [0, -40, 0] }}
              transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
              className="absolute bottom-[20%] right-[15%] w-16 h-16 bg-yellow-400 border-[3.5px] border-black rounded-full shadow-[6px_6px_0_0_#0F172A] opacity-30 hidden lg:block"
            />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-2xl mb-10 transform -rotate-1 shadow-[4px_4px_0_0_rgba(0,0,0,0.2)]">
                <Download size={18} strokeWidth={3} className="text-yellow-400" />
                <span className="font-black text-xs uppercase tracking-[0.2em]">Ready for production</span>
              </div>

              <h2 className="font-black text-5xl lg:text-7xl mb-8 leading-[1.05] tracking-tighter text-black">
                Build your perfect <br/>
                <span className="bg-white px-6 py-2 border-[5px] border-black inline-block transform rotate-1 mt-4 shadow-[8px_8px_0_0_#0F172A]">Workspace.</span>
              </h2>
              
              <p className="text-xl lg:text-2xl font-bold text-black/80 mb-14 max-w-xl mx-auto leading-relaxed">
                Join the open-source revolution. Deploy BitStream in minutes and take full control of your data.
              </p>

              {isJoined ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white border-[4px] border-black p-10 rounded-[2rem] inline-block shadow-[12px_12px_0_0_#0F172A]"
                >
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-20 h-20 bg-green-500 border-[4px] border-black rounded-full flex items-center justify-center shadow-[4px_4px_0_0_#0F172A]">
                      <CheckCircle2 className="text-white" size={40} strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="font-black text-3xl mb-2 uppercase tracking-tight">You're In!</h3>
                      <p className="font-bold text-gray-600 text-lg">Check your inbox for the early access link.</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-10">
                  <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-5 max-w-xl mx-auto">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="engineer@company.com"
                      className="flex-1 px-8 py-5 border-[4px] border-black rounded-2xl text-lg font-bold bg-white focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all placeholder:text-gray-300"
                      style={{ boxShadow: '6px 6px 0_0_#0F172A' }}
                    />
                    <button
                      disabled={isLoading}
                      type="submit"
                      className="bg-black border-[4px] border-black px-10 py-5 rounded-2xl font-black text-lg text-white hover:bg-purple-600 hover:text-white transition-all whitespace-nowrap active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-3 group"
                      style={{ boxShadow: '6px 6px 0_0_#0F172A' }}
                    >
                      {isLoading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-6 h-6 border-[3px] border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          Get Early Access
                          <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} strokeWidth={4} />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="flex flex-col items-center gap-5">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4, 5].map(i => (
                          <div key={i} className={`w-10 h-10 border-[3px] border-black rounded-full overflow-hidden shadow-[2px_2px_0_0_#0F172A] ${i % 2 === 0 ? 'bg-purple-400' : 'bg-cyan-400'}`}>
                            <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="user" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" className="text-black" />)}
                        </div>
                        <p className="font-black text-sm uppercase tracking-tighter">5,000+ developers joined</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER - Extracted */}
      <Footer />
    </div>
  );
};

export default LandingPage;
