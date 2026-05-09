import { useState } from 'react';
import { Search, Book, Users, Activity, Mail, MessageSquare, Clock, Plus, Minus, Send, Shield, Zap, Globe, ArrowRight, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import InfiniteGridBackground from '../components/ui/InfiniteGridBackground';


const ContactPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How do I reset my workspace password?", a: "Workspace admins can reset passwords from the Settings > Security panel. Individual users can click 'Forgot Password' on the login screen." },
    { q: "Where can I find my API keys?", a: "API keys are located in your Workspace Settings under the 'Developer' tab. Only workspace owners and admins can generate new keys." },
    { q: "Does BitStream support SSO?", a: "Yes, SAML SSO is available on our Enterprise plans. We support Okta, Google Workspace, Azure AD, and OneLogin." },
    { q: "What should I do if a voice room is failing to connect?", a: "First, check our status page for ongoing incidents. If everything is green, ensure your network isn't blocking WebRTC UDP ports (10000-60000)." }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-black font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      {/* Global Dynamic Infinite Grid Background */}
      <InfiniteGridBackground opacity={0.1} className="z-50" />







      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 text-center relative overflow-hidden">
        {/* Floating Shapes */}
        <motion.div
          animate={{ rotate: 360, x: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-20 left-[5%] w-32 h-32 bg-purple-500 border-[3px] border-black rounded-[2.5rem] shadow-[12px_12px_0_0_#000] opacity-10 hidden lg:block"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: -45 }}
          transition={{ repeat: Infinity, duration: 15 }}
          className="absolute bottom-20 right-[10%] w-40 h-40 bg-green-400 border-[3px] border-black rounded-full shadow-[16px_16px_0_0_#000] opacity-10 hidden lg:block"
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block bg-black text-white border-[3px] border-black px-6 py-2 rounded-2xl font-black text-xs uppercase tracking-[0.3em] mb-10 shadow-[6px_6px_0_0_#7C3AED]">
            Support
          </div>
          <h1 className="font-black text-6xl md:text-8xl mb-8 tracking-tighter leading-[0.85]">
            Need <br />
            <span className="text-purple-600 underline decoration-black decoration-8 underline-offset-8">Help?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-bold mb-16 max-w-2xl mx-auto leading-relaxed">
            Search our help guides or reach out to our team directly.
          </p>

          <div className="relative max-w-2xl mx-auto group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors" size={32} strokeWidth={3} />
            <input 
              type="text" 
              placeholder="Search help articles..."
              className="w-full bg-white border-[4px] border-black rounded-[2.5rem] py-8 pl-20 pr-8 font-black text-2xl focus:outline-none focus:ring-8 focus:ring-purple-500/10 transition-all shadow-[16px_16px_0_0_#000] focus:shadow-[24px_24px_0_0_#7C3AED] placeholder:text-gray-300"
            />
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Documentation', desc: 'Read our setup guides', icon: Book, color: 'bg-purple-500', id: 'HUB-01' },
            { title: 'Forum', desc: 'Join the community', icon: Users, color: 'bg-green-500', id: 'HUB-02' },
            { title: 'Status', desc: 'Check system health', icon: Activity, color: 'bg-yellow-400', id: 'HUB-03' },
            { title: 'Sales', desc: 'Talk to our team', icon: Mail, color: 'bg-cyan-400', id: 'HUB-04' }
          ].map((card, i) => (
            <motion.div 
              key={i} 
              whileHover={{ x: -4, y: -4 }}
              className="bg-white border-[4px] border-black rounded-3xl p-8 shadow-[8px_8px_0_0_#000] hover:shadow-[16px_16px_0_0_#000] transition-all cursor-pointer group relative"
            >

              <div className={`w-14 h-14 ${card.color} border-[3px] border-black rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-[4px_4px_0_0_#000]`}>
                <card.icon size={28} className="text-white" strokeWidth={3} />
              </div>
              <h3 className="font-black text-xl mb-2 tracking-tight">{card.title}</h3>
              <p className="text-sm font-bold text-gray-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Matrix */}
      <section className="py-32 px-6 bg-[#DDD6FE] border-y-[4px] border-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 relative z-10">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white border-[4px] border-black rounded-[3rem] p-10 md:p-14 shadow-[24px_24px_0_0_#000]"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <Send size={24} className="text-white" />
              </div>
              <h2 className="font-black text-4xl tracking-tighter">Send a Message</h2>
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="font-black text-xs uppercase tracking-widest text-gray-400">Your Name</label>
                  <input type="text" className="w-full bg-white border-[4px] border-black rounded-2xl px-6 py-5 font-bold text-lg focus:outline-none focus:ring-8 focus:ring-purple-500/10 transition-all shadow-[6px_6px_0_0_#000]" placeholder="Jane Doe" />
                </div>
                <div className="space-y-3">
                  <label className="font-black text-xs uppercase tracking-widest text-gray-400">Your Email</label>
                  <input type="email" className="w-full bg-white border-[4px] border-black rounded-2xl px-6 py-5 font-bold text-lg focus:outline-none focus:ring-8 focus:ring-purple-500/10 transition-all shadow-[6px_6px_0_0_#000]" placeholder="jane@company.com" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="font-black text-xs uppercase tracking-widest text-gray-400">Subject</label>
                <div className="relative">
                  <select className="w-full bg-white border-[4px] border-black rounded-2xl px-6 py-5 font-black text-lg focus:outline-none focus:ring-8 focus:ring-purple-500/10 transition-all shadow-[6px_6px_0_0_#000] appearance-none cursor-pointer">
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Partnerships</option>
                    <option>Security</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-transparent border-t-black"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-black text-xs uppercase tracking-widest text-gray-400">Your Message</label>
                <textarea rows={5} className="w-full bg-white border-[4px] border-black rounded-2xl px-6 py-5 font-bold text-lg focus:outline-none focus:ring-8 focus:ring-purple-500/10 transition-all shadow-[6px_6px_0_0_#000] resize-none" placeholder="Tell us more..."></textarea>
              </div>

              <button type="submit" className="w-full bg-green-500 text-white font-black text-xl py-6 rounded-2xl border-[4px] border-black shadow-[8px_8px_0_0_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all flex items-center justify-center gap-3">
                Send Message <Send size={24} strokeWidth={4} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h2 className="font-black text-5xl md:text-6xl mb-8 tracking-tighter leading-none">Get in <br /> Touch.</h2>
              <p className="text-xl font-bold text-gray-600 max-w-lg leading-relaxed">
                Reach out to our team directly through our support channels.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { title: 'Email Support', val: 'support@bitstream.io', icon: Mail, color: 'text-purple-600', bg: 'bg-purple-100' },
                { title: 'Discord', val: 'discord.gg/bitstream', icon: MessageSquare, color: 'text-cyan-600', bg: 'bg-cyan-100' },
                { title: 'System Status', val: '99.99% Uptime', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-100' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group"
                >
                  <div className={`w-16 h-16 ${item.bg} border-[3px] border-black rounded-2xl flex items-center justify-center shrink-0 shadow-[4px_4px_0_0_#000] group-hover:rotate-6 transition-transform`}>
                    <item.icon size={32} className={item.color} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-black text-2xl tracking-tight">{item.title}</h4>
                    <p className="font-mono text-sm font-black text-gray-400 uppercase tracking-widest">{item.val}</p>
                  </div>
                  <ArrowRight size={24} className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-purple-600" strokeWidth={4} />
                </motion.div>
              ))}
            </div>

            <div className="pt-10 border-t-[3px] border-black border-dashed">
              <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-gray-500">
                <Shield size={20} className="text-green-500" /> Secure Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-black text-5xl md:text-6xl mb-6 tracking-tighter">Common Questions</h2>
            <p className="text-gray-500 font-black uppercase text-xs tracking-[0.3em]">Help articles</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                className={`bg-white border-[4px] border-black rounded-[2rem] overflow-hidden transition-all ${
                  activeFaq === i ? 'shadow-[12px_12px_0_0_#000]' : 'shadow-[4px_4px_0_0_#000] hover:shadow-[8px_8px_0_0_#000]'
                }`}
              >
                <button 
                  className="w-full text-left p-8 font-black text-xl flex justify-between items-center group"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="group-hover:text-purple-600 transition-colors">{faq.q}</span>
                  <div className={`w-10 h-10 border-[3px] border-black rounded-xl flex items-center justify-center transition-all ${
                    activeFaq === i ? 'bg-black text-white' : 'bg-gray-50'
                  }`}>
                    {activeFaq === i ? <Minus size={20} strokeWidth={4} /> : <Plus size={20} strokeWidth={4} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8 text-gray-600 font-bold text-lg leading-relaxed border-t-[3px] border-black border-dashed pt-6"
                    >
                      <div className="flex gap-4">
                        <div className="mt-1.5 w-2 h-2 bg-purple-600 rounded-sm shrink-0" />
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Support */}
      <section className="py-32 px-6 bg-[#FEF9C3] border-t-[4px] border-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block bg-white border-[3px] border-black px-6 py-2 rounded-2xl font-black text-xs uppercase tracking-[0.3em] mb-10 shadow-[6px_6px_0_0_#000]">
                Our Scale
              </div>
              <h2 className="font-black text-6xl md:text-7xl mb-8 tracking-tighter leading-none">
                Global <br />
                <span className="text-purple-600 underline decoration-black decoration-8 underline-offset-8">Support.</span>
              </h2>
              <p className="text-xl text-gray-700 font-bold mb-12 max-w-lg leading-relaxed">
                Our team is available 24/7 across the globe to help with any issues.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Latency', val: '< 50ms', icon: Zap },
                  { label: 'Uptime', val: '99.99%', icon: Activity },
                  { label: 'Nodes', val: '12+', icon: Globe },
                  { label: 'Support', val: '24/7', icon: Monitor }
                ].map((stat, i) => (stat &&
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white border-[2.5px] border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0_0_#000]">
                      <stat.icon size={20} className="text-purple-600" strokeWidth={3} />
                    </div>
                    <div>
                      <div className="font-black text-lg tracking-tight">{stat.val}</div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white border-[4px] border-black rounded-[3rem] p-10 shadow-[24px_24px_0_0_#000] relative z-10">
                <div className="aspect-video bg-gray-50 border-[3px] border-black rounded-2xl flex items-center justify-center relative overflow-hidden">
                   {/* Abstract Map Grid */}
                   <div className="absolute inset-0 opacity-[0.1]"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
                      backgroundSize: '20px 20px'
                    }} />
                   <Globe size={120} className="text-purple-600 opacity-20" strokeWidth={1} />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                     <div className="w-4 h-4 bg-purple-600 rounded-full animate-ping" />
                     <div className="w-3 h-3 bg-purple-600 rounded-full border-[2px] border-black -mt-3.5" />
                   </div>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div className="font-mono text-xs font-black text-gray-400 uppercase tracking-widest">
                    System Health
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-black text-xs uppercase tracking-widest text-green-600">All Systems Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
