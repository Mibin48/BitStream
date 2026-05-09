import { useState, useEffect } from 'react';
import { Plus, Clock, CheckCircle2, Play, Pause, Activity, Hash, Star, X, Folder, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = () => {
  // --- State ---
  const [activeChannel, setActiveChannel] = useState('general');
  const [expandedGroups, setExpandedGroups] = useState(['Channels', 'Pinned Chats']);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(2700); // 45 minutes in seconds
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Sprint Planning', time: '10:00 AM', completed: true },
    { id: 2, title: 'Design System Update', time: '11:30 AM', completed: true },
    { id: 3, title: 'API Documentation', time: '02:00 PM', completed: true },
    { id: 4, title: 'Client Feedback', time: '04:00 PM', completed: false },
    { id: 5, title: 'Team Sync', time: '05:30 PM', completed: false },
  ]);
  const [showNotification, setShowNotification] = useState(false);

  // --- Handlers ---
  const toggleGroup = (groupTitle: string) => {
    setExpandedGroups(prev =>
      prev.includes(groupTitle)
        ? prev.filter(t => t !== groupTitle)
        : [...prev, groupTitle]
    );
  };

  const toggleTask = (taskId: number) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));
  };

  const addNewTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: 'New Collaboration Task',
      time: 'Just now',
      completed: false
    };
    setTasks(prev => [...prev, newTask]);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  // --- Timer Logic ---
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const leftNavGroups = [
    {
      title: 'Channels',
      items: [
        { id: 'general', icon: Hash, label: 'general', sub: 'Team wide chat' },
        { id: 'design', icon: Hash, label: 'design', sub: 'Feedback & assets' },
        { id: 'engineering', icon: Hash, label: 'engineering', sub: 'Code & deploys' },
      ]
    },
    {
      title: 'Pinned Chats',
      items: [
        { id: 'sarah', icon: Star, label: 'Sarah Chen', sub: 'Project lead' },
        { id: 'ds', icon: Star, label: 'Design System', sub: 'Internal group' },
      ]
    },
    {
      title: 'Workspaces',
      items: []
    }
  ];

  return (
    <>
      {/* Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-28 left-1/2 -translate-x-1/2 z-50 bg-white border border-slate-200 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <CheckCircle2 size={16} />
            </div>
            <span className="text-sm font-bold text-slate-800">Task added successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex overflow-hidden px-8 pt-8 pb-8 gap-8 bg-gradient-to-br from-white via-purple-50/30 to-lime-50/20">

        {/* Left Sidebar / Workspace Panel */}
        <div className="w-[300px] flex-shrink-0 flex flex-col gap-6 hidden xl:flex overflow-y-auto pr-2 custom-scrollbar">

          {/* Active Workspace / Team Card */}
          <div className="bg-[#9c9bcf] rounded-[2.5rem] p-1 shadow-sm relative group overflow-hidden cursor-pointer">
            <div className="h-40 bg-gradient-to-b from-purple-300/40 to-purple-200/20 rounded-[1.75rem] overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-white/50 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-inner text-3xl font-bold text-[#8b8abc]"
                >
                  B
                </motion.div>
              </div>
            </div>
            <div className="p-5 pt-6 pb-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-xl tracking-tight text-slate-800">BitStream Team</h3>
                <div className="w-2.5 h-2.5 bg-[#c5f06c] rounded-full shadow-[0_0_10px_rgba(197,240,108,0.5)] animate-pulse" />
              </div>
              <p className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Core Dev Workspace</p>
            </div>
          </div>

          {/* Accordion List */}
          <div className="flex-1 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
            {leftNavGroups.map((group, idx) => (
              <div key={idx} className="bg-transparent">
                <div
                  onClick={() => toggleGroup(group.title)}
                  className="py-3 px-2 flex items-center justify-between cursor-pointer hover:bg-white/40 rounded-xl transition-colors group"
                >
                  <span className="font-bold text-sm text-slate-700 group-hover:text-slate-900">{group.title}</span>
                  <motion.div
                    animate={{ rotate: expandedGroups.includes(group.title) ? 45 : 0 }}
                  >
                    <Plus size={16} strokeWidth={2} className="text-slate-400 group-hover:text-slate-600" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedGroups.includes(group.title) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-2 pr-2 pb-2 space-y-2 overflow-hidden"
                    >
                      {group.items.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => setActiveChannel(item.id)}
                          className={`flex items-center gap-3 rounded-2xl p-3 shadow-sm border transition-all duration-300 cursor-pointer group/item ${activeChannel === item.id
                              ? 'bg-white border-white scale-[1.02] shadow-md ring-1 ring-purple-500/10'
                              : 'bg-white/60 backdrop-blur-sm border-white/40 hover:bg-white hover:border-white'
                            }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm transition-all ${activeChannel === item.id ? 'bg-[#8b8abc] text-white' : 'bg-white text-slate-600 group-hover/item:text-[#8b8abc]'
                            }`}>
                            <item.icon size={18} strokeWidth={2} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`font-bold text-xs ${activeChannel === item.id ? 'text-slate-900' : 'text-slate-800'}`}>{item.label}</div>
                            <div className="text-[10px] font-semibold text-slate-500 mt-0.5 truncate">{item.sub}</div>
                          </div>
                          {i === 0 && group.title === 'Channels' && (
                            <div className="bg-[#f06c9b] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">12</div>
                          )}
                        </div>
                      ))}
                      {group.items.length === 0 && (
                        <div className="text-[10px] text-slate-400 italic px-2 py-1">No items found</div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>

        {/* Central Interaction Area */}
        <div className="flex-1 flex flex-col gap-6 min-w-0 overflow-y-auto pr-4 custom-scrollbar">

          {/* Greeting */}
          <div className="mb-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 bg-gradient-to-r from-slate-900 via-[#8b8abc] to-slate-900 bg-clip-text text-transparent">Workspace Overview</h1>
          </div>

          {/* Application Relevant Stat Widgets */}
          <div className="flex gap-4">
            {[
              { label: 'Unread Messages', val: '24', bg: 'bg-[#8b8abc] text-white', width: 'flex-1' },
              { label: 'Meetings Today', val: '3', bg: 'bg-[#c5f06c] text-[#1a1a1a]', width: 'flex-1' },
              { label: 'Pending Tasks', val: tasks.filter(t => !t.completed).length, bg: 'bg-[#f06c9b] text-white', width: 'flex-1' },
              { label: 'Files Shared', val: '156', bg: 'bg-white border border-slate-200 text-slate-700', width: 'flex-1' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={`${stat.width} flex flex-col gap-2`}
              >
                <span className="text-[11px] font-semibold text-slate-600 pl-1">{stat.label}</span>
                <div className={`h-12 rounded-2xl flex items-center justify-center font-bold text-lg ${stat.bg} shadow-sm transition-all hover:shadow-md`}>
                  {stat.val}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">

            {/* Activity Card */}
            <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-[2rem] p-6 shadow-sm relative border border-purple-100/50 group">
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors cursor-pointer">
                <Activity size={16} strokeWidth={2} className="group-hover:text-[#8b8abc] transition-colors" />
              </div>
              <h3 className="font-semibold text-slate-700 mb-2">Team Activity</h3>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-4xl font-medium tracking-tight text-slate-900">84%</span>
                <span className="text-[10px] font-semibold text-slate-500 max-w-[80px] leading-tight pb-1">Activity increase this week</span>
              </div>

              <div className="h-28 flex items-end justify-between gap-1 mt-auto">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                  const barColors = ['#9c9bcf','#c5f06c','#f06c9b','#8b8abc','#f0e66c','#f09b6c','#9c9bcf'];
                  return (
                  <div key={day} className="flex flex-col items-center gap-3 flex-1">
                    <div className="w-full relative flex justify-center h-[80px] items-end">
                      <div className="w-2 bg-slate-100 rounded-full h-full absolute bottom-0 z-0" />
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${[40, 65, 30, 85, 55, 20, 15][i]}%` }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="w-2 rounded-full z-10 relative"
                        style={{ background: barColors[i] }}
                      />
                    </div>
                    <span className="text-[10px] font-medium text-slate-400">{day}</span>
                  </div>
                )})}
              </div>
            </div>

            {/* Focus Session Tracker */}
            <div className="bg-gradient-to-br from-white to-lime-50/50 rounded-[2rem] p-6 shadow-sm relative flex flex-col items-center justify-center border border-lime-100/50">
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors">
                <Clock size={16} strokeWidth={2} />
              </div>
              <div className="absolute top-6 left-6 font-semibold text-slate-700">
                Focus Session
              </div>

              <div className="w-40 h-40 rounded-full border-[8px] border-[#9c9bcf] border-l-slate-100 border-t-slate-100 flex flex-col items-center justify-center mt-4 rotate-45 relative overflow-hidden group/timer">
                {isTimerRunning && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 border-[8px] border-transparent border-t-purple-400/20 rounded-full"
                  />
                )}
                <div className="-rotate-45 text-center flex flex-col items-center">
                  <div className="text-3xl font-medium tracking-tight text-slate-900 tabular-nums">
                    {formatTime(timeLeft)}
                  </div>
                  <div className="text-[9px] font-semibold text-slate-500 mt-1 uppercase tracking-widest">Remaining</div>
                </div>
              </div>

              <div className="flex gap-3 mt-6 absolute bottom-6 right-6">
                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    setTimeLeft(2700);
                  }}
                  className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-all active:scale-90 shadow-sm"
                >
                  <X size={16} strokeWidth={2} />
                </button>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="w-10 h-10 bg-[#8b8abc] rounded-full flex items-center justify-center text-white hover:bg-[#8b8abc]/90 transition-all active:scale-90 shadow-md shadow-purple-900/20"
                >
                  {isTimerRunning ? <Pause size={16} strokeWidth={2} fill="currentColor" /> : <Play size={16} strokeWidth={2} fill="currentColor" className="ml-0.5" />}
                </button>
              </div>
            </div>

          </div>

          {/* Team Schedule */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm flex-1 border border-slate-100 flex flex-col overflow-hidden min-h-[400px]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-lg text-slate-800">Upcoming Events</h2>
              <button className="text-xs font-bold text-[#8b8abc] hover:text-[#f06c9b] transition-colors hover:underline">View Calendar</button>
            </div>

            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-1">
              {[
                { title: 'Engineering Standup', time: '10:30 AM', duration: '30m', attendees: 8, color: 'bg-[#c5f06c]' },
                { title: 'Product Review: BitStream V2', time: '01:00 PM', duration: '1h', attendees: 4, color: 'bg-[#f06c9b]' },
                { title: 'Customer Feedback Call', time: '03:30 PM', duration: '45m', attendees: 2, color: 'bg-[#f0e66c]' },
                { title: 'Weekly Recap', time: '05:00 PM', duration: '30m', attendees: 12, color: 'bg-[#8b8abc]' },
              ].map((event, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-100 group cursor-pointer hover:bg-white hover:shadow-sm transition-all"
                >
                  <div className={`w-1 h-10 rounded-full ${event.color}`} />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-slate-800 group-hover:text-purple-600 transition-colors">{event.title}</h4>
                    <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-600 mt-0.5">
                      <Clock size={10} /> {event.time} ({event.duration})
                    </div>
                  </div>
                  <div className="flex -space-x-1.5">
                    {[...Array(Math.min(3, event.attendees))].map((_, idx) => {
                      const avatarColors = ['#f06c9b','#c5f06c','#8b8abc'];
                      return <div key={idx} className="w-6 h-6 rounded-full border-2 border-white" style={{ background: avatarColors[idx] }} />;
                    })}
                    {event.attendees > 3 && (
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-[#f0e66c] flex items-center justify-center text-[8px] font-bold text-slate-700">+{event.attendees - 3}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Sidebar */}
        <div className="w-[320px] flex-shrink-0 flex flex-col gap-6 hidden lg:flex overflow-y-auto pr-2 custom-scrollbar">

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-[#8b8abc]/10 to-[#9c9bcf]/5 p-4 rounded-3xl border border-[#8b8abc]/20 shadow-sm hover:shadow-md transition-all cursor-default">
              <div className="w-7 h-7 rounded-xl bg-[#8b8abc]/20 flex items-center justify-center mb-2"><Users size={14} className="text-[#8b8abc]" /></div>
              <div className="text-2xl font-bold text-slate-900">48</div>
              <div className="text-[10px] text-slate-600 font-semibold">Team Members</div>
            </div>
            <div className="bg-gradient-to-br from-[#c5f06c]/15 to-[#c5f06c]/5 p-4 rounded-3xl border border-[#c5f06c]/30 shadow-sm hover:shadow-md transition-all cursor-default">
              <div className="w-7 h-7 rounded-xl bg-[#c5f06c]/30 flex items-center justify-center mb-2"><Folder size={14} className="text-[#5a7a1a]" /></div>
              <div className="text-2xl font-bold text-slate-900">12</div>
              <div className="text-[10px] text-slate-600 font-semibold">Active Projects</div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-end mb-5">
              <h3 className="font-bold text-slate-700">Team Load</h3>
              <span className="font-bold text-xl text-slate-800">68%</span>
            </div>
            <div className="space-y-4">
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '68%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-[#c5f06c] rounded-full"
                />
              </div>
              <div className="flex justify-between text-[10px] font-medium text-slate-500">
                <span>8 projects in progress</span>
                <span>4 on hold</span>
              </div>
            </div>
          </div>

          {/* Task Management */}
          <div className="bg-[#8b8abc] rounded-[2.5rem] p-6 shadow-lg shadow-purple-900/10 flex-1 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex justify-between items-end mb-6 relative z-10">
              <h3 className="font-bold text-xl text-white">Daily Tasks</h3>
              <motion.span
                key={tasks.filter(t => t.completed).length}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-bold text-2xl text-white/80"
              >
                {tasks.filter(t => t.completed).length}/{tasks.length}
              </motion.span>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto pr-1 relative z-10 custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {tasks.map((task) => (
                  <motion.div
                    key={task.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex gap-3 items-center group cursor-pointer p-2 rounded-2xl hover:bg-white/5 transition-colors"
                    onClick={() => toggleTask(task.id)}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border-2 transition-all ${task.completed ? 'bg-[#c5f06c] border-[#c5f06c] text-[#1a1a1a]' : 'border-white/20 text-transparent'
                      }`}>
                      <CheckCircle2 size={12} strokeWidth={3} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-bold text-[11px] truncate transition-all ${task.completed ? 'text-white/40 line-through' : 'text-white'}`}>
                        {task.title}
                      </div>
                      <div className="text-[9px] font-bold text-white/60 mt-0.5">{task.time}</div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <button
              onClick={addNewTask}
              className="mt-4 w-full py-2.5 bg-white rounded-xl text-[#8b8abc] font-bold text-xs shadow-md shadow-black/10 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 relative z-10"
            >
              <Plus size={14} /> New Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
