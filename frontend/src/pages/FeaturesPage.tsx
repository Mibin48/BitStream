import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Video, Calendar, Headphones, Folders, Shield, Play, ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const FeaturesPage = () => {
  const [activeTab, setActiveTab] = useState('Messaging');

  const tabs = [
    { name: 'Messaging', icon: MessageSquare, color: 'bg-purple-500' },
    { name: 'Video', icon: Video, color: 'bg-green-500' },
    { name: 'Calendar', icon: Calendar, color: 'bg-cyan-500' },
    { name: 'Voice', icon: Headphones, color: 'bg-pink-500' },
    { name: 'Workspaces', icon: Folders, color: 'bg-orange-500' },
    { name: 'Security', icon: Shield, color: 'bg-yellow-500' }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-black font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-black text-5xl md:text-7xl mb-6 tracking-tight">
            Everything You Need. <br />
            <span className="text-purple-600">Nothing You Don't.</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium mb-12">
            Explore the features that make BitStream the all-in-one platform for modern engineering teams.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {tabs.map((tab, i) => (
              <motion.div
                key={tab.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border-[3px] border-black rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer group"
                style={{ boxShadow: '4px 4px 0 0 #0F172A' }}
              >
                <div className={`w-14 h-14 ${tab.color} border-[2.5px] border-black rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 group-hover:-rotate-3`}>
                  <tab.icon size={24} className="text-white" />
                </div>
                <div className="font-bold">{tab.name}</div>
                <p className="text-xs text-gray-500">Core Feature</p>
                <div className="text-[10px] font-black uppercase mt-2 text-purple-600 flex items-center gap-1">Explore <ArrowRight size={12} strokeWidth={4} /></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Feature Tabs */}
      <section className="py-20 px-6 bg-white border-y-[3px] border-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map(tab => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-6 py-3 font-bold text-sm border-[3px] border-black rounded-full transition-all flex items-center gap-2 ${
                  activeTab === tab.name ? `${tab.color} text-white shadow-[4px_4px_0_0_#0F172A] -translate-y-1` : 'bg-white hover:bg-gray-50 text-black'
                }`}
              >
                <tab.icon size={16} />
                {tab.name}
              </button>
            ))}
          </div>

          <div className="bg-white border-[3px] border-black rounded-2xl p-8 md:p-12 shadow-[8px_8px_0_0_#0F172A] flex flex-col md:flex-row gap-12 items-center min-h-[400px]">
            <div className="md:w-2/5 space-y-6">
              <h2 className="font-black text-4xl md:text-5xl">{activeTab}</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Experience unparalleled {activeTab.toLowerCase()} with BitStream. We've optimized every interaction to ensure lightning-fast performance and seamless collaboration for your entire team.
              </p>
              <ul className="space-y-3">
                {[1, 2, 3].map(i => (
                  <li key={i} className="flex items-center gap-3 font-bold">
                    <div className={`w-6 h-6 rounded-full border-[2px] border-black flex items-center justify-center ${tabs.find(t => t.name === activeTab)?.color}`}>
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    Benefit {i} of {activeTab}
                  </li>
                ))}
              </ul>
              <button className="bg-black text-white px-8 py-3 rounded-xl font-bold border-[2px] border-black hover:-translate-y-1 transition-transform shadow-[4px_4px_0_0_#0F172A] mt-4">
                Try it now
              </button>
            </div>
            <div className="md:w-3/5 w-full">
              <div className={`aspect-video border-[3px] border-black rounded-xl p-2 shadow-[6px_6px_0_0_#0F172A] ${tabs.find(t => t.name === activeTab)?.color} bg-opacity-20 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
                <div className="relative z-10 flex flex-col items-center">
                  <Play size={48} className="text-black mb-4 opacity-50" />
                  <p className="font-bold font-mono">Interactive Demo Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Cards (Bento Grid) */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-12 text-center">Platform Deep Dive</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-white border-[3px] border-black rounded-xl p-6 shadow-[6px_6px_0_0_#0F172A] hover:-translate-y-2 transition-transform break-inside-avoid">
                <div className={`w-12 h-12 mb-4 border-[2px] border-black rounded-lg flex items-center justify-center ${i % 2 === 0 ? 'bg-purple-400' : 'bg-cyan-400'}`}>
                  <MessageSquare size={20} className="text-white" />
                </div>
                <h3 className="font-black text-xl mb-2">Feature Deep Dive {i}</h3>
                <p className="text-sm text-gray-600 mb-4 font-medium leading-relaxed">
                  Detailed explanation of this specific capability. It goes into the nitty-gritty of why this matters for your engineering team.
                </p>
                <div className="aspect-video bg-gray-100 border-[2px] border-black rounded-lg mb-4 flex items-center justify-center relative">
                  <Play size={24} className="opacity-30" />
                </div>
                <a href="#" className="font-bold text-purple-600 text-sm hover:underline flex items-center gap-1">Learn more <ArrowRight size={14} strokeWidth={4} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-24 px-6 bg-white border-y-[3px] border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl mb-12">Plays Well With Your Stack</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {['Slack', 'GitHub', 'Google', 'Notion', 'Trello', 'Jira', 'Figma', 'Zoom'].map(tool => (
              <div key={tool} className="w-32 h-32 bg-white border-[3px] border-black rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[4px_4px_0_0_#0F172A] hover:-translate-y-2 hover:rotate-3 transition-transform cursor-pointer">
                <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" />
                <span className="font-bold text-sm">{tool}</span>
              </div>
            ))}
          </div>
          <button className="font-black border-[3px] border-black px-8 py-3 rounded-xl shadow-[4px_4px_0_0_#0F172A] hover:-translate-y-1 transition-transform">
            See all integrations <ArrowRight size={18} strokeWidth={4} className="inline-block ml-1" />
          </button>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-black text-4xl mb-12 text-center">Built for Performance</h2>
          <div className="bg-white border-[3px] border-black rounded-xl overflow-hidden shadow-[8px_8px_0_0_#0F172A]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-purple-100 border-b-[3px] border-black">
                  <th className="p-4 border-r-[3px] border-black font-black uppercase text-sm">Specification</th>
                  <th className="p-4 font-black uppercase text-sm">Limit / Capability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-[3px] border-black">
                  <td className="p-4 border-r-[3px] border-black font-bold">Max video participants</td>
                  <td className="p-4 font-medium">100</td>
                </tr>
                <tr className="border-b-[3px] border-black bg-gray-50">
                  <td className="p-4 border-r-[3px] border-black font-bold">Message delivery</td>
                  <td className="p-4 font-medium">&lt;100ms</td>
                </tr>
                <tr className="border-b-[3px] border-black">
                  <td className="p-4 border-r-[3px] border-black font-bold">Uptime</td>
                  <td className="p-4 font-medium">99.9%</td>
                </tr>
                <tr className="border-b-[3px] border-black bg-gray-50">
                  <td className="p-4 border-r-[3px] border-black font-bold">Encryption</td>
                  <td className="p-4 font-medium">AES-256 E2E</td>
                </tr>
                <tr className="border-b-[3px] border-black">
                  <td className="p-4 border-r-[3px] border-black font-bold">Storage</td>
                  <td className="p-4 font-medium">Unlimited (Pro/Enterprise)</td>
                </tr>
                <tr>
                  <td className="p-4 border-r-[3px] border-black font-bold">File upload</td>
                  <td className="p-4 font-medium">Up to 5GB per file</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-400 to-orange-400 border-[3px] border-black rounded-3xl p-12 text-center shadow-[12px_12px_0_0_#0F172A]">
          <h2 className="font-black text-4xl md:text-5xl mb-6">Ready to experience the difference?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="bg-black text-white border-[3px] border-black px-8 py-4 rounded-xl font-black text-lg hover:-translate-y-1 transition-transform">
              Start Free
            </button>
            <button className="bg-white text-black border-[3px] border-black px-8 py-4 rounded-xl font-black text-lg shadow-[4px_4px_0_0_#0F172A] hover:-translate-y-1 transition-transform">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
