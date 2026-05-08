import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Download, Code, Server, MessageSquare, Video, Folders, Shield, GitPullRequest, Play, ArrowRight, Terminal, Monitor, Zap, MessageCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const DocsPage = () => {
  const [activeLang, setActiveLang] = useState('javascript');

  const codeExamples: Record<string, string> = {
    javascript: `import { BitStream } from '@bitstream/client';

const client = new BitStream({
  apiKey: 'YOUR_API_KEY',
  workspaceId: 'ws_12345'
});

// Send a message to a channel
await client.chat.sendMessage({
  channel: 'engineering',
  text: 'Hello world from the API! 👋'
});`,
    python: `from bitstream import Client

client = Client(
    api_key="YOUR_API_KEY",
    workspace_id="ws_12345"
)

# Send a message to a channel
client.chat.send_message(
    channel="engineering",
    text="Hello world from the API! 👋"
)`,
    go: `package main

import "github.com/bitstream/go-client"

func main() {
    client := bitstream.NewClient(
        "YOUR_API_KEY",
        "ws_12345",
    )

    // Send a message to a channel
    client.Chat.SendMessage(
        "engineering",
        "Hello world from the API! 👋",
    )
}`
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-black font-sans selection:bg-purple-500 selection:text-white relative overflow-hidden">
      {/* Global Blueprint Grid Overlay */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-50"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      <Navbar />

      {/* Hero + Search */}
      <section className="pt-48 pb-24 px-6 text-center relative">
        {/* Floating Shapes */}
        <motion.div
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-20 left-[10%] w-24 h-24 bg-yellow-400 border-[3px] border-black rounded-full shadow-[8px_8px_0_0_#000] opacity-20 hidden lg:block"
        />
        <motion.div
          animate={{ rotate: -360, x: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-40 right-[12%] w-32 h-32 bg-purple-500 border-[3px] border-black rounded-[2rem] shadow-[12px_12px_0_0_#000] opacity-20 hidden lg:block"
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-black text-6xl md:text-8xl mb-8 tracking-tighter leading-[0.9]">
            Build the <br />
            <span className="text-purple-600">Future.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-12 max-w-2xl mx-auto">
            Everything you need to build powerful communication apps with BitStream.
          </p>
          
          <div className="relative max-w-2xl mx-auto group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors" size={28} strokeWidth={3} />
            <input 
              type="text" 
              placeholder="Search docs... (Press / to focus)"
              className="w-full bg-white border-[4px] border-black rounded-[2rem] py-6 pl-16 pr-16 font-bold text-xl focus:outline-none focus:ring-8 focus:ring-purple-500/10 transition-all shadow-[12px_12px_0_0_#000] focus:shadow-[16px_16px_0_0_#7C3AED]"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 border-[3px] border-black rounded-xl px-3 py-1 text-sm font-black bg-gray-100">
              /
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {['Authentication', 'Webhooks', 'Docker Setup', 'REST API', 'WebSockets'].map(tag => (
              <motion.span 
                key={tag} 
                whileHover={{ y: -2 }}
                className="bg-white border-[3px] border-black px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-wider shadow-[4px_4px_0_0_#000] cursor-pointer hover:bg-purple-600 hover:text-white transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Cards */}
      <section className="py-24 px-6 relative z-10 bg-[#BAE6FD] border-t-[4px] border-black overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: Download, title: 'Install', desc: '5-minute platform setup', color: 'bg-purple-500' },
            { icon: Code, title: 'API Ref', desc: 'SDKs & Direct REST access', color: 'bg-yellow-400' },
            { icon: Server, title: 'Self-Host', desc: 'Docker & Kubernetes orchestration', color: 'bg-cyan-400' },
            { icon: Terminal, title: 'CLI Tool', desc: 'Terminal management utility', color: 'bg-black' },
            { icon: Zap, title: 'Plugins', desc: 'Extend core system logic', color: 'bg-orange-500' },
            { icon: Zap, title: 'Webhooks', desc: 'Real-time event notifications', color: 'bg-green-500' }
          ].map((card, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className={`bg-white border-[4px] border-black rounded-[2.5rem] p-10 shadow-[16px_16px_0_0_#000] relative overflow-hidden group cursor-pointer h-full flex flex-col`}
            >
              <div className={`w-16 h-16 ${card.color} border-[3px] border-black rounded-2xl flex items-center justify-center mb-8 shadow-[6px_6px_0_0_#000] group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                <card.icon size={32} className="text-white" strokeWidth={3} />
              </div>
              <h3 className="font-black text-3xl mb-4 tracking-tighter leading-tight">{card.title}</h3>
              <p className="text-gray-600 font-bold text-lg leading-relaxed mb-8 flex-1">{card.desc}</p>
              <div className="flex items-center gap-2 font-black text-sm uppercase tracking-widest group-hover:text-purple-600 transition-colors">
                Launch Protocol <ArrowRight size={18} strokeWidth={4} />
              </div>
              
              <div className={`absolute -bottom-8 -right-8 w-24 h-24 ${card.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-24 px-6 relative overflow-hidden border-t-[4px] border-black bg-[#DDD6FE]">

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-black text-5xl md:text-6xl mb-4 tracking-tighter">System Modules</h2>
            <p className="text-gray-500 font-bold uppercase text-xs tracking-[0.3em]">Full documentation architecture</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                title: 'Getting Started', icon: Play, color: 'text-green-500', id: 'MOD-01',
                links: ['Installation', 'First Steps', 'Configuration', 'Troubleshooting']
              },
              { 
                title: 'Features', icon: MessageSquare, color: 'text-purple-600', id: 'MOD-02',
                links: ['Messaging', 'Video Calls', 'Scheduling', 'Workspaces']
              },
              { 
                title: 'API Reference', icon: Code, color: 'text-blue-500', id: 'MOD-03',
                links: ['Authentication', 'REST API', 'WebSocket API', 'Webhooks']
              },
              { 
                title: 'Mobile SDKs', icon: Download, color: 'text-pink-500', id: 'MOD-04',
                links: ['iOS (Swift)', 'Android (Kotlin)', 'React Native', 'Flutter SDK']
              },
              { 
                title: 'Media Engine', icon: Video, color: 'text-red-500', id: 'MOD-05',
                links: ['Transcoding', 'File Storage', 'Media Proxy', 'Live Streaming']
              },
              { 
                title: 'Desktop App', icon: Monitor, color: 'text-black', id: 'MOD-06',
                links: ['Electron SDK', 'Native Builds', 'Auto-Updates', 'System Tray']
              },
              { 
                title: 'Self-Hosting', icon: Server, color: 'text-orange-500', id: 'MOD-07',
                links: ['Docker Setup', 'Kubernetes', 'Env Variables', 'Backup & Restore']
              },
              { 
                title: 'Compliance', icon: Shield, color: 'text-red-500', id: 'MOD-08',
                links: ['GDPR Protocol', 'SOC2 Reports', 'Data Residency', 'Terms of Service']
              },
              { 
                title: 'Integrations', icon: Folders, color: 'text-cyan-500', id: 'MOD-09',
                links: ['GitHub App', 'Slack Bridge', 'Google Calendar', 'Build Custom']
              },
              { 
                title: 'Security', icon: Shield, color: 'text-indigo-500', id: 'MOD-10',
                links: ['Encryption', '2FA Setup', 'Audit Logs', 'Penetration Testing']
              },
              { 
                title: 'Event Bus', icon: Zap, color: 'text-yellow-500', id: 'MOD-11',
                links: ['Real-time Hub', 'Event Schema', 'Subscribers', 'Reliability']
              },
              { 
                title: 'DevOps', icon: GitPullRequest, color: 'text-emerald-500', id: 'MOD-12',
                links: ['CI/CD Flow', 'Status Checks', 'Rate Limits', 'Service Health']
              }
            ].map((section, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: -4, y: -4 }}
                className="bg-white border-[4px] border-black rounded-3xl p-8 shadow-[8px_8px_0_0_#000] hover:shadow-[16px_16px_0_0_#000] transition-all relative group"
              >
                {/* Module ID Tag */}
                <div className="absolute top-6 right-8 font-mono text-[10px] font-black text-gray-400 tracking-widest bg-gray-50 px-2 py-1 border-[2px] border-black rounded-lg">
                  {section.id}
                </div>

                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 bg-gray-50 border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0_0_#000] group-hover:rotate-12 transition-transform">
                    <section.icon size={28} className={section.color} strokeWidth={3} />
                  </div>
                  <h3 className="font-black text-2xl tracking-tighter leading-none">{section.title}</h3>
                </div>

                <ul className="space-y-4">
                  {section.links.map(link => (
                    <li key={link}>
                      <a href="#" className="font-mono text-sm font-black text-gray-500 hover:text-black flex items-center gap-3 group/link transition-colors">
                        <div className="w-2 h-2 border-[2px] border-black rounded-sm bg-gray-100 group-hover/link:bg-purple-500 transition-colors" />
                        <span className="group-hover/link:translate-x-1 transition-transform inline-block">{link}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Architectural Dot Grid Decoration */}
                <div className="absolute bottom-6 right-6 opacity-[0.05] pointer-events-none group-hover:opacity-10 transition-opacity">
                  <div className="grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, j) => (
                      <div key={j} className="w-1 h-1 bg-black rounded-full" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example: Terminal Console */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#FEF9C3] border-t-[4px] border-black">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="font-black text-5xl md:text-6xl mb-6 tracking-tighter leading-[0.9]">
                Ready in <br />
                <span className="text-purple-600">Seconds.</span>
              </h2>
              <p className="text-xl text-gray-600 font-bold">
                Deploy with our lightweight SDKs or direct REST calls. Engineering simplicity at its core.
              </p>
            </div>
            
            <div className="flex gap-3">
              {['javascript', 'python', 'go'].map(lang => (
                <button 
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`px-6 py-2 border-[3px] border-black rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
                    activeLang === lang 
                      ? 'bg-black text-white shadow-[4px_4px_0_0_#7C3AED] -translate-y-1' 
                      : 'bg-white text-black hover:bg-gray-50'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
          
          <motion.div 
            layout
            className="bg-[#0F172A] border-[4px] border-black rounded-[2.5rem] overflow-hidden shadow-[24px_24px_0_0_#000] relative group"
          >
            {/* Terminal Header */}
            <div className="bg-black/40 border-b-[3px] border-black p-6 flex items-center justify-between">
              <div className="flex gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border-[1.5px] border-black" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border-[1.5px] border-black" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border-[1.5px] border-black" />
              </div>
              <div className="font-mono text-[10px] text-gray-500 font-black uppercase tracking-[0.4em]">
                API / V1 / SDK / {activeLang.toUpperCase()}
              </div>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(codeExamples[activeLang]);
                }}
                className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2"
              >
                Copy Output
              </button>
            </div>
            
            {/* Terminal Content */}
            <div className="p-10 overflow-x-auto min-h-[350px] relative">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.pre 
                  key={activeLang}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-300 font-mono text-sm leading-relaxed"
                >
                  <code>{codeExamples[activeLang]}</code>
                </motion.pre>
              </AnimatePresence>
              
              {/* Terminal Cursor */}
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2.5 h-5 bg-purple-500 ml-1 translate-y-1 shadow-[0_0_10px_#7C3AED]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#FCE7F3] border-t-[4px] border-black">
        {/* Floating Shapes */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: -45 }}
          transition={{ repeat: Infinity, duration: 15 }}
          className="absolute bottom-20 left-[5%] w-24 h-24 bg-cyan-400 border-[3px] border-black shadow-[8px_8px_0_0_#000] opacity-10 hidden md:block"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-black text-5xl md:text-6xl mb-6 tracking-tighter">Join the Protocol</h2>
            <p className="text-xl text-gray-600 font-bold max-w-2xl mx-auto">
              Collaborate with thousands of engineers building the next generation of real-time communication.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Discord', desc: 'Real-time dev support', icon: MessageCircle, color: 'bg-[#5865F2]' },
              { title: 'GitHub', desc: 'Open source core', icon: GitPullRequest, color: 'bg-black' },
              { title: 'Forum', desc: 'Knowledge exchange', icon: MessageSquare, color: 'bg-green-500' },
              { title: 'YouTube', desc: 'Technical deep-dives', icon: Play, color: 'bg-red-500' }
            ].map((card, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8 }}
                className="bg-white border-[4px] border-black rounded-[2.5rem] p-8 text-center shadow-[12px_12px_0_0_#000] hover:shadow-[16px_16px_0_0_#000] transition-all group"
              >
                <div className={`w-20 h-20 mx-auto ${card.color} border-[3px] border-black rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0_0_#000] group-hover:rotate-12 transition-transform`}>
                  <card.icon size={32} className="text-white" strokeWidth={3} />
                </div>
                <h3 className="font-black text-2xl mb-2 tracking-tighter">{card.title}</h3>
                <p className="text-sm font-bold text-gray-500 mb-8 leading-relaxed">{card.desc}</p>
                <button className="w-full py-3 bg-white text-black border-[3px] border-black rounded-xl font-black text-sm uppercase tracking-widest shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2">
                  Connect <ArrowRight size={16} strokeWidth={4} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DocsPage;
