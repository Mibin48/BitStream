import React from 'react';
import { Code, Shield, Users, GitPullRequest, Share2, Download, Star, MapPin, ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-black font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-black text-5xl md:text-7xl mb-8 leading-tight">
              Building the Future of <span className="text-purple-600 relative">
                Team Communication
                <div className="absolute bottom-2 left-0 w-full h-4 bg-yellow-300/60 -z-10 -rotate-1 rounded-sm" />
              </span>
            </h1>
            <div className="space-y-6 text-lg text-gray-600 font-medium">
              <p>
                BitStream started with a simple belief: engineering teams deserve communication tools that are as powerful and customizable as the code they write.
              </p>
              <p>
                We're committed to open-source philosophy, giving you full control over your data while providing the ultra-fast, seamless experience of modern SaaS.
              </p>
              <p>
                Privacy isn't an afterthought—it's our foundation. Every message, call, and file is secured with enterprise-grade encryption.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] bg-gray-100 border-[4px] border-black rounded-3xl shadow-[12px_12px_0_0_#0F172A] p-6 flex flex-col justify-center items-center">
            {/* Abstract representation of collaboration */}
            <div className="w-32 h-32 bg-purple-400 border-[3px] border-black rounded-full absolute top-10 right-10 animate-pulse" />
            <div className="w-40 h-40 bg-green-400 border-[3px] border-black rounded-2xl absolute bottom-10 left-10 rotate-12" />
            <div className="w-24 h-24 bg-yellow-400 border-[3px] border-black rounded-full absolute top-1/2 left-1/3 -translate-y-1/2" />
            <h3 className="font-black text-3xl relative z-10 text-center bg-white border-[3px] border-black px-6 py-3 rounded-xl shadow-[4px_4px_0_0_#0F172A]">
              Connect. Build. Ship.
            </h3>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-24 px-6 bg-gray-50 border-t-[3px] border-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-4xl mb-16 text-center">Our Journey</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {[
              { year: '2023', title: 'Founded', desc: 'Started as an open-source project by a small team of passionate engineers.', color: 'border-purple-500' },
              { year: '2024', title: 'First Release', desc: 'v1.0 launched with core messaging and video capabilities.', color: 'border-green-500' },
              { year: '2024', title: 'Community Milestone', desc: 'Reached 10K GitHub stars and 500 active contributors.', color: 'border-yellow-500' },
              { year: '2025', title: 'Enterprise Ready', desc: 'Adopted by 5,000+ teams worldwide for mission-critical operations.', color: 'border-cyan-500' }
            ].map((milestone, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-[3px] border-black bg-white text-slate-500 group-[.is-active]:text-emerald-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[2px_2px_0_0_#0F172A] z-10">
                  <div className="w-3 h-3 bg-black rounded-full" />
                </div>
                <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border-[3px] border-black shadow-[4px_4px_0_0_#0F172A] ${milestone.color} border-l-[8px]`}>
                  <div className="font-black text-2xl mb-1">{milestone.year}</div>
                  <h3 className="font-bold text-lg mb-2">{milestone.title}</h3>
                  <p className="font-medium text-gray-600">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Pillar 1 */}
          <div className="bg-purple-100 border-[3px] border-black rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center shadow-[8px_8px_0_0_#0F172A]">
            <div className="w-24 h-24 bg-purple-500 border-[3px] border-black rounded-2xl flex items-center justify-center shrink-0 rotate-3">
              <Code size={40} className="text-white" />
            </div>
            <div>
              <h3 className="font-black text-3xl mb-4">Open Source at Heart</h3>
              <p className="text-lg font-medium text-gray-700 mb-6">
                We believe the best software is built in the open. Our core platform will always be open-source, allowing you to inspect, modify, and self-host.
              </p>
              <a href="#" className="font-bold text-black border-b-2 border-black pb-1 hover:text-purple-600 hover:border-purple-600 transition-colors">
                View on GitHub <ArrowRight size={18} strokeWidth={4} className="inline-block ml-1" />
              </a>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-green-100 border-[3px] border-black rounded-3xl p-8 md:p-12 flex flex-col md:flex-row-reverse gap-8 items-center shadow-[8px_8px_0_0_#0F172A]">
            <div className="w-24 h-24 bg-green-500 border-[3px] border-black rounded-2xl flex items-center justify-center shrink-0 -rotate-3">
              <Shield size={40} className="text-white" />
            </div>
            <div>
              <h3 className="font-black text-3xl mb-4">Privacy First</h3>
              <p className="text-lg font-medium text-gray-700 mb-6">
                Your data is yours. We implement robust end-to-end encryption and give you granular control over data retention and permissions.
              </p>
              <a href="#" className="font-bold text-black border-b-2 border-black pb-1 hover:text-green-600 hover:border-green-600 transition-colors">
                Security Docs <ArrowRight size={18} strokeWidth={4} className="inline-block ml-1" />
              </a>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-cyan-100 border-[3px] border-black rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center shadow-[8px_8px_0_0_#0F172A]">
            <div className="w-24 h-24 bg-cyan-500 border-[3px] border-black rounded-2xl flex items-center justify-center shrink-0 rotate-6">
              <Users size={40} className="text-white" />
            </div>
            <div>
              <h3 className="font-black text-3xl mb-4">Community Driven</h3>
              <p className="text-lg font-medium text-gray-700 mb-6">
                BitStream is shaped by its users. We actively listen to feedback, merge community PRs, and build features that solve real engineering problems.
              </p>
              <a href="#" className="font-bold text-black border-b-2 border-black pb-1 hover:text-cyan-600 hover:border-cyan-600 transition-colors">
                Join Community <ArrowRight size={18} strokeWidth={4} className="inline-block ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6 bg-gray-50 border-y-[3px] border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-12 text-center">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Alex Rivera', role: 'Founder & CEO', color: 'bg-purple-400' },
              { name: 'Sarah Chen', role: 'CTO', color: 'bg-green-400' },
              { name: 'Marcus Johnson', role: 'Head of Design', color: 'bg-yellow-400' },
              { name: 'Elena Rostova', role: 'Lead Backend', color: 'bg-pink-400' },
              { name: 'David Kim', role: 'Frontend Lead', color: 'bg-cyan-400' },
              { name: 'Aisha Patel', role: 'DevOps Engineer', color: 'bg-orange-400' },
              { name: 'Tom Wilson', role: 'Community Manager', color: 'bg-purple-400' },
              { name: 'Join Us', role: 'We are hiring!', color: 'bg-white' }
            ].map((member, i) => (
              <div key={i} className="bg-white border-[3px] border-black rounded-xl p-6 text-center shadow-[4px_4px_0_0_#0F172A] hover:-translate-y-2 transition-transform">
                <div className={`w-24 h-24 mx-auto border-[3px] border-black rounded-full mb-4 ${member.color} overflow-hidden`}>
                  {i !== 7 && <img src={`https://i.pravatar.cc/150?u=${i + 50}`} alt={member.name} className="w-full h-full object-cover mix-blend-luminosity opacity-80" />}
                </div>
                <h3 className="font-black text-lg mb-1">{member.name}</h3>
                <p className="font-semibold text-sm text-gray-500 mb-4">{member.role}</p>
                {i !== 7 && (
                  <div className="flex justify-center gap-3">
                    <GitPullRequest size={18} className="text-gray-400 hover:text-black cursor-pointer" />
                    <Share2 size={18} className="text-gray-400 hover:text-black cursor-pointer" />
                  </div>
                )}
                {i === 7 && (
                  <button className="font-bold text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                    Apply Now
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Stats */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-black text-4xl mb-16">Powered by the Community</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, stat: '500+', label: 'Contributors', color: 'bg-purple-100' },
              { icon: Star, stat: '10K+', label: 'GitHub Stars', color: 'bg-yellow-100' },
              { icon: Download, stat: '2M+', label: 'Downloads', color: 'bg-green-100' },
              { icon: MapPin, stat: '50+', label: 'Countries', color: 'bg-cyan-100' }
            ].map((item, i) => (
              <div key={i} className={`${item.color} border-[3px] border-black rounded-2xl p-6 shadow-[6px_6px_0_0_#0F172A] hover:-translate-y-2 transition-transform`}>
                <item.icon size={32} className="mx-auto mb-4" strokeWidth={2.5} />
                <div className="font-black text-4xl mb-2">{item.stat}</div>
                <div className="font-bold text-gray-700">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 px-6 bg-purple-600 border-t-[3px] border-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-5xl mb-6">Want to join the mission?</h2>
          <p className="text-xl font-medium mb-10 opacity-90">
            We're always looking for passionate engineers, designers, and community builders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-black border-[3px] border-black px-8 py-4 rounded-xl font-black text-lg shadow-[4px_4px_0_0_#0F172A] hover:-translate-y-1 transition-transform">
              View Positions
            </button>
            <button className="bg-black text-white border-[3px] border-black px-8 py-4 rounded-xl font-black text-lg shadow-[4px_4px_0_0_#0F172A] hover:-translate-y-1 transition-transform flex items-center justify-center gap-2">
              <GitPullRequest size={20} />
              Contribute
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
