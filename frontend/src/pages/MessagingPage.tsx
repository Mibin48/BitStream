import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Plus, Phone, MoreVertical, Send, Smile, Bold, Italic, Link2,
  Hash, Paperclip, Video, X, Zap, Mic, Camera
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const conversations = [
  { id: 0, name: 'Design Team', message: 'Sarah: The new mockups look great!', time: '2m', unread: 3, initials: 'DT', online: true, type: 'channel', color: 'bg-[#9c9bcf] text-white', members: 8, activeColor: 'bg-[#9c9bcf]/10' },
  { id: 1, name: 'Sarah Chen', message: 'Can you review the designs?', time: '15m', unread: 1, initials: 'SC', online: true, type: 'dm', color: 'bg-[#f06c9b] text-white', members: 2, activeColor: 'bg-[#f06c9b]/10' },
  { id: 2, name: 'Engineering', message: 'Mike: Deployed to production ✓', time: '1h', unread: 0, initials: 'EN', online: false, type: 'channel', color: 'bg-[#8b8abc] text-white', members: 12, activeColor: 'bg-[#8b8abc]/10' },
  { id: 3, name: 'Marketing', message: 'Emma: Campaign metrics are up 🚀', time: '2h', unread: 0, initials: 'MA', online: false, type: 'channel', color: 'bg-[#f0e66c] text-[#1a1a1a]', members: 6, activeColor: 'bg-[#f0e66c]/10' },
  { id: 4, name: 'Mike Ross', message: 'Are we still on for the call?', time: '3h', unread: 0, initials: 'MR', online: true, type: 'dm', color: 'bg-[#c5f06c] text-[#1a1a1a]', members: 2, activeColor: 'bg-[#c5f06c]/10' },
  { id: 5, name: 'General', message: 'Alex: Welcome everyone 👋', time: 'Yesterday', unread: 0, initials: 'GE', online: false, type: 'channel', color: 'bg-[#f09b6c] text-white', members: 45, activeColor: 'bg-[#f09b6c]/10' },
];

const messages = [
  { id: 1, sender: 'Sarah Chen', avatar: 'SC', color: 'bg-[#f06c9b] text-white', text: 'Hey team! I just finished the new dashboard mockups. Would love to get your feedback before the design review.', time: '10:23 AM', self: false, bubbleColor: 'bg-[#f06c9b]/5 border-[#f06c9b]/20 text-slate-800' },
  { id: 2, sender: 'You', avatar: 'JD', color: 'bg-[#8b8abc] text-white', text: 'Looking great! The color scheme works really well. The card layout is especially clean.', time: '10:25 AM', self: true, bubbleColor: 'bg-[#8b8abc] border-[#8b8abc] text-white' },
  { id: 3, sender: 'Mike Ross', avatar: 'MR', color: 'bg-[#c5f06c] text-[#1a1a1a]', text: 'Agreed. Can we add a dark mode variant? A lot of users have been requesting it.', time: '10:26 AM', self: false, bubbleColor: 'bg-[#c5f06c]/10 border-[#c5f06c]/30 text-slate-800' },
  { id: 4, sender: 'Sarah Chen', avatar: 'SC', color: 'bg-[#f06c9b] text-white', text: "Absolutely! I'll start working on the dark mode tokens today. Should be ready by EOD.", time: '10:28 AM', self: false, bubbleColor: 'bg-[#f06c9b]/5 border-[#f06c9b]/20 text-slate-800' },
  { id: 5, sender: 'You', avatar: 'JD', color: 'bg-[#8b8abc] text-white', text: "Perfect. Let's sync up after the design review to align on the color system.", time: '10:30 AM', self: true, bubbleColor: 'bg-[#8b8abc] border-[#8b8abc] text-white' },
];

