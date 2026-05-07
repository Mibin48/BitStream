import { Key, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ResetPasswordPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 font-sans text-black selection:bg-purple-500 selection:text-white">
      {/* Decorative background elements */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="fixed -top-32 -left-32 w-64 h-64 border-[4px] border-black border-dashed rounded-full opacity-20 pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="fixed bottom-20 right-20 w-16 h-16 bg-purple-200 border-[3px] border-black rounded-lg rotate-12 opacity-50 pointer-events-none"
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white border-[3px] border-black rounded-2xl p-8 space-y-6 relative z-10"
        style={{ boxShadow: '8px 8px 0 0 #0F172A' }}
      >
        {/* Back Button */}
        <Link to="/login" className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-black transition-colors">
          <ArrowLeft size={16} strokeWidth={4} /> Back to login
        </Link>

        <div className="text-center space-y-4 pt-2">
          <div className="w-16 h-16 bg-purple-100 border-[3px] border-black rounded-xl mx-auto flex items-center justify-center"
               style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
            <Key className="text-purple-600" size={28} />
          </div>
          <div>
            <h1 className="font-black text-3xl mb-2">Reset password</h1>
            <p className="text-gray-600 font-medium">
              Enter your email and we'll send you a reset link
            </p>
          </div>
        </div>

        <div className="space-y-6 pt-2">
          <div>
            <label className="block font-bold text-sm mb-2">Email</label>
            <input 
              type="email"
              placeholder="you@company.com"
              className="w-full px-4 py-3 border-[3px] border-black rounded-xl font-medium focus:outline-none focus:ring-4 focus:ring-purple-200 transition-shadow"
              style={{ boxShadow: '4px 4px 0 0 #0F172A' }}
            />
          </div>

          <button className="w-full bg-purple-500 border-[3px] border-black py-4 rounded-xl font-black text-lg text-white hover:bg-purple-600 hover:-translate-y-1 transition-all"
                  style={{ boxShadow: '4px 6px 0 0 #0F172A' }}>
            Send reset link
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPasswordPage;
