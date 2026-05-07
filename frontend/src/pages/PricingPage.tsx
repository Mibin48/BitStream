import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Plus, Minus } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Can I self-host BitStream?", a: "Yes, our core platform is open source and can be self-hosted for free forever." },
    { q: "What happens when I hit my storage limit?", a: "You'll be notified when you reach 80% capacity. You can either upgrade your plan or clear old files." },
    { q: "Can I change plans anytime?", a: "Absolutely. Prorated charges or credits will be applied automatically when you switch plans." },
    { q: "Do you offer student/nonprofit discounts?", a: "Yes! Contact our support team from an .edu or registered nonprofit email for 50% off Pro plans." }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-black font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-black text-5xl md:text-7xl mb-6 tracking-tight">
            Simple, Transparent <span className="text-purple-600 relative">Pricing
              <div className="absolute bottom-1 left-0 w-full h-4 bg-yellow-300/60 -z-10 -rotate-2 rounded-sm" />
            </span>
          </h1>
          <p className="text-xl text-gray-600 font-medium mb-12">
            No hidden fees. Cancel anytime. Open source forever.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`font-bold ${!isYearly ? 'text-black' : 'text-gray-400'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-16 h-8 bg-black rounded-full border-[2.5px] border-black p-1 relative transition-colors"
            >
              <motion.div 
                animate={{ x: isYearly ? 32 : 0 }}
                className="w-5 h-5 bg-white rounded-full border-[2px] border-black"
              />
            </button>
            <span className={`font-bold flex items-center gap-2 ${isYearly ? 'text-black' : 'text-gray-400'}`}>
              Yearly
              <span className="bg-green-400 text-black text-[10px] uppercase px-2 py-0.5 rounded-full border-[1.5px] border-black">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <div className="bg-white border-[3px] border-black rounded-2xl p-8 flex flex-col relative shadow-[4px_4px_0_0_#0F172A] hover:-translate-y-2 transition-transform h-full">
            <div className="bg-green-400 border-[2px] border-black px-3 py-1 rounded-full text-xs font-black uppercase inline-block self-start mb-6">
              Always Free
            </div>
            <div className="font-black text-5xl mb-2">$0</div>
            <div className="font-bold text-gray-500 mb-6">For individuals and small teams</div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Unlimited messages', 'Up to 10 team members', '1:1 video calls (40 min limit)', '5GB storage', 'Community support'].map(feature => (
                <li key={feature} className="flex items-start gap-3 font-semibold text-sm">
                  <Check size={18} className="text-green-500 mt-0.5 flex-shrink-0" strokeWidth={3} />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl font-bold border-[3px] border-black hover:bg-gray-50 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Tier */}
          <div className="bg-green-500 border-[3px] border-black rounded-2xl p-8 flex flex-col relative shadow-[12px_12px_0_0_#0F172A] hover:-translate-y-2 transition-transform scale-105 z-10 h-full">
            <div className="absolute -top-4 -right-4 bg-yellow-400 border-[3px] border-black px-4 py-2 rounded-xl text-sm font-black uppercase rotate-[15deg] shadow-[4px_4px_0_0_#0F172A]">
              Most Popular
            </div>
            <div className="font-black text-white text-2xl mb-4">Pro</div>
            <div className="font-black text-white text-5xl mb-2">
              ${isYearly ? '8' : '10'}
              <span className="text-xl font-bold text-green-900">/user/mo</span>
            </div>
            <div className="font-bold text-green-900 mb-6">For growing teams</div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Everything in Free', 'Unlimited team members', 'Group video calls (up to 50)', '100GB storage per user', 'Smart scheduling', 'Priority support'].map(feature => (
                <li key={feature} className="flex items-start gap-3 font-bold text-white text-sm">
                  <Check size={18} className="text-yellow-300 mt-0.5 flex-shrink-0" strokeWidth={3} />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-white text-black rounded-xl font-black border-[3px] border-black hover:bg-gray-100 transition-colors shadow-[4px_4px_0_0_#0F172A]">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-white border-[3px] border-black rounded-2xl p-8 flex flex-col relative shadow-[4px_4px_0_0_#0F172A] hover:-translate-y-2 transition-transform h-full">
            <div className="bg-purple-400 text-white border-[2px] border-black px-3 py-1 rounded-full text-xs font-black uppercase inline-block self-start mb-6">
              Custom
            </div>
            <div className="font-black text-4xl mb-2 mt-2">Contact Us</div>
            <div className="font-bold text-gray-500 mb-6 mt-1">For large organizations</div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Everything in Pro', 'Unlimited storage', 'SSO & SAML', 'Advanced admin controls', 'Dedicated support', 'Custom integrations'].map(feature => (
                <li key={feature} className="flex items-start gap-3 font-semibold text-sm">
                  <Check size={18} className="text-purple-500 mt-0.5 flex-shrink-0" strokeWidth={3} />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl font-bold border-[3px] border-black hover:bg-gray-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 bg-gray-50 border-y-[3px] border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 text-center">Compare Plans in Detail</h2>
          
          <div className="bg-white border-[3px] border-black rounded-2xl overflow-hidden shadow-[8px_8px_0_0_#0F172A] overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b-[3px] border-black">
                  <th className="p-5 font-black uppercase text-sm border-r-[3px] border-black w-2/5">Feature</th>
                  <th className="p-5 font-black uppercase text-sm border-r-[3px] border-black text-center w-1/5">Free</th>
                  <th className="p-5 font-black uppercase text-sm border-r-[3px] border-black bg-green-50 text-center w-1/5">Pro</th>
                  <th className="p-5 font-black uppercase text-sm text-center w-1/5">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100 border-b-[3px] border-black">
                  <td colSpan={4} className="p-3 font-black text-xs uppercase tracking-wider text-center">Messaging</td>
                </tr>
                {['Direct Messages', 'Group Channels', 'Message History'].map((row, i) => (
                  <tr key={row} className="border-b-[3px] border-black">
                    <td className="p-4 font-bold border-r-[3px] border-black">{row}</td>
                    <td className="p-4 text-center border-r-[3px] border-black">
                      <Check className="mx-auto text-green-500" strokeWidth={3} size={20} />
                    </td>
                    <td className="p-4 text-center border-r-[3px] border-black bg-green-50">
                      <Check className="mx-auto text-green-500" strokeWidth={3} size={20} />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="mx-auto text-green-500" strokeWidth={3} size={20} />
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-100 border-b-[3px] border-black">
                  <td colSpan={4} className="p-3 font-black text-xs uppercase tracking-wider text-center">Video & Voice</td>
                </tr>
                <tr className="border-b-[3px] border-black">
                  <td className="p-4 font-bold border-r-[3px] border-black">Participant Limit</td>
                  <td className="p-4 text-center border-r-[3px] border-black font-semibold text-sm">2</td>
                  <td className="p-4 text-center border-r-[3px] border-black bg-green-50 font-semibold text-sm">50</td>
                  <td className="p-4 text-center font-semibold text-sm">Unlimited</td>
                </tr>
                <tr className="border-b-[3px] border-black">
                  <td className="p-4 font-bold border-r-[3px] border-black">Screen Sharing</td>
                  <td className="p-4 text-center border-r-[3px] border-black">
                    <Check className="mx-auto text-green-500" strokeWidth={3} size={20} />
                  </td>
                  <td className="p-4 text-center border-r-[3px] border-black bg-green-50">
                    <Check className="mx-auto text-green-500" strokeWidth={3} size={20} />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto text-green-500" strokeWidth={3} size={20} />
                  </td>
                </tr>
                <tr className="border-b-[3px] border-black">
                  <td className="p-4 font-bold border-r-[3px] border-black">Recording</td>
                  <td className="p-4 text-center border-r-[3px] border-black">
                    <X className="mx-auto text-red-500" strokeWidth={3} size={20} />
                  </td>
                  <td className="p-4 text-center border-r-[3px] border-black bg-green-50">
                    <Check className="mx-auto text-green-500" strokeWidth={3} size={20} />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto text-green-500" strokeWidth={3} size={20} />
                  </td>
                </tr>
                <tr className="bg-gray-100 border-b-[3px] border-black">
                  <td colSpan={4} className="p-3 font-black text-xs uppercase tracking-wider text-center">Storage & Security</td>
                </tr>
                <tr className="border-b-[3px] border-black">
                  <td className="p-4 font-bold border-r-[3px] border-black">Storage Limit</td>
                  <td className="p-4 text-center border-r-[3px] border-black font-semibold text-sm">5GB total</td>
                  <td className="p-4 text-center border-r-[3px] border-black bg-green-50 font-semibold text-sm">100GB/user</td>
                  <td className="p-4 text-center font-semibold text-sm">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold border-r-[3px] border-black">SSO (SAML/Okta)</td>
                  <td className="p-4 text-center border-r-[3px] border-black">
                    <X className="mx-auto text-red-500" strokeWidth={3} size={20} />
                  </td>
                  <td className="p-4 text-center border-r-[3px] border-black bg-green-50">
                    <X className="mx-auto text-red-500" strokeWidth={3} size={20} />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto text-green-500" strokeWidth={3} size={20} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-4xl mb-12 text-center">Frequently Asked Questions</h2>
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

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-purple-500 border-[3px] border-black rounded-3xl p-12 text-center shadow-[12px_12px_0_0_#0F172A] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-purple-600/80" />
          <div className="relative z-10 text-white">
            <h2 className="font-black text-4xl md:text-5xl mb-6">Still have questions?</h2>
            <p className="text-lg font-medium text-white/90 mb-8">Our sales team is ready to help you find the perfect plan.</p>
            <button className="bg-white text-black border-[3px] border-black px-8 py-4 rounded-xl font-black text-lg shadow-[4px_4px_0_0_#0F172A] hover:-translate-y-1 transition-transform">
              Schedule a call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
