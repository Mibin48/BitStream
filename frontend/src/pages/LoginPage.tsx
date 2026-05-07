import { Quote, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
  return (
    <div className="min-h-screen flex text-black font-sans selection:bg-purple-500 selection:text-white bg-white">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex w-2/5 bg-gradient-to-br from-purple-400 to-cyan-400 p-12 flex-col relative overflow-hidden border-r-[3px] border-black">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-24 h-24 bg-yellow-400 border-[3px] border-black rounded-full mix-blend-multiply opacity-50"
        />
        <motion.div 
          animate={{ x: [0, 20, 0], rotate: [0, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-40 left-10 w-32 h-32 bg-pink-400 border-[3px] border-black rounded-lg mix-blend-multiply opacity-50 rotate-12"
        />
        
        <div className="relative z-10 flex items-center gap-2 mb-12">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-xl">B</span>
          </div>
          <span className="font-black text-2xl tracking-tight">BitStream</span>
        </div>

        <div className="relative z-10 mt-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border-[3px] border-black rounded-2xl p-6"
            style={{ boxShadow: '8px 8px 0 0 #0F172A' }}
          >
            <Quote className="text-purple-500 mb-4" size={32} />
            <p className="font-bold text-xl mb-6">
              "BitStream has completely transformed how our engineering team collaborates. It's fast, beautiful, and just works."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border-[2px] border-black rounded-full bg-cyan-200 overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=1" alt="Sarah Connor" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-black">Sarah Connor</div>
                <div className="text-sm font-medium text-gray-600">CTO @ TechCorp</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-3/5 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-[420px]">
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="font-black text-4xl">Welcome back</h1>
              <p className="text-gray-600 font-medium">
                Sign in to your BitStream workspace
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-white border-[3px] border-black py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-50 hover:-translate-y-0.5 transition-all"
                      style={{ boxShadow: '2px 2px 0 0 #0F172A' }}>
                <GoogleIcon /> Continue with Google
              </button>
              
              <button className="w-full bg-white border-[3px] border-black py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-50 hover:-translate-y-0.5 transition-all"
                      style={{ boxShadow: '2px 2px 0 0 #0F172A' }}>
                <GitHubIcon /> Continue with GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-[2px] border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white font-black text-gray-500">OR</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <div className="space-y-4">
              <div>
                <label className="block font-bold text-sm mb-2">Email</label>
                <input 
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border-[3px] border-black rounded-xl font-medium focus:outline-none focus:ring-4 focus:ring-purple-200 transition-shadow"
                  style={{ boxShadow: '4px 4px 0 0 #0F172A' }}
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block font-bold text-sm">Password</label>
                  <a href="/reset-password" className="text-sm font-bold text-purple-600 hover:text-purple-700">
                    Forgot?
                  </a>
                </div>
                <input 
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border-[3px] border-black rounded-xl font-medium focus:outline-none focus:ring-4 focus:ring-purple-200 transition-shadow"
                  style={{ boxShadow: '4px 4px 0 0 #0F172A' }}
                />
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember"
                  className="w-5 h-5 border-[2px] border-black rounded accent-green-500 cursor-pointer"
                />
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-700 cursor-pointer">
                  Remember me for 30 days
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              style={{ boxShadow: '4px 6px 0 0 #0F172A' }}
              className="w-full bg-green-500 border-[3px] border-black py-4 rounded-xl font-black text-lg text-white hover:bg-green-600 hover:-translate-y-1 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
            >
              Sign in <ArrowRight size={20} strokeWidth={4} className="inline-block ml-1" />
            </button>

            {/* Signup Link */}
            <p className="text-center text-sm">
              <span className="text-gray-600 font-medium">Don't have an account? </span>
              <Link to="/signup" className="font-bold text-purple-600 hover:text-purple-700 underline">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
