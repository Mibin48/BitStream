import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Plus, Minus } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import InfiniteGridBackground from '../components/ui/InfiniteGridBackground';


const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);


  return (
    <div className="min-h-screen bg-[#F8FAFC] text-black font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      {/* Global Dynamic Infinite Grid Background */}
      <InfiniteGridBackground opacity={0.1} className="z-50" />






      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center relative">
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
            Simple, clear <br />
            <span className="text-purple-600">Pricing.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-12 max-w-2xl mx-auto">
            Choose the plan that's right for your team. From small projects to global companies.
          </p>

          <div className="flex items-center justify-center gap-6 mb-16">
            <span className={`font-black text-lg transition-colors ${!isYearly ? 'text-black' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-20 h-10 bg-white rounded-full border-[3px] border-black p-1.5 relative transition-all hover:shadow-[4px_4px_0_0_#000]"
            >
              <motion.div
                animate={{ x: isYearly ? 40 : 0 }}
                className="w-6 h-6 bg-black rounded-full border-[2px] border-black"
              />
            </button>
            <div className="flex items-center gap-3">
              <span className={`font-black text-lg transition-colors ${isYearly ? 'text-black' : 'text-gray-400'}`}>
                Yearly
              </span>
              <span className="bg-yellow-400 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full border-[2px] border-black shadow-[2px_2px_0_0_#000]">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-4">
          {/* Free Tier */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white border-[4px] border-black rounded-[2.5rem] flex flex-col relative shadow-[12px_12px_0_0_#0F172A] overflow-hidden group h-full"
          >
            <div className="bg-[#E2E8F0] p-8 border-b-[4px] border-black">
              <div className="bg-white border-[2px] border-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase inline-block mb-6 shadow-[2px_2px_0_0_#000]">
                Starter
              </div>
              <div className="font-black text-6xl mb-2 tracking-tighter">$0</div>
              <div className="font-bold text-gray-600 uppercase text-xs tracking-widest">Free forever</div>
            </div>

            <div className="p-8 flex flex-col flex-1">
              <ul className="space-y-5 mb-10 flex-1">
                {['Unlimited messages', 'Up to 10 team members', '1:1 video calls', '5GB storage', 'Community support'].map(feature => (
                  <li key={feature} className="flex items-center gap-3 font-bold text-sm">
                    <div className="w-5 h-5 rounded-full bg-green-400 border-[2px] border-black flex items-center justify-center flex-shrink-0">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 rounded-2xl font-black text-lg border-[3px] border-black bg-white hover:bg-gray-100 transition-all hover:shadow-[6px_6px_0_0_#000] active:translate-y-1 active:shadow-none">
                Start Coding
              </button>
            </div>
          </motion.div>

          {/* Pro Tier */}
          <motion.div
            whileHover={{ y: -12 }}
            className="bg-white border-[4px] border-black rounded-[2.5rem] flex flex-col relative shadow-[24px_24px_0_0_#7C3AED] overflow-hidden group z-10 h-full scale-105"
          >
            <div className="absolute top-4 right-4 bg-yellow-400 border-[3px] border-black px-4 py-1 rounded-xl text-[10px] font-black uppercase rotate-12 shadow-[4px_4px_0_0_#000] z-20">
              Most Popular
            </div>
            <div className="bg-[#DDD6FE] p-8 border-b-[4px] border-black relative">
              <div className="bg-purple-600 text-white border-[2px] border-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase inline-block mb-6 shadow-[2px_2px_0_0_#000]">
                Pro
              </div>
              <div className="font-black text-6xl mb-2 tracking-tighter">
                ${isYearly ? '8' : '10'}
                <span className="text-xl font-bold text-purple-800 ml-1">/mo</span>
              </div>
              <div className="font-bold text-purple-800 uppercase text-xs tracking-widest">Per user</div>
            </div>

            <div className="p-8 flex flex-col flex-1">
              <ul className="space-y-5 mb-10 flex-1">
                {['Everything in Starter', 'Unlimited members', 'Group video calls', '100GB storage', 'Priority support'].map(feature => (
                  <li key={feature} className="flex items-center gap-3 font-bold text-sm">
                    <div className="w-5 h-5 rounded-full bg-purple-500 border-[2px] border-black text-white flex items-center justify-center flex-shrink-0">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 bg-purple-600 text-white rounded-2xl font-black text-lg border-[3px] border-black hover:bg-purple-700 transition-all hover:shadow-[6px_6px_0_0_#0F172A] active:translate-y-1 active:shadow-none">
                Start Free Trial
              </button>
            </div>
          </motion.div>

          {/* Enterprise Tier */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white border-[4px] border-black rounded-[2.5rem] flex flex-col relative shadow-[12px_12px_0_0_#BAE6FD] overflow-hidden group h-full"
          >
            <div className="bg-[#BAE6FD] p-8 border-b-[4px] border-black">
              <div className="bg-white border-[2px] border-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase inline-block mb-6 shadow-[2px_2px_0_0_#000]">
                Enterprise
              </div>
              <div className="font-black text-5xl mb-2 tracking-tighter mt-1">Custom</div>
              <div className="font-bold text-blue-800 uppercase text-xs tracking-widest">Large teams</div>
            </div>

            <div className="p-8 flex flex-col flex-1">
              <ul className="space-y-5 mb-10 flex-1">
                {['Everything in Pro', 'Unlimited storage', 'SSO & Security', 'Admin tools', 'Custom setup'].map(feature => (
                  <li key={feature} className="flex items-center gap-3 font-bold text-sm">
                    <div className="w-5 h-5 rounded-full bg-cyan-400 border-[2px] border-black flex items-center justify-center flex-shrink-0">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 rounded-2xl font-black text-lg border-[3px] border-black bg-white hover:bg-gray-100 transition-all hover:shadow-[6px_6px_0_0_#000] active:translate-y-1 active:shadow-none">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table: System Matrix Console */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-4 tracking-tighter">Plan Details</h2>
            <p className="text-gray-500 font-bold uppercase text-xs tracking-[0.3em]">Full feature breakdown</p>
          </div>

          <div className="bg-white border-[4px] border-black rounded-[2rem] overflow-hidden shadow-[20px_20px_0_0_#000] group">
            {/* Terminal Top Bar */}
            <div className="bg-black p-4 flex items-center justify-between border-b-[4px] border-black">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border-[1.5px] border-black" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border-[1.5px] border-black" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border-[1.5px] border-black" />
              </div>
              <div className="font-mono text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                Detailed Comparison
              </div>
              <div className="w-12" /> {/* Spacer */}
            </div>

            <div className="overflow-x-auto bg-[#FBFBFE]">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b-[4px] border-black">
                    <th className="p-6 font-mono font-black uppercase text-xs tracking-widest border-r-[4px] border-black bg-white w-2/5">
                      Feature
                    </th>
                    <th className="p-6 font-mono font-black uppercase text-xs tracking-widest border-r-[4px] border-black text-center w-1/5 bg-gray-50">
                      Starter
                    </th>
                    <th className="p-6 font-mono font-black uppercase text-xs tracking-widest border-r-[4px] border-black bg-purple-600 text-white text-center w-1/5">
                      Pro
                    </th>
                    <th className="p-6 font-mono font-black uppercase text-xs tracking-widest text-center w-1/5 bg-gray-50">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody className="font-bold">
                  {/* Category: Messaging */}
                  <tr className="bg-black/5 border-b-[2px] border-black">
                    <td colSpan={4} className="p-3 font-mono font-black text-[10px] uppercase tracking-[0.4em] text-center text-gray-500">
                      Messaging
                    </td>
                  </tr>
                  {[
                    { label: 'Direct Messages', starter: true, pro: true, enterprise: true },
                    { label: 'Group Channels', starter: true, pro: true, enterprise: true },
                    { label: 'Message History', starter: '10K', pro: 'Unlimited', enterprise: 'Unlimited' }
                  ].map((row) => (
                    <tr key={row.label} className="border-b-[2px] border-black/10 hover:bg-purple-500/5 transition-colors">
                      <td className="p-5 border-r-[4px] border-black font-mono text-sm uppercase tracking-tight">{row.label}</td>
                      <td className="p-5 text-center border-r-[4px] border-black">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? <Check className="mx-auto text-green-500" strokeWidth={4} size={18} /> : <X className="mx-auto text-red-500" strokeWidth={4} size={18} />
                        ) : <span className="font-mono text-xs">{row.starter}</span>}
                      </td>
                      <td className="p-5 text-center border-r-[4px] border-black bg-purple-500/5">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? <Check className="mx-auto text-purple-600" strokeWidth={4} size={18} /> : <X className="mx-auto text-red-500" strokeWidth={4} size={18} />
                        ) : <span className="font-mono text-xs text-purple-600 font-black">{row.pro}</span>}
                      </td>
                      <td className="p-5 text-center">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? <Check className="mx-auto text-cyan-600" strokeWidth={4} size={18} /> : <X className="mx-auto text-red-500" strokeWidth={4} size={18} />
                        ) : <span className="font-mono text-xs">{row.enterprise}</span>}
                      </td>
                    </tr>
                  ))}

                  {/* Category: Audio/Video */}
                  <tr className="bg-black/5 border-b-[2px] border-black">
                    <td colSpan={4} className="p-3 font-mono font-black text-[10px] uppercase tracking-[0.4em] text-center text-gray-500">
                      Video & Calls
                    </td>
                  </tr>
                  {[
                    { label: 'Participant Limit', starter: '2', pro: '50', enterprise: 'Unlimited' },
                    { label: 'Screen Sharing', starter: true, pro: true, enterprise: true },
                    { label: 'Cloud Recording', starter: false, pro: true, enterprise: true }
                  ].map((row) => (
                    <tr key={row.label} className="border-b-[2px] border-black/10 hover:bg-purple-500/5 transition-colors">
                      <td className="p-5 border-r-[4px] border-black font-mono text-sm uppercase tracking-tight">{row.label}</td>
                      <td className="p-5 text-center border-r-[4px] border-black">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? <Check className="mx-auto text-green-500" strokeWidth={4} size={18} /> : <X className="mx-auto text-red-500" strokeWidth={4} size={18} />
                        ) : <span className="font-mono text-xs">{row.starter}</span>}
                      </td>
                      <td className="p-5 text-center border-r-[4px] border-black bg-purple-500/5">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? <Check className="mx-auto text-purple-600" strokeWidth={4} size={18} /> : <X className="mx-auto text-red-500" strokeWidth={4} size={18} />
                        ) : <span className="font-mono text-xs text-purple-600 font-black">{row.pro}</span>}
                      </td>
                      <td className="p-5 text-center">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? <Check className="mx-auto text-cyan-600" strokeWidth={4} size={18} /> : <X className="mx-auto text-red-500" strokeWidth={4} size={18} />
                        ) : <span className="font-mono text-xs">{row.enterprise}</span>}
                      </td>
                    </tr>
                  ))}
                  {/* Category: Storage & Security */}
                  <tr className="bg-black/5 border-b-[2px] border-black">
                    <td colSpan={4} className="p-3 font-mono font-black text-[10px] uppercase tracking-[0.4em] text-center text-gray-500">
                      Storage & Security
                    </td>
                  </tr>
                  {[
                    { label: 'Storage Limit', starter: '5GB', pro: '100GB/u', enterprise: 'Unlimited' },
                    { label: 'SSO (SAML/Okta)', starter: false, pro: false, enterprise: true },
                    { label: 'Audit Logging', starter: false, pro: true, enterprise: true }
                  ].map((row) => (
                    <tr key={row.label} className="border-b-[2px] border-black/10 hover:bg-purple-500/5 transition-colors">
                      <td className="p-5 border-r-[4px] border-black font-mono text-sm uppercase tracking-tight">{row.label}</td>
                      <td className="p-5 text-center border-r-[4px] border-black">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? <Check className="mx-auto text-green-500" strokeWidth={4} size={18} /> : <X className="mx-auto text-red-500" strokeWidth={4} size={18} />
                        ) : <span className="font-mono text-xs">{row.starter}</span>}
                      </td>
                      <td className="p-5 text-center border-r-[4px] border-black bg-purple-500/5">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? <Check className="mx-auto text-purple-600" strokeWidth={4} size={18} /> : <X className="mx-auto text-red-500" strokeWidth={4} size={18} />
                        ) : <span className="font-mono text-xs text-purple-600 font-black">{row.pro}</span>}
                      </td>
                      <td className="p-5 text-center">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? <Check className="mx-auto text-cyan-600" strokeWidth={4} size={18} /> : <X className="mx-auto text-red-500" strokeWidth={4} size={18} />
                        ) : <span className="font-mono text-xs">{row.enterprise}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Knowledge Base Grid */}
      <section className="py-24 px-6 relative overflow-hidden border-t-[4px] border-black">
        {/* Background Blueprint Grid - Simplified internal usage if fixed background is not desired */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden">
          <InfiniteGridBackground opacity={0.1} className="absolute" />





        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-4 tracking-tighter">FAQ</h2>
            <p className="text-gray-500 font-bold uppercase text-xs tracking-[0.3em]">Common questions answered</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {[
              {
                q: "Can I self-host BitStream?",
                a: "Yes, our core platform is open source and can be self-hosted for free forever. We provide Docker images and Helm charts for instant deployment.",
                color: "shadow-[#7C3AED]"
              },
              {
                q: "Storage limit reached?",
                a: "You'll be notified at 80% capacity. Pro users can add automated overflow storage, while Free users can rotate logs or upgrade instantly.",
                color: "shadow-[#FACC15]"
              },
              {
                q: "Flexible Plan Migration?",
                a: "Absolutely. Our billing engine handles prorated credits automatically. Upgrade or downgrade mid-cycle without losing a second of uptime.",
                color: "shadow-[#22C55E]"
              },
              {
                q: "Education Discounts?",
                a: "We love hackers! Contact engineering support from a .edu address for 50% off Pro tier and priority access to our beta APIs.",
                color: "shadow-[#06B6D4]"
              },
              {
                q: "Pro Team Limits?",
                a: "The Pro plan allows for unlimited team members. You only pay for the active seats you use each month, making it easy to scale.",
                color: "shadow-[#EC4899]"
              },
              {
                q: "Data Security Protocols?",
                a: "All data is encrypted at rest using AES-256 and in transit via TLS 1.3. Enterprise plans include additional SOC2 compliance reporting.",
                color: "shadow-[#8B5CF6]"
              },
              {
                q: "Monthly vs Yearly Billing?",
                a: "Switch between cycles anytime. Yearly billing saves you 20% overall and includes a dedicated account manager for Pro teams.",
                color: "shadow-[#F97316]"
              },
              {
                q: "Trial for Pro Tier?",
                a: "Yes! We offer a 14-day full-access trial for the Pro plan. No credit card required to start building your workspace.",
                color: "shadow-[#10B981]"
              }
            ].map((faq, i) => (
              <motion.div
                key={faq.q}
                whileHover={{ y: -5 }}
                className={`bg-white border-[4px] border-black rounded-[2rem] overflow-hidden transition-all ${faq.color} ${activeFaq === i ? 'shadow-[12px_12px_0_0_#000]' : 'shadow-[8px_8px_0_0_#000]'}`}
              >
                <button
                  className="w-full text-left p-8 flex justify-between items-start gap-4 group"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <div className="flex gap-4">
                    <div className={`w-10 h-10 rounded-xl border-[2px] border-black flex items-center justify-center flex-shrink-0 transition-colors ${activeFaq === i ? 'bg-black text-white' : 'bg-gray-100'}`}>
                      {i % 4 === 0 ? <Plus size={20} /> : i % 4 === 1 ? <Minus size={20} /> : i % 4 === 2 ? <Check size={20} /> : <Plus size={20} />}
                    </div>
                    <div>
                      <h3 className="font-black text-xl tracking-tight leading-tight mb-2 group-hover:text-purple-600 transition-colors">
                        {faq.q}
                      </h3>
                    </div>
                  </div>
                  <div className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-135' : 'rotate-0'}`}>
                    <Plus size={24} strokeWidth={3} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <div className="p-6 bg-gray-50 border-[2.5px] border-black rounded-2xl font-bold text-gray-600 leading-relaxed">
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

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Floating Shapes */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: 45 }}
          transition={{ repeat: Infinity, duration: 15 }}
          className="absolute bottom-10 left-[5%] w-24 h-24 bg-cyan-400 border-[3px] border-black shadow-[8px_8px_0_0_#000] opacity-20 hidden md:block"
        />
        <motion.div
          animate={{ y: [0, 40, 0], rotate: -12 }}
          transition={{ repeat: Infinity, duration: 20 }}
          className="absolute top-10 right-[8%] w-32 h-32 bg-yellow-400 border-[3px] border-black rounded-full shadow-[10px_10px_0_0_#000] opacity-20 hidden lg:block"
        />

        <div className="max-w-5xl mx-auto bg-black border-[4px] border-black rounded-[3rem] p-16 md:p-24 text-center shadow-[24px_24px_0_0_#7C3AED] relative overflow-hidden group">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} />
          <div className="relative z-10">
            <h2 className="font-black text-5xl md:text-7xl mb-8 text-white tracking-tighter leading-[0.9]">
              Have more <br />
              <span className="text-purple-400">Questions?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-medium mb-12 max-w-2xl mx-auto">
              Our team is here to help you find the right fit for your business.
            </p>
            <button className="bg-white text-black border-[3px] border-black px-12 py-6 rounded-2xl font-black text-xl shadow-[8px_8px_0_0_#7C3AED] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#7C3AED] transition-all active:translate-y-0 active:shadow-none">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
