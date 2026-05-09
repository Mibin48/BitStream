import { ArrowRight, User, Mail, Lock, Sparkles, Zap, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const SignupPage = () => {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % 4);
    }, 7000); // 7 seconds per scene for a slower, more emotional pace
    return () => clearInterval(timer);
  }, []);

  // Articulated Builder Component with Limbs
  const ArticulatedBuilder = ({ color, pose = "idle", className }: any) => {
    const variants = {
      idle: {
        armR: { rotate: 0 },
        armL: { rotate: 0 },
        body: { y: 0 }
      },
      sad: {
        armR: { rotate: 20 },
        armL: { rotate: -20 },
        body: { y: 5, scaleY: 0.95 }
      },
      reachingRight: {
        armR: { rotate: -80 },
        armL: { rotate: 10 },
        body: { x: 5, rotate: 5 }
      },
      reachingLeft: {
        armR: { rotate: -10 },
        armL: { rotate: 80 },
        body: { x: -5, rotate: -5 }
      },
      celebrating: {
        armR: { rotate: -150 },
        armL: { rotate: 150 },
        body: { y: -10, scale: 1.05 }
      },
      shakingRight: {
        armR: {
          rotate: [-55, -75, -55],
          transition: {
            rotate: { repeat: Infinity, duration: 0.5, ease: "easeInOut" },
            default: { type: "spring", stiffness: 100 }
          }
        },
        armL: { rotate: 10 },
        body: { x: 5 }
      },
      shakingLeft: {
        armR: { rotate: -10 },
        armL: {
          rotate: [55, 75, 55],
          transition: {
            rotate: { repeat: Infinity, duration: 0.5, ease: "easeInOut" },
            default: { type: "spring", stiffness: 100 }
          }
        },
        body: { x: -5 }
      }
    };

    const currentPose: any = variants[pose as keyof typeof variants] || variants.idle;

    return (
      <motion.svg viewBox="0 0 100 150" className={className} initial="idle">
        {/* Torso/Body */}
        <motion.rect
          x="35" y="55" width="30" height="60" rx="15"
          fill={color}
          animate={currentPose.body}
          transition={{ type: "spring", stiffness: 100 }}
        />
        {/* Head */}
        <motion.circle
          cx="50" cy="30" r="18"
          fill={color}
          animate={currentPose.body}
          transition={{ type: "spring", stiffness: 100, delay: 0.05 }}
        />
        {/* Right Arm */}
        <motion.rect
          x="65" y="60" width="10" height="40" rx="5"
          fill={color}
          style={{ originY: "5px", originX: "5px" }}
          animate={currentPose.armR}
          transition={{ type: "spring", stiffness: 100 }}
        />
        {/* Left Arm */}
        <motion.rect
          x="25" y="60" width="10" height="40" rx="5"
          fill={color}
          style={{ originY: "5px", originX: "95%" }}
          animate={currentPose.armL}
          transition={{ type: "spring", stiffness: 100 }}
        />
        {/* Legs */}
        <rect x="38" y="110" width="10" height="30" rx="5" fill={color} opacity={0.8} />
        <rect x="52" y="110" width="10" height="30" rx="5" fill={color} opacity={0.8} />
      </motion.svg>
    );
  };

  return (
    <div className="min-h-screen flex text-black font-sans selection:bg-purple-500 selection:text-white bg-[#F8FAFC] relative overflow-hidden">
      {/* Global Blueprint Grid Overlay */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

      {/* Animated Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 1
            }}
            className="absolute w-24 h-24 border-[1px] border-black/10 rounded-3xl"
          />
        ))}
      </div>

      {/* Left Panel - Visual Playground */}
      <div className="hidden lg:flex w-4/12 bg-green-500 p-16 flex-col relative overflow-hidden border-r-[4px] border-black">
        {/* Global Architectural Grid */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />

        {/* Animated Network Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
          <motion.path
            d="M 500 100 Q 250 250 0 100"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 500 500 Q 350 400 0 600"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>

        {/* Dynamic Visual: The "Engine" */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 40, ease: "linear" },
              scale: { repeat: Infinity, duration: 6, ease: "easeInOut" }
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-white/10 rounded-full"
          />
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-[2px] border-white/5 rounded-full"
            style={{ borderStyle: "dashed" }}
          />

          {/* Floating Geometric Mechanical Nodes */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute w-10 h-10 bg-white/5 border-[2px] border-white/10 rounded-xl"
              style={{
                top: `${20 + (i * 15)}%`,
                left: `${10 + (i * 18)}%`
              }}
            />
          ))}
        </div>

        {/* Branding */}
        <div className="relative z-10 flex items-center gap-3 mb-24">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="w-12 h-12 bg-white border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0_0_#000] cursor-pointer"
          >
            <span className="text-black font-black text-xl">B</span>
          </motion.div>
          <span className="font-black text-3xl tracking-tighter text-white uppercase italic">BitStream</span>
        </div>

        {/* The Epic Storytelling Engine */}
        <div className="relative z-10 mb-auto mt-12 px-4">
          <div className="h-[350px] flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
              {/* Scene 1: Isolation */}
              {currentScene === 0 && (
                <motion.div
                  key="scene0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                  <div className="relative w-full h-56 mb-6 flex items-end justify-between px-12 pb-4">
                    {/* The Chasm */}
                    <div className="absolute bottom-0 left-0 w-[40%] h-2 bg-white/20 rounded-full" />
                    <div className="absolute bottom-0 right-0 w-[40%] h-2 bg-white/20 rounded-full" />

                    {/* Figure 1 - Left */}
                    <div className="relative">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
                        transition={{
                          scale: { duration: 0.5, delay: 0.8 },
                          opacity: { duration: 0.5, delay: 0.8 },
                          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute -top-12 left-1/2 -translate-x-1/2"
                      >
                        <Lightbulb size={32} className="text-yellow-400 fill-yellow-400/20 drop-shadow-[0_0_10px_#facc15]" />
                      </motion.div>
                      <ArticulatedBuilder color="#94a3b8" className="w-20 h-32" pose="sad" />
                    </div>

                    {/* Chaotic Void in middle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
                      {[...Array(8)].map((_, i) => (
                        <motion.div key={i} animate={{ y: [0, -30, 0], x: [0, Math.random() * 20 - 10, 0], opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }} className="absolute w-2 h-2 bg-red-400/40 rounded-full" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} />
                      ))}
                    </div>

                    {/* Figure 2 - Right */}
                    <ArticulatedBuilder color="#94a3b8" className="w-20 h-32" pose="sad" />
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight mb-2">Great ideas start alone.</h3>
                  <p className="text-white/70 font-bold text-lg">But it's hard to work together alone.</p>
                </motion.div>
              )}

              {/* Scene 2: The Struggle */}
              {currentScene === 1 && (
                <motion.div
                  key="scene1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                  <div className="relative w-full h-56 mb-6 flex items-end justify-between px-12 pb-4">
                    <div className="absolute bottom-0 left-0 w-[40%] h-2 bg-white/20 rounded-full" />
                    <div className="absolute bottom-0 right-0 w-[40%] h-2 bg-white/20 rounded-full" />

                    {/* Figure 1 reaching out with RIGHT hand */}
                    <ArticulatedBuilder color="#cbd5e1" className="w-20 h-32" pose="reachingRight" />

                    <motion.div
                      initial={{ x: -100, y: -20, opacity: 1 }}
                      animate={{ x: 0, y: 120, opacity: 0, rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
                      className="absolute top-10 left-32 w-8 h-8 bg-yellow-400/80 rounded-lg shadow-[0_0_20px_yellow] flex items-center justify-center border-2 border-black/20"
                    >
                      <Zap size={16} className="text-black" />
                    </motion.div>

                    {/* Figure 2 reaching out with LEFT hand */}
                    <ArticulatedBuilder color="#cbd5e1" className="w-20 h-32" pose="reachingLeft" />
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight mb-2">Trying to talk.</h3>
                  <p className="text-white/70 font-bold text-lg">Files get lost. Work stops.</p>
                </motion.div>
              )}

              {/* Scene 3: The Catalyst (BitStream) */}
              {currentScene === 2 && (
                <motion.div
                  key="scene2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                  <div className="relative w-full h-56 mb-6 flex items-end justify-between px-12 pb-4">
                    <div className="absolute bottom-0 left-0 w-[40%] h-2 bg-white/40 rounded-full" />
                    <div className="absolute bottom-0 right-0 w-[40%] h-2 bg-white/40 rounded-full" />

                    {/* The Bridge Forming */}
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "40%", opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 bg-green-400 shadow-[0_0_15px_#4ade80]"
                    />

                    {/* The BitStream Beam */}
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-green-300 to-green-500 shadow-[0_0_20px_#4ade80]"
                    />

                    {/* Figure 1 sliding to center */}
                    <motion.div
                      initial={{ x: -100 }}
                      animate={{ x: 15 }}
                      transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                    >
                      <ArticulatedBuilder color="#ffffff" className="w-20 h-32" pose="shakingRight" />
                    </motion.div>

                    {/* Figure 2 sliding to center */}
                    <motion.div
                      initial={{ x: 100 }}
                      animate={{ x: -15 }}
                      transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                    >
                      <ArticulatedBuilder color="#ffffff" className="w-20 h-32" pose="shakingLeft" />
                    </motion.div>
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight mb-2">BitStream brings teams together.</h3>
                  <p className="text-white/70 font-bold text-lg">One place for all your work.</p>
                </motion.div>
              )}

              {/* Scene 4: The Symphony */}
              {currentScene === 3 && (
                <motion.div
                  key="scene3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                  <div className="relative w-full h-56 mb-6 flex items-end justify-center px-12 pb-4">
                    {/* Unified Ground */}
                    <div className="absolute bottom-0 left-[10%] w-[80%] h-2 bg-white shadow-[0_0_10px_white] rounded-full" />

                    {/* Figures standing together */}
                    <div className="flex gap-6 relative z-10">
                      <ArticulatedBuilder color="#4ade80" className="w-24 h-36" pose="celebrating" />
                      <ArticulatedBuilder color="#3b82f6" className="w-24 h-36" pose="celebrating" />
                    </div>

                    {/* The Masterpiece (Impressive Assembling Structure) */}
                    <motion.div
                      initial={{ y: 100, scale: 0, opacity: 0 }}
                      animate={{ y: -80, scale: 1, opacity: 1 }}
                      transition={{ duration: 2.5, type: "spring", damping: 12 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="relative w-40 h-40">
                        {/* Core */}
                        <motion.div
                          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-[6px] border-white rounded-[2.5rem] shadow-[0_0_50px_rgba(255,255,255,0.4)] flex items-center justify-center"
                        >
                          <Zap size={48} className="text-yellow-400 fill-yellow-400 drop-shadow-[0_0_15px_yellow]" />
                        </motion.div>
                        {/* Orbiting fragments */}
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                            className="absolute inset-[-20px] pointer-events-none"
                          >
                            <div className="w-6 h-6 bg-white/80 rounded-md shadow-lg" style={{ transform: `translate(${Math.cos(i) * 20}px, ${Math.sin(i) * 20}px)` }} />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-white to-blue-300 tracking-tighter mb-2">Build great things together.</h3>
                  <p className="text-white/80 font-bold text-lg">Everyone stays on the same page.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Feature Teaser */}
        <div className="relative z-10 space-y-12 mt-12">
          <div className="space-y-4">
            <h2 className="text-6xl font-black text-white leading-tight tracking-tighter">
              Start <br /> Here.
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border-[4px] border-black rounded-[2.5rem] p-8 shadow-[12px_12px_0_0_#000] relative overflow-hidden group hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default"
          >
            <motion.div
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20"
            />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 bg-purple-500 border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0_0_#000]">
                <Sparkles size={28} className="text-white" strokeWidth={3} />
              </div>
              <div>
                <div className="font-black text-lg group-hover:text-green-600 transition-colors">Always Fast</div>
              </div>
            </div>
            <p className="font-bold text-gray-600 leading-relaxed relative z-10">
              "BitStream helps our team stay organized and move faster. It's the best tool we've ever used."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Panel - Sign Up Form */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
        className="w-full lg:w-8/12 flex items-center justify-center p-6 sm:p-12 relative z-10 overflow-y-auto"
      >
        <div className="w-full max-w-[640px] py-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="bg-white border-[4px] border-black rounded-[3rem] p-10 md:p-12 shadow-[24px_24px_0_0_#000] relative overflow-hidden"
          >
            {/* Header */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 relative z-10 text-center lg:text-left"
            >
              <h1 className="font-black text-6xl tracking-tighter mb-4">Get started free</h1>
              <p className="text-gray-500 font-bold text-xl leading-tight">
                Join 5,000+ teams using BitStream.
              </p>
            </motion.div>

            {/* Form Content */}
            <div className="space-y-8 relative z-10">
              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-6">
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white border-[3px] border-black py-5 px-4 rounded-2xl font-black text-base flex items-center justify-center gap-3 hover:translate-x-1 hover:translate-y-1 transition-all shadow-[6px_6px_0_0_#000] hover:shadow-none"
                >
                  <GoogleIcon /> Google
                </motion.button>
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white border-[3px] border-black py-4 px-4 rounded-2xl font-black text-base flex items-center justify-center gap-3 hover:translate-x-1 hover:translate-y-1 transition-all shadow-[6px_6px_0_0_#000] hover:shadow-none"
                >
                  <GitHubIcon /> GitHub
                </motion.button>
              </div>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="relative"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-[3px] border-black opacity-10"></div>
                </div>
                <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.3em]">
                  <span className="px-6 bg-white text-gray-400">Join with email</span>
                </div>
              </motion.div>

              {/* Input Fields */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block font-black text-xs uppercase tracking-widest text-gray-400 mb-4 ml-2">First Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full pl-14 pr-6 py-4 border-[4px] border-black rounded-2xl font-bold text-xl focus:outline-none focus:ring-0 focus:border-green-500 transition-colors shadow-[8px_8px_0_0_#000] focus:shadow-[10px_10px_0_0_#22C55E]"
                      />
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={24} strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <label className="block font-black text-xs uppercase tracking-widest text-gray-400 mb-4 ml-2">Last Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full px-6 py-5 border-[4px] border-black rounded-2xl font-bold text-xl focus:outline-none focus:ring-0 focus:border-green-500 transition-colors shadow-[8px_8px_0_0_#000] focus:shadow-[10px_10px_0_0_#22C55E]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-black text-xs uppercase tracking-widest text-gray-400 mb-4 ml-2">Work Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full pl-14 pr-6 py-4 border-[4px] border-black rounded-2xl font-bold text-xl focus:outline-none focus:ring-0 focus:border-green-500 transition-colors shadow-[8px_8px_0_0_#000] focus:shadow-[10px_10px_0_0_#22C55E]"
                    />
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={24} strokeWidth={3} />
                  </div>
                </div>

                <div>
                  <label className="block font-black text-xs uppercase tracking-widest text-gray-400 mb-4 ml-2">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Min. 8 characters"
                      className="w-full pl-14 pr-6 py-4 border-[4px] border-black rounded-2xl font-bold text-xl focus:outline-none focus:ring-0 focus:border-green-500 transition-colors shadow-[8px_8px_0_0_#000] focus:shadow-[10px_10px_0_0_#22C55E]"
                    />
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={24} strokeWidth={3} />
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-4 pt-4">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-8 h-8 border-[3px] border-black rounded-lg accent-green-500 mt-1 cursor-pointer shrink-0 shadow-[2px_2px_0_0_#000]"
                />
                <label htmlFor="terms" className="text-base font-bold text-gray-500 leading-tight cursor-pointer">
                  I agree to the <a href="#" className="text-purple-600 underline">Terms of Service</a> and <a href="#" className="text-purple-600 underline">Privacy Policy</a>.
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white border-[4px] border-black py-5 rounded-[2rem] font-black text-3xl shadow-[8px_8px_0_0_#22C55E] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all flex items-center justify-center gap-3 mt-4"
              >
                Create Account
                <ArrowRight size={32} strokeWidth={4} />
              </motion.button>

              {/* Links */}
              <div className="pt-8 text-center">
                <span className="text-gray-400 font-bold">Already have an account? </span>
                <Link to="/login" className="font-black text-purple-600 hover:underline tracking-tight">
                  Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
