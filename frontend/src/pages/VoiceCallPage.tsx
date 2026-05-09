import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Mic, MicOff, PhoneOff, Users, Settings, Plus,
  MessageSquare, Hand, ScreenShare, Volume2,
  VolumeX, Lock, X, Zap, ChevronLeft, MoreVertical, 
  Smile, Activity
} from 'lucide-react';

interface Participant {
  id: string;
  name: string;
  avatar: string;
  isSpeaking: boolean;
  isMuted: boolean;
  isVideoOn: boolean;
  isHandRaised: boolean;
  role: 'host' | 'moderator' | 'speaker' | 'listener';
}

const MOCK_PARTICIPANTS: Participant[] = [
  { id: 'me', name: 'You', avatar: 'https://i.pravatar.cc/300?u=me', isSpeaking: false, isMuted: false, isVideoOn: false, isHandRaised: false, role: 'host' },
  { id: 'p1', name: 'Alex Rivera', avatar: 'https://i.pravatar.cc/150?u=a1', isSpeaking: true, isMuted: false, isVideoOn: false, isHandRaised: false, role: 'moderator' },
  { id: 'p2', name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?u=s2', isSpeaking: false, isMuted: true, isVideoOn: false, isHandRaised: false, role: 'speaker' },
  { id: 'p3', name: 'Jordan Smyth', avatar: 'https://i.pravatar.cc/150?u=j3', isSpeaking: true, isMuted: false, isVideoOn: false, isHandRaised: false, role: 'speaker' },
  { id: 'p4', name: 'Elena Gilbert', avatar: 'https://i.pravatar.cc/150?u=e4', isSpeaking: false, isMuted: false, isVideoOn: false, isHandRaised: false, role: 'listener' },
  { id: 'p5', name: 'Marcus Aurelius', avatar: 'https://i.pravatar.cc/150?u=m5', isSpeaking: false, isMuted: false, isVideoOn: false, isHandRaised: false, role: 'listener' },
];

const VoiceCallPage = () => {
  useParams(); // roomId exists in URL but unused here for now
  const navigate = useNavigate();
  const [isSelfMuted, setIsSelfMuted] = useState(false);
  const [isSelfDeafened, setIsSelfDeafened] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [activeReactions, setActiveReactions] = useState<{ id: number, emoji: string, x: number }[]>([]);

  // Add random reactions for demo
  const addReaction = (emoji: string) => {
    const id = Date.now();
    const x = Math.random() * 80 + 10; // 10% to 90%
    setActiveReactions(prev => [...prev, { id, emoji, x }]);
    setTimeout(() => {
      setActiveReactions(prev => prev.filter(r => r.id !== id));
    }, 3000);
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#0F172A] relative overflow-hidden font-sans selection:bg-[#8b8abc] selection:text-white">
      {/* Premium Background: Noise + Moving Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] contrast-150 grayscale" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")' }} />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-gradient-to-br from-[#8b8abc]/10 to-transparent blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-tl from-[#c5f06c]/5 to-transparent blur-[100px] rounded-full"
        />
      </div>

      {/* Top Navigation: Balanced & Grouped */}
      <div className="relative z-20 flex items-center justify-between px-10 py-8 backdrop-blur-md border-b border-white/5">
        {/* Left: Room Info */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate('/voice')}
            className="w-11 h-11 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-white tracking-tight leading-none">Coffee Break</h1>
              <div className="px-2 py-0.5 bg-[#c5f06c]/10 text-[#c5f06c] border border-[#c5f06c]/20 rounded-md text-[9px] font-black tracking-widest uppercase">Live</div>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-medium text-slate-400">
              <div className="flex items-center gap-1.5 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                <Users size={12} className="text-slate-500" />
                <span className="font-bold text-slate-300">12</span>
                <span className="opacity-50">Members</span>
              </div>
              <div className="flex items-center gap-1.5 opacity-60">
                <Lock size={12} />
                <span>E2E Encrypted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Global Utilities */}
        <div className="flex items-center gap-2">
          <button className="w-11 h-11 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all" title="Share Screen">
            <ScreenShare size={20} />
          </button>
          <button className="w-11 h-11 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all" title="Add Participants">
            <Plus size={20} />
          </button>
          <button className="w-11 h-11 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all" title="Room Settings">
            <Settings size={20} />
          </button>
        </div>

        {/* Right: Leave Isolated */}
        <div className="flex items-center gap-4">
          <div className="h-6 w-px bg-white/10 mx-2" />
          <button
            onClick={() => navigate('/voice')}
            className="h-11 px-6 bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-3 active:scale-95"
          >
            <PhoneOff size={18} fill="currentColor" />
            Leave
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 h-[calc(100vh-108px)] flex overflow-hidden relative">
        {/* Scrollable Stage: Centered Grid */}
        <div className={`flex-1 overflow-y-auto custom-scrollbar p-12 pb-32 transition-all duration-500 ${showChat ? 'pr-4' : ''}`}>
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center content-start gap-8">
            {MOCK_PARTICIPANTS.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`relative w-full sm:w-[280px] aspect-[4/5] rounded-[2.5rem] p-6 flex flex-col items-center justify-between transition-all duration-300 group overflow-hidden ${p.isSpeaking
                  ? 'bg-white/[0.08] border-2 border-[#c5f06c]/30 shadow-2xl shadow-[#c5f06c]/5'
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
                  }`}
              >
                {/* Speaking Waveform Aura */}
                {p.isSpeaking && (
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-[#c5f06c] blur-[60px] pointer-events-none"
                  />
                )}

                {/* Role Badge */}
                <div className="absolute top-6 right-6">
                  <div className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${p.role === 'host' ? 'bg-[#8b8abc]/20 border-[#8b8abc]/40 text-[#8b8abc]' :
                    p.role === 'moderator' ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-400' :
                      'bg-white/10 border-white/10 text-white/40'
                    }`}>
                    {p.role}
                  </div>
                </div>

                {/* Avatar Treatment: Standardized */}
                <div className="relative mt-8">
                  {/* Subtle Border/Ring */}
                  <div className={`absolute inset-[-10px] rounded-[2rem] border-2 transition-all duration-500 ${p.isSpeaking ? 'border-[#c5f06c] animate-pulse' : 'border-white/5'
                    }`} />

                  <img
                    src={p.avatar}
                    className={`w-32 h-32 rounded-[1.8rem] object-cover ring-2 ring-white/10 transition-all duration-500 ${p.isSpeaking ? 'scale-105' : 'group-hover:scale-105'
                      }`}
                    alt={p.name}
                  />

                  {/* Status Overlay Icons */}
                  <div className="absolute -bottom-2 -right-2 flex gap-1.5">
                    {p.isMuted && (
                      <div className="w-9 h-9 bg-rose-500 rounded-xl flex items-center justify-center text-white shadow-xl ring-4 ring-[#0F172A]">
                        <MicOff size={16} />
                      </div>
                    )}
                    {p.isHandRaised && (
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center text-white shadow-xl ring-4 ring-[#0F172A]"
                      >
                        <Hand size={16} fill="currentColor" />
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-center w-full mt-4">
                  {/* Text Hierarchy: Names & Status */}
                  <div className="text-center w-full relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-lg font-medium text-white tracking-tight mb-1">{p.name}</h3>
                    <div className="flex items-center justify-center gap-2">
                      {p.isSpeaking ? (
                        <div className="flex items-center gap-1.5">
                          <motion.div
                            animate={{ scaleY: [1, 2, 1] }}
                            transition={{ repeat: Infinity, duration: 0.4 }}
                            className="w-0.5 h-3 bg-[#c5f06c] rounded-full"
                          />
                          <motion.div
                            animate={{ scaleY: [1, 2.5, 1] }}
                            transition={{ repeat: Infinity, duration: 0.4, delay: 0.1 }}
                            className="w-0.5 h-3 bg-[#c5f06c] rounded-full"
                          />
                          <span className="text-[10px] font-bold text-[#c5f06c] tracking-wide">Speaking...</span>
                        </div>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-500 tracking-wide">Listening</span>
                      )}
                    </div>
                  </div>

                  {/* Quick Action Reveal just below name */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center gap-2 mt-2"
                  >
                    <button className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110">
                      <Volume2 size={16} />
                    </button>
                    <button className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110">
                      <MessageSquare size={16} />
                    </button>
                    <button className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110">
                      <MoreVertical size={16} />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Improved Chat Sidebar: Refined Glassmorphism */}
        <AnimatePresence>
          {showChat && (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-[420px] bg-[#0F172A]/80 backdrop-blur-3xl border-l border-white/5 flex flex-col relative z-30"
            >
              <div className="p-8 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#8b8abc]/10 rounded-xl flex items-center justify-center text-[#8b8abc]">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">Portal Chat</h3>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">34 Messages active</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChat(false)}
                  className="w-10 h-10 hover:bg-white/5 rounded-xl flex items-center justify-center text-slate-500 hover:text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex gap-4">
                    <img src={`https://i.pravatar.cc/100?u=p${i}`} className="w-9 h-9 rounded-xl object-cover ring-2 ring-white/5" />
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#8b8abc]">Alex Rivera</span>
                        <span className="text-[9px] font-medium text-slate-600 uppercase">12:45 PM</span>
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5">
                        <p className="text-sm text-slate-300 leading-relaxed font-medium">
                          Loving the vibe in here today! Anyone up for some quick feedback on the new landing page? 🚀
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input: Premium Feel */}
              <div className="p-8 bg-black/20 border-t border-white/5">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white text-sm focus:outline-none focus:border-[#8b8abc]/50 focus:bg-white/10 transition-all pr-24"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-white transition-colors">
                      <Smile size={18} />
                    </button>
                    <button className="w-8 h-8 bg-[#8b8abc] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#8b8abc]/20 hover:scale-105 active:scale-95 transition-all">
                      <Zap size={18} fill="currentColor" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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

      {/* Primary HUD Controls: Refined & Spatial */}
      <div className="absolute bottom-10 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-[#1e293b]/90 backdrop-blur-3xl border border-white/10 p-3.5 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.6)] flex items-center gap-5 pointer-events-auto"
        >
          {/* Audio Cluster */}
          <div className="flex items-center gap-2 px-1">
            <button
              onClick={() => setIsSelfMuted(!isSelfMuted)}
              className={`w-[68px] h-[68px] rounded-[2rem] flex flex-col items-center justify-center gap-1 transition-all duration-300 ${!isSelfMuted
                ? 'bg-[#c5f06c] text-slate-950 shadow-lg shadow-[#c5f06c]/20 hover:scale-105'
                : 'bg-rose-500 text-white shadow-lg shadow-rose-500/20 hover:scale-105'
                }`}
              title={isSelfMuted ? "Unmute Mic" : "Mute Mic"}
            >
              {!isSelfMuted ? <Mic size={24} strokeWidth={2.5} /> : <MicOff size={24} strokeWidth={2.5} />}
              <span className="text-[9px] font-black uppercase tracking-tighter">{!isSelfMuted ? 'On' : 'Off'}</span>
            </button>
            <button
              onClick={() => setIsSelfDeafened(!isSelfDeafened)}
              className={`w-[68px] h-[68px] rounded-[2rem] flex flex-col items-center justify-center gap-1 transition-all duration-300 ${isSelfDeafened
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:scale-105'
                : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              title={isSelfDeafened ? "Undeafen" : "Deafen"}
            >
              {isSelfDeafened ? <VolumeX size={24} /> : <Volume2 size={24} />}
              <span className="text-[9px] font-black uppercase tracking-tighter">Audio</span>
            </button>
          </div>

          <div className="w-px h-10 bg-white/10" />

          {/* Engagement Cluster */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsHandRaised(!isHandRaised)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${isHandRaised ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10'
                }`}
              title="Raise Hand"
            >
              <Hand size={22} fill={isHandRaised ? 'currentColor' : 'none'} />
            </button>
            <div className="relative group">
              <button className="w-14 h-14 rounded-2xl bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 flex items-center justify-center transition-all">
                <Smile size={22} />
              </button>
              {/* Reaction Quick Picker */}
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
          </div>

          <div className="w-px h-10 bg-white/10" />

          {/* Social Cluster */}
          <div className="flex items-center gap-2 px-1">
            <button
              onClick={() => setShowChat(!showChat)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${showChat ? 'bg-[#8b8abc] text-white shadow-lg shadow-[#8b8abc]/20' : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10'
                }`}
              title="Toggle Chat"
            >
              <MessageSquare size={22} />
            </button>
            <button className="w-14 h-14 rounded-2xl bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 flex items-center justify-center transition-all">
              <MoreVertical size={22} />
            </button>
          </div>

          <div className="w-px h-10 bg-white/10" />

          {/* Activity Cluster */}
          <button className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center transition-all hover:bg-[#8b8abc] group shadow-xl">
            <Activity size={22} className="group-hover:animate-pulse text-[#c5f06c]" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default VoiceCallPage;
