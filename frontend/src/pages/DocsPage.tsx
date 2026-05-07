import React, { useState } from 'react';
import { Search, Download, Code, Server, MessageSquare, Video, Calendar, Folders, Shield, GitPullRequest, MessageCircle, Play, ArrowRight } from 'lucide-react';
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
    <div className="min-h-screen bg-bg-primary text-black font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />

      {/* Hero + Search */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-black text-5xl md:text-6xl mb-6">Documentation</h1>
          <p className="text-xl text-gray-600 font-medium mb-10">
            Everything you need to build with BitStream.
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input 
              type="text" 
              placeholder="Search docs... (Press / to focus)"
              className="w-full bg-white border-[3px] border-black rounded-xl py-4 pl-14 pr-16 font-bold text-lg focus:outline-none focus:ring-4 focus:ring-purple-200 transition-shadow shadow-[4px_4px_0_0_#0F172A]"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 border-[2px] border-gray-300 rounded px-2 py-0.5 text-xs font-bold text-gray-400">
              /
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['Authentication', 'Webhooks', 'Docker Setup', 'REST API'].map(tag => (
              <span key={tag} className="bg-white border-[2px] border-black px-3 py-1 rounded-full text-xs font-bold shadow-[2px_2px_0_0_#0F172A] cursor-pointer hover:-translate-y-0.5 transition-transform">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Cards */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: Download, title: 'Install BitStream', desc: 'Get up and running in 5 minutes', color: 'bg-purple-400' },
            { icon: Code, title: 'API Reference', desc: 'Integrate with your tools', color: 'bg-green-400' },
            { icon: Server, title: 'Self-Hosting Guide', desc: 'Deploy on your infrastructure', color: 'bg-cyan-400' }
          ].map((card, i) => (
            <div key={i} className="bg-white border-[3px] border-black rounded-xl p-6 shadow-[6px_6px_0_0_#0F172A] hover:-translate-y-2 transition-transform cursor-pointer group">
              <div className={`w-12 h-12 ${card.color} border-[2px] border-black rounded-lg flex items-center justify-center mb-6 shadow-[2px_2px_0_0_#0F172A] group-hover:scale-110 transition-transform`}>
                <card.icon size={24} className="text-white" />
              </div>
              <h3 className="font-black text-xl mb-2">{card.title}</h3>
              <p className="text-gray-600 font-medium mb-4">{card.desc}</p>
              <div className="font-bold text-sm underline decoration-2 underline-offset-4 group-hover:text-purple-600 flex items-center gap-1">Explore <ArrowRight size={14} strokeWidth={4} /></div>
            </div>
          ))}
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-20 px-6 bg-gray-50 border-y-[3px] border-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: 'Getting Started', icon: Play,
              links: ['Installation', 'First Steps', 'Configuration', 'Troubleshooting']
            },
            { 
              title: 'Features', icon: MessageSquare,
              links: ['Messaging', 'Video Calls', 'Scheduling', 'Workspaces']
            },
            { 
              title: 'API Reference', icon: Code,
              links: ['Authentication', 'REST API', 'WebSocket API', 'Webhooks']
            },
            { 
              title: 'Self-Hosting', icon: Server,
              links: ['Docker Setup', 'Kubernetes', 'Environment Variables', 'Backup & Restore']
            },
            { 
              title: 'Integrations', icon: Folders,
              links: ['GitHub', 'Slack', 'Google Workspace', 'Build Custom']
            },
            { 
              title: 'Security', icon: Shield,
              links: ['Encryption', 'Authentication', 'Permissions', 'Compliance']
            }
          ].map((section, i) => (
            <div key={i} className="bg-white border-[3px] border-black rounded-xl p-8 shadow-[4px_4px_0_0_#0F172A]">
              <div className="flex items-center gap-3 mb-6">
                <section.icon size={24} className="text-purple-600" />
                <h3 className="font-black text-xl">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link}>
                    <a href="#" className="font-semibold text-gray-600 hover:text-black hover:underline decoration-2 underline-offset-4 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Code Example */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-black text-4xl mb-12">Quick Integration Example</h2>
          
          <div className="bg-[#1E1E1E] border-[3px] border-black rounded-2xl overflow-hidden shadow-[8px_8px_0_0_#0F172A]">
            <div className="bg-[#2D2D2D] border-b-[3px] border-black p-4 flex justify-between items-center">
              <div className="flex gap-2">
                {['javascript', 'python', 'go'].map(lang => (
                  <button 
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-4 py-1.5 rounded-md font-bold text-xs uppercase transition-colors ${
                      activeLang === lang ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <button className="text-gray-400 hover:text-white font-bold text-xs uppercase flex items-center gap-2">
                Copy Code
              </button>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-gray-300 font-mono text-sm">
                <code>{codeExamples[activeLang]}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-24 px-6 bg-white border-t-[3px] border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-12 text-center">Join the Community</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Discord', desc: 'Chat with 10K+ developers', icon: MessageCircle, color: 'bg-purple-500' },
              { title: 'GitHub', desc: 'Contribute to open source', icon: GitPullRequest, color: 'bg-black' },
              { title: 'Forum', desc: 'Ask questions, get help', icon: MessageSquare, color: 'bg-green-500' },
              { title: 'YouTube', desc: 'Watch tutorials', icon: Play, color: 'bg-red-500' }
            ].map((card, i) => (
              <div key={i} className="bg-white border-[3px] border-black rounded-xl p-6 text-center shadow-[4px_4px_0_0_#0F172A] hover:-translate-y-2 transition-transform cursor-pointer">
                <div className={`w-16 h-16 mx-auto ${card.color} border-[3px] border-black rounded-full flex items-center justify-center mb-4`}>
                  <card.icon size={28} className="text-white" />
                </div>
                <h3 className="font-black text-xl mb-2">{card.title}</h3>
                <p className="text-sm font-medium text-gray-600 mb-4">{card.desc}</p>
                <button className="font-bold text-sm border-[2px] border-black px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 mx-auto">Join <ArrowRight size={14} strokeWidth={4} /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DocsPage;
