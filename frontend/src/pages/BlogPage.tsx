import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Product Updates', 'Tutorials', 'Engineering'];

  const posts = [
    { id: 1, title: 'Introducing BitStream v2.0: The Speed Update', category: 'Product Updates', excerpt: 'We rewrote our entire backend in Rust. Here is how we achieved sub-50ms message delivery globally.', author: 'Alex Rivera', date: 'Oct 12, 2025', image: 'bg-purple-400' },
    { id: 2, title: 'Building a Custom Integration with Webhooks', category: 'Tutorials', excerpt: 'Learn how to connect your internal tools to BitStream using our new incoming webhooks API.', author: 'Sarah Chen', date: 'Oct 05, 2025', image: 'bg-green-400' },
    { id: 3, title: 'How we scaled WebRTC to 100 participants', category: 'Engineering', excerpt: 'A deep dive into our custom SFU architecture and the challenges of scaling real-time video.', author: 'Elena Rostova', date: 'Sep 28, 2025', image: 'bg-cyan-400' },
    { id: 4, title: 'BitStream acquires popular calendar app SyncTime', category: 'Product Updates', excerpt: 'We are thrilled to announce that the SyncTime team is joining BitStream to revolutionize scheduling.', author: 'Alex Rivera', date: 'Sep 15, 2025', image: 'bg-yellow-400' },
    { id: 5, title: 'Mastering the Command Palette', category: 'Tutorials', excerpt: 'Boost your productivity with these 10 little-known keyboard shortcuts in the BitStream app.', author: 'David Kim', date: 'Sep 02, 2025', image: 'bg-pink-400' },
    { id: 6, title: 'The state of End-to-End Encryption in 2025', category: 'Engineering', excerpt: 'Why we chose the Signal Protocol and how we implemented it across Web, Desktop, and Mobile.', author: 'Marcus Johnson', date: 'Aug 20, 2025', image: 'bg-orange-400' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-black font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />

      {/* Hero & Filters */}
      <section className="pt-40 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-black text-5xl md:text-7xl mb-6 text-center">Blog & Updates</h1>
          <p className="text-xl text-gray-600 font-medium mb-12 text-center max-w-2xl mx-auto">
            Product updates, tutorials, and engineering stories from the BitStream team.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-bold text-sm border-[3px] border-black transition-all ${
                  activeFilter === filter 
                    ? 'bg-purple-500 text-white shadow-[4px_4px_0_0_#0F172A] -translate-y-1' 
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border-[4px] border-black rounded-3xl overflow-hidden shadow-[12px_12px_0_0_#0F172A] flex flex-col md:flex-row group cursor-pointer hover:-translate-y-2 transition-transform">
            <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-purple-500 to-pink-500 border-b-[4px] md:border-b-0 md:border-r-[4px] border-black p-8 relative flex items-center justify-center">
              <div className="absolute top-4 left-4 bg-yellow-400 border-[2px] border-black px-3 py-1 rounded-full text-xs font-black uppercase">
                Featured
              </div>
              <div className="w-32 h-32 border-[4px] border-black rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="font-black text-white text-5xl">v2.0</span>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
              <div className="inline-block bg-purple-100 border-[2px] border-black px-3 py-1 rounded-md text-xs font-bold uppercase mb-4 self-start">
                Product Updates
              </div>
              <h2 className="font-black text-3xl md:text-4xl mb-4 group-hover:text-purple-600 transition-colors">
                Introducing BitStream v2.0: The Speed Update
              </h2>
              <p className="text-gray-600 font-medium text-lg mb-6 leading-relaxed">
                We rewrote our entire backend in Rust. Here is how we achieved sub-50ms message delivery globally, reduced RAM usage by 80%, and introduced unified workspaces.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border-[2px] border-black rounded-full bg-purple-200 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=99" alt="Alex Rivera" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Alex Rivera</div>
                    <div className="text-xs font-medium text-gray-500">Oct 12, 2025</div>
                  </div>
                </div>
                <button className="bg-black text-white border-[2px] border-black w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <ArrowRight size={20} strokeWidth={4} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white border-[3px] border-black rounded-2xl overflow-hidden shadow-[6px_6px_0_0_#0F172A] flex flex-col group cursor-pointer hover:-translate-y-2 transition-transform">
              <div className={`h-48 ${post.image} border-b-[3px] border-black relative p-4 flex flex-col justify-between`}>
                <div className="bg-white border-[2px] border-black px-3 py-1 rounded-md text-[10px] font-black uppercase inline-block self-start shadow-[2px_2px_0_0_#0F172A]">
                  {post.category}
                </div>
                {/* Abstract graphic based on id */}
                <div className="self-end opacity-50 mix-blend-overlay">
                   {post.id % 2 === 0 ? <div className="w-20 h-20 rounded-full border-[4px] border-black" /> : <div className="w-20 h-20 bg-black rotate-12" />}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-black text-xl mb-3 group-hover:text-purple-600 transition-colors">{post.title}</h3>
                <p className="text-gray-600 font-medium text-sm mb-6 flex-1">{post.excerpt}</p>
                <div className="flex justify-between items-center pt-4 border-t-[2px] border-gray-100">
                  <span className="font-bold text-xs">{post.author}</span>
                  <span className="font-semibold text-xs text-gray-500">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className="py-12 px-6 mb-12">
        <div className="flex justify-center items-center gap-2">
          <button className="w-10 h-10 bg-white border-[3px] border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0_0_#0F172A] hover:-translate-y-1 transition-transform disabled:opacity-50 disabled:hover:translate-y-0 disabled:shadow-none">
            <ChevronLeft size={20} strokeWidth={4} />
          </button>
          <button className="w-10 h-10 bg-purple-500 text-white border-[3px] border-black rounded-lg flex items-center justify-center font-black shadow-[2px_2px_0_0_#0F172A] hover:-translate-y-1 transition-transform">
            1
          </button>
          <button className="w-10 h-10 bg-white border-[3px] border-black rounded-lg flex items-center justify-center font-black shadow-[2px_2px_0_0_#0F172A] hover:-translate-y-1 transition-transform">
            2
          </button>
          <button className="w-10 h-10 bg-white border-[3px] border-black rounded-lg flex items-center justify-center font-black shadow-[2px_2px_0_0_#0F172A] hover:-translate-y-1 transition-transform">
            3
          </button>
          <span className="font-black px-2">...</span>
          <button className="w-10 h-10 bg-white border-[3px] border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0_0_#0F172A] hover:-translate-y-1 transition-transform">
            <ChevronRight size={20} strokeWidth={4} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
