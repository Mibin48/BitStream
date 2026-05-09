import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, Circle, Plus, X } from 'lucide-react';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MINI_CAL_DAYS = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, null, null, null, null, null]
];

const WEEK_DATES = [
  { num: '03', day: 'Mon' },
  { num: '04', day: 'Tue' },
  { num: '05', day: 'Wed' },
  { num: '06', day: 'Thu' },
  { num: '07', day: 'Fri' },
  { num: '08', day: 'Sat' },
];

type CalEvent = { id: number; title: string; time: string; dayIndex: number; top: number; height: number; type: 'lime' | 'purple' | 'dark' };

const events: CalEvent[] = [
  { id: 1, title: 'Morning Run', time: '10 Am - 11 Am', dayIndex: 0, top: 40, height: 100, type: 'lime' },
  { id: 2, title: 'Cardio Exerci...', time: '10 Am - 11 Am', dayIndex: 0, top: 220, height: 60, type: 'dark' },
  { id: 3, title: 'Yoga Exerci...', time: '10 Am - 11 Am', dayIndex: 1, top: 120, height: 80, type: 'dark' },
  { id: 4, title: 'Yoga Exerci...', time: '10 Am - 11 Am', dayIndex: 1, top: 320, height: 60, type: 'dark' },
  { id: 5, title: 'Yoga Exerci...', time: '10 Am - 11 Am', dayIndex: 2, top: 40, height: 60, type: 'dark' },
  { id: 6, title: 'Morning Run', time: '13 Am - 14 Am', dayIndex: 2, top: 220, height: 80, type: 'lime' },
  { id: 7, title: 'Cardio Exerci...', time: '10 Am - 11 Am', dayIndex: 3, top: 140, height: 60, type: 'lime' },
  { id: 8, title: 'Cardio Exerci...', time: '10 Am - 11 Am', dayIndex: 3, top: 320, height: 60, type: 'dark' },
  { id: 9, title: 'Run Exercise', time: '10 Am - 11 Am', dayIndex: 4, top: 40, height: 60, type: 'lime' },
  { id: 10, title: 'Cardio Burned', time: '10 Am - 11 Am', dayIndex: 4, top: 220, height: 60, type: 'dark' },
  { id: 11, title: 'Cardio Burned', time: '10 Am - 11 Am', dayIndex: 5, top: 140, height: 90, type: 'lime' },
  { id: 12, title: 'Cardio Burned', time: '14 Am - 16 Am', dayIndex: 5, top: 320, height: 80, type: 'lime' },
];

