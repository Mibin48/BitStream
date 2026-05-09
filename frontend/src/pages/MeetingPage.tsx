import { useState } from 'react';
import { Video, Keyboard, Calendar, Plus, Link2, Clock, MoreVertical, Users, Sparkles, Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MeetingPage = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    { icon: Shield, label: 'Encrypted', color: 'text-[#8b8abc]', bg: 'bg-[#8b8abc]/10 border border-[#8b8abc]/20' },
    { icon: Zap, label: 'HD Quality', color: 'text-[#5a7a1a]', bg: 'bg-[#c5f06c]/20 border border-[#c5f06c]/30' },
    { icon: Users, label: 'Up to 100', color: 'text-[#c0336e]', bg: 'bg-[#f06c9b]/10 border border-[#f06c9b]/20' },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden px-8 pt-2 pb-6 gap-8 relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-lime-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-pink-200/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Container */}
      <div className="flex-1 bg-white rounded-[2.5rem] border border-slate-200/80 shadow-xl shadow-slate-200/40 flex flex-col lg:flex-row overflow-hidden relative z-10">

        {/* Left Side: Actions */}
        <div className="flex-1 min-w-0 p-10 lg:p-14 pt-16 lg:pt-20 flex flex-col justify-start relative overflow-y-auto custom-scrollbar">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #8b8abc 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Status badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-100 rounded-full w-fit mb-6 relative z-10"
          >
            {/* <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5f06c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5f06c]"></span>
            </span> */}
          {/* <span className="text-xs font-black text-[#1a1a1a] tracking-wide uppercase">All systems operational</span> */}
          {/* </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-[1.05] relative z-10"
          >
            Premium video <br className="hidden lg:block" />
            meetings.{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#8b8abc] to-[#7a79a8] bg-clip-text text-transparent">
                Now free.
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 100,4 T200,3" stroke="#8b8abc" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-medium text-lg mb-10 max-w-lg leading-relaxed relative z-10"
          >
            Connect, collaborate, and celebrate from anywhere with BitStream Meet — built for teams that move fast.
          </motion.p>

          {/* Action area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch gap-3 relative z-10"
          >
            <button
              onClick={() => navigate('/video-call')}
              className="group relative w-full sm:w-auto px-7 py-4 bg-gradient-to-br from-[#8b8abc] to-[#7a79a8] text-white rounded-2xl font-black text-base shadow-[0_10px_20px_-10px_rgba(139,138,188,0.5)] hover:shadow-[0_20px_30px_-10px_rgba(139,138,188,0.6)] transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2.5 overflow-hidden border-b-4 border-purple-950 active:border-b-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Video size={20} strokeWidth={2.5} className="relative z-10" />
              <span className="relative z-10">New Meeting</span>
              <ArrowRight size={16} strokeWidth={3} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="w-full sm:w-80 relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#8b8abc] transition-colors">
                <Keyboard size={20} strokeWidth={2.5} />
              </div>
              <input
                type="text"
                placeholder="Enter a code or link"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full pl-12 pr-24 py-4 bg-slate-50/50 border-2 border-slate-200 rounded-2xl text-slate-800 font-bold focus:outline-none focus:border-[#8b8abc] focus:bg-white focus:ring-8 focus:ring-purple-500/5 transition-all placeholder-slate-400"
              />
              <button
                disabled={!code.trim()}
                onClick={() => navigate('/video-call')}
                className="absolute inset-y-2 right-2 px-4 bg-[#8b8abc] text-white font-black rounded-xl hover:bg-purple-700 disabled:opacity-0 disabled:scale-95 transition-all flex items-center gap-1 shadow-md shadow-purple-900/20"
              >
                Join <ArrowRight size={14} strokeWidth={3} />
              </button>
            </div>
          </motion.div>

          {/* Personal Room Section */}
          <div className="mt-12 relative z-10">
            {/* Personal Meeting Room */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm"
            >
              <h3 className="text-sm font-black text-slate-900 mb-3 flex items-center gap-2">
                <Link2 size={16} className="text-purple-600" />
                Your Personal Room
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-slate-50 px-3 py-2.5 rounded-xl border border-slate-100 text-[11px] font-bold text-slate-500 truncate">
                  bitstream.meet/mibin-workspace
                </div>
                <button className="p-2.5 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors">
                  <Plus size={16} className="rotate-45" />
                </button>
              </div>
              <p className="mt-2 text-[10px] font-bold text-slate-400">Always available for instant syncs</p>
            </motion.div>
          </div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 mt-8 relative z-10"
          >
            {features.map((feature, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`flex items-center gap-2 px-3.5 py-2 ${feature.bg} rounded-full border border-slate-200/60 cursor-default transition-all ${hoveredFeature === i ? 'scale-105 -translate-y-0.5 shadow-md border-purple-200' : ''}`}
              >
                <feature.icon size={14} className={feature.color} strokeWidth={2.5} />
                <span className={`text-xs font-black ${feature.color}`}>{feature.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Bottom info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between relative z-10"
          >
            <a href="#" className="text-purple-600 font-bold hover:text-purple-700 flex items-center gap-2 group text-sm">
              <Link2 size={16} className="group-hover:rotate-12 transition-transform" />
              Learn more about BitStream Meet
              <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
            <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-400">
              <CheckCircle2 size={14} className="text-emerald-500" />
              <span>No download required</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Schedule */}
        <div className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0 bg-slate-50/40 backdrop-blur-xl border-l border-white/20 flex flex-col relative overflow-hidden">
          {/* Subtle noise/texture */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* Header */}
          <div className="px-7 pt-8 pb-6 relative z-10">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <h2 className="text-xl font-black text-slate-900 tracking-tight leading-tight">Today's Schedule</h2>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-[#8b8abc] hover:border-[#8b8abc] hover:text-white text-slate-500 shadow-sm transition-all hover:shadow-lg group"
              >
                <Plus size={18} strokeWidth={2.5} className="group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>

          {/* Stats bar */}
          <div className="px-7 pb-5 relative z-10">
            <div className="grid grid-cols-3 gap-2 p-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-white shadow-[0_4px_12px_-2px_rgba(0,0,0,0.05)]">
              <div className="text-center border-r border-slate-100">
                <div className="text-lg font-black text-slate-900">3</div>
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Meetings</div>
              </div>
              <div className="text-center border-r border-slate-100">
                <div className="text-lg font-black text-purple-600">2h</div>
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Total</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-black text-emerald-600">1</div>
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Live</div>
              </div>
            </div>
          </div>

          {/* Meeting list */}
          <div className="flex-1 overflow-y-auto px-7 pb-4 space-y-6 custom-scrollbar relative z-10">
            <div className="mt-2">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Live & Upcoming</span>
                <div className="h-px flex-1 bg-slate-100 ml-3" />
              </div>

              {[
                { title: 'Engineering Standup', time: '10:00 AM - 10:30 AM', color: 'bg-[#c5f06c]', ringColor: 'ring-[#c5f06c]/10', borderColor: 'border-[#c5f06c]/20', status: 'past', participants: 8 },
                { title: 'Design Review', time: '01:00 PM - 02:00 PM', color: 'bg-[#f06c9b]', ringColor: 'ring-[#f06c9b]/20', borderColor: 'border-[#f06c9b]/20', status: 'live', participants: 5 },
                { title: 'Product Sync', time: '03:30 PM - 04:00 PM', color: 'bg-[#f0e66c]', ringColor: 'ring-[#f0e66c]/10', borderColor: 'border-[#f0e66c]/20', status: 'upcoming', participants: 12 },
              ].map((meeting, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer group relative overflow-hidden ${meeting.status === 'live'
                    ? `bg-white ${meeting.borderColor} shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-4 ${meeting.ringColor} border-t-0`
                    : meeting.status === 'past'
                      ? 'bg-white/40 border-slate-100 opacity-60'
                      : 'bg-white border-slate-100 shadow-sm hover:border-purple-200 hover:shadow-md'
                    }`}
                >
                  {/* Live indicator stripe */}
                  {meeting.status === 'live' && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c5f06c] via-[#f06c9b] to-[#f0e66c] bg-[length:200%_100%] animate-gradient" />
                  )}

                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="relative">
                        <div className={`w-2.5 h-2.5 rounded-full ${meeting.color}`} />
                        {meeting.status === 'live' && (
                          <div className={`absolute inset-0 w-2.5 h-2.5 rounded-full ${meeting.color} animate-ping`} />
                        )}
                      </div>
                      <div>
                        <h3 className={`font-black text-sm tracking-tight ${meeting.status === 'past' ? 'text-slate-500 line-through' : 'text-slate-900'}`}>
                          {meeting.title}
                        </h3>
                        {meeting.status === 'live' && (
                          <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-black uppercase tracking-wider text-[#f06c9b] bg-[#f06c9b]/10 px-1.5 py-0.5 rounded-md">
                            <span className="w-1.5 h-1.5 bg-[#f06c9b] rounded-full animate-pulse" />
                            Happening Now
                          </span>
                        )}
                      </div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity p-1 -mr-1">
                      <MoreVertical size={16} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <Clock size={13} strokeWidth={2.5} /> {meeting.time}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                      <Users size={13} strokeWidth={2.5} />
                      {meeting.participants}
                    </div>
                  </div>

                  {/* Avatar stack */}
                  <div className="flex items-center mt-3">
                    <div className="flex -space-x-2">
                      {[...Array(Math.min(meeting.participants, 4))].map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-6 h-6 rounded-full border-2 border-white shadow-sm ${['bg-blue-500', 'bg-purple-500', 'bg-emerald-500', 'bg-amber-500'][idx]
                            } flex items-center justify-center text-[9px] font-black text-white`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </div>
                      ))}
                      {meeting.participants > 4 && (
                        <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[9px] font-black text-slate-600">
                          +{meeting.participants - 4}
                        </div>
                      )}
                    </div>
                  </div>

                  {meeting.status === 'live' && (
                    <button
                      onClick={() => navigate('/video-call')}
                      className="mt-4 w-full py-3 bg-[#c5f06c] text-[#1a1a1a] font-black text-sm rounded-xl hover:shadow-[0_10px_20px_-5px_rgba(197,240,108,0.4)] transition-all flex items-center justify-center gap-2 group/btn active:scale-95 border-b-4 border-[#a3c959] active:border-b-0"
                    >
                      <Video size={14} strokeWidth={2.5} />
                      Join Now
                      <ArrowRight size={14} strokeWidth={3} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </motion.div>
              ))}

              {/* Recent Recordings Section */}
              <div className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Recent Recordings</span>
                  <div className="h-px flex-1 bg-slate-100 ml-3" />
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'Project Kickoff', date: 'Yesterday', duration: '45m' },
                    { title: 'API Review', date: 'May 6', duration: '1h 20m' },
                  ].map((rec, i) => (
                    <div key={i} className="p-3 bg-white border border-slate-100 rounded-xl hover:border-blue-200 transition-all cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-purple-50 group-hover:text-purple-500 transition-colors">
                          <Video size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-black text-slate-900 truncate">{rec.title}</h4>
                          <p className="text-[10px] font-bold text-slate-400 mt-0.5">{rec.date} • {rec.duration}</p>
                        </div>
                        <MoreVertical size={14} className="text-slate-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Calendar connect footer */}
          <div className="px-7 pb-7 pt-4 border-t border-white/40 relative z-10">
            <button className="w-full py-4 px-4 bg-white/60 backdrop-blur-md border border-white rounded-2xl text-sm font-black text-slate-700 hover:border-purple-400 hover:bg-white hover:text-purple-700 transition-all flex items-center justify-center gap-2 group shadow-sm hover:shadow-md">
              <Calendar size={18} strokeWidth={2.5} className="group-hover:scale-110 group-hover:rotate-6 transition-transform text-purple-600" />
              <span>Sync External Calendar</span>
              <Sparkles size={14} className="text-amber-500 animate-pulse" />
            </button>
          </div>
        </div>

      </div>

      {/* Add gradient animation keyframes via style tag */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default MeetingPage;