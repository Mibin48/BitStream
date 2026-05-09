import React from 'react';
import { Home, MessageSquare, Video, Calendar, Folder, Users, Search, Bell, Settings, Zap } from 'lucide-react';
import { Logo } from '../ui/Logo';

import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NotificationCenter from './NotificationCenter';
import CommandPalette from './CommandPalette';
import { MagnificationDock } from '../ui/MagnificationDock';

const topNavItems = [
  { label: 'Home', icon: Home, path: '/dashboard' },
  { label: 'Messages', icon: MessageSquare, path: '/messages' },
  { label: 'Meetings', icon: Video, path: '/meetings' },
  { label: 'Calendar', icon: Calendar, path: '/calendar' },
  { label: 'Files', icon: Folder, path: '/files' },
  { label: 'Apps', icon: Zap, path: '/integrations' },
  { label: 'Team', icon: Users, path: '/team' },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = React.useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false);

  // Map nav items for the dock
  const dockItems = topNavItems.map(item => ({
    label: item.label,
    icon: <item.icon size={22} />,
    onClick: () => navigate(item.path),
    isActive: location.pathname === item.path
  }));

  // Keyboard shortcut listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'N') {
        e.preventDefault();
        setIsNotificationsOpen(prev => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="h-screen bg-[#F1F5F9] flex flex-col font-sans selection:bg-[#8b8abc] selection:text-white overflow-hidden">
      {/* Top Navigation Bar: Expanded & Premium */}
      <nav className="h-24 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 flex items-center justify-between px-10 sticky top-0 z-[100] transition-all shadow-sm">
        {/* Brand Section */}
        <div className="flex items-center gap-8 min-w-[200px]">
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 bg-slate-900 rounded-[1.25rem] flex items-center justify-center text-white group-hover:bg-[#8b8abc] shadow-lg shadow-slate-900/10 transition-all rotate-[-4deg] group-hover:rotate-0 overflow-hidden">
              <Logo size={28} color="white" fill="transparent" />

            </div>

            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter uppercase leading-none">BitStream</span>
              <span className="text-[9px] font-bold text-[#8b8abc] uppercase tracking-[0.15em] mt-0.5">Workspace</span>
            </div>
          </Link>
        </div>

        {/* Central Navigation: Compact with Icons + Names */}
        <div className="hidden lg:flex flex-1 items-center justify-center px-4">
          <div className="flex items-center gap-1 p-1.5 bg-slate-100/50 border border-slate-200/50 rounded-[1.5rem] shadow-inner">
            {topNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all relative group ${isActive
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200/40'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-white/40'
                    }`}
                >
                  <Icon size={18} className={`transition-transform duration-300 ${isActive ? 'text-[#8b8abc]' : 'group-hover:scale-110'}`} strokeWidth={isActive ? 3 : 2} />
                  <span className={`text-[10px] font-black uppercase tracking-[0.1em] transition-colors ${isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-900'}`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#8b8abc] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Actions Cluster */}
        <div className="flex items-center gap-3 min-w-[200px] justify-end">
          {/* Global Search Trigger */}
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#8b8abc] hover:border-[#8b8abc]/30 transition-all group"
            title="Search (⌘+K)"
          >
            <Search size={18} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() => setIsNotificationsOpen(true)}
            className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#8b8abc] hover:border-[#8b8abc]/30 transition-all relative group"
          >
            <Bell size={18} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" />
            <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 bg-[#8b8abc] border-2 border-white rounded-full flex items-center justify-center text-[7px] font-black text-white shadow-sm">
              4
            </div>
          </button>

          <div className="h-6 w-px bg-slate-200 mx-1" />

          <Link to="/settings" className="flex items-center gap-2.5 p-1 pr-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:shadow-sm transition-all group">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-[9px] font-bold text-white overflow-hidden group-hover:bg-[#8b8abc] transition-colors">
              AC
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-tight text-slate-900 leading-none">Alex C.</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Admin</span>
            </div>
          </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {children}
      </div>

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* Notifications Sidebar */}
      <NotificationCenter
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />
    </div>
  );
};

export default DashboardLayout;
