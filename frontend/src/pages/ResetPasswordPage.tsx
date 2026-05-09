import { useState } from 'react';
import { ArrowLeft, ArrowRight, Mail, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../components/ui/Logo';

import { Link } from 'react-router-dom';
import InfiniteGridBackground from '../components/ui/InfiniteGridBackground';


const ResetPasswordPage = () => {
  const [step, setStep] = useState<'request' | 'sent'>('request');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setStep('sent');
  };

  return (
    <div className="min-h-screen flex text-black font-sans selection:bg-purple-500 selection:text-white bg-[#F8FAFC] relative overflow-hidden">

      {/* Global Dynamic Infinite Grid Background */}
      <InfiniteGridBackground opacity={0.1} />







      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.08, 0.18, 0.08],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 6 + i * 1.5, repeat: Infinity, delay: i * 0.8, ease: 'easeInOut' }}
            className="absolute w-20 h-20 border border-black/10 rounded-2xl"
            style={{ top: `${10 + i * 15}%`, left: `${5 + i * 16}%` }}
          />
        ))}
      </div>

      {/* Left Panel */}
      <div className="hidden lg:flex w-4/12 bg-purple-600 p-16 flex-col relative overflow-hidden border-r-[4px] border-black">
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Orbiting rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="w-[480px] h-[480px] border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[60px] border-2 border-dashed border-white/10 rounded-full"
          />
          {/* Orbiting node */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white/30 rounded-lg border border-white/40" />
          </motion.div>
        </div>

        {/* Floating geometric nodes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -25, 0], rotate: [0, 180, 360], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
            className="absolute w-10 h-10 bg-white/10 border border-white/20 rounded-xl"
            style={{ top: `${15 + i * 14}%`, left: `${8 + i * 18}%` }}
          />
        ))}

        {/* Branding */}
        <div className="relative z-10 flex items-center gap-3 mb-auto">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-12 h-12 bg-white border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0_0_#000] cursor-pointer overflow-hidden"
          >
            <Logo size={32} strokeWidth={8} />
          </motion.div>

          <span className="font-black text-3xl tracking-tighter text-white uppercase italic">BitStream</span>
        </div>

        {/* Central illustration */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center">
          <AnimatePresence mode="wait">
            {step === 'request' ? (
              <motion.div
                key="request-illustration"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center"
              >
                {/* Animated key/lock visual */}
                <div className="relative mb-8">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1], rotate: [0, -3, 3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-32 h-32 bg-white/15 border-[3px] border-white/40 rounded-3xl flex items-center justify-center shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]"
                  >
                    <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
                      {/* Key shape */}
                      <motion.circle
                        cx="22" cy="28" r="12"
                        stroke="white" strokeWidth="4"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.rect
                        x="32" y="24" width="22" height="8" rx="4"
                        fill="white" opacity="0.9"
                        animate={{ x: [32, 34, 32] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.rect
                        x="46" y="32" width="4" height="8" rx="2"
                        fill="white" opacity="0.7"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                      />
                      <motion.rect
                        x="40" y="32" width="4" height="6" rx="2"
                        fill="white" opacity="0.7"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                      />
                    </svg>
                  </motion.div>

                  {/* Pulse rings */}
                  {[1, 2, 3].map(r => (
                    <motion.div
                      key={r}
                      animate={{ scale: [1, 1.6 + r * 0.3], opacity: [0.4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: r * 0.4, ease: 'easeOut' }}
                      className="absolute inset-0 border-2 border-white/30 rounded-3xl"
                    />
                  ))}
                </div>
                <h3 className="text-3xl font-black text-white tracking-tight mb-2">Forgot your key?</h3>
                <p className="text-white/70 font-bold text-lg leading-snug max-w-xs">
                  No worries. We'll send a reset link straight to your inbox.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="sent-illustration"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="flex flex-col items-center"
              >
                <div className="relative mb-8">
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-32 h-32 bg-white/15 border-[3px] border-white/40 rounded-3xl flex items-center justify-center shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]"
                  >
                    <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
                      {/* Envelope */}
                      <motion.rect x="8" y="16" width="48" height="34" rx="6" stroke="white" strokeWidth="3.5"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
                      <motion.path d="M8 20 L32 36 L56 20" stroke="white" strokeWidth="3.5" strokeLinecap="round"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3 }} />
                      {/* Check overlay */}
                      <motion.circle cx="46" cy="46" r="10" fill="#22C55E"
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.8 }} />
                      <motion.path d="M40 46 L44 50 L52 42" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.1 }} />
                    </svg>
                  </motion.div>
                  {[1, 2].map(r => (
                    <motion.div key={r}
                      animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: r * 0.5, ease: 'easeOut' }}
                      className="absolute inset-0 border-2 border-green-400/40 rounded-3xl"
                    />
                  ))}
                </div>
                <h3 className="text-3xl font-black text-white tracking-tight mb-2">Check your inbox!</h3>
                <p className="text-white/70 font-bold text-lg leading-snug max-w-xs">
                  The reset link is on its way. It might take a minute.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom feature card */}
        <div className="relative z-10 mt-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white border-[4px] border-black rounded-[2.5rem] p-8 shadow-[12px_12px_0_0_#000] relative overflow-hidden group hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
            />
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-11 h-11 bg-purple-500 border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0_0_#000] shrink-0">
                <Mail size={22} className="text-white" strokeWidth={3} />
              </div>
              <div className="font-black text-base group-hover:text-purple-600 transition-colors">Secure recovery</div>
            </div>
            <p className="font-bold text-gray-500 text-sm leading-relaxed relative z-10">
              "BitStream's security is top-notch. Account recovery is quick and painless."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Panel — Form */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        className="w-full lg:w-8/12 flex items-center justify-center p-6 sm:p-12 relative z-10"
      >
        <div className="w-full max-w-[540px]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="bg-white border-[4px] border-black rounded-[3rem] p-10 md:p-12 shadow-[20px_20px_0_0_#000] relative overflow-hidden"
          >
            {/* Corner dot-grid decoration */}
            <div
              className="absolute -bottom-10 -right-10 w-40 h-40 opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '20px 20px' }}
            />

            <AnimatePresence mode="wait">

              {/* ── STEP 1: Request ── */}
              {step === 'request' && (
                <motion.div
                  key="request"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Back link */}
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 text-sm font-black text-gray-400 hover:text-black transition-colors mb-8 group"
                  >
                    <motion.span whileHover={{ x: -3 }} className="inline-flex items-center gap-2">
                      <ArrowLeft size={16} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
                      Back to login
                    </motion.span>
                  </Link>

                  {/* Header */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-10"
                  >
                    <h1 className="font-black text-5xl tracking-tighter mb-3">Reset password</h1>
                    <p className="text-gray-500 font-bold text-lg leading-snug">
                      Enter your email and we'll send a secure reset link.
                    </p>
                  </motion.div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.45 }}
                    >
                      <label className="block font-black text-xs uppercase tracking-widest text-gray-400 mb-4 ml-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="w-full pl-14 pr-6 py-4 border-[4px] border-black rounded-2xl font-bold text-xl focus:outline-none focus:ring-0 focus:border-purple-600 transition-colors shadow-[8px_8px_0_0_#000] focus:shadow-[10px_10px_0_0_#7C3AED]"
                        />
                        <Mail
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 transition-colors"
                          size={24}
                          strokeWidth={3}
                        />
                      </div>
                    </motion.div>

                    <motion.button
                      type="submit"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.55 }}
                      whileHover={{ scale: 1.02, x: [0, -2, 2, -2, 2, 0], transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-black text-white border-[4px] border-black py-5 rounded-[2rem] font-black text-2xl shadow-[8px_8px_0_0_#7C3AED] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all flex items-center justify-center gap-3 group overflow-hidden relative"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/10 -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700"
                      />
                      Send reset link
                      <ArrowRight size={28} strokeWidth={4} className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </form>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="pt-8 text-center"
                  >
                    <span className="text-gray-400 font-bold">Remember your password? </span>
                    <Link to="/login" className="font-black text-purple-600 hover:underline tracking-tight">
                      Sign In
                    </Link>
                  </motion.div>
                </motion.div>
              )}

              {/* ── STEP 2: Sent confirmation ── */}
              {step === 'sent' && (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                  className="text-center"
                >
                  {/* Success icon */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="mb-8 inline-block relative"
                  >
                    <div className="w-24 h-24 bg-green-500 border-[4px] border-black rounded-[2rem] flex items-center justify-center mx-auto shadow-[8px_8px_0_0_#000]">
                      <CheckCircle size={44} className="text-white" strokeWidth={2.5} />
                    </div>
                    {/* Pulse rings */}
                    {[1, 2].map(r => (
                      <motion.div
                        key={r}
                        animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: r * 0.4, ease: 'easeOut' }}
                        className="absolute inset-0 border-[3px] border-green-400/50 rounded-[2rem]"
                      />
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h1 className="font-black text-4xl tracking-tighter mb-3">Email sent!</h1>
                    <p className="text-gray-500 font-bold text-lg mb-2">
                      We sent a reset link to
                    </p>
                    <div className="inline-block bg-purple-50 border-[3px] border-black px-5 py-2 rounded-2xl font-black text-purple-700 text-lg shadow-[4px_4px_0_0_#000] mb-8">
                      {email}
                    </div>
                    <p className="text-gray-400 font-bold text-sm mb-10">
                      Didn't get it? Check your spam folder or try again in a minute.
                    </p>
                  </motion.div>

                  <div className="space-y-4">
                    <motion.button
                      onClick={() => setStep('request')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white border-[4px] border-black py-4 rounded-[2rem] font-black text-lg shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                    >
                      Resend link
                    </motion.button>

                    <Link to="/login" className="block">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-black text-white border-[4px] border-black py-4 rounded-[2rem] font-black text-lg shadow-[6px_6px_0_0_#7C3AED] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
                      >
                        <ArrowLeft size={20} strokeWidth={3} />
                        Back to login
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPasswordPage;