const MessagingPage = () => {
  const [activeConvo, setActiveConvo] = useState<number | null>(null);
  const [messageText, setMessageText] = useState('');
  const [filter, setFilter] = useState<'all' | 'unread' | 'dms'>('all');
  const [joiningRoom, setJoiningRoom] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleJoinVoice = (roomName: string) => {
    setJoiningRoom(roomName);
    setTimeout(() => {
      navigate('/voice');
    }, 1800);
  };

  const filtered = conversations.filter(c => {
    if (filter === 'unread') return c.unread > 0;
    if (filter === 'dms') return c.type === 'dm';
    return true;
  });

  const active = activeConvo !== null ? conversations[activeConvo] : null;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 128)}px`;
    }
  }, [messageText]);

  return (
    <div className="flex-1 flex overflow-hidden px-8 pt-2 pb-4 gap-8 bg-gradient-to-tr from-pink-50/20 via-white to-purple-50/20 relative">
      <AnimatePresence>
        {joiningRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0F172A]/90 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative"
            >
              <div className="w-48 h-48 rounded-[3rem] bg-gradient-to-br from-[#8b8abc] to-[#c5f06c] animate-pulse blur-3xl opacity-20 absolute -inset-4" />
              <div className="w-40 h-40 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4 relative z-10">
                <Mic size={40} className="text-[#c5f06c] animate-bounce" />
                <div className="flex gap-1">
                  {[0, 1, 2].map(i => (
                    <motion.div
                      key={i}
                      animate={{ scaleY: [1, 2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                      className="w-1 h-3 bg-white/30 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <h3 className="text-2xl font-black text-white tracking-tight mb-2">Joining {joiningRoom}</h3>
              <p className="text-[#8b8abc] font-bold uppercase tracking-widest text-[10px]">Encrypting Voice Channel...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Unified Messaging Container */}
      <div className="flex-1 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 bg-white/80 backdrop-blur-md border-r border-slate-200 flex flex-col shrink-0 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#8b8abc]/5 to-transparent pointer-events-none" />
          <div className="px-5 pt-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-black text-slate-900 text-2xl tracking-tight">Messages</h2>
              <button className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-white transition-all shadow-sm">
                <Plus size={16} strokeWidth={2.5} />
              </button>
            </div>
            <div className="relative group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#8b8abc] transition-colors" size={16} strokeWidth={2.5} />
              <input type="text" placeholder="Find people or channels..."
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-purple-500/5 focus:border-[#8b8abc]/30 focus:bg-white transition-all placeholder-slate-400 shadow-sm" />
            </div>
          </div>
          <div className="flex gap-2 px-5 pb-4 overflow-x-auto no-scrollbar">
            {(['all', 'unread', 'dms'] as const).map(f => {
              const colors: Record<string, string> = {
                all: 'bg-[#8b8abc] text-white shadow-purple-200',
                unread: 'bg-[#f06c9b] text-white shadow-pink-200',
                dms: 'bg-[#c5f06c] text-[#1a1a1a] shadow-lime-200'
              };
              return (
                <button key={f} onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-xl text-xs font-black capitalize whitespace-nowrap transition-all shadow-sm ${filter === f ? colors[f] : 'text-slate-500 hover:bg-slate-50 border border-transparent'}`}>
                  {f}
                </button>
              )
            })}
          </div>
          <div className="flex-1 overflow-y-auto py-2 px-3 space-y-8 custom-scrollbar">
            {/* Channels & DMs */}
            <div className="space-y-1">
              <h3 className="px-3 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Channels & Messages</h3>
              {filtered.map((c) => (
                <motion.button key={c.id} onClick={() => setActiveConvo(conversations.findIndex(orig => orig.id === c.id))}
                  whileHover={{ x: 4 }}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all relative group ${active?.id === c.id ? c.activeColor || 'bg-purple-50/50' : 'hover:bg-slate-50'}`}>
                  {active?.id === c.id && <div className={`absolute left-0 top-4 bottom-4 w-1.5 ${c.color.split(' ')[0]} rounded-full`} />}
                  <div className="relative shrink-0">
                    <div className={`w-12 h-12 ${c.color} rounded-[1.2rem] flex items-center justify-center font-black text-sm shadow-sm border border-black/5`}>
                      {c.initials}
                    </div>
                    {c.online && <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#c5f06c] border-[3px] border-white rounded-full shadow-sm" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-black text-sm text-slate-900 truncate tracking-tight">
                        {c.type === 'channel' && <span className="text-slate-400 font-bold"># </span>}{c.name}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 ml-2 shrink-0">{c.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className={`text-xs truncate font-bold ${c.unread > 0 ? 'text-slate-900' : 'text-slate-500'}`}>{c.message}</p>
                      {c.unread > 0 && (
                        <span className="bg-[#f06c9b] text-white text-[10px] font-black px-2 py-0.5 rounded-full ml-2 shrink-0 shadow-sm">
                          {c.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Voice Rooms Section */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between px-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Voice Rooms</h3>
                  <span className="bg-[#c5f06c] text-[#5a7a1a] text-[9px] font-black px-1.5 py-0.5 rounded-md">2 LIVE</span>
                </div>
                <button className="text-slate-400 hover:text-[#8b8abc] transition-colors">
                  <Plus size={14} strokeWidth={3} />
                </button>
              </div>

              <div className="space-y-1">
                {[
                  { name: 'Coffee Break', emoji: '☕', active: true, count: 3 },
                  { name: 'Focus Room', emoji: '💼', active: true, count: 5 },
                  { name: 'Workshop', emoji: '🛠️', active: false, count: 0 },
                ].map((room) => (
                  <button
                    key={room.name}
                    onClick={() => handleJoinVoice(room.name)}
                    className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{room.emoji}</span>
                      <span className={`text-sm font-black ${room.active ? 'text-slate-900' : 'text-slate-400'}`}>{room.name}</span>
                    </div>
                    {room.active && (
                      <div className="flex items-center gap-1.5">
                        <div className="flex -space-x-2">
                          {[1, 2].map(i => (
                            <div key={i} className="w-5 h-5 rounded-lg bg-slate-200 border-2 border-white" />
                          ))}
                        </div>
                        <span className="text-[9px] font-black text-[#8b8abc]">+{room.count - 2}</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#F8FAFC]">
          {active ? (
            <>
              {/* Header */}
              <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-5 flex items-center justify-between shrink-0 z-10 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${active.color} rounded-[1.2rem] flex items-center justify-center font-black text-sm shadow-md border border-black/5 active-glow`}>
                    {active.initials}
                  </div>
                  <div>
                    <h2 className="font-black text-slate-900 text-lg flex items-center gap-1.5 tracking-tight">
                      {active.type === 'channel' && <Hash size={18} className="text-[#8b8abc]" strokeWidth={3} />}
                      {active.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${active.online ? 'bg-[#c5f06c]' : 'bg-slate-300'} animate-pulse`} />
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {active.type === 'channel' ? `${active.members} members` : active.online ? 'Online' : 'Offline'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {[
                    { icon: Phone, action: () => navigate('/video-call') },
                    { icon: Video, action: () => navigate('/video-call') },
                    { icon: X, action: () => setActiveConvo(null) },
                    { icon: MoreVertical, action: () => { } },
                  ].map(({ icon: Icon, action }, i) => (
                    <button key={i} onClick={action}
                      className="w-10 h-10 rounded-xl border-[2px] bg-white border-slate-100 hover:border-slate-200 text-slate-500 hover:text-slate-900 shadow-sm flex items-center justify-center transition-all hover:scale-105 active:scale-95">
                      <Icon size={18} strokeWidth={2.5} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar bg-white/50">
                <div className="flex items-center gap-6">
                  <div className="flex-1 h-px bg-slate-200" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-4 py-1.5 bg-slate-100 border border-slate-200 rounded-full">Today</span>
                  <div className="flex-1 h-px bg-slate-200" />
                </div>
                {messages.map((msg, i) => (
                  <motion.div key={msg.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                    className={`flex gap-4 ${msg.self ? 'flex-row-reverse' : ''}`}>
                    {!msg.self && (
                      <div className={`w-10 h-10 ${msg.color} rounded-[1rem] flex items-center justify-center shadow-sm shrink-0 mt-1 border border-black/5 font-black text-xs`}>
                        {msg.avatar}
                      </div>
                    )}
                    <div className={`max-w-[70%] flex flex-col gap-1.5 ${msg.self ? 'items-end' : 'items-start'}`}>
                      {!msg.self && (
                        <div className="flex items-baseline gap-2 ml-1">
                          <span className="font-black text-[13px] text-slate-900 tracking-tight">{msg.sender}</span>
                          <span className="text-[10px] font-bold text-slate-400">{msg.time}</span>
                        </div>
                      )}
                      <div className={`px-5 py-4 rounded-[1.5rem] text-[14px] font-bold leading-relaxed shadow-sm border transition-all hover:shadow-md ${msg.self ? 'bg-[#8b8abc] border-[#8b8abc] text-white rounded-tr-sm shadow-purple-900/10' : (msg.bubbleColor || 'bg-white border-slate-200 text-slate-700') + ' rounded-tl-sm'}`}>
                        {msg.text}
                      </div>
                      {msg.self && <span className="text-[10px] font-bold text-slate-400 mr-1 mt-1">{msg.time}</span>}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="bg-white border-t border-slate-200 p-6 shrink-0 z-10">
                <div className="max-w-4xl mx-auto flex items-end gap-4">
                  <button className="w-12 h-12 rounded-2xl bg-slate-50 border-[2px] border-slate-100 flex items-center justify-center hover:bg-white hover:border-slate-200 text-slate-500 transition-all shadow-sm shrink-0 hover:scale-105 active:scale-95">
                    <Paperclip size={20} strokeWidth={2.5} />
                  </button>
                  <div className="flex-1 bg-white border-[2.5px] border-slate-100 rounded-[2rem] px-5 py-2.5 shadow-inner focus-within:ring-4 focus-within:ring-purple-500/5 focus-within:border-[#8b8abc]/30 transition-all relative flex items-center gap-4">
                    <textarea
                      ref={textareaRef}
                      placeholder={`Message ${active.type === 'channel' ? '#' : ''}${active.name}...`}
                      rows={1}
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          if (messageText.trim()) {
                            setMessageText('');
                          }
                        }
                      }}
                      className="flex-1 bg-transparent border-none focus:outline-none text-[15px] font-bold text-slate-800 placeholder-slate-400 resize-none min-h-[24px] max-h-32 leading-relaxed no-scrollbar pt-1"
                    />
                    <div className="flex items-center gap-1 shrink-0">
                      {[Bold, Italic, Link2, Smile].map((Icon, i) => (
                        <button key={i} className="w-8 h-8 flex items-center justify-center hover:bg-slate-50 rounded-lg transition-colors text-slate-400 hover:text-[#8b8abc]">
                          <Icon size={14} strokeWidth={3} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button className="w-12 h-12 rounded-2xl bg-slate-50 border-[2px] border-slate-100 flex items-center justify-center hover:bg-white hover:border-slate-200 text-slate-500 transition-all shadow-sm hover:scale-105 active:scale-95">
                      <Mic size={20} strokeWidth={2.5} />
                    </button>
                    <button className="w-12 h-12 rounded-2xl bg-slate-50 border-[2px] border-slate-100 flex items-center justify-center hover:bg-white hover:border-slate-200 text-slate-500 transition-all shadow-sm hover:scale-105 active:scale-95">
                      <Camera size={20} strokeWidth={2.5} />
                    </button>
                    <button disabled={!messageText.trim()}
                      className="w-12 h-12 bg-[#c5f06c] rounded-2xl flex items-center justify-center shadow-lg shadow-[0_10px_20px_-5px_rgba(197,240,108,0.4)] hover:shadow-[0_15px_25px_-5px_rgba(197,240,108,0.5)] transition-all disabled:opacity-40 disabled:grayscale hover:scale-105 active:scale-95 border-b-4 border-[#a3c959] active:border-b-0">
                      <Send size={20} className="text-[#1a1a1a]" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-white/30 backdrop-blur-sm">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-32 h-32 bg-white rounded-[2.5rem] border border-slate-200 shadow-xl flex items-center justify-center mb-8 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-50 to-transparent rounded-[2.5rem]" />
                <Zap size={48} className="text-[#8b8abc] relative z-10" strokeWidth={2.5} />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shadow-sm"
                >
                  <Plus size={16} className="text-[#8b8abc]" strokeWidth={3} />
                </motion.div>
              </motion.div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">Welcome to BitStream</h2>
              <p className="text-slate-500 font-bold max-w-xs leading-relaxed text-sm">
                Select a conversation from the sidebar to start collaborating with your team.
              </p>
              <button className="mt-8 px-8 py-3 bg-[#c5f06c] text-[#1a1a1a] font-black text-sm rounded-2xl shadow-lg shadow-[0_10px_20px_-5px_rgba(197,240,108,0.4)] hover:scale-105 transition-all active:scale-95 border-b-4 border-[#a3c959] active:border-b-0">
                Start new chat
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagingPage;
