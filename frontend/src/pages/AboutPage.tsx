import { useState, useEffect } from 'react';
import { Code, Shield, Users, Terminal, ArrowRight, Plus, GitPullRequest, Share2, Star, Download, MapPin } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const AboutPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-black font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-purple-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Global Blueprint Grid Overlay */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-50"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`
        }} />

      <Navbar />

      {/* Hero: The Mission */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        {/* Floating Shapes */}
        <motion.div
          animate={{ rotate: 360, x: [0, 100, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute top-20 right-[5%] w-48 h-48 bg-purple-500/10 border-[4px] border-black rounded-[3rem] shadow-[16px_16px_0_0_#000] hidden lg:block"
        />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-block bg-black text-white border-[3px] border-black px-6 py-2 rounded-2xl font-black text-xs uppercase tracking-[0.3em] mb-10 shadow-[6px_6px_0_0_#7C3AED]">
              Our Mission
            </div>
            <h1 className="font-black text-6xl md:text-8xl mb-8 tracking-tighter leading-[0.85]">
              Better tools <br />
              <span className="text-purple-600 underline decoration-black decoration-8 underline-offset-8">for teams.</span>
            </h1>
            <div className="space-y-8 text-xl text-gray-600 font-bold leading-relaxed max-w-xl">
              <p>
                We started BitStream because we believe teams deserve communication tools that are fast, secure, and easy to use.
              </p>
              <p>
                By building in the open, we're creating a platform that puts you in control of your data without making things complicated.
              </p>
            </div>
          </div>

          <div className="relative">
            <motion.div 
              initial={{ rotate: -5 }}
              whileHover={{ rotate: 0 }}
              className="relative aspect-square bg-white border-[4px] border-black rounded-[4rem] shadow-[24px_24px_0_0_#000] p-12 flex flex-col justify-center items-center overflow-hidden"
            >
              {/* Dot Grid Background */}
              <div className="absolute inset-0 opacity-[0.1]" 
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }} />

              <div className="relative z-10 space-y-6 text-center">
                <div className="w-24 h-24 bg-purple-600 border-[4px] border-black rounded-3xl flex items-center justify-center mx-auto shadow-[8px_8px_0_0_#000] animate-bounce">
                  <Terminal size={48} className="text-white" strokeWidth={3} />
                </div>
                <h3 className="font-black text-4xl tracking-tighter">
                  Simple. <br /> Fast. Secure.
                </h3>
              </div>

              {/* Floating mechanical elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-green-400 border-[3px] border-black rounded-2xl shadow-[6px_6px_0_0_#000] -rotate-12 animate-pulse" />
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-yellow-400 border-[3px] border-black rounded-full shadow-[6px_6px_0_0_#000] rotate-12" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* History: The Journey */}
      <section className="py-32 px-6 bg-[#DDD6FE] border-y-[4px] border-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="font-black text-5xl md:text-6xl mb-6 tracking-tighter italic">Our Journey</h2>
            <div className="font-mono text-sm font-black text-purple-700 uppercase tracking-[0.3em]">Built for the community</div>
          </div>

          <div className="space-y-12 relative before:absolute before:left-[1.75rem] md:before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-black before:border-l-[2px] before:border-dashed before:border-white/20">
            {[
              { year: '2023', title: 'Founded', desc: 'Started by a small group of engineers who wanted better team tools.', id: 'LOG-001' },
              { year: '2024', title: 'First Launch', desc: 'Released our first version with secure messaging and video calls.', id: 'LOG-002' },
              { year: '2024', title: 'Growing Fast', desc: 'Reached over 10,000 users and hundreds of contributors.', id: 'LOG-003' },
              { year: '2025', title: 'Going Global', desc: 'Now used by over 5,000 teams around the world.', id: 'LOG-004' }
            ].map((milestone, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl border-[4px] border-black bg-white text-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[4px_4px_0_0_#000] z-10 group-hover:rotate-12 transition-transform">
                  <div className="w-4 h-4 bg-purple-600 rounded-sm" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-8 rounded-[2.5rem] border-[4px] border-black shadow-[8px_8px_0_0_#000] hover:shadow-[16px_16px_0_0_#000] transition-all relative overflow-hidden group">
                  <div className="font-mono text-sm font-black text-purple-600 mb-2">{milestone.year}</div>
                  <h3 className="font-black text-2xl mb-3 tracking-tight">{milestone.title}</h3>
                  <p className="font-bold text-gray-500 leading-relaxed">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20 relative z-10">
          {[
            { 
              title: 'Open Source', 
              desc: 'We believe in transparency. Our code is open for anyone to see, improve, and use for their own projects.',
              icon: Code,
              id: 'VAL-01',
              color: 'bg-purple-500',
              accent: 'bg-purple-100',
              link: 'View GitHub',
              align: 'left'
            },
            { 
              title: 'Privacy First', 
              desc: 'Your conversations are private. We use strong encryption to make sure only you and your team can see your data.',
              icon: Shield,
              id: 'VAL-02',
              color: 'bg-green-500',
              accent: 'bg-green-100',
              link: 'Security Center',
              align: 'right'
            },
            { 
              title: 'For the Community', 
              desc: 'We build BitStream for you. We listen to your feedback to create features that help your team work better together.',
              icon: Users,
              id: 'VAL-03',
              color: 'bg-cyan-500',
              accent: 'bg-cyan-100',
              link: 'Join Community',
              align: 'left'
            }
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: pillar.align === 'left' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`${pillar.accent} border-[4px] border-black rounded-[4rem] p-10 md:p-16 flex flex-col ${pillar.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center shadow-[16px_16px_0_0_#000] relative group overflow-hidden`}
            >
              {/* Dot Grid Background */}
              <div className="absolute inset-0 opacity-[0.05]" 
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }} />

              <div className={`w-32 h-32 ${pillar.color} border-[4px] border-black rounded-[2.5rem] flex items-center justify-center shrink-0 shadow-[8px_8px_0_0_#000] group-hover:scale-110 transition-transform`}>
                <pillar.icon size={56} className="text-white" strokeWidth={3} />
              </div>
              <div className="relative z-10 text-center md:text-left">
                <h3 className="font-black text-4xl md:text-5xl mb-6 tracking-tighter">{pillar.title}</h3>
                <p className="text-xl font-bold text-gray-700 mb-10 leading-relaxed max-w-3xl">
                  {pillar.desc}
                </p>
                <a href="#" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-black text-lg shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  {pillar.link} <ArrowRight size={24} strokeWidth={4} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-32 px-6 bg-[#F1F5F9] border-y-[4px] border-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-black text-5xl md:text-6xl mb-6 tracking-tighter">Meet the Team</h2>
            <p className="text-gray-500 font-black uppercase text-xs tracking-[0.3em]">The people behind BitStream</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'Alex Rivera', role: 'Founder', color: 'bg-purple-400', id: 'NODE-01' },
              { name: 'Sarah Chen', role: 'CTO', color: 'bg-green-400', id: 'NODE-02' },
              { name: 'Marcus Johnson', role: 'Design Lead', color: 'bg-yellow-400', id: 'NODE-03' },
              { name: 'Elena Rostova', role: 'Backend Developer', color: 'bg-pink-400', id: 'NODE-04' },
              { name: 'David Kim', role: 'Frontend Lead', color: 'bg-cyan-400', id: 'NODE-05' },
              { name: 'Aisha Patel', role: 'DevOps Engineer', color: 'bg-orange-400', id: 'NODE-06' },
              { name: 'Tom Wilson', role: 'Community Manager', color: 'bg-purple-400', id: 'NODE-07' },
              { name: 'Join Us', role: 'We are hiring', color: 'bg-white', id: 'NODE-FREE' }
            ].map((member, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8 }}
                className="bg-white border-[4px] border-black rounded-[2.5rem] p-8 text-center shadow-[8px_8px_0_0_#000] relative group"
              >
                <div className={`w-28 h-28 mx-auto border-[4px] border-black rounded-[2rem] mb-6 ${member.color} overflow-hidden shadow-[6px_6px_0_0_#000] group-hover:rotate-6 transition-transform`}>
                  {i !== 7 ? (
                    <img src={`https://i.pravatar.cc/150?u=${i + 100}`} alt={member.name} className="w-full h-full object-cover mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-50">
                      <Plus size={40} strokeWidth={4} />
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-center gap-1 mb-6">
                  <h3 className="font-black text-xl tracking-tight">{member.name}</h3>
                  <p className="font-bold text-sm text-gray-400 uppercase tracking-tighter">{member.role}</p>
                </div>

                {i !== 7 ? (
                  <div className="flex justify-center gap-4">
                    <div className="w-10 h-10 border-[2.5px] border-black rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[3px_3px_0_0_#000]">
                      <GitPullRequest size={18} strokeWidth={3} />
                    </div>
                    <div className="w-10 h-10 border-[2.5px] border-black rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[3px_3px_0_0_#000]">
                      <Share2 size={18} strokeWidth={3} />
                    </div>
                  </div>
                ) : (
                  <button className="w-full bg-black text-white font-black text-sm py-4 rounded-2xl border-[3px] border-black shadow-[4px_4px_0_0_#7C3AED] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-widest">
                    Apply Now
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact: Stats */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        {/* Abstract Grid Elements */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)',
            backgroundSize: '80px 80px'
          }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="font-black text-5xl md:text-7xl mb-6 tracking-tighter italic">Global Impact</h2>
            <p className="text-gray-500 font-black uppercase text-xs tracking-[0.3em]">How BitStream is growing</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: Users, stat: '500+', label: 'Contributors', color: 'bg-purple-100', text: 'text-purple-600' },
              { icon: Star, stat: '12K+', label: 'GitHub Stars', color: 'bg-yellow-100', text: 'text-yellow-600' },
              { icon: Download, stat: '2M+', label: 'Downloads', color: 'bg-green-100', text: 'text-green-600' },
              { icon: MapPin, stat: '50+', label: 'Countries', color: 'bg-cyan-100', text: 'text-cyan-600' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                className={`${item.color} border-[4px] border-black rounded-[3rem] p-10 shadow-[12px_12px_0_0_#000] text-center relative group`}
              >
                <div className={`w-16 h-16 bg-white border-[3px] border-black rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[4px_4px_0_0_#000] group-hover:shadow-none transition-all`}>
                  <item.icon size={32} className={item.text} strokeWidth={3} />
                </div>
                <div className="font-black text-5xl mb-3 tracking-tighter leading-none">{item.stat}</div>
                <div className="font-mono text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Mission CTA */}
      <section className="py-40 px-6 bg-purple-600 border-t-[4px] border-black text-white relative overflow-hidden">
         {/* Background Shapes */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[120%] border-[2px] border-white rounded-[5rem] rotate-12" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[120%] border-[2px] border-white rounded-[5rem] -rotate-12" />
         </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-black text-6xl md:text-8xl mb-8 tracking-tighter leading-[0.85]">
            Want to join <br />
            <span className="text-yellow-300 underline decoration-white decoration-8 underline-offset-8">the mission?</span>
          </h2>
          <p className="text-2xl font-bold mb-16 opacity-90 leading-relaxed">
            We're building the future of communication. <br />
            Come be a part of our global community.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <button className="bg-white text-black border-[4px] border-black px-12 py-6 rounded-[2rem] font-black text-2xl shadow-[8px_8px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
              View Jobs
            </button>
            <button className="bg-black text-white border-[4px] border-black px-12 py-6 rounded-[2rem] font-black text-2xl shadow-[8px_8px_0_0_#7C3AED] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all flex items-center justify-center gap-4">
              <GitPullRequest size={32} strokeWidth={4} />
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
