import React, { useState } from 'react';
import { Search, Book, Users, Activity, Mail, MessageSquare, Clock, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const ContactPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How do I reset my workspace password?", a: "Workspace admins can reset passwords from the Settings > Security panel. Individual users can click 'Forgot Password' on the login screen." },
    { q: "Where can I find my API keys?", a: "API keys are located in your Workspace Settings under the 'Developer' tab. Only workspace owners and admins can generate new keys." },
    { q: "Does BitStream support SSO?", a: "Yes, SAML SSO is available on our Enterprise plans. We support Okta, Google Workspace, Azure AD, and OneLogin." },
    { q: "What should I do if a voice room is failing to connect?", a: "First, check our status page for ongoing incidents. If everything is green, ensure your network isn't blocking WebRTC UDP ports (10000-60000)." }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-black font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />

      {/* Hero & Search */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-black text-5xl md:text-7xl mb-6">How can we help?</h1>
          <p className="text-xl text-gray-600 font-medium mb-10">
            Search our knowledge base or reach out to our support team.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input 
              type="text" 
              placeholder="Search help articles..."
              className="w-full bg-white border-[3px] border-black rounded-xl py-4 pl-14 pr-4 font-bold text-lg focus:outline-none focus:ring-4 focus:ring-green-200 transition-shadow shadow-[4px_4px_0_0_#0F172A]"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Documentation', desc: 'Browse our guides', icon: Book, color: 'bg-purple-400' },
            { title: 'Community Forum', desc: 'Ask the community', icon: Users, color: 'bg-green-400' },
            { title: 'Status Page', desc: 'Check system status', icon: Activity, color: 'bg-yellow-400' },
            { title: 'Contact Sales', desc: 'Talk to our team', icon: Mail, color: 'bg-cyan-400' }
          ].map((card, i) => (
            <div key={i} className="bg-white border-[3px] border-black rounded-xl p-6 shadow-[4px_4px_0_0_#0F172A] hover:-translate-y-2 transition-transform cursor-pointer group">
              <div className={`w-12 h-12 ${card.color} border-[2px] border-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[2px_2px_0_0_#0F172A]`}>
                <card.icon size={24} className="text-white" />
              </div>
              <h3 className="font-black text-lg mb-1">{card.title}</h3>
              <p className="text-sm font-medium text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-6 bg-gray-50 border-y-[3px] border-black">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white border-[3px] border-black rounded-2xl p-8 shadow-[8px_8px_0_0_#0F172A]">
            <h2 className="font-black text-3xl mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-bold text-sm uppercase tracking-wider">Name</label>
                  <input type="text" className="w-full bg-white border-[2.5px] border-black rounded-lg px-4 py-3 font-medium focus:outline-none focus:ring-4 focus:ring-purple-200 transition-shadow shadow-[2px_2px_0_0_#0F172A]" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-sm uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full bg-white border-[2.5px] border-black rounded-lg px-4 py-3 font-medium focus:outline-none focus:ring-4 focus:ring-purple-200 transition-shadow shadow-[2px_2px_0_0_#0F172A]" placeholder="jane@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-bold text-sm uppercase tracking-wider">Subject</label>
                <div className="relative">
                  <select className="w-full bg-white border-[2.5px] border-black rounded-lg px-4 py-3 font-bold focus:outline-none focus:ring-4 focus:ring-purple-200 transition-shadow shadow-[2px_2px_0_0_#0F172A] appearance-none cursor-pointer">
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Sales Inquiry</option>
                    <option>Bug Report</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-black"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-sm uppercase tracking-wider">Message</label>
                <textarea rows={5} className="w-full bg-white border-[2.5px] border-black rounded-lg px-4 py-3 font-medium focus:outline-none focus:ring-4 focus:ring-purple-200 transition-shadow shadow-[2px_2px_0_0_#0F172A] resize-none" placeholder="How can we help you today?"></textarea>
              </div>

              <button type="submit" className="w-full bg-green-500 text-white font-black text-lg py-4 rounded-xl border-[3px] border-black shadow-[4px_4px_0_0_#0F172A] hover:-translate-y-1 transition-transform">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8 lg:pl-12">
            <div>
              <h2 className="font-black text-4xl mb-6">Get in touch directly</h2>
              <p className="text-lg font-medium text-gray-600 mb-8">
                For immediate assistance, our community and support team are available across multiple channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 border-[2.5px] border-black rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-1">Email Support</h4>
                  <p className="text-gray-600 font-medium mb-1">Drop us a line anytime.</p>
                  <a href="mailto:support@bitstream.io" className="font-bold text-purple-600 hover:underline">support@bitstream.io</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 border-[2.5px] border-black rounded-lg flex items-center justify-center shrink-0">
                  <MessageSquare size={24} className="text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-1">Discord Community</h4>
                  <p className="text-gray-600 font-medium mb-1">Join 10k+ developers.</p>
                  <a href="#" className="font-bold text-cyan-600 hover:underline">discord.gg/bitstream</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 border-[2.5px] border-black rounded-lg flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-1">Response Time</h4>
                  <p className="text-gray-600 font-medium">We aim to respond to all inquiries within <span className="font-bold text-black">24 hours</span> during business days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Support */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-4xl mb-12 text-center">Support FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white border-[3px] border-black rounded-xl overflow-hidden hover:bg-gray-50 transition-colors"
                style={{ boxShadow: activeFaq === i ? '4px 4px 0 0 #0F172A' : 'none' }}
              >
                <button 
                  className="w-full text-left p-6 font-bold text-lg flex justify-between items-center"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  {faq.q}
                  {activeFaq === i ? <Minus size={24} /> : <Plus size={24} />}
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-gray-600 font-medium"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