const CalendarPage = () => {
  const [view, setView] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [showNewEvent, setShowNewEvent] = useState(false);

  return (
    <div className="flex-1 flex overflow-hidden p-6 gap-6 relative bg-gradient-to-br from-[#9c9bcf] via-[#8b8abc] to-[#7a79a8] rounded-[2.5rem] m-4 shadow-xl">

      {/* Left Sidebar */}
      <div className="w-64 flex flex-col gap-6 text-white overflow-y-auto custom-scrollbar pr-2">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-1">My Calendar</h1>
          <p className="text-xs text-white/70">information designed to accurate insights</p>
        </div>

        {/* Mini Calendar */}
        <div className="bg-[#8b8abc] rounded-3xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-sm">January 2024</span>
            <div className="flex gap-1">
              <button className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <ChevronLeft size={12} />
              </button>
              <button className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <ChevronRight size={12} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] mb-2 font-medium">
            {DAYS.map(d => <div key={d}>{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[11px]">
            {MINI_CAL_DAYS.flat().map((d, i) => (
              <div
                key={i}
                className={`w-6 h-6 mx-auto flex items-center justify-center rounded-full transition-colors cursor-pointer ${d === 5 ? 'bg-[#c5f06c] text-[#1a1a1a] font-bold shadow-[0_4px_12px_rgba(197,240,108,0.4)]' :
                    d ? 'hover:bg-white/20' : ''
                  }`}
              >
                {d || ''}
              </div>
            ))}
          </div>
        </div>

        {/* Checklists */}
        <div className="bg-white text-slate-800 rounded-3xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-sm">My Calendar</span>
            <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-full flex items-center gap-1 cursor-pointer">
              Checklist <ChevronLeft size={10} className="-rotate-90" />
            </span>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer group">
              <Circle size={16} className="text-slate-300 group-hover:text-purple-400 transition-colors" />
              <span className="text-xs font-medium">Yoga Exercise With Friends</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group opacity-50">
              <CheckCircle2 size={16} className="text-slate-400" />
              <span className="text-xs font-medium line-through">Cardio Training On Sundays</span>
            </label>
          </div>
        </div>

        <div className="bg-white text-slate-800 rounded-3xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-sm">Other Calendar</span>
            <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-full flex items-center gap-1 cursor-pointer hover:bg-slate-200 transition-colors">
              Add Task <Plus size={10} />
            </span>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer group opacity-50">
              <CheckCircle2 size={16} className="text-[#8b8abc]" />
              <span className="text-xs font-medium line-through">Indonesian National Holiday</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group opacity-50">
              <CheckCircle2 size={16} className="text-[#8b8abc]" />
              <span className="text-xs font-medium line-through">Saturday Holiday With The Team</span>
            </label>
          </div>
        </div>
      </div>

      {/* Main Calendar Area */}
      <div className="flex-1 bg-white rounded-[2rem] shadow-lg flex flex-col overflow-hidden relative">
        {/* Header */}
        <div className="px-8 py-6 flex items-center justify-between border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-700">
            {view === 'daily' ? 'January 05 - 2024' : view === 'monthly' ? 'January 2024' : 'January 05 - 2024'}
          </h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center bg-slate-100 p-1 rounded-full">
              {(['daily', 'weekly', 'monthly'] as const).map(v => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold capitalize transition-all ${view === v ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                    }`}
                >
                  {v}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-500">Today</span>
              <div className="flex gap-1">
                <button className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors text-slate-500">
                  <ChevronLeft size={14} />
                </button>
                <button className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors text-slate-500">
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* View Conditional Rendering */}
        <div className="flex-1 overflow-y-auto relative custom-scrollbar flex flex-col">
          {view === 'monthly' ? (
            /* Monthly View */
            <div className="flex-1 flex flex-col min-h-[600px]">
              <div className="grid grid-cols-7 border-b border-slate-100">
                {DAYS.map(d => (
                  <div key={d} className="py-4 text-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {d}
                  </div>
                ))}
              </div>
              <div className="flex-1 grid grid-cols-7 grid-rows-5 divide-x divide-y divide-slate-100">
                {MINI_CAL_DAYS.flat().map((d, i) => (
                  <div key={i} className="min-h-[100px] p-2 relative group hover:bg-slate-50 transition-colors">
                    <span className={`text-xs font-bold ${d === 5 ? 'text-[#8b8abc]' : 'text-slate-400'} group-hover:text-slate-900`}>
                      {d || ''}
                    </span>
                    {d === 5 && (
                      <div className="mt-2 space-y-1">
                        <div className="bg-[#c5f06c] text-[8px] font-black uppercase p-1 rounded-md text-slate-900 truncate">Morning Run</div>
                        <div className="bg-[#8b8abc] text-[8px] font-black uppercase p-1 rounded-md text-white truncate">Cardio Exerci...</div>
                      </div>
                    )}
                    {d === 12 && (
                      <div className="mt-2">
                        <div className="bg-slate-800 text-[8px] font-black uppercase p-1 rounded-md text-white truncate">Team Sync</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : view === 'daily' ? (
            /* Daily View */
            <div className="flex-1 flex flex-col min-h-[600px]">
              <div className="flex border-b border-slate-100">
                <div className="w-16 shrink-0 border-r border-slate-100" />
                <div className="flex-1 py-4 px-8">
                  <div className="text-2xl font-bold text-slate-900">05</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Wednesday</div>
                </div>
              </div>
              <div className="flex flex-1 relative">
                <div className="w-16 shrink-0 border-r border-slate-100 relative">
                  {[8, 9, 10, 11, 12, 13, 14, 15, 16].map((hour, idx) => (
                    <div key={idx} className="absolute w-full text-center text-[11px] font-semibold text-slate-400" style={{ top: `${idx * 100 + 40}px` }}>
                      {hour} {hour >= 12 ? 'Pm' : 'Am'}
                    </div>
                  ))}
                </div>
                <div className="flex-1 relative">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <div key={`h-${i}`} className="absolute w-full border-t border-dashed border-slate-200" style={{ top: `${i * 100 + 40}px` }}></div>
                  ))}
                  <div className="absolute inset-0 p-8">
                    {events.filter(e => e.dayIndex === 2).map(ev => (
                      <motion.div
                        key={ev.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`mb-4 rounded-2xl p-4 shadow-sm cursor-pointer border border-white/20
                          ${ev.type === 'lime' ? 'bg-[#c5f06c] text-[#1a1a1a]' : 'bg-[#8b8abc] text-white'}`}
                      >
                        <div className="font-bold text-sm mb-1">{ev.title}</div>
                        <div className="text-[10px] font-semibold opacity-80">{ev.time}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Weekly View (Default) */
            <div className="flex-1 flex flex-col min-h-[600px]">
              <div className="flex border-b border-slate-100">
                <div className="w-16 shrink-0 flex items-end justify-center pb-2 text-[10px] font-semibold text-slate-400 border-r border-slate-100">
                  GMT+8
                </div>
                <div className="flex-1 grid grid-cols-6 divide-x divide-slate-100">
                  {WEEK_DATES.map((date, i) => (
                    <div key={i} className="py-4 text-center">
                      <div className={`text-xl font-bold ${i === 2 ? 'text-slate-900' : 'text-slate-400'}`}>
                        {date.num}
                      </div>
                      <div className={`text-[11px] font-semibold ${i === 2 ? 'text-slate-900' : 'text-slate-400'}`}>
                        {date.day}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 relative">
                <div className="w-16 shrink-0 border-r border-slate-100 relative">
                  {[10, 11, 8, 9].map((hour, idx) => (
                    <div key={idx} className="absolute w-full text-center text-[11px] font-semibold text-slate-400" style={{ top: `${idx * 100 + 40}px` }}>
                      {hour} Am
                    </div>
                  ))}
                </div>
                <div className="flex-1 relative">
                  {[1, 2, 3].map(i => (
                    <div key={`h-${i}`} className="absolute w-full border-t border-dashed border-slate-200" style={{ top: `${i * 100 + 40}px` }}></div>
                  ))}
                  <div className="absolute w-full flex items-center z-20 pointer-events-none" style={{ top: '240px' }}>
                    <div className="w-2 h-2 rounded-full bg-[#8b8abc] -ml-1" />
                    <div className="flex-1 border-t border-[#8b8abc]" />
                  </div>
                  <div className="absolute inset-0 grid grid-cols-6 divide-x divide-slate-100 pointer-events-none">
                    <div /><div /><div /><div /><div /><div />
                  </div>
                  <div className="absolute inset-0 grid grid-cols-6">
                    {[0, 1, 2, 3, 4, 5].map(colIndex => (
                      <div key={colIndex} className="relative w-full h-full">
                        {events.filter(e => e.dayIndex === colIndex).map(ev => (
                          <motion.div
                            key={ev.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            className={`absolute left-2 right-2 rounded-2xl p-3 shadow-sm cursor-pointer border border-white/20
                              ${ev.type === 'lime' ? 'bg-[#c5f06c] text-[#1a1a1a]' :
                                ev.type === 'dark' ? 'bg-[#8b8abc] text-white' :
                                  'bg-[#a09ece] text-white'}`}
                            style={{ top: `${ev.top}px`, height: `${ev.height}px` }}
                          >
                            <div className="font-bold text-xs leading-tight mb-1 truncate">{ev.title}</div>
                            <div className={`text-[9px] font-semibold opacity-80`}>{ev.time}</div>
                          </motion.div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Add Button for Mobile/Small Screens */}
      <button
        onClick={() => setShowNewEvent(true)}
        className="absolute bottom-10 right-10 w-14 h-14 bg-[#1a1a1a] text-white rounded-2xl shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all lg:hidden z-50"
      >
        <Plus size={24} />
      </button>

      {/* New Event Modal */}
      <AnimatePresence>
        {showNewEvent && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowNewEvent(false)}>
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-xl text-slate-900">Add New Event</h2>
                <button onClick={() => setShowNewEvent(false)} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 transition-colors">
                  <X size={18} strokeWidth={2} />
                </button>
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="Event title" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#8b8abc]/20 focus:border-[#8b8abc] transition-all" />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Start</label>
                    <input type="time" defaultValue="10:00" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#8b8abc]/20 focus:border-[#8b8abc] transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">End</label>
                    <input type="time" defaultValue="11:00" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#8b8abc]/20 focus:border-[#8b8abc] transition-all" />
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <button onClick={() => setShowNewEvent(false)} className="flex-1 py-3 border border-slate-200 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-50 transition-all">
                    Cancel
                  </button>
                  <button onClick={() => setShowNewEvent(false)} className="flex-1 py-3 bg-[#8b8abc] text-white font-bold text-sm rounded-xl shadow-md hover:bg-[#7a79a8] transition-all">
                    Save Event
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CalendarPage;
