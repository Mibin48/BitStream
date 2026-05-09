import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Video, VideoOff, Monitor, PhoneOff, MoreVertical, MessageSquare, Users, Hand, Grid, Maximize2 } from 'lucide-react';
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
  const navigate = useNavigate();

  useEffect(() => {
    const t = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const controls = [
    { icon: micOn ? Mic : MicOff, label: micOn ? 'Mute' : 'Unmute', action: () => setMicOn(!micOn), active: !micOn, danger: false },
    { icon: camOn ? Video : VideoOff, label: camOn ? 'Stop video' : 'Start video', action: () => setCamOn(!camOn), active: !camOn, danger: false },
    { icon: Monitor, label: 'Share screen', action: () => { }, active: false, danger: false },
    { icon: Hand, label: 'Raise hand', action: () => { }, active: false, danger: false },
    { icon: MoreVertical, label: 'More', action: () => { }, active: false, danger: false },
  ];

  return (
    <div className="fixed inset-0 bg-slate-900 flex flex-col font-sans overflow-hidden">

      {/* Top Bar */}
      <div className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 px-6 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <div>
            <h2 className="font-semibold text-white text-sm">Design Review</h2>
            <p className="text-xs text-slate-400">{participants.length} participants</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-red-500/20 text-red-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-red-500/30 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse inline-block" />
            Recording
          </span>
          <span className="text-slate-300 text-sm font-mono font-semibold">{fmt(elapsed)}</span>
          <button className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-slate-800 transition-colors">
            <Grid size={15} strokeWidth={2} />
          </button>
          <button className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-slate-800 transition-colors">
            <Maximize2 size={15} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Video Grid */}
      <div className="flex-1 p-6 grid grid-cols-2 gap-4 min-h-0">
        {participants.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className="bg-slate-800 rounded-2xl overflow-hidden relative group border border-slate-700/50"
          >
            {/* Video / Avatar */}
            <div className="w-full h-full flex items-center justify-center min-h-[200px]">
              {p.videoOff ? (
                <div className="flex flex-col items-center gap-3">
                  <div className={`w-20 h-20 bg-gradient-to-br ${p.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                    <span className="text-white font-bold text-2xl">{p.initials}</span>
                  </div>
                  <span className="text-slate-400 text-xs font-medium">Camera off</span>
                </div>
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${p.gradient} opacity-20 absolute inset-0`} />
              )}
            </div>

            {/* Speaking indicator */}
            {i === 0 && (
              <div className="absolute inset-0 rounded-2xl border-2 border-green-500/60 pointer-events-none">
                <motion.div
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl border-2 border-green-400"
                />
              </div>
            )}

            {/* Name tag */}
            <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-700/50 flex items-center gap-2">
              <span className="text-white text-sm font-semibold">{p.name}</span>
              {p.role && <span className="text-[10px] font-bold text-purple-400 bg-purple-500/20 px-1.5 py-0.5 rounded-md">{p.role}</span>}
            </div>

            {/* Mic status */}
            <div className={`absolute top-3 right-3 w-8 h-8 rounded-xl flex items-center justify-center border backdrop-blur-sm ${p.muted ? 'bg-red-500/20 border-red-500/40' : 'bg-slate-900/80 border-slate-700/50'}`}>
              {p.muted ? <MicOff size={14} className="text-red-400" strokeWidth={2} /> : <Mic size={14} className="text-white" strokeWidth={2} />}
            </div>

            {/* Hover overlay */}
            <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-8 h-8 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <MoreVertical size={14} strokeWidth={2} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Controls */}
      <div className="bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 px-6 py-5 shrink-0">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          {/* Side controls */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300 text-sm font-medium transition-all">
              <MessageSquare size={16} strokeWidth={2} /> Chat
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300 text-sm font-medium transition-all">
              <Users size={16} strokeWidth={2} /> {participants.length}
            </button>
          </div>

          {/* Main controls */}
          <div className="flex items-center gap-3">
            {controls.map(({ icon: Icon, label, action, active, danger }) => (
              <button
                key={label}
                onClick={action}
                title={label}
                className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all border text-xs font-medium ${danger
                    ? 'bg-red-600 hover:bg-red-700 border-red-500 text-white shadow-lg shadow-red-900/50'
                    : active
                      ? 'bg-red-500/20 border-red-500/40 text-red-400 hover:bg-red-500/30'
                      : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300 hover:text-white'
                  }`}
              >
                <Icon size={20} strokeWidth={2} />
              </button>
            ))}

            {/* End call */}
            <button
              onClick={() => navigate('/messages')}
              title="End call"
              className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-2xl flex items-center justify-center transition-all shadow-lg shadow-red-900/50 border border-red-500"
            >
              <PhoneOff size={22} className="text-white" strokeWidth={2} />
            </button>
          </div>

          {/* Right side */}
          <div className="w-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default VideoCallPage;
