import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Plus, ChevronRight, X
} from 'lucide-react';

interface Participant {
  id: string;
  name: string;
  avatar: string;
}

interface VoiceRoom {
  id: string;
  name: string;
  emoji: string;
  memberCount: number;
  isActive: boolean;
  description: string;
  participants: Participant[];
}

const MOCK_ROOMS: VoiceRoom[] = [
  {
    id: '1',
    name: 'Coffee Break',
    emoji: '☕',
    memberCount: 3,
    isActive: true,
    description: 'Casual morning hangouts and non-work banter.',
    participants: [
      { id: 'p1', name: 'Alex Rivera', avatar: 'https://i.pravatar.cc/150?u=a1' },
      { id: 'p2', name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?u=s2' },
      { id: 'p3', name: 'Jordan Smyth', avatar: 'https://i.pravatar.cc/150?u=j3' },
    ]
  },
  {
    id: '2',
    name: 'Focus Room',
    emoji: '💼',
    memberCount: 5,
    isActive: true,
    description: 'Deep work sessions. No talking, just vibes.',
    participants: []
  },
  {
    id: '3',
    name: 'Quick Sync',
    emoji: '📞',
    memberCount: 0,
    isActive: false,
    description: 'Jump in for rapid-fire questions.',
    participants: []
  }
];

const VoiceRoomsPage = () => {
  const navigate = useNavigate();
  const [rooms] = useState<VoiceRoom[]>(MOCK_ROOMS);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleJoinRoom = (id: string) => {
    navigate(`/voice/call/${id}`);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#F8FAFC] overflow-y-auto custom-scrollbar selection:bg-[#8b8abc] selection:text-white relative">
      {/* Immersive Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-gradient-to-br from-[#8b8abc]/10 to-transparent blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-gradient-to-tr from-[#c5f06c]/10 to-transparent blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.015]"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #8b8abc 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="p-8 lg:p-10 max-w-[1500px] mx-auto w-full relative z-10">
        {/* Breadcrumb Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8"
        >
          <span>Home</span>
          <ChevronRight size={10} strokeWidth={4} />
          <span className="text-slate-900">Voice Portal</span>
        </motion.div>

        {/* Refined Hero Header */}
        <div className="space-y-10 mb-16">
          <div className="space-y-6">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-lg bg-slate-100 border-2 border-white flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#c5f06c] rounded-full animate-pulse shadow-[0_0_8px_#c5f06c]" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">12 Team members live</span>
              </div>
            </motion.div>
            
            <h1 className="text-7xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-none italic drop-shadow-[4px_4px_0px_rgba(139,138,188,0.2)]">
              Voice<span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#8b8abc] to-[#7a79a8] ml-4 pr-10">Rooms</span>
            </h1>
            
            <p className="text-xl font-bold text-slate-500 max-w-2xl leading-relaxed">
              Break the digital wall with spontaneous audio. No meetings, just drop-in collaboration.
            </p>
          </div>
        </div>

        {/* Asymmetric Creative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-20">
          {/* New Space Integration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => setShowCreateModal(true)}
            className="relative overflow-hidden p-8 flex flex-col items-center justify-center group cursor-pointer h-[360px] rounded-[3rem] border-4 border-dashed border-slate-200 bg-white/50 hover:bg-white hover:border-[#8b8abc] transition-all hover:shadow-2xl"
          >
            <div className="w-20 h-20 bg-slate-900 rounded-[2rem] flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all">
              <Plus size={32} strokeWidth={3} />
            </div>
            <h3 className="text-xl font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900">New Space</h3>
          </motion.div>

          {rooms.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8, rotate: idx % 2 === 0 ? 0.3 : -0.3 }}
              className={`relative overflow-hidden p-8 flex flex-col group cursor-pointer h-[360px] transition-all duration-300 ${idx % 3 === 0
                ? 'rounded-[3rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(15,23,42,0.04)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.1)]'
                : 'rounded-[2.5rem] bg-[#1e1b4b] text-white shadow-xl hover:shadow-[0_20px_50px_rgba(124,58,237,0.2)]'
                }`}
              onClick={() => handleJoinRoom(room.id)}
            >
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-4xl shadow-lg transition-transform group-hover:scale-110 duration-500 ${idx % 3 === 0 ? 'bg-slate-50 border border-slate-100' : 'bg-white/10 border border-white/10'
                  }`}>
                  {room.emoji}
                </div>
                {room.isActive && (
                  <div className="flex flex-col items-end gap-1">
                    <div className="px-3 py-1 bg-[#c5f06c] text-slate-900 rounded-lg text-[9px] font-black uppercase tracking-widest animate-pulse flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                      LIVE
                    </div>
                    <span className={`text-[10px] font-black ${idx % 3 === 0 ? 'text-slate-400' : 'text-white/40'}`}>
                      {room.memberCount} joined
                    </span>
                  </div>
                )}
              </div>

              <div className="flex-1 relative z-10">
                <h3 className={`text-2xl font-extrabold mb-3 tracking-tight ${idx % 3 === 0 ? 'text-slate-900' : 'text-white'}`}>
                  {room.name}
                </h3>
                <p className={`text-sm font-bold leading-relaxed line-clamp-3 opacity-60 ${idx % 3 === 0 ? 'text-slate-500' : 'text-white/60'}`}>
                  {room.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {room.participants.slice(0, 3).map((p) => (
                      <div key={p.id} className="w-10 h-10 rounded-xl ring-4 ring-current border border-black/10 overflow-hidden bg-slate-200">
                        <img src={p.avatar} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  {room.memberCount > 3 && (
                    <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${idx % 3 === 0 ? 'bg-slate-100 text-slate-400' : 'bg-white/10 text-white/40'
                      }`}>
                      +{room.memberCount - 3}
                    </span>
                  )}
                </div>
                <button className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 shadow-lg ${idx % 3 === 0 ? 'bg-slate-900 text-white hover:bg-[#7C3AED]' : 'bg-[#7C3AED] text-white hover:bg-white hover:text-[#7C3AED]'
                  }`}>
                  <ChevronRight size={24} strokeWidth={3} />
                </button>
              </div>

              <div className={`absolute -bottom-10 -right-10 w-40 h-40 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity rounded-full pointer-events-none ${idx % 3 === 0 ? 'bg-[#8b8abc]' : 'bg-[#7C3AED]'
                }`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Create Portal Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCreateModal(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-xl bg-white rounded-[3rem] shadow-3xl overflow-hidden flex flex-col border border-white/20"
            >
              <div className="h-4 bg-gradient-to-r from-[#8b8abc] via-[#c5f06c] to-[#8b8abc] bg-[length:200%_auto] animate-gradient-x" />
              <div className="p-8 lg:p-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tighter leading-tight">Launch a <span className="text-[#8b8abc]">Portal</span></h2>
                    <p className="text-xs font-bold text-slate-400">Collaborate spontaneously with your team.</p>
                  </div>
                  <button onClick={() => setShowCreateModal(false)} className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all hover:rotate-90">
                    <X size={20} strokeWidth={3} />
                  </button>
                </div>

                <div className="space-y-6">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Portal Name</label>
                  <input
                    type="text"
                    placeholder="e.g. The Matrix 🕶️"
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl py-5 px-8 text-slate-900 font-black text-lg focus:outline-none focus:border-[#8b8abc] transition-all"
                  />
                </div>

                <button
                  onClick={() => setShowCreateModal(false)}
                  className="w-full bg-slate-900 text-white py-6 rounded-[2.5rem] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-[#8b8abc] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                >
                  Create Portal
                  <ChevronRight size={20} strokeWidth={3} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VoiceRoomsPage;
