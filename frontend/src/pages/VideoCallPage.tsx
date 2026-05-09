import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, MicOff, Video, VideoOff, Monitor, PhoneOff, 
  MoreVertical, MessageSquare, Users, Hand, Grid, 
  Maximize2, Smile, Activity, X, Zap, ChevronLeft, Volume2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const participants = [
  { name: 'Sarah Chen', initials: 'SC', role: 'Host', gradient: 'from-pink-400 to-pink-500', muted: false, videoOff: false },
  { name: 'You', initials: 'JD', role: '', gradient: 'from-purple-400 to-purple-600', muted: false, videoOff: true },
  { name: 'Mike Ross', initials: 'MR', role: '', gradient: 'from-blue-400 to-blue-500', muted: true, videoOff: false },
  { name: 'Emma Wilson', initials: 'EW', role: '', gradient: 'from-green-400 to-green-500', muted: false, videoOff: false },
];

const VideoCallPage = () => {
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(false);
  const [elapsed, setElapsed] = useState(1425); // 23:45
  const [showChat, setShowChat] = useState(false);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [activeReactions, setActiveReactions] = useState<{ id: number, emoji: string, x: number }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const addReaction = (emoji: string) => {
    const id = Date.now();
    const x = Math.random() * 80 + 10;
    setActiveReactions(prev => [...prev, { id, emoji, x }]);
    setTimeout(() => {
      setActiveReactions(prev => prev.filter(r => r.id !== id));
    }, 4000);
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#0F172A] relative overflow-hidden font-sans selection:bg-[#8b8abc] selection:text-white">
      {/* Premium Spatial Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] contrast-150 grayscale" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")' }} />
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-gradient-to-br from-[#8b8abc]/10 to-transparent blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-tr from-[#f06c9b]/10 to-transparent blur-[120px] rounded-full"
        />
      </div>

      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button 
            onClick={() => navigate('/meetings')}
            className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all active:scale-95 group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <div className="flex flex-col">
            <h2 className="text-white font-black text-lg tracking-tight flex items-center gap-2">
              Design Review
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            </h2>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40">
              <span className="text-[#c5f06c]">ID: MEET-772-BX</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>{participants.length} Active Participants</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 px-4 py-2.5 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
            <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-widest text-rose-500">Live Recording</span>
          </div>
          <div className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-white font-mono font-black text-sm tracking-tighter">
            {fmt(elapsed)}
          </div>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="absolute inset-0 flex items-center justify-center p-8 pt-24 pb-32">
        <div className="w-full h-full grid grid-cols-2 gap-6">
          {participants.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden shadow-2xl"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-5 blur-3xl`} />

              {/* Video Content / Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                {p.videoOff && !(p.name === 'You' && camOn) ? (
                  <div className="flex flex-col items-center gap-6">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className={`w-32 h-32 rounded-[2.5rem] bg-gradient-to-br ${p.gradient} flex items-center justify-center shadow-2xl relative group/avatar`}
                    >
                      <div className="absolute inset-0 rounded-[2.5rem] bg-white/20 blur opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
                      <span className="text-white font-black text-4xl relative z-10">{p.initials}</span>
                    </motion.div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                      <VideoOff size={12} className="text-white/40" />
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Camera Off</span>
                    </div>
                  </div>
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${p.gradient} opacity-20`} />
                )}
              </div>

              {/* Speaking Glow */}
              {i === 0 && (
                <div className="absolute inset-0 pointer-events-none ring-4 ring-emerald-500/20 shadow-[inset_0_0_100px_rgba(16,185,129,0.15)]" />
              )}

              {/* Label & Status Container */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-20">
                <div className="flex items-center gap-3 bg-slate-900/60 backdrop-blur-xl border border-white/10 pl-2 pr-5 py-2 rounded-[2rem] shadow-xl">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white font-black text-xs border-2 border-white/20`}>
                    {p.initials}
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xs leading-none mb-1">{p.name === 'You' ? 'You (Host)' : p.name}</h4>
                    <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">{p.role || 'Member'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-xl border ${p.muted ? 'bg-rose-500/20 border-rose-500/30 text-rose-500' : 'bg-white/5 border-white/10 text-white/60'}`}>
                    {p.muted ? <MicOff size={18} strokeWidth={2.5} /> : <Mic size={18} strokeWidth={2.5} />}
                  </div>
                </div>
              </div>

              {/* Top Hover Controls */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <button className="w-10 h-10 rounded-xl bg-slate-950/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all">
                  <MoreVertical size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Reaction Layer */}
      <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
        <AnimatePresence>
          {activeReactions.map(r => (
            <motion.div
              key={r.id}
              initial={{ y: '110vh', x: `${r.x}vw`, scale: 0, opacity: 0, rotate: 0 }}
              animate={{ 
                y: '-20vh', 
                x: `${r.x + (Math.random() * 20 - 10)}vw`,
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.5, 1.2, 1],
                rotate: [0, 45, -45, 0]
              }}
              transition={{ duration: 4, ease: "circOut" }}
              className="absolute text-5xl filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
            >
              {r.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Floating Control HUD */}
      <div className="absolute bottom-10 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-[#1e293b]/90 backdrop-blur-3xl border border-white/10 p-3.5 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.6)] flex items-center gap-5 pointer-events-auto"
        >
          {/* Media Cluster */}
          <div className="flex items-center gap-2 px-1">
            <button
              onClick={() => setMicOn(!micOn)}
              className={`w-[68px] h-[68px] rounded-[2rem] flex flex-col items-center justify-center gap-1 transition-all duration-300 ${micOn
                ? 'bg-[#c5f06c] text-slate-950 shadow-lg shadow-[#c5f06c]/20 hover:scale-105'
                : 'bg-rose-500 text-white shadow-lg shadow-rose-500/20 hover:scale-105'
                }`}
            >
              {micOn ? <Mic size={24} strokeWidth={2.5} /> : <MicOff size={24} strokeWidth={2.5} />}
              <span className="text-[9px] font-black uppercase tracking-tighter">{micOn ? 'On' : 'Off'}</span>
            </button>
            <button
              onClick={() => setCamOn(!camOn)}
              className={`w-[68px] h-[68px] rounded-[2rem] flex flex-col items-center justify-center gap-1 transition-all duration-300 ${camOn
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:scale-105'
                : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
            >
              {camOn ? <Video size={24} strokeWidth={2.5} /> : <VideoOff size={24} strokeWidth={2.5} />}
              <span className="text-[9px] font-black uppercase tracking-tighter">Camera</span>
            </button>
          </div>

          <div className="w-px h-10 bg-white/10" />

          {/* Engagement Cluster */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsHandRaised(!isHandRaised)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${isHandRaised ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10'
                }`}
            >
              <Hand size={22} fill={isHandRaised ? 'currentColor' : 'none'} />
            </button>
            <div className="relative group">
              <button className="w-14 h-14 rounded-2xl bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 flex items-center justify-center transition-all">
                <Smile size={22} />
              </button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 p-2 bg-slate-800 border border-white/10 rounded-2xl flex gap-1 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all translate-y-4 group-hover:translate-y-0 shadow-2xl">
                {['🔥', '❤️', '👏', '🚀', '😂'].map(emoji => (
                  <button
                    key={emoji}
                    onClick={() => addReaction(emoji)}
                    className="w-10 h-10 flex items-center justify-center text-xl hover:bg-white/10 rounded-xl transition-colors"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
            <button className="w-14 h-14 rounded-2xl bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 flex items-center justify-center transition-all">
              <Monitor size={22} />
            </button>
          </div>

          <div className="w-px h-10 bg-white/10" />

          {/* End Call Cluster */}
          <div className="flex items-center gap-2 px-1">
            <button
              onClick={() => setShowChat(!showChat)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${showChat ? 'bg-[#8b8abc] text-white shadow-lg shadow-[#8b8abc]/20' : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10'
                }`}
            >
              <MessageSquare size={22} />
            </button>
            <button 
              onClick={() => navigate('/meetings')}
              className="w-16 h-[68px] bg-rose-600 hover:bg-rose-700 text-white rounded-[2rem] flex items-center justify-center transition-all active:scale-95 shadow-xl shadow-rose-900/40 group border-b-4 border-rose-950 active:border-b-0"
            >
              <PhoneOff size={24} className="group-hover:rotate-[135deg] transition-transform duration-500" />
            </button>
          </div>

          <div className="w-px h-10 bg-white/10" />

          {/* Activity Cluster */}
          <button className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center transition-all hover:bg-[#8b8abc] group shadow-xl">
            <Activity size={22} className="group-hover:animate-pulse text-[#c5f06c]" />
          </button>
        </motion.div>
      </div>

      {/* Grid / Maximize Side Toggles */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        <button className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all shadow-xl backdrop-blur-md">
          <Grid size={18} />
        </button>
        <button className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all shadow-xl backdrop-blur-md">
          <Maximize2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default VideoCallPage;
