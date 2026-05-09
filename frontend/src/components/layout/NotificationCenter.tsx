import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Bell, Check, Settings, MessageSquare, Video, Calendar, 
  FileText, Users, Zap, MoreVertical, Reply, Eye, Trash2,
  Heart, ArrowRight, Sparkles, Filter, Layers, AtSign, Circle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Notification {
  id: string;
  type: 'message' | 'call' | 'calendar' | 'file' | 'team' | 'system';
  source: string;
  action: string;
  content: string;
  timestamp: string;
  isUnread: boolean;
  avatar: string;
  avatarColor: string;
  context?: string;
  category: 'all' | 'unread' | 'mentions' | 'reactions' | 'calendar' | 'files';
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'message',
    source: 'Sarah Chen',
    action: 'mentioned you in #design',
    content: "Hey @you, could you take a look at the latest wireframes for the landing page? I've updated the CTA buttons.",
    timestamp: '2m ago',
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
    timestamp: '5m ago',
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
    timestamp: 'Just now',
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
    timestamp: '1h ago',
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
    timestamp: '3h ago',
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
    timestamp: 'Yesterday',
    isUnread: false,
    avatar: 'LM',
    avatarColor: 'bg-gradient-to-br from-pink-500 to-rose-600',
    category: 'reactions'
  }
];

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<Notification['category']>('all');
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const filteredNotifications = notifications.filter(n => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'unread') return n.isUnread;
    return n.category === activeFilter;
  });

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isUnread: false })));
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isUnread: false } : n));
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getTypeIcon = (type: Notification['type']) => {
    switch (type) {
      case 'message': return <MessageSquare size={14} strokeWidth={2.5} />;
      case 'call': return <Video size={14} strokeWidth={2.5} />;
      case 'calendar': return <Calendar size={14} strokeWidth={2.5} />;
      case 'file': return <FileText size={14} strokeWidth={2.5} />;
      case 'team': return <Users size={14} strokeWidth={2.5} />;
      case 'system': return <Zap size={14} strokeWidth={2.5} />;
      default: return <Bell size={14} strokeWidth={2.5} />;
    }
  };

  const getTypeColor = (type: Notification['type']) => {
    switch (type) {
      case 'message': return 'text-purple-500 bg-purple-50 border-purple-100';
      case 'call': return 'text-emerald-500 bg-emerald-50 border-emerald-100';
      case 'calendar': return 'text-blue-500 bg-blue-50 border-blue-100';
      case 'file': return 'text-orange-500 bg-orange-50 border-orange-100';
      case 'team': return 'text-indigo-500 bg-indigo-50 border-indigo-100';
      case 'system': return 'text-slate-900 bg-slate-50 border-slate-200';
      default: return 'text-slate-400 bg-slate-50 border-slate-100';
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100]"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 h-screen w-full md:w-[450px] bg-white/90 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.1)] z-[101] flex flex-col border-l border-white/50"
          >
            {/* Header */}
            <div className="px-8 pt-10 pb-8 shrink-0 relative overflow-hidden">
              {/* Decorative Blobs */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-900 rounded-[1.25rem] flex items-center justify-center text-white shadow-xl shadow-slate-900/20">
                    <Bell size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-slate-900 tracking-tight">Notifications</h2>
                    <p className="text-[10px] font-black text-[#8b8abc] uppercase tracking-widest mt-0.5">
                      {notifications.filter(n => n.isUnread).length} new alerts today
                    </p>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-slate-50 hover:bg-white flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all shadow-sm active:scale-95"
                >
                  <X size={20} strokeWidth={3} />
                </button>
              </div>
              
              <div className="flex items-center justify-between mt-8 relative z-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-100/50 rounded-xl border border-slate-200/50">
                  <Sparkles size={14} className="text-amber-500" />
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-wider">Smart View</span>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={markAllAsRead}
                    className="group flex items-center gap-2 text-xs font-black text-slate-400 hover:text-[#8b8abc] transition-all"
                  >
                    <Check size={14} strokeWidth={3} className="group-hover:scale-125 transition-transform" />
                    Clear All
                  </button>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all">
                    <Settings size={16} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="px-8 pb-6 border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {[
                  { id: 'all', label: 'All', icon: Layers, count: notifications.length },
                  { id: 'unread', label: 'Unread', icon: Circle, count: notifications.filter(n => n.isUnread).length },
                  { id: 'mentions', label: 'Mentions', icon: AtSign, count: notifications.filter(n => n.category === 'mentions').length },
                  { id: 'reactions', label: 'Reactions', icon: Heart, count: notifications.filter(n => n.category === 'reactions').length },
                  { id: 'calendar', label: 'Events', icon: Calendar, count: notifications.filter(n => n.category === 'calendar').length },
                  { id: 'files', label: 'Files', icon: FileText, count: notifications.filter(n => n.category === 'files').length },
                ].map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id as any)}
                    className={`relative px-5 py-3 rounded-full text-[11px] font-black capitalize transition-all whitespace-nowrap group ${
                      activeFilter === filter.id 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <div className="relative z-10 flex items-center gap-2.5">
                      <filter.icon size={14} strokeWidth={activeFilter === filter.id ? 3 : 2} className={activeFilter === filter.id ? 'text-white' : 'text-slate-300 group-hover:text-slate-900 transition-colors'} />
                      <span>{filter.label}</span>
                      {filter.count > 0 && (
                        <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-black leading-none ${
                          activeFilter === filter.id 
                          ? 'bg-white/20 text-white' 
                          : 'bg-slate-100 text-slate-500'
                        }`}>
                          {filter.count}
                        </span>
                      )}
                    </div>
                    {activeFilter === filter.id && (
                      <motion.div 
                        layoutId="activeFilterBg"
                        className="absolute inset-0 bg-slate-900 shadow-xl shadow-slate-900/20 rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Notification List */}
            <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar space-y-10">
              {filteredNotifications.length > 0 ? (
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  animate="show"
                >
                  {/* Today Group */}
                  <div className="mb-10">
                    <div className="flex items-center gap-4 mb-6 px-2">
                      <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] whitespace-nowrap">Today</h3>
                      <div className="h-px w-full bg-gradient-to-r from-slate-100 to-transparent" />
                    </div>
                    <div className="space-y-3">
                      {filteredNotifications.filter(n => n.timestamp.includes('ago') || n.timestamp === 'Just now').map(n => (
                        <NotificationCard 
                          key={n.id} 
                          notification={n} 
                          onRead={() => markAsRead(n.id)}
                          onDelete={() => deleteNotification(n.id)}
                          getTypeIcon={getTypeIcon}
                          getTypeColor={getTypeColor}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Yesterday Group */}
                  {filteredNotifications.some(n => n.timestamp === 'Yesterday') && (
                    <div>
                      <div className="flex items-center gap-4 mb-6 px-2">
                        <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] whitespace-nowrap">Yesterday</h3>
                        <div className="h-px w-full bg-gradient-to-r from-slate-100 to-transparent" />
                      </div>
                      <div className="space-y-3">
                        {filteredNotifications.filter(n => n.timestamp === 'Yesterday').map(n => (
                          <NotificationCard 
                            key={n.id} 
                            notification={n} 
                            onRead={() => markAsRead(n.id)}
                            onDelete={() => deleteNotification(n.id)}
                            getTypeIcon={getTypeIcon}
                            getTypeColor={getTypeColor}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mb-8 text-slate-200 border-2 border-dashed border-slate-100"
                  >
                    <Bell size={48} strokeWidth={1.5} />
                  </motion.div>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight mb-3">All caught up!</h4>
                  <p className="text-sm font-bold text-slate-400 max-w-[200px] mx-auto leading-relaxed">
                    Zero unread alerts. Your workspace is currently in perfect sync.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-slate-100 bg-white shrink-0">
              <button 
                onClick={() => {
                  onClose();
                  navigate('/notifications');
                }}
                className="w-full py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl text-[11px] font-black text-slate-600 hover:border-[#8b8abc] hover:text-[#8b8abc] hover:bg-white transition-all flex items-center justify-center gap-3 group shadow-sm active:scale-[0.98]"
              >
                <Eye size={18} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
                VIEW FULL HISTORY
                <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const HighlightedText: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(@\w+|#\w+)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('@')) {
          return <span key={i} className="text-[#8b8abc] font-black underline decoration-2 decoration-purple-200 underline-offset-4">{part}</span>;
        }
        if (part.startsWith('#')) {
          return <span key={i} className="text-blue-500 font-black px-1.5 py-0.5 bg-blue-50 rounded-md">{part}</span>;
        }
        return part;
      })}
    </>
  );
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 }
};

const NotificationCard: React.FC<{
  notification: Notification;
  onRead: () => void;
  onDelete: () => void;
  getTypeIcon: (type: Notification['type']) => React.ReactNode;
  getTypeColor: (type: Notification['type']) => string;
}> = ({ notification: n, onRead, onDelete, getTypeIcon, getTypeColor }) => {
  return (
    <motion.div
      variants={itemVariants}
      layout
      whileHover={{ x: 4 }}
      className={`relative p-6 rounded-[3rem] border-2 transition-all group cursor-pointer ${
        n.isUnread 
        ? 'bg-gradient-to-br from-white to-slate-50/50 border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] ring-1 ring-slate-100' 
        : 'bg-white/40 border-transparent opacity-60 hover:opacity-100'
      }`}
      onClick={onRead}
    >
      <div className="flex gap-5">
        {/* Avatar */}
        <div className="relative shrink-0">
          <motion.div 
            whileHover={{ rotate: 5, scale: 1.05 }}
            className={`w-14 h-14 rounded-[1.5rem] ${n.avatarColor} flex items-center justify-center text-white font-black text-lg shadow-lg shadow-purple-900/10 border-2 border-white`}
          >
            {n.avatar}
          </motion.div>
          
          <div className={`absolute -bottom-1 -right-1 w-7 h-7 rounded-xl bg-white border-2 border-white shadow-md flex items-center justify-center ${getTypeColor(n.type).split(' ')[0]}`}>
            {getTypeIcon(n.type)}
          </div>
          
          {n.isUnread && (
            <div className="absolute -top-1 -left-1 w-4 h-4 bg-[#8b8abc] rounded-full border-4 border-white shadow-sm" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-2">
            <p className="text-[13px] font-black text-slate-900 truncate leading-tight">
              {n.source} <span className="font-bold text-slate-400 ml-1">{n.action}</span>
            </p>
            <span className="text-[10px] font-black text-slate-400 whitespace-nowrap bg-slate-50 px-2 py-0.5 rounded-md">{n.timestamp}</span>
          </div>
          <p className="text-sm font-bold text-slate-500 line-clamp-2 leading-relaxed">
            <HighlightedText text={n.content} />
          </p>
          
          {n.context && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:border-[#8b8abc]/20 group-hover:text-[#8b8abc] transition-all">
              <Filter size={10} strokeWidth={3} />
              {n.context}
            </div>
          )}

          {/* Quick Actions */}
          <div className="mt-5 flex items-center gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {n.type === 'message' && (
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#8b8abc] hover:shadow-lg hover:shadow-purple-900/20 transition-all active:scale-95">
                <Reply size={12} strokeWidth={3} />
                Reply
              </button>
            )}
            {n.type === 'calendar' && (
              <button className="flex items-center gap-2 px-4 py-2 bg-[#c5f06c] text-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:shadow-lg hover:shadow-lime-900/20 transition-all active:scale-95">
                <Video size={12} strokeWidth={3} />
                Join Call
              </button>
            )}
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-[#8b8abc] hover:text-[#8b8abc] transition-all active:scale-95">
              Open
            </button>
            <div className="flex-1" />
            <div className="flex items-center gap-1">
              <button 
                onClick={(e) => { e.stopPropagation(); onDelete(); }}
                className="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
              >
                <Trash2 size={16} strokeWidth={2} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all">
                <MoreVertical size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotificationCenter;
