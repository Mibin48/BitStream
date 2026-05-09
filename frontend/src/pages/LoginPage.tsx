import { Zap, Lock, Sparkles, ArrowRight, Lightbulb, MessageSquare, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import InfiniteGridBackground from '../components/ui/InfiniteGridBackground';
import { Logo } from '../components/ui/Logo';



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

const LoginPage = () => {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % 4);
    }, 7000); // 7 seconds per scene
    return () => clearInterval(timer);
  }, []);

  // Articulated Builder Component with Limbs
  const ArticulatedBuilder = ({ color, pose = "idle", className }: any) => {
    const variants = {
      idle: {
        armR: { rotate: 0 },
        armL: { rotate: 0 },
        legR: { rotate: 0 },
        legL: { rotate: 0 },
        global: { y: 0, x: 0, rotate: 0, scale: 1 }
      },
      lost: {
        armR: { rotate: [45, 60, 45] },
        armL: { rotate: [-45, -60, -45] },
        legR: { rotate: 0 },
        legL: { rotate: 0 },
        global: { x: [-2, 2, -2], rotate: [-1, 1, -1] }
      },
      slumped: {
        armR: { rotate: 20 },
        armL: { rotate: -20 },
        legR: { rotate: -15 },
        legL: { rotate: 15 },
        global: { y: 15, rotate: 5, scaleY: 0.95 }
      },
      beaconLook: {
        armR: { rotate: -40 },
        armL: { rotate: 40 },
        legR: { rotate: -5 },
        legL: { rotate: 5 },
        global: { rotateX: -30, y: -5, scale: 1.05 }
      },
      surfing: {
        armR: { rotate: -110 },
        armL: { rotate: 70 },
        legR: { rotate: -30 },
        legL: { rotate: 40 },
        global: { rotate: 25, x: 10, y: [0, -15, 0] }
      }
    };

    const currentPose: any = variants[pose as keyof typeof variants] || variants.idle;

    return (
      <motion.svg viewBox="0 0 100 150" className={className} initial="idle" style={{ overflow: "visible" }}>
        <motion.g
          animate={currentPose.global}
          transition={{ type: "spring", stiffness: 100 }}
          style={{ originX: "50px", originY: "75px" }}
        >
          {/* Torso/Body */}
          <rect
            x="35" y="55" width="30" height="60" rx="15"
            fill={color}
          />
          {/* Head */}
          <circle
            cx="50" cy="30" r="18"
            fill={color}
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
          <motion.rect
            x="52" y="110" width="10" height="30" rx="5"
            fill={color} opacity={0.8}
            style={{ originY: "5px", originX: "5px" }}
            animate={currentPose.legR}
            transition={{ type: "spring", stiffness: 100 }}
          />
          <motion.rect
            x="38" y="110" width="10" height="30" rx="5"
            fill={color} opacity={0.8}
            style={{ originY: "5px", originX: "5px" }}
            animate={currentPose.legL}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </motion.g>
      </motion.svg>
    );
  };

  return (
    <div className="min-h-screen flex text-black font-sans selection:bg-purple-500 selection:text-white bg-[#F8FAFC] relative overflow-x-hidden">
      {/* Global Dynamic Infinite Grid Background */}
      <InfiniteGridBackground opacity={0.1} />







      {/* Animated Data Packets (Background) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -100, y: Math.random() * 1000 }}
            animate={{
              x: 2000,
              y: (Math.random() * 1000)
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
            className="absolute h-[2px] w-20 bg-purple-400/30"
          />
        ))}
      </div>

      {/* Left Panel - Visual Playground */}
      <div className="hidden lg:flex w-4/12 bg-purple-600 p-16 flex-col relative overflow-hidden border-r-[4px] border-black">
        {/* Global Architectural Grid */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />

        {/* Branding */}
        <div className="relative z-10 flex items-center gap-3 mb-24">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-12 h-12 bg-white border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0_0_#000] cursor-pointer overflow-hidden"
          >
            <Logo size={32} strokeWidth={8} />
          </motion.div>

          <span className="font-black text-3xl tracking-tighter text-white uppercase italic">BitStream</span>
        </div>

        {/* The Epic Storytelling Engine */}
        <div className="relative z-10 mb-auto mt-12 px-4">
          <div className="h-[350px] flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
              {currentScene === 0 && (
                <motion.div
                  key="scene0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center p-6"
                >
                  <div className="relative mb-8">
                    {/* Glitchy Static Background */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-60">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            x: [0, Math.random() * 200 - 100, 0],
                            scaleX: [1, Math.random() * 5, 1],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ duration: 0.1 + Math.random() * 0.2, repeat: Infinity, delay: i * 0.05 }}
                          className="absolute h-[3px] bg-white mix-blend-overlay"
                          style={{ top: `${Math.random() * 100}%`, width: `${20 + Math.random() * 80}px` }}
                        />
                      ))}
                    </div>

                    <div className="relative">
                      <motion.div
                        animate={{ opacity: [0.6, 1, 0.4], scale: [1, 1.2, 0.9] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute -top-20 left-1/2 -translate-x-1/2"
                      >
                        <Lightbulb size={64} className="text-yellow-100 fill-yellow-100/30 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]" />
                      </motion.div>
                      <ArticulatedBuilder color="#64748b" className="w-24 h-36 relative z-10" pose="lost" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight mb-2">Too much noise.</h3>
                  <p className="text-white/70 font-bold text-lg">It's hard to focus with so many tabs.</p>
                </motion.div>
              )}

              {currentScene === 1 && (
                <motion.div
                  key="scene1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center justify-center h-full text-center p-6"
                >
                  <div className="relative mb-8 w-64 h-48 flex items-end justify-center">
                    {/* Falling Notification Icons */}
                    {[MessageSquare, Video, Sparkles, Zap, MessageSquare, Lock].map((Icon, i) => (
                      <motion.div
                        key={i}
                        initial={{ y: -150, x: (i - 2.5) * 40, opacity: 0 }}
                        animate={{ y: 80, opacity: [0, 1, 0], rotate: 360, scale: [1, 1.5, 0.8] }}
                        transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: i * 0.2 }}
                        className="absolute top-0 text-white/40 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                      >
                        <Icon size={40} />
                      </motion.div>
                    ))}

                    <ArticulatedBuilder color="#475569" className="w-24 h-36 relative z-10" pose="slumped" />
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight mb-2">Too much work.</h3>
                  <p className="text-white/70 font-bold text-lg">Talking to your team should be easy.</p>
                </motion.div>
              )}

              {currentScene === 2 && (
                <motion.div
                  key="scene2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center p-6"
                >
                  <div className="relative mb-8">
                    {/* The Beacon Light */}
                    <motion.div
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 0.4, scaleY: 1 }}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[300px] bg-gradient-to-t from-purple-500 to-transparent blur-3xl"
                      style={{ originY: "100%" }}
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-12 left-1/2 -translate-x-1/2"
                    >
                      <Lightbulb size={48} className="text-yellow-400 fill-yellow-400/40 drop-shadow-[0_0_20px_#facc15]" />
                    </motion.div>

                    <ArticulatedBuilder color="#ffffff" className="w-24 h-36 relative z-10" pose="beaconLook" />
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight mb-2">Find what matters.</h3>
                  <p className="text-white/70 font-bold text-lg">BitStream helps you see clearly.</p>
                </motion.div>
              )}

              {currentScene === 3 && (
                <motion.div
                  key="scene3"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  className="flex flex-col items-center justify-center h-full text-center p-6 overflow-hidden"
                >
                  <div className="relative mb-8 w-full flex justify-center">
                    {/* Data Stream Grid */}
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden h-40 opacity-20">
                      <motion.div
                        animate={{ x: [-100, 0] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="flex gap-4"
                      >
                        {[...Array(20)].map((_, i) => (
                          <div key={i} className="w-1 h-1 bg-white rounded-full shrink-0" />
                        ))}
                      </motion.div>
                    </div>

                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArticulatedBuilder color="#ffffff" className="w-24 h-36" pose="surfing" />
                    </motion.div>

                    {/* Speed Lines */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: -200, opacity: [0, 1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1, ease: "linear" }}
                        className="absolute w-20 h-[2px] bg-white/40"
                        style={{ top: `${20 + i * 15}%`, left: '50%' }}
                      />
                    ))}
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight mb-2">Get in the zone.</h3>
                  <p className="text-white/70 font-bold text-lg">Work faster without any distractions.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Feature Teaser */}
        <div className="relative z-10 space-y-12 mt-12">
          <div className="space-y-4">
            <h2 className="text-6xl font-black text-white leading-tight tracking-tighter">
              Build <br /> Better.
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
              className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20"
            />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 bg-purple-500 border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0_0_#000]">
                <Sparkles size={28} className="text-white" strokeWidth={3} />
              </div>
              <div>
                <div className="font-black text-lg group-hover:text-purple-600 transition-colors">Instant Sync</div>
              </div>
            </div>
            <p className="font-bold text-gray-600 leading-relaxed relative z-10">
              "BitStream is the main tool for our work. It's what keeps us moving."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
        className="w-full lg:w-8/12 flex items-center justify-center p-6 sm:p-12 relative z-10"
      >
        <div className="w-full max-w-[540px]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="bg-white border-[4px] border-black rounded-[3rem] p-10 md:p-12 shadow-[20px_20px_0_0_#000] relative overflow-hidden"
          >
            {/* Header */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 relative z-10 text-center lg:text-left"
            >
              <h1 className="font-black text-6xl tracking-tighter mb-4">Welcome back</h1>
              <p className="text-gray-500 font-bold text-xl leading-tight">
                Log in to your workspace.
              </p>
            </motion.div>

            {/* Form */}
            <div className="space-y-8 relative z-10">
              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: 'Google', icon: GoogleIcon },
                  { name: 'GitHub', icon: GitHubIcon }
                ].map((social, i) => (
                  <motion.button
                    key={social.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="bg-white border-[3px] border-black py-4 px-4 rounded-2xl font-black text-base flex items-center justify-center gap-3 hover:translate-x-1 hover:translate-y-1 transition-all shadow-[6px_6px_0_0_#000] hover:shadow-none"
                  >
                    <social.icon /> {social.name}
                  </motion.button>
                ))}
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
                  <span className="px-6 bg-white text-gray-400">Continue with email</span>
                </div>
              </motion.div>

              {/* Input Fields */}
              <div className="space-y-6">
                {[
                  { label: 'Email Address', type: 'email', placeholder: 'name@company.com', icon: Zap },
                  { label: 'Password', type: 'password', placeholder: '••••••••', icon: Lock, forgot: true }
                ].map((input, i) => (
                  <motion.div
                    key={input.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + (i * 0.1) }}
                  >
                    <div className="flex justify-between items-center mb-4 px-2">
                      <label className="block font-black text-xs uppercase tracking-widest text-gray-400 ml-2">{input.label}</label>
                      {input.forgot && (
                        <a href="/reset-password" title="Recover Access" className="text-[10px] font-black uppercase tracking-widest text-purple-600 hover:underline">
                          Forgot?
                        </a>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        className="w-full pl-14 pr-6 py-4 border-[4px] border-black rounded-2xl font-bold text-xl focus:outline-none focus:ring-0 focus:border-purple-600 transition-colors shadow-[8px_8px_0_0_#000] focus:shadow-[10px_10px_0_0_#7C3AED]"
                      />
                      <input.icon className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 transition-colors group-focus-within:text-purple-600" size={24} strokeWidth={3} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                  x: [0, -2, 2, -2, 2, 0],
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white border-[4px] border-black py-5 rounded-[2rem] font-black text-3xl shadow-[8px_8px_0_0_#22C55E] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all flex items-center justify-center gap-3 mt-4 group overflow-hidden relative"
              >
                <motion.div
                  className="absolute inset-0 bg-white/10 -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700"
                />
                Login
                <ArrowRight size={32} strokeWidth={4} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>

              {/* Links */}
              <div className="pt-8 text-center">
                <span className="text-gray-400 font-bold">New to BitStream? </span>
                <Link to="/signup" className="font-black text-purple-600 hover:underline tracking-tight">
                  Create Account
                </Link>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-[0.05]"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
