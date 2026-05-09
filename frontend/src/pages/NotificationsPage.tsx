import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, Search, Trash2, Check, Settings, 
  MessageSquare, Video, Calendar, 
  FileText, Users, Zap, Mail,
  Archive, Inbox, Sparkles, ChevronRight
} from 'lucide-react';

interface Notification {
  id: string;
  type: 'message' | 'call' | 'calendar' | 'file' | 'team' | 'system';
  source: string;
  action: string;
  content: string;
  timestamp: string;
  date: string;
  isUnread: boolean;
  avatar: string;
  avatarColor: string;
  context?: string;
  category: 'all' | 'unread' | 'mentions' | 'reactions' | 'calendar' | 'files';
}

const mockFullHistory: Notification[] = [
  {
    id: '1',
    type: 'message',
    source: 'Sarah Chen',
    action: 'mentioned you in #design',
    content: "Hey @you, could you take a look at the latest wireframes for the landing page? I've updated the CTA buttons.",
    timestamp: '10:45 AM',
    date: 'Today',
    isUnread: true,
    avatar: 'SC',
    avatarColor: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    context: '#design',
    category: 'mentions'
  },
  {
    id: '2',
    type: 'calendar',
    source: 'Design Review',
    action: 'starts in 5 minutes',
    content: 'Reviewing the new BitStream brand guidelines with the creative team.',
    timestamp: '11:00 AM',
    date: 'Today',
    isUnread: true,
    avatar: 'DR',
    avatarColor: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    category: 'calendar'
  },
  {
    id: '3',
    type: 'call',
    source: 'Alex Rivers',
    action: 'is calling you now',
    content: 'Incoming video call for Project X sync...',
    timestamp: '11:15 AM',
    date: 'Today',
    isUnread: true,
    avatar: 'AR',
    avatarColor: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    category: 'all'
  },
  {
    id: '4',
    type: 'file',
    source: 'Marcus Wright',
    action: 'shared presentation.pdf in #marketing',
    content: 'Final pitch deck for the Q3 product launch. Please review before the meeting.',
    timestamp: '09:30 AM',
    date: 'Today',
    isUnread: true,
    avatar: 'MW',
    avatarColor: 'bg-gradient-to-br from-orange-500 to-amber-600',
    context: '#marketing',
    category: 'files'
  },
  {
    id: '5',
    type: 'team',
    source: 'System',
    action: "You're now an Admin",
    content: 'Your permissions have been updated for the BitStream workspace by the owner.',
    timestamp: 'Yesterday, 04:20 PM',
    date: 'Yesterday',
    isUnread: false,
    avatar: 'B',
    avatarColor: 'bg-slate-900',
    category: 'all'
  },
  {
    id: '6',
    type: 'message',
    source: 'Lena Meyer',
    action: 'reacted 👍 to your message',
    content: 'Great progress on the API documentation!',
    timestamp: 'Yesterday, 02:15 PM',
    date: 'Yesterday',
    isUnread: false,
    avatar: 'LM',
    avatarColor: 'bg-gradient-to-br from-pink-500 to-rose-600',
    category: 'reactions'
  },
  {
    id: '7',
    type: 'file',
    source: 'Marketing Bot',
    action: 'shared weekly-report.xlsx',
    content: 'Automated weekly marketing performance report is now available in your drive.',
    timestamp: 'May 7, 10:00 AM',
    date: 'Earlier this week',
    isUnread: false,
    avatar: 'MB',
    avatarColor: 'bg-slate-400',
    category: 'files'
  }
];

const NotificationsPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications] = useState<Notification[]>(mockFullHistory);

  const filteredNotifications = notifications.filter(n => {
    const matchesFilter = activeFilter === 'all' || n.category === activeFilter || (activeFilter === 'unread' && n.isUnread);
    const matchesSearch = n.source.toLowerCase().includes(searchQuery.toLowerCase()) || n.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getTypeIcon = (type: Notification['type']) => {
    switch (type) {
      case 'message': return <MessageSquare size={18} />;
      case 'call': return <Video size={18} />;
      case 'calendar': return <Calendar size={18} />;
      case 'file': return <FileText size={18} />;
      case 'team': return <Users size={18} />;
      case 'system': return <Zap size={18} />;
      default: return <Bell size={18} />;
    }
  };

  const getTypeColor = (type: Notification['type']) => {
    switch (type) {
      case 'message': return 'text-purple-600 bg-purple-100';
      case 'call': return 'text-emerald-600 bg-emerald-100';
      case 'calendar': return 'text-blue-600 bg-blue-100';
      case 'file': return 'text-orange-600 bg-orange-100';
      case 'team': return 'text-indigo-600 bg-indigo-100';
      case 'system': return 'text-slate-900 bg-slate-100';
      default: return 'text-slate-400 bg-slate-50';
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#F1F5F9] overflow-hidden">
      {/* Page Header */}
      <div className="px-10 py-10 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-[2rem] flex items-center justify-center shadow-xl shadow-slate-200/50 border-2 border-white">
              <Bell size={32} className="text-slate-900" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Notification History</h1>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Manage your workspace activity logs</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl text-sm font-black text-slate-600 hover:border-[#8b8abc] hover:text-[#8b8abc] transition-all flex items-center gap-2 shadow-sm">
              <Archive size={18} />
              Archive All
            </button>
            <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl text-sm font-black hover:bg-[#8b8abc] transition-all shadow-xl shadow-slate-900/10 border-b-4 border-black active:border-b-0">
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-10 pb-10 flex gap-8 overflow-hidden">
        {/* Left Sidebar: Filters */}
        <div className="w-80 shrink-0 flex flex-col gap-6 overflow-y-auto no-scrollbar">
          <div className="bg-white/60 backdrop-blur-xl rounded-[3rem] p-8 border-2 border-white shadow-sm">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search history..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-50 rounded-2xl text-sm font-bold focus:outline-none focus:border-[#8b8abc] transition-all"
              />
            </div>

            <div className="space-y-2">
              <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">View Categories</p>
              {[
                { id: 'all', label: 'All Notifications', icon: Inbox },
                { id: 'unread', label: 'Unread Only', icon: Sparkles },
                { id: 'mentions', label: 'Mentions', icon: Mail },
                { id: 'calendar', label: 'Calendar Events', icon: Calendar },
                { id: 'files', label: 'File Activity', icon: FileText },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveFilter(item.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${
                    activeFilter === item.id 
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 translate-x-2' 
                    : 'text-slate-500 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className={activeFilter === item.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'} />
                    <span className="text-sm font-black">{item.label}</span>
                  </div>
                  {activeFilter === item.id && <ChevronRight size={16} />}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[3rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-purple-900/20">
            <div className="relative z-10">
              <Zap size={32} className="text-yellow-300 mb-4" />
              <h3 className="text-lg font-black mb-1">Notification Pro</h3>
              <p className="text-xs font-medium opacity-80 mb-6">Unlock 90-day history and advanced priority filters.</p>
              <button className="w-full py-3 bg-white text-purple-700 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-purple-50 transition-colors shadow-lg">
                Upgrade Now
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Right Content: The List */}
        <div className="flex-1 bg-white/40 backdrop-blur-xl rounded-[3.5rem] border-2 border-white shadow-2xl shadow-slate-200/50 flex flex-col overflow-hidden">
          <div className="p-10 border-b border-white/50 flex items-center justify-between shrink-0">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-3">
              Showing {activeFilter === 'all' ? 'All' : activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">{filteredNotifications.length}</span>
            </h2>
            <div className="flex items-center gap-2">
              <button className="p-3 text-slate-400 hover:text-slate-900 transition-colors">
                <Check size={20} strokeWidth={2.5} />
              </button>
              <button className="p-3 text-slate-400 hover:text-red-500 transition-colors">
                <Trash2 size={20} strokeWidth={2.5} />
              </button>
              <button className="p-3 text-slate-400 hover:text-slate-900 transition-colors">
                <Settings size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
            <AnimatePresence mode="wait">
              {filteredNotifications.length > 0 ? (
                <div className="space-y-12">
                  {/* Grouped by Date */}
                  {['Today', 'Yesterday', 'Earlier this week'].map(dateGroup => {
                    const groupItems = filteredNotifications.filter(n => n.date === dateGroup);
                    if (groupItems.length === 0) return null;
                    return (
                      <div key={dateGroup}>
                        <div className="flex items-center gap-4 mb-8">
                          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">{dateGroup}</h3>
                          <div className="h-px w-full bg-slate-100" />
                        </div>
                        <div className="space-y-4">
                          {groupItems.map(n => (
                            <motion.div
                              key={n.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              whileHover={{ x: 8 }}
                              className={`p-6 rounded-[2.5rem] border-2 transition-all flex items-start gap-6 group cursor-pointer ${
                                n.isUnread 
                                ? 'bg-white border-white shadow-xl shadow-slate-200/40' 
                                : 'bg-transparent border-transparent opacity-60 hover:opacity-100'
                              }`}
                            >
                              <div className={`w-14 h-14 rounded-3xl ${n.avatarColor} flex items-center justify-center text-white font-black text-lg shadow-lg shrink-0 border-4 border-white`}>
                                {n.avatar}
                              </div>
                              <div className="flex-1 pt-1">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-3">
                                    <h4 className="text-base font-black text-slate-900">{n.source}</h4>
                                    <div className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 ${getTypeColor(n.type)}`}>
                                      {getTypeIcon(n.type)}
                                      {n.type}
                                    </div>
                                  </div>
                                  <span className="text-xs font-bold text-slate-400">{n.timestamp}</span>
                                </div>
                                <p className="text-sm text-slate-500 font-bold leading-relaxed mb-4">
                                  {n.content}
                                </p>
                                <div className="flex items-center gap-4">
                                  <button className="text-xs font-black text-[#8b8abc] hover:underline uppercase tracking-wider">Mark as Read</button>
                                  <button className="text-xs font-black text-slate-400 hover:text-red-500 uppercase tracking-wider">Archive</button>
                                  <div className="flex-1" />
                                  <button className="px-6 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">View Details</button>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center mb-10 text-slate-200 border-4 border-dashed border-slate-100">
                    <Search size={48} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3">No notifications found</h3>
                  <p className="text-slate-400 font-bold max-w-sm mx-auto leading-relaxed text-sm">
                    We couldn't find any notifications matching your current filters or search query.
                  </p>
                  <button 
                    onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
                    className="mt-10 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-[#8b8abc] transition-all shadow-xl shadow-slate-900/10"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default NotificationsPage;
