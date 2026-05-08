import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Rss, Mail, Send, Terminal, Zap, Play, MessageSquare, Code, Monitor } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Updates', 'Tutorials', 'Engineering'];

  const posts = [
    { id: 1, title: 'BitStream v2.0 is Here', category: 'Updates', excerpt: 'Built in Rust. Sub-50ms speed. Pure performance.', author: 'Alex Rivera', date: 'Oct 12, 2025', img: '/blog_rust_speed_1778176994317.png', idTag: 'ANN-24' },
    { id: 2, title: 'Mastering Webhooks', category: 'Tutorials', excerpt: 'Connect anything to BitStream. Automated triggers for your stack.', author: 'Sarah Chen', date: 'Oct 05, 2025', img: '/blog_webhooks_api_1778177010131.png', idTag: 'TUT-12' },
    { id: 3, title: 'Scaling WebRTC', category: 'Engineering', excerpt: 'How we handle 100+ callers. A deep dive into our network mesh.', author: 'Elena Rostova', date: 'Sep 28, 2025', img: '/blog_webrtc_network_1778177047028.png', idTag: 'ENG-08' },
    { id: 4, title: 'SyncTime joins BitStream', category: 'Updates', excerpt: 'SyncTime is officially part of our core scheduling engine.', author: 'Alex Rivera', date: 'Sep 15, 2025', img: '/blog_synctime_merger_1778177065158.png', idTag: 'ANN-23' },
    { id: 5, title: 'Command Palette Guide', category: 'Tutorials', excerpt: 'Unlock 10x productivity. The keyboard-first way to build.', author: 'David Kim', date: 'Sep 02, 2025', img: '/blog_command_palette_1778177083584.png', idTag: 'TUT-11' },
    { id: 6, title: 'The Security Layer', category: 'Engineering', excerpt: 'Signal Protocol + E2EE. Why your data is untouchable.', author: 'Marcus Johnson', date: 'Aug 20, 2025', img: '/blog_security_encryption_1778177024064.png', idTag: 'ENG-07' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-black font-sans selection:bg-purple-500 selection:text-white relative overflow-hidden">
      {/* Global Blueprint Grid Overlay */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-50"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 text-center relative overflow-hidden">
        {/* Floating Shapes */}
        <motion.div
          animate={{ rotate: 360, y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-20 left-[10%] w-24 h-24 bg-yellow-400 border-[3px] border-black rounded-full shadow-[8px_8px_0_0_#000] opacity-10 hidden lg:block"
        />
        <motion.div
          animate={{ rotate: -360, x: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-40 right-[15%] w-32 h-32 bg-cyan-400 border-[3px] border-black rounded-[2rem] shadow-[12px_12px_0_0_#000] opacity-10 hidden lg:block"
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block bg-purple-600 text-white border-[3px] border-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-[4px_4px_0_0_#000]">
            Engineering Log
          </div>
          <h1 className="font-black text-6xl md:text-8xl mb-8 tracking-tighter leading-[0.85]">
            Protocol <br />
            <span className="text-purple-600 underline decoration-black decoration-8 underline-offset-8">Stories.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-bold mb-16 max-w-2xl mx-auto leading-relaxed">
            Technical deep-dives and engineering updates from the team building the future of real-time communication.
          </p>

          <div className="flex flex-wrap justify-center gap-4 bg-white border-[4px] border-black p-4 rounded-[2rem] shadow-[12px_12px_0_0_#000] max-w-3xl mx-auto">
            {filters.map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest border-[3px] transition-all ${
                  activeFilter === filter 
                    ? 'bg-black text-white border-black shadow-[4px_4px_0_0_#7C3AED] -translate-x-1 -translate-y-1' 
                    : 'bg-white text-black border-transparent hover:border-black hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            whileHover={{ x: -8, y: -8 }}
            className="bg-white border-[4px] border-black rounded-[3rem] overflow-hidden shadow-[24px_24px_0_0_#000] flex flex-col lg:flex-row group cursor-pointer transition-all"
          >
            <div className="lg:w-3/5 h-96 lg:h-auto bg-black border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black relative overflow-hidden">
              <img 
                src={posts[0].img} 
                alt="Featured Post" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute top-8 left-8 bg-yellow-400 border-[3px] border-black px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-[4px_4px_0_0_#000]">
                Featured Module
              </div>

              <div className="absolute bottom-8 left-8">
                <div className="w-16 h-16 border-[4px] border-white/20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shadow-[8px_8px_0_0_rgba(255,255,255,0.1)]">
                  <Zap size={32} className="text-white" strokeWidth={3} />
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 p-10 md:p-14 flex flex-col justify-center bg-white relative">
              <div className="absolute top-10 right-10 font-mono text-[10px] font-black text-gray-300 tracking-[0.4em]">
                {posts[0].idTag}
              </div>

              <div className="inline-block bg-purple-50 border-[2px] border-black px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest mb-6 self-start shadow-[3px_3px_0_0_#000]">
                {posts[0].category}
              </div>
              <h2 className="font-black text-4xl md:text-5xl mb-6 tracking-tighter leading-none group-hover:text-purple-600 transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-gray-600 font-bold text-lg mb-10 leading-relaxed">
                {posts[0].excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-8 border-t-[3px] border-black border-dashed">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border-[3px] border-black rounded-2xl bg-purple-200 overflow-hidden shadow-[4px_4px_0_0_#000]">
                    <img src="https://i.pravatar.cc/150?u=alex" alt="Alex Rivera" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-black text-lg tracking-tight">Alex Rivera</div>
                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest">{posts[0].date}</div>
                  </div>
                </div>
                <button className="bg-black text-white border-[3px] border-black w-14 h-14 rounded-2xl flex items-center justify-center shadow-[6px_6px_0_0_#7C3AED] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  <ArrowRight size={28} strokeWidth={4} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[4px] flex-1 bg-black" />
            <h2 className="font-black text-3xl uppercase tracking-[0.2em] px-4 whitespace-nowrap text-gray-400">Archived Logs</h2>
            <div className="h-[4px] flex-1 bg-black" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.slice(1).map(post => (
              <motion.div 
                key={post.id} 
                whileHover={{ x: -4, y: -4 }}
                className="bg-white border-[4px] border-black rounded-[2.5rem] overflow-hidden shadow-[8px_8px_0_0_#000] hover:shadow-[16px_16px_0_0_#000] flex flex-col group cursor-pointer transition-all"
              >
                <div className={`h-64 bg-black border-b-[4px] border-black relative overflow-hidden`}>
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute top-6 left-6 bg-white border-[3px] border-black px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest inline-block shadow-[4px_4px_0_0_#000] relative z-10">
                    {post.category}
                  </div>
                  
                  <div className="absolute bottom-6 right-6 font-mono text-[10px] font-black text-white/40 tracking-widest relative z-10">
                    {post.idTag}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1 bg-white">
                  <h3 className="font-black text-2xl mb-4 tracking-tighter leading-tight group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 font-bold text-sm mb-8 flex-1 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center pt-6 border-t-[3px] border-black border-dashed mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border-[2.5px] border-black rounded-xl bg-gray-100 overflow-hidden shadow-[2px_2px_0_0_#000]">
                         <img src={`https://i.pravatar.cc/150?u=${post.author}`} alt={post.author} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-black text-xs tracking-tight">{post.author}</span>
                    </div>
                    <span className="font-black text-[10px] text-gray-400 uppercase tracking-widest">{post.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-24 px-6 relative z-10 border-t-[4px] border-black bg-white">
        <div className="flex justify-center items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="w-14 h-14 bg-white border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-30"
          >
            <ChevronLeft size={24} strokeWidth={4} />
          </motion.button>
          
          {[1, 2, 3].map(num => (
            <motion.button 
              key={num}
              whileHover={{ scale: 1.05 }}
              className={`w-14 h-14 border-[3px] border-black rounded-2xl flex items-center justify-center font-black text-lg transition-all shadow-[4px_4px_0_0_#000] ${
                num === 1 ? 'bg-purple-600 text-white shadow-[4px_4px_0_0_#000]' : 'bg-white text-black'
              }`}
            >
              {num}
            </motion.button>
          ))}
          
          <span className="font-black text-2xl px-4 text-gray-300 tracking-widest">...</span>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="w-14 h-14 bg-white border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <ChevronRight size={24} strokeWidth={4} />
          </motion.button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#FCE7F3] border-t-[4px] border-black">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white border-[3px] border-black px-6 py-2 rounded-2xl font-black text-xs uppercase tracking-[0.3em] mb-10 shadow-[6px_6px_0_0_#000]">
            Stay Synced
          </div>
          <h2 className="font-black text-5xl md:text-7xl mb-8 tracking-tighter leading-none">
            Subscribe to the <br />
            <span className="text-pink-600">Protocol Feed.</span>
          </h2>
          <p className="text-xl text-gray-600 font-bold mb-16 max-w-2xl mx-auto leading-relaxed">
            Get the latest technical deep-dives and product announcements delivered straight to your engineering terminal.
          </p>

          <form className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto group">
            <div className="relative flex-1">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-600 transition-colors" size={24} strokeWidth={3} />
              <input 
                type="email" 
                placeholder="engineer@company.com"
                className="w-full bg-white border-[4px] border-black rounded-2xl py-6 pl-16 pr-6 font-bold text-lg focus:outline-none focus:ring-8 focus:ring-pink-500/10 transition-all shadow-[12px_12px_0_0_#000] focus:shadow-[16px_16px_0_0_#DB2777]"
              />
            </div>
            <button className="bg-black text-white border-[4px] border-black rounded-2xl px-12 py-6 font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 shadow-[12px_12px_0_0_#DB2777] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
              Subscribe <Send size={24} strokeWidth={4} />
            </button>
          </form>
          
          <div className="flex justify-center gap-8 mt-16 font-black text-sm uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-black transition-colors flex items-center gap-2">
              <Rss size={18} strokeWidth={4} /> RSS Feed
            </a>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200 mt-2" />
            <a href="#" className="hover:text-black transition-colors">Past Editions</a>
          </div>
        </div>

        {/* Decorative Shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-64 h-64 border-[4px] border-black rounded-[4rem] opacity-[0.05] pointer-events-none"
        />
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
