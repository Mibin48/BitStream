import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Video, Calendar, Headphones, Folders, Shield, Play, ArrowRight, Star, Mic, Lock, Server, Globe, MicOff, VideoOff, PhoneOff, Monitor, MoreHorizontal, Smile, Send, Layout, CheckCircle2, Clock, Users, ShieldAlert, ShieldCheck, Hand, Signal, MousePointer2, Activity, Zap, Cpu, Database } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const FeaturesPage = () => {
  const [activeTab, setActiveTab] = useState('Messaging');

  const tabs = [
    { name: 'Messaging', icon: MessageSquare, color: 'bg-purple-500', desc: "Fast chat for busy teams. Organize chats and share code easily.", benefits: ["Threaded Discussions", "Markdown Support", "Custom Emojis", "Real-time Presence"] },
    { name: 'Video', icon: Video, color: 'bg-green-500', desc: "Clear video calls inside your workspace. No links or codes needed.", benefits: ["4K Screen Sharing", "Auto-Recording", "AI Noise Cancellation", "Interactive Polls"] },
    { name: 'Calendar', icon: Calendar, color: 'bg-cyan-500', desc: "See when everyone is free. Schedule meetings around your work.", benefits: ["Calendar Sync", "Timezone Intelligence", "Shared Calendars", "Meeting Transcripts"] },
    { name: 'Voice', icon: Headphones, color: 'bg-pink-500', desc: "Join audio rooms to talk anytime. Clear voice that feels like the office.", benefits: ["Spatial Audio", "Global Shortcut", "Low Latency", "Integrated Chat"] },
    { name: 'Workspaces', icon: Folders, color: 'bg-orange-500', desc: "Keep projects and teams in their own safe spaces.", benefits: ["RBAC Permissions", "Custom Branding", "Multi-tenant", "Guest Access"] },
    { name: 'Security', icon: Shield, color: 'bg-yellow-500', desc: "Strong safety for all your chats. Your data is always private.", benefits: ["AES-256 Encryption", "SSO & SAML", "Compliance Logs", "Device Management"] }
  ];

  const currentTab = tabs.find(t => t.name === activeTab) || tabs[0];

  return (
    <div className="min-h-screen bg-bg-primary text-black font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden relative">
      {/* Global Blueprint Grid Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Floating Background Elements - Elevating the Design */}
        <motion.div
          animate={{ rotate: 360, y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-20 left-[10%] w-40 h-40 bg-yellow-400 border-[3.5px] border-black rounded-full shadow-[12px_12px_0_0_#0F172A] opacity-20 hidden lg:block"
        />
        <motion.div
          animate={{ rotate: -360, x: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute bottom-20 right-[5%] w-48 h-48 bg-purple-500 border-[3.5px] border-black rounded-[3rem] shadow-[15px_15px_0_0_#0F172A] opacity-20 hidden xl:block"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: 45 }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute top-1/2 left-[5%] w-24 h-24 bg-green-400 border-[3px] border-black shadow-[8px_8px_0_0_#0F172A] opacity-20 hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute top-1/4 right-[12%] w-20 h-20 bg-cyan-400 border-[3px] border-black rounded-xl rotate-12 shadow-[6px_6px_0_0_#0F172A] opacity-20 hidden md:block"
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-purple-100 border-[2.5px] border-purple-600 px-4 py-1.5 rounded-full mb-8 shadow-[3px_3px_0_0_#7C3AED]"
          >
            <Star size={14} strokeWidth={3} className="text-purple-600" />
            <span className="font-black text-purple-700 text-xs tracking-widest uppercase">The Complete Feature Set</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-black text-6xl md:text-8xl mb-8 tracking-tighter leading-[0.9] text-gray-900"
          >
            Everything You Need. <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-purple-600">Nothing You Don't.</span>
              <div className="absolute bottom-3 left-0 w-full h-8 bg-yellow-300/60 -z-10 transform -rotate-1 rounded-sm" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 font-medium mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            See why teams love BitStream for working together and getting things done.
          </motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tabs.map((tab, i) => (
              <motion.div
                key={tab.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setActiveTab(tab.name);
                  document.getElementById('interactive-demo')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white border-[3px] border-black rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer group relative overflow-hidden transition-all"
                style={{ boxShadow: '10px 10px 0 0 #0F172A' }}
              >
                {/* Background Accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${tab.color} opacity-5 -translate-y-12 translate-x-12 rounded-full group-hover:scale-150 transition-transform duration-500`} />

                <div className={`w-20 h-20 ${tab.color} border-[3px] border-black rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:-rotate-6 shadow-[4px_4px_0_0_#0F172A]`}>
                  <tab.icon size={36} className="text-white" strokeWidth={2.5} />
                </div>

                <div className="text-center relative z-10">
                  <div className="font-black text-2xl mb-1">{tab.name}</div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Explore System</p>
                </div>

                <div className="mt-4 flex items-center gap-2 px-4 py-1.5 bg-gray-50 border-[2px] border-black rounded-lg group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <span className="text-[10px] font-black uppercase tracking-widest">Discover</span>
                  <ArrowRight size={14} strokeWidth={4} className="group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Decorative Dots */}
                <div className="absolute bottom-4 right-4 flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className={`w-1.5 h-1.5 rounded-full ${tab.color}`} />
                  <div className={`w-1.5 h-1.5 rounded-full ${tab.color}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Feature Tabs */}
      <section className="py-32 px-6 bg-[#FEF9C3] relative overflow-hidden border-t-[4px] border-black">
        {/* Background Blueprint Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map(tab => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-6 py-3 font-bold text-sm border-[3px] border-black rounded-full transition-all flex items-center gap-2 ${activeTab === tab.name ? `${tab.color} text-white shadow-[4px_4px_0_0_#0F172A] -translate-y-1` : 'bg-white hover:bg-gray-50 text-black'
                  }`}
              >
                <tab.icon size={16} />
                {tab.name}
              </button>
            ))}
          </div>

          <div id="interactive-demo" className="bg-white border-[3px] border-black rounded-2xl p-8 md:p-12 shadow-[8px_8px_0_0_#0F172A] flex flex-col lg:flex-row gap-12 items-start min-h-[500px] overflow-hidden">
            <div className="lg:w-2/5 space-y-8">
              <div>
                <div className={`inline-block px-3 py-1 rounded-md border-[2px] border-black ${currentTab.color} text-white font-black text-[10px] uppercase tracking-wider mb-4`}>
                  Featured Tool
                </div>
                <h2 className="font-black text-4xl md:text-6xl mb-4">{currentTab.name}</h2>
                <p className="text-xl text-gray-600 font-medium leading-relaxed">
                  {currentTab.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentTab.benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 border-[2px] border-black rounded-xl bg-gray-50 hover:bg-white hover:shadow-[4px_4px_0_0_#0F172A] transition-all cursor-default group"
                  >
                    <div className={`w-8 h-8 rounded-lg border-[2px] border-black flex items-center justify-center ${currentTab.color} transition-transform group-hover:rotate-6`}>
                      <div className="w-2.5 h-2.5 bg-white rounded-full" />
                    </div>
                    <span className="font-bold text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4">
                <button className="bg-black text-white px-8 py-4 rounded-xl font-black border-[3px] border-black hover:-translate-y-1 transition-transform shadow-[4px_4px_0_0_#0F172A] active:translate-y-0 active:shadow-none">
                  Try {currentTab.name}
                </button>
                <button className="bg-white text-black px-6 py-4 rounded-xl font-bold border-[3px] border-black hover:bg-gray-50 transition-colors">
                  Documentation
                </button>
              </div>
            </div>

            <div className="lg:w-3/5 w-full h-full min-h-[500px]">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`w-full h-full min-h-[500px] border-[3px] border-black rounded-3xl shadow-[12px_12px_0_0_#0F172A] overflow-hidden relative bg-white flex items-center justify-center p-8`}
              >
                {/* Dynamic Visual Content */}
                <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />

                {activeTab === 'Messaging' && (
                  <div className="w-full max-w-md flex flex-col h-[400px]">
                    <motion.div
                      className="flex-1 space-y-6 overflow-hidden p-2"
                      initial={{ y: 50 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      {[1, 2, 3].map(i => (
                        <motion.div
                          key={i}
                          initial={{ x: i % 2 === 0 ? 30 : -30, opacity: 0, scale: 0.9 }}
                          animate={{ x: 0, opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.4, type: "spring", stiffness: 100 }}
                          className={`p-4 border-[2.5px] border-black rounded-2xl shadow-[4px_4px_0_0_#000] max-w-[85%] relative ${i % 2 === 0 ? 'ml-auto bg-purple-100' : 'bg-white'}`}
                        >
                          <div className="flex gap-2 mb-2">
                            <div className={`w-3 h-3 rounded-full border-[1.5px] border-black ${i % 2 === 0 ? 'bg-purple-500' : 'bg-blue-500'}`} />
                            <div className="w-20 h-2 bg-black/10 rounded-full" />
                          </div>
                          <div className="space-y-2">
                            <div className="w-full h-2 bg-black/5 rounded-full" />
                            <div className="w-2/3 h-2 bg-black/5 rounded-full" />
                          </div>

                          {/* Reactions with Spring */}
                          {i === 2 && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 1.5, type: "spring" }}
                              className="absolute -bottom-3 left-4 flex gap-1"
                            >
                              <div className="bg-white border-[2px] border-black px-1.5 py-0.5 rounded-full flex items-center gap-1 shadow-[2px_2px_0_0_#000] scale-90">
                                <span className="text-[10px]">👍</span>
                                <span className="text-[8px] font-black">2</span>
                              </div>
                              <div className="bg-white border-[2px] border-black px-1.5 py-0.5 rounded-full flex items-center gap-1 shadow-[2px_2px_0_0_#000] scale-90">
                                <span className="text-[10px]">🔥</span>
                                <span className="text-[8px] font-black">5</span>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}

                      {/* Typing Indicator */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="flex gap-1 ml-2 items-center"
                      >
                        <div className="text-[10px] font-bold text-gray-400 mr-1">Alex is typing</div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </motion.div>
                    </motion.div>

                    {/* Message Composer */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="mt-4 p-3 bg-gray-50 border-[2.5px] border-black rounded-2xl flex items-center gap-3 shadow-[4px_4px_0_0_#000]"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-black cursor-pointer">
                        <Smile size={20} />
                      </div>
                      <div className="flex-1 h-3 bg-black/5 rounded-full" />
                      <div className="w-8 h-8 bg-purple-500 border-[2px] border-black rounded-lg flex items-center justify-center text-white shadow-[2px_2px_0_0_#000]">
                        <Send size={14} strokeWidth={3} />
                      </div>
                    </motion.div>
                  </div>
                )}

                {activeTab === 'Video' && (
                  <div className="w-full max-w-xl bg-white border-[3px] border-black rounded-[2rem] overflow-hidden shadow-[12px_12px_0_0_#000] relative">
                    <div className="flex flex-col h-[420px]">
                      {/* Main Screen Share Area (Light Mode) */}
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex-1 bg-gray-50 relative m-3 rounded-xl border-[2.5px] border-black overflow-hidden flex items-center justify-center shadow-[4px_4px_0_0_#000]"
                      >
                        <div className="absolute top-4 left-4 bg-white border-[2px] border-black px-3 py-1 rounded-full flex items-center gap-2 z-10 shadow-[2px_2px_0_0_#000]">
                          <Monitor size={12} className="text-blue-500" />
                          <span className="text-[10px] font-black text-black uppercase tracking-tighter">Alex's VS Code</span>
                        </div>

                        {/* Network Signal */}
                        <div className="absolute top-4 right-4 flex gap-1 items-center">
                          <Signal size={12} className="text-green-500" />
                          <span className="text-[8px] font-black uppercase">Excellent</span>
                        </div>

                        {/* Moving Cursor Animation */}
                        <motion.div
                          animate={{
                            x: [-100, 50, -20, 80, -100],
                            y: [50, -20, 30, -50, 50]
                          }}
                          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                          className="absolute z-20 pointer-events-none"
                        >
                          <MousePointer2 size={16} fill="black" className="text-white drop-shadow-md" />
                          <motion.div
                            animate={{ scale: [1, 2, 1], opacity: [0, 0.5, 0] }}
                            transition={{ repeat: Infinity, duration: 2, delay: 2 }}
                            className="w-4 h-4 bg-blue-500 rounded-full absolute -top-1 -left-1"
                          />
                        </motion.div>

                        {/* Abstract Code UI Mockup */}
                        <div className="w-[80%] space-y-3 opacity-60">
                          {[1, 2, 3, 4].map(line => (
                            <motion.div
                              key={line}
                              initial={{ width: 0 }}
                              animate={{ width: line % 2 === 0 ? '66%' : '90%' }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: line * 0.2 }}
                              className={`h-3 rounded-full ${line === 1 ? 'bg-purple-200' : 'bg-gray-200'}`}
                            />
                          ))}
                        </div>

                        {/* Floating Reactions */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {[1, 2, 3].map(i => (
                            <motion.div
                              key={i}
                              initial={{ y: 0, opacity: 0 }}
                              animate={{ y: -100, opacity: [0, 1, 0] }}
                              transition={{ repeat: Infinity, duration: 3, delay: i * 1, ease: "easeOut" }}
                              className="text-lg"
                            >
                              {['❤️', '🔥', '👏'][i - 1]}
                            </motion.div>
                          ))}
                        </div>

                        {/* Overlay Participant (Self) */}
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{ repeat: Infinity, duration: 4 }}
                          className="absolute bottom-4 right-4 w-28 h-20 bg-white border-[2.5px] border-black rounded-lg shadow-[4px_4px_0_0_#000] overflow-hidden flex items-center justify-center"
                        >
                          <div className="w-8 h-8 rounded-full bg-purple-500 border-[2px] border-black" />
                          <div className="absolute bottom-1 right-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full border border-black" />
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Participant Thumbnails (Light Mode) */}
                      <div className="h-20 flex gap-2 px-3 mb-3">
                        {[1, 2, 3, 4].map(i => (
                          <motion.div
                            key={i}
                            animate={i === 2 ? { boxShadow: ["0 0 0 0px rgba(96, 165, 250, 0)", "0 0 0 6px rgba(96, 165, 250, 0.3)", "0 0 0 0px rgba(96, 165, 250, 0)"], scale: [1, 1.05, 1] } : {}}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className={`flex-1 bg-white rounded-lg border-[2px] border-black relative flex items-center justify-center shadow-[2px_2px_0_0_#000] ${i === 2 ? 'border-blue-500' : ''}`}
                          >
                            <div className={`w-6 h-6 rounded-full ${i === 2 ? 'bg-cyan-500' : 'bg-gray-200'} border-[1.5px] border-black`} />
                            {i === 3 && (
                              <motion.div
                                animate={{ y: [-2, 2, -2] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute -top-1 -right-1 bg-yellow-400 border-[1.5px] border-black p-0.5 rounded shadow-[1px_1px_0_0_#000]"
                              >
                                <Hand size={8} strokeWidth={4} />
                              </motion.div>
                            )}
                          </motion.div>
                        ))}
                      </div>

                      {/* Light Mode Control Bar */}
                      <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", damping: 12, delay: 0.5 }}
                        className="bg-white h-16 border-t-[3px] border-black flex items-center justify-center gap-4 px-4"
                      >
                        <div className="w-10 h-10 bg-gray-50 border-[2px] border-black rounded-full flex items-center justify-center text-black hover:bg-gray-100 cursor-pointer shadow-[2px_2px_0_0_#000] active:translate-y-0.5 active:shadow-none transition-all">
                          <MicOff size={18} />
                        </div>
                        <div className="w-10 h-10 bg-gray-50 border-[2px] border-black rounded-full flex items-center justify-center text-black hover:bg-gray-100 cursor-pointer shadow-[2px_2px_0_0_#000] active:translate-y-0.5 active:shadow-none transition-all">
                          <VideoOff size={18} />
                        </div>
                        <div className="w-10 h-10 bg-blue-500 border-[2px] border-black rounded-full flex items-center justify-center text-white shadow-[3px_3px_0_0_#000] hover:-translate-y-1 transition-transform">
                          <Monitor size={18} />
                        </div>
                        <div className="w-10 h-10 bg-gray-50 border-[2px] border-black rounded-full flex items-center justify-center text-black hover:bg-gray-100 cursor-pointer shadow-[2px_2px_0_0_#000]">
                          <MoreHorizontal size={18} />
                        </div>
                        <div className="w-12 h-10 bg-red-500 rounded-xl flex items-center justify-center text-white border-[3px] border-black shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-transform ml-4">
                          <PhoneOff size={18} />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                )}

                {activeTab === 'Calendar' && (
                  <div className="w-full max-w-lg border-[3px] border-black rounded-2xl bg-white shadow-[8px_8px_0_0_#000] p-6">
                    <div className="flex justify-between mb-6">
                      <div className="w-32 h-6 bg-gray-100 border-[2px] border-black rounded-md" />
                      <div className="flex gap-2">
                        <div className="w-6 h-6 border-[2px] border-black rounded-md" />
                        <div className="w-6 h-6 border-[2px] border-black rounded-md" />
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-3">
                      {[...Array(28)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.02 }}
                          className={`aspect-square border-[2px] border-black rounded-lg ${i === 14 ? 'bg-cyan-400' : 'bg-gray-50'}`}
                        />
                      ))}
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.8, duration: 1 }}
                      className="mt-6 h-12 bg-purple-100 border-[2.5px] border-black rounded-xl flex items-center px-4 relative overflow-hidden"
                    >
                      <div className="w-1/3 h-3 bg-purple-500 rounded-full" />
                    </motion.div>
                  </div>
                )}

                {activeTab === 'Voice' && (
                  <div className="w-full max-w-lg">
                    <div className="bg-gray-50 border-[3px] border-black rounded-[2.5rem] p-8 shadow-[8px_8px_0_0_#000] relative overflow-hidden">
                      <div className="flex justify-between items-center mb-10 relative z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-pink-500 border-[2px] border-black rounded-lg flex items-center justify-center text-white shadow-[2px_2px_0_0_#000]">
                            <Mic size={20} strokeWidth={2.5} />
                          </div>
                          <div>
                            <div className="font-black text-lg">Huddle: Design Sync</div>
                            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">4 People Online</div>
                          </div>
                        </div>
                        <div className="bg-green-400 border-[2px] border-black px-3 py-1 rounded-full flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          <span className="font-black text-[10px] uppercase">Live</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6 relative z-10">
                        {[1, 2, 3, 4].map(i => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-4 border-[2.5px] border-black rounded-2xl flex items-center gap-4 transition-all ${i === 1 ? 'bg-white shadow-[4px_4px_0_0_#EC4899] ring-2 ring-pink-500' : 'bg-gray-100'}`}
                          >
                            <div className="relative">
                              <div className="w-12 h-12 bg-white border-[2px] border-black rounded-full overflow-hidden flex items-center justify-center">
                                <div className={`w-8 h-8 rounded-full ${i === 1 ? 'bg-pink-500' : 'bg-gray-300'}`} />
                              </div>
                              {i === 1 && (
                                <motion.div
                                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                                  transition={{ repeat: Infinity, duration: 1.5 }}
                                  className="absolute inset-0 border-2 border-pink-500 rounded-full"
                                />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="w-full h-2 bg-black/10 rounded-full mb-2" />
                              {i === 1 ? (
                                <div className="flex gap-0.5 items-end h-3">
                                  {[1, 2, 3, 4, 5].map(bar => (
                                    <motion.div
                                      key={bar}
                                      animate={{ height: [4, 12, 4] }}
                                      transition={{ repeat: Infinity, duration: 0.5, delay: bar * 0.1 }}
                                      className="w-1 bg-pink-500 rounded-full"
                                    />
                                  ))}
                                </div>
                              ) : (
                                <div className="w-1/2 h-2 bg-black/5 rounded-full" />
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'Workspaces' && (
                  <div className="w-full max-w-2xl h-[450px] bg-gray-50 border-[3px] border-black rounded-[2.5rem] shadow-[12px_12px_0_0_#000] overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="h-14 border-b-[3px] border-black bg-white flex items-center justify-between px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-orange-500 border-[2px] border-black rounded flex items-center justify-center text-white shadow-[2px_2px_0_0_#000]">
                          <Layout size={12} />
                        </div>
                        <span className="font-black text-sm uppercase tracking-tighter">Engineering Workspace</span>
                      </div>
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className={`w-6 h-6 rounded-full border-[2px] border-black ${['bg-blue-400', 'bg-purple-400', 'bg-green-400'][i - 1]}`} />
                        ))}
                      </div>
                    </div>

                    <div className="flex-1 flex overflow-hidden">
                      {/* Sidebar */}
                      <div className="w-16 border-r-[3px] border-black bg-white p-3 space-y-4">
                        {[
                          { icon: Layout, color: 'bg-orange-500' },
                          { icon: MessageSquare, color: 'bg-gray-100' },
                          { icon: Users, color: 'bg-gray-100' },
                          { icon: Clock, color: 'bg-gray-100' }
                        ].map((item, i) => (
                          <div key={i} className={`w-full aspect-square border-[2px] border-black rounded-xl flex items-center justify-center shadow-[2px_2px_0_0_#000] cursor-pointer hover:-translate-y-0.5 transition-transform ${item.color}`}>
                            <item.icon size={16} className={i === 0 ? 'text-white' : 'text-gray-400'} />
                          </div>
                        ))}
                      </div>

                      {/* Main Kanban Content */}
                      <div className="flex-1 p-4 flex gap-4 overflow-x-auto bg-gray-50/50">
                        {[
                          { name: 'To Do', items: 2 },
                          { name: 'In Progress', items: 1 },
                          { name: 'Done', items: 1 }
                        ].map((col, idx) => (
                          <div key={idx} className="min-w-[180px] flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-4 px-1">
                              <span className="font-black text-[10px] uppercase tracking-widest text-gray-500">{col.name}</span>
                              <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center text-[8px] font-bold">{col.items}</div>
                            </div>

                            <div className="space-y-3">
                              {[...Array(col.items)].map((_, i) => (
                                <motion.div
                                  key={`${idx}-${i}`}
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ delay: (idx * 0.2) + (i * 0.1) }}
                                  whileHover={{ rotate: -2, y: -4 }}
                                  className="bg-white border-[2px] border-black rounded-xl p-3 shadow-[4px_4px_0_0_#000] cursor-pointer"
                                >
                                  <div className={`w-8 h-1.5 rounded-full mb-3 ${idx === 2 ? 'bg-green-400' : 'bg-orange-400'}`} />
                                  <div className="w-full h-2 bg-black/5 rounded-full mb-2" />
                                  <div className="w-2/3 h-2 bg-black/5 rounded-full mb-4" />

                                  <div className="flex items-center justify-between">
                                    <div className="flex -space-x-1.5">
                                      <div className="w-4 h-4 rounded-full border border-black bg-gray-200" />
                                      <div className="w-4 h-4 rounded-full border border-black bg-gray-300" />
                                    </div>
                                    {idx === 2 ? (
                                      <CheckCircle2 size={12} className="text-green-500" />
                                    ) : (
                                      <Clock size={12} className="text-gray-300" />
                                    )}
                                  </div>
                                </motion.div>
                              ))}

                              {idx === 1 && (
                                <motion.div
                                  animate={{ x: [0, 200, 0], opacity: [1, 0, 1] }}
                                  transition={{ duration: 5, repeat: Infinity, repeatDelay: 1 }}
                                  className="h-10 border-[2px] border-dashed border-gray-300 rounded-xl flex items-center justify-center"
                                >
                                  <span className="text-[8px] font-bold text-gray-400 uppercase">Moving Item...</span>
                                </motion.div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'Security' && (
                  <div className="w-full max-w-[450px] aspect-square relative flex items-center justify-center">
                    {/* Security Scene: Advanced Threat Detection & Encryption */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 border-[3px] border-black rounded-[2.5rem] bg-gray-50 overflow-hidden shadow-[12px_12px_0_0_#000]"
                    >
                      {/* Grid Background */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)] [background-size:30px_30px]" />
                      </div>

                      {/* Central Firewall Core */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <motion.div
                          initial={{ rotate: -180, scale: 0 }}
                          animate={{ rotate: 0, scale: 1 }}
                          transition={{ type: "spring", damping: 10 }}
                          className="w-16 h-16 bg-yellow-400/20 border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[6px_6px_0_0_#000] relative"
                        >
                          <Lock size={32} className="text-yellow-600" strokeWidth={3} />
                          <motion.div
                            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute inset-0 bg-yellow-400 rounded-xl -z-10"
                          />
                        </motion.div>
                      </div>

                      {/* Moving Packets (Encrypted vs Blocked) */}
                      {[1, 2, 3, 4, 5, 6].map(i => (
                        <motion.div
                          key={i}
                          animate={{
                            left: i === 4 ? ['-10%', '45%', '40%', '-10%'] : ['-10%', '110%'],
                            opacity: [0, 1, 1, 0]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: i === 4 ? 4 : 3,
                            delay: i * 0.7,
                            ease: "linear"
                          }}
                          className="absolute top-[15%] mt-[var(--y-pos)] z-10"
                          style={{ '--y-pos': `${(i % 4) * 50}px` } as any}
                        >
                          <motion.div
                            animate={i === 4 ?
                              { scale: [1, 1.2, 0.8, 1], backgroundColor: ['#EF4444', '#EF4444', '#EF4444'] } :
                              { backgroundColor: ['#3B82F6', '#10B981'], scale: [1, 1.1, 1] }
                            }
                            transition={{ duration: 0.2, delay: 1.5 }}
                            className={`w-10 h-10 border-[2px] border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0_0_#000] ${i === 4 ? 'bg-red-500' : 'bg-blue-500'}`}
                          >
                            {i === 4 ? (
                              <ShieldAlert size={16} className="text-white" strokeWidth={3} />
                            ) : (
                              <ShieldCheck size={16} className="text-white" strokeWidth={3} />
                            )}
                          </motion.div>

                          {/* Blocked Alert Text */}
                          {i === 4 && (
                            <motion.div
                              animate={{ opacity: [0, 1, 0], y: [0, -20] }}
                              transition={{ repeat: Infinity, duration: 4, delay: 1.5 + (i * 0.7) }}
                              className="absolute -top-6 left-0 text-[8px] font-black text-red-500 uppercase whitespace-nowrap"
                            >
                              Threat Blocked
                            </motion.div>
                          )}
                        </motion.div>
                      ))}

                      {/* Source & Destination Nodes */}
                      <div className="absolute left-8 top-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 bg-blue-500/10 border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[6px_6px_0_0_#000]">
                          <Globe size={32} className="text-blue-400" />
                        </div>
                      </div>
                      <div className="absolute right-8 top-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 bg-green-500/10 border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[6px_6px_0_0_#000]">
                          <Server size={32} className="text-green-400" />
                        </div>
                      </div>

                      {/* Scanning Beam */}
                      <motion.div
                        animate={{ left: ['-10%', '110%'] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                        className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent z-30 pointer-events-none"
                      />

                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-black font-mono text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Real-Time Vault Protection
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Platform Deep Dive: Neobrutalist Bento Mirror */}
      <section className="py-32 px-6 bg-[#DDD6FE] relative overflow-hidden border-t-[4px] border-black">
        {/* Background Blueprint Grid */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-8 py-2.5 bg-black text-white rounded-full font-black text-sm uppercase tracking-[0.5em] mb-8 shadow-[8px_8px_0_0_#7C3AED]"
            >
              Core Architecture
            </motion.div>
            <h2 className="font-black text-7xl md:text-7xl tracking-tighter leading-[0.8] mb-4">
              Powering <span className="text-purple-500">Innovation.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[140px]">

            {/* 1. TOP LEFT: RELIABILITY (Pink, Tall) */}
            <motion.div
              whileHover={{ translate: '-4px, -4px' }}
              className="md:col-span-3 md:row-span-4 bg-[#FFD6E0] border-[4px] border-black rounded-[3rem] p-8 flex flex-col items-center justify-between text-center relative overflow-hidden shadow-[12px_12px_0_0_#000]"
            >
              <div className="space-y-3 w-full">
                <div className="font-black text-2xl text-black uppercase tracking-tighter">System Reliability</div>
                <p className="text-xs font-bold text-gray-700 uppercase leading-relaxed whitespace-normal">Zero-latency failover protocols across 45+ availability zones.</p>
              </div>

              <div className="flex flex-col items-center my-6">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                    {/* Outer: Constant Network Ring (Red) */}
                    <circle cx="80" cy="80" r="72" stroke="#FF4D4D" strokeWidth="12" fill="transparent" />

                    {/* Inner: Nodes Animation (Black) */}
                    <motion.circle
                      cx="80" cy="80" r="56" stroke="#000" strokeWidth="12" fill="transparent"
                      strokeDasharray="377"
                      initial={{ strokeDashoffset: 377 }}
                      whileInView={{ strokeDashoffset: 377 * (1 - 0.9224) }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />

                    {/* Decorative Background Rings */}
                    <circle cx="80" cy="80" r="72" stroke="black" strokeWidth="1" fill="transparent" opacity="0.1" />
                    <circle cx="80" cy="80" r="56" stroke="black" strokeWidth="1" fill="transparent" opacity="0.1" />
                  </svg>
                </div>
                <div className="mt-4 text-center">
                  <div className="font-black text-4xl tracking-tighter text-black">99.9%</div>
                  <div className="text-sm font-black text-gray-500 uppercase tracking-widest mt-1">Uptime SLA</div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t-2 border-black/5 w-full">
                <div>
                  <div className="font-black text-2xl mb-1 tracking-tighter">4.2M</div>
                  <div className="text-sm font-bold text-black leading-tight uppercase tracking-wider">Sync Requests <br /> Per Second</div>
                </div>
                <p className="text-[10px] font-bold text-gray-500 uppercase leading-relaxed whitespace-normal">
                  Our global failover architecture ensures that peak network load never compromises synchronization speed or data integrity.
                </p>
                <div className="flex justify-between items-center text-[10px] font-black uppercase text-purple-600 bg-purple-50 p-2 rounded-xl border border-purple-200">
                  <span>Latency: &lt;45ms</span>
                  <span>Jitter: 0.2ms</span>
                </div>
              </div>
            </motion.div>

            {/* 2. TOP CENTER-L: THROUGHPUT (Yellow, Wide) */}
            <motion.div
              whileHover={{ translate: '-4px, -4px' }}
              className="md:col-span-3 md:row-span-2 bg-[#FEF08A] border-[4px] border-black rounded-[3rem] p-8 relative overflow-hidden shadow-[12px_12px_0_0_#000]"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <div className="font-black text-6xl tracking-tighter">4.87<span className="text-3xl ml-1">PB</span></div>
                  <Activity size={32} fill="black" />
                </div>
                <div className="mt-2">
                  <div className="font-black text-sm text-black uppercase mb-1">Stream Throughput</div>
                  <p className="text-[11px] font-bold text-gray-800 uppercase tracking-tight leading-relaxed whitespace-normal">
                    Massive scale data ingestion handling petabytes of real-time streams with sub-millisecond precision.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 3. TOP CENTER-R: NODES (Sky Blue, Wide) */}
            <motion.div
              whileHover={{ translate: '-4px, -4px' }}
              className="md:col-span-3 md:row-span-2 bg-[#BAE6FD] border-[4px] border-black rounded-[3rem] p-8 relative overflow-hidden shadow-[12px_12px_0_0_#000]"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <div className="text-left flex-1">
                    <div className="text-xs font-bold text-gray-700 mb-1 uppercase tracking-widest">Active Edge Nodes</div>
                    <div className="font-black text-6xl tracking-tighter">62K+</div>
                    <div className="text-blue-700 font-black text-xl">+18.4%</div>
                  </div>
                </div>
                <p className="text-[11px] font-bold text-gray-800 uppercase tracking-tight leading-relaxed whitespace-normal mt-2">
                  Distributed network of high-performance edge nodes serving content closer to your global users.
                </p>
              </div>
            </motion.div>

            {/* 4. TOP RIGHT: INFRASTRUCTURE (Purple, Tall) */}
            <motion.div
              whileHover={{ translate: '-4px, -4px' }}
              className="md:col-span-3 md:row-span-4 bg-[#C084FC] border-[4px] border-black rounded-[3rem] p-8 flex flex-col justify-between shadow-[12px_12px_0_0_#000]"
            >
              <div>
                <div className="font-black text-2xl mb-4 leading-tight uppercase tracking-tighter">Global Infrastructure</div>
                <p className="text-xs font-bold text-black/70 uppercase mb-6 leading-relaxed whitespace-normal">
                  Multi-cloud backbone spanning 12 providers. Guaranteed data sovereignty and regional compliance.
                </p>
                <div className="flex -space-x-3 mb-10">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-black bg-white flex items-center justify-center font-black text-sm">US-{i}</div>
                  ))}
                  <div className="w-14 h-14 rounded-full border-4 border-black bg-black text-white flex items-center justify-center text-sm font-black">+48</div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-black text-white uppercase mb-1">Active Regions</div>
                  <div className="font-black text-6xl tracking-tighter text-white">142</div>
                  <div className="text-black font-black text-base uppercase">Data Centers</div>
                </div>
                <div className="p-4 bg-black/10 rounded-2xl border-2 border-black/20">
                  <div className="text-[11px] font-black uppercase text-black/50 mb-1">Compliance</div>
                  <div className="text-xs font-black uppercase text-black">SOC2 • GDPR • HIPAA • PCI</div>
                </div>
              </div>
            </motion.div>

            {/* 5. CENTER: UNIFIED ENGINE (Pink, Large) */}
            <motion.div
              className="md:col-span-6 md:row-span-4 bg-[#FFD6E0] border-[4px] border-black rounded-[4rem] p-12 relative overflow-hidden flex flex-col items-center justify-center shadow-[16px_16px_0_0_#000]"
            >
              <div className="absolute top-12 left-12">
                <div className="font-black text-4xl uppercase tracking-tighter mb-2">Unified Sync Engine</div>
                <p className="text-sm font-bold text-gray-700 max-w-sm uppercase leading-relaxed whitespace-normal">
                  The heart of BitStream. A unified core for real-time synchronization, streaming, and distributed edge computing.
                </p>
              </div>

              <div className="relative w-full h-full flex items-center justify-center mt-12">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full bg-black/5 border-[3px] border-dashed border-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 bg-white border-[4px] border-black rounded-[4rem] shadow-[12px_12px_0_0_#000] flex items-center justify-center relative">
                      <Layout size={100} className="text-purple-600" strokeWidth={3} />
                    </div>
                  </div>
                  {/* Floating mini-widgets */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute top-0 right-0 bg-white p-5 border-[3px] border-black rounded-3xl shadow-[8px_8px_0_0_#000]"
                  >
                    <div className="font-black text-sm">19,46%</div>
                    <div className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">Sync Integrity</div>
                    <div className="text-green-500 font-black text-[10px] mt-1">▲ 102%</div>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                    className="absolute bottom-10 -left-10 bg-white p-5 border-[3px] border-black rounded-3xl shadow-[8px_8px_0_0_#000] flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
                      <Play size={12} fill="currentColor" />
                    </div>
                    <div className="font-black text-sm uppercase">26,807 events</div>
                  </motion.div>
                </div>
              </div>

              <div className="absolute bottom-12 right-12 text-right">
                <div className="font-black text-2xl uppercase tracking-widest text-black/40">Rust-Native Core</div>
                <div className="font-black text-sm uppercase text-purple-600">Max Performance Guaranteed</div>
              </div>
            </motion.div>

            {/* 6. BOTTOM LEFT: ARCHITECTURE (Yellow, Tall) */}
            <motion.div
              whileHover={{ translate: '-4px, -4px' }}
              className="md:col-span-3 md:row-span-4 bg-[#FEF08A] border-[4px] border-black rounded-[3rem] p-8 flex flex-col justify-between shadow-[12px_12px_0_0_#000]"
            >
              <div>
                <div className="font-black text-3xl tracking-tighter leading-[0.9] uppercase mb-6">
                  Stream <br /> Architecture <br /> Layer
                </div>
                <p className="text-xs font-bold text-black/70 uppercase leading-relaxed whitespace-normal">
                  Proprietary L-Cache technology ensures 99th percentile latency remains under 45ms even during peak bursts.
                </p>
              </div>
              <div className="relative flex-1 flex items-center justify-center gap-4 my-6">
                <div className="w-24 h-40 bg-purple-500 border-[4px] border-black rounded-full shadow-[6px_6px_0_0_#000]" />
                <div className="w-20 h-32 bg-cyan-50 border-[4px] border-black rounded-full shadow-[6px_6px_0_0_#000] mt-10" />
              </div>
              <div className="mt-4 pt-6 border-t-2 border-black/10">
                <div className="text-[11px] font-black uppercase text-black/40 mb-1">Vectorized Processing</div>
                <div className="text-sm font-black uppercase text-black">Stream-Native Storage</div>
              </div>
            </motion.div>

            {/* 7. MID-RIGHT: LOGO (White, Small) */}
            <motion.div
              whileHover={{ translate: '-4px, -4px' }}
              className="md:col-span-3 md:row-span-2 bg-white border-[4px] border-black rounded-[3rem] p-10 flex flex-col items-center justify-center text-center shadow-[12px_12px_0_0_#000]"
            >
              <div className="w-16 h-16 mb-4">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <circle cx="50" cy="40" r="25" stroke="black" strokeWidth="8" />
                  <circle cx="35" cy="65" r="25" stroke="black" strokeWidth="8" />
                  <circle cx="65" cy="65" r="25" stroke="black" strokeWidth="8" />
                </svg>
              </div>
              <div className="font-black text-2xl tracking-[0.2em] uppercase">BITSTREAM</div>
            </motion.div>

            {/* 8. BOTTOM CENTER-L: PROTOCOLS (Purple, Small) */}
            <motion.div
              whileHover={{ translate: '-4px, -4px' }}
              className="md:col-span-3 md:row-span-2 bg-[#C084FC] border-[4px] border-black rounded-[3rem] p-8 shadow-[12px_12px_0_0_#000]"
            >
              <div className="font-black text-3xl mb-1 uppercase text-white tracking-tighter">Protocols</div>
              <div className="text-xs font-bold text-white/70 mb-6 uppercase whitespace-normal leading-relaxed">Compatible with WebRTC, gRPC, and HLS protocols.</div>
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-black border-[2px] border-black rounded-lg shadow-[4px_4px_0_0_#FFFFFF]" />
                <div className="w-12 h-12 bg-[#FEF08A] border-[2px] border-black rounded-lg shadow-[4px_4px_0_0_#000]" />
                <div className="w-12 h-12 bg-white border-[2px] border-black rounded-lg shadow-[4px_4px_0_0_#000]" />
              </div>
            </motion.div>

            {/* 9. BOTTOM CENTER-R: ROADMAP (Pink, Wide) */}
            <motion.div
              whileHover={{ translate: '-4px, -4px' }}
              className="md:col-span-6 md:row-span-2 bg-[#FFD6E0] border-[4px] border-black rounded-[3rem] p-12 flex justify-between items-center shadow-[12px_12px_0_0_#000]"
            >
              <div className="max-w-xl">
                <div className="font-black text-4xl mb-4 leading-tight uppercase tracking-tighter">2024 Vision & Roadmap</div>
                <p className="text-xs font-bold text-gray-700 uppercase tracking-widest leading-relaxed whitespace-normal">
                  Quantum-resistant encryption, AI-driven predictive caching, and browser-native P2P protocols for the next generation of real-time sync.
                </p>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="w-32 h-32 text-black ml-8 flex-shrink-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="black" />
                </svg>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-32 px-6 bg-[#FED7E2] relative overflow-hidden border-t-[4px] border-black">
        {/* Background Blueprint Grid */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="font-black text-7xl uppercase tracking-tighter mb-6">Plays Well With Your Stack</h2>
            <p className="text-xl font-bold uppercase text-black/60 max-w-2xl mx-auto">Seamlessly connect BitStream to your favorite tools and automate your real-time data pipelines.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { name: 'Slack', slug: 'slack', color: '#4A154B', desc: 'Real-time channel alerts' },
              { name: 'GitHub', slug: 'github', color: '#181717', desc: 'Webhook synchronization' },
              { name: 'Google', slug: 'google', color: '#4285F4', desc: 'Cloud storage bridging' },
              { name: 'Notion', slug: 'notion', color: '#000000', desc: 'Auto-updating docs' },
              { name: 'Trello', slug: 'trello', color: '#0052CC', desc: 'Automated board sync' },
              { name: 'Jira', slug: 'jira', color: '#0052CC', desc: 'Stream-to-ticket hooks' },
              { name: 'Figma', slug: 'figma', color: '#F24E1E', desc: 'Asset pipeline sync' },
              { name: 'Discord', slug: 'discord', color: '#5865F2', desc: 'Community stream bot' },
            ].map((tool, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -12, x: -12 }}
                className="group relative h-72 cursor-pointer"
              >
                {/* Neobrutalist Shadow (SVG) */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M 0 0 L 80 0 Q 80 20 100 20 L 100 100 L 20 100 Q 20 80 0 80 Z"
                      fill="black"
                    />
                  </svg>
                </div>

                {/* Main Card (SVG + Content) */}
                <div className="absolute inset-0">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="drop-shadow-[2px_2px_0_rgba(0,0,0,0.1)]">
                    <path
                      d="M 0 0 L 80 0 Q 80 20 100 20 L 100 100 L 20 100 Q 20 80 0 80 Z"
                      fill="white"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-[6px_6px_0_0_#000] border-2 border-black group-hover:scale-110 group-hover:rotate-6 transition-transform overflow-hidden p-3">
                      <img
                        src={`https://cdn.simpleicons.org/${tool.slug}`}
                        alt={tool.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to letter if image fails
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            const span = document.createElement('span');
                            span.className = 'text-black font-black text-3xl';
                            span.innerText = tool.name[0];
                            parent.appendChild(span);
                          }
                        }}
                      />
                    </div>
                    <div className="font-black text-2xl uppercase tracking-tighter mb-1" style={{ color: tool.color }}>{tool.name}</div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight text-center px-4">{tool.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 text-center flex justify-center">
            <button className="group flex items-center gap-0 hover:gap-3 px-12 py-6 bg-black text-white rounded-full font-black text-xl uppercase transition-all border-[4px] border-black shadow-[12px_12px_0_0_#A78BFA] hover:shadow-[16px_16px_0_0_#A78BFA] hover:-translate-y-1 active:translate-y-0 active:shadow-[4px_4px_0_0_#A78BFA]">
              <span>See all 150+ integrations</span>
              <div className="overflow-hidden w-0 group-hover:w-10 transition-all duration-300 flex items-center justify-center">
                <ArrowRight size={32} strokeWidth={4} />
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#BAE6FD] relative overflow-hidden border-t-[4px] border-black">
        {/* Background Blueprint Grid */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-black text-6xl text-black uppercase tracking-tighter mb-4">Engineering Blueprint</h2>
            <p className="text-xl font-bold uppercase text-black/60 tracking-widest">Built for the next generation of real-time scale.</p>
          </div>

          {/* Terminal Frame */}
          <div className="bg-[#1E293B] border-[4px] border-black rounded-[2.5rem] overflow-hidden shadow-[24px_24px_0_0_#000]">
            {/* Terminal Header */}
            <div className="bg-black p-6 flex items-center justify-between border-b-[4px] border-black">
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-[#FF5F56]" />
                <div className="w-4 h-4 rounded-full bg-[#FFBD2E]" />
                <div className="w-4 h-4 rounded-full bg-[#27C93F]" />
              </div>
              <div className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">bitstream_core_v4.2.0_specs.exe</div>
              <div className="w-12 h-1" />
            </div>

            {/* Terminal Content: Spec Grid */}
            <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { label: "Global Latency", value: "< 45ms", unit: "AVG", color: "text-green-400", bar: "w-[94%]", icon: Zap, desc: "P99 latency across 142 data centers." },
                { label: "Stream Throughput", value: "4.87", unit: "PB/DAY", color: "text-blue-400", bar: "w-[88%]", icon: Activity, desc: "Total aggregate data processed daily." },
                { label: "Edge Nodes", value: "62,400+", unit: "ACTIVE", color: "text-purple-400", bar: "w-[92%]", icon: Globe, desc: "Global points of presence for edge compute." },
                { label: "Concurrency", value: "1.2B", unit: "REQUESTS", color: "text-yellow-400", bar: "w-[96%]", icon: Cpu, desc: "Simultaneous stream requests per second." },
                { label: "Data Integrity", value: "99.999", unit: "% SLA", color: "text-pink-400", bar: "w-[99%]", icon: Shield, desc: "Guaranteed data retention and encryption." },
                { label: "Cold Storage", value: "Unlimited", unit: "PB", color: "text-cyan-400", bar: "w-[100%]", icon: Database, desc: "Infinite archive capacity for stream logs." },
              ].map((spec, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ translate: '-4px, -4px' }}
                  className="bg-[#0F172A] border-[3px] border-black p-8 rounded-3xl shadow-[8px_8px_0_0_#000] group cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/30 transition-colors">
                      <spec.icon className={spec.color} size={24} />
                    </div>
                    <div className="font-mono text-[10px] text-gray-500 uppercase font-bold tracking-widest">ID: {0x1A2B + idx}</div>
                  </div>

                  <div className="mb-6">
                    <div className="font-mono text-xs text-gray-400 uppercase font-bold mb-1 tracking-wider">{spec.label}</div>
                    <div className="flex items-baseline gap-2">
                      <div className={`font-black text-4xl tracking-tighter ${spec.color}`}>{spec.value}</div>
                      <div className="font-mono text-xs font-black text-white/40">{spec.unit}</div>
                    </div>
                  </div>

                  {/* Mini Gauge */}
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: spec.bar.match(/\d+/)?.[0] + '%' }}
                        transition={{ duration: 1.5, delay: idx * 0.1 }}
                        className={`h-full rounded-full ${spec.color.replace('text', 'bg')} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                      />
                    </div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase leading-tight">{spec.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Terminal Footer */}
            <div className="bg-black/40 p-4 border-t-[4px] border-black flex justify-center">
              <div className="flex items-center gap-2 font-mono text-[10px] text-blue-400 uppercase font-bold animate-pulse">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                SYSTEM_STATUS: ALL_SYSTEMS_OPTIMAL // CLUSTER_RELIABILITY: 100%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Floating Background Shapes (Hero-like) */}
        <motion.div
          animate={{ rotate: -360, y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-10 left-[5%] w-32 h-32 bg-yellow-400 border-[3px] border-black rounded-full shadow-[10px_10px_0_0_#0F172A] opacity-20 hidden lg:block"
        />
        <motion.div
          animate={{ rotate: 360, x: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute bottom-10 right-[10%] w-40 h-40 bg-cyan-400 border-[3.5px] border-black rounded-[2rem] shadow-[12px_12px_0_0_#0F172A] opacity-20 hidden xl:block"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: -45 }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-1/2 right-[5%] w-20 h-20 bg-green-400 border-[3px] border-black shadow-[8px_8px_0_0_#0F172A] opacity-20 hidden md:block"
        />
        <motion.div
          animate={{ y: [0, 40, 0], rotate: 12 }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[12%] w-24 h-24 bg-purple-500 border-[3px] border-black rounded-xl shadow-[8px_8px_0_0_#0F172A] opacity-20 hidden lg:block"
        />

        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute top-0 left-0 w-full h-full bg-purple-600/5 -z-10 blur-3xl"
        />

        <div className="max-w-5xl mx-auto bg-black border-[4px] border-black rounded-[3rem] p-12 md:p-20 text-center shadow-[20px_20px_0_0_#7C3AED] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 opacity-20 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-black text-5xl md:text-7xl mb-8 text-white tracking-tighter leading-[0.9]">
              Ready to unify your <br />
              <span className="text-purple-400">Engineering Stack?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-medium mb-12 max-w-2xl mx-auto">
              Join 5,000+ high-performance teams already shipping faster with BitStream.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
              <button className="bg-purple-500 text-white border-[3px] border-black px-10 py-5 rounded-2xl font-black text-xl hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#FFFFFF] transition-all active:translate-y-0 active:shadow-none">
                Get Started Free
              </button>
              <button className="bg-white text-black border-[3px] border-black px-10 py-5 rounded-2xl font-black text-xl hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#7C3AED] transition-all active:translate-y-0 active:shadow-none">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
