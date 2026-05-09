import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, X, Hash, MessageSquare, FileText, User, 
  ChevronRight, CornerDownLeft, ArrowUp, 
  ArrowDown, Zap, Settings, Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Result {
  id: string;
  type: 'message' | 'file' | 'person' | 'channel' | 'command';
  title: string;
  subtitle: string;
  category: string;
  icon?: React.ReactNode;
  metadata?: string;
  timestamp?: string;
  action?: () => void;
  shortcut?: string;
}

const mockData: Result[] = [
  // Commands
  { id: 'c1', type: 'command', title: '/home', subtitle: 'Navigate to dashboard', category: 'Commands', icon: <Zap size={16} />, shortcut: '⌘H' },
  { id: 'c2', type: 'command', title: '/messages', subtitle: 'Open direct messages', category: 'Commands', icon: <MessageSquare size={16} />, shortcut: '⌘M' },
  { id: 'c3', type: 'command', title: '/calendar', subtitle: 'Open calendar view', category: 'Commands', icon: <Calendar size={16} />, shortcut: '⌘L' },
  { id: 'c4', type: 'command', title: '/files', subtitle: 'Manage shared files', category: 'Commands', icon: <FileText size={16} />, shortcut: '⌘F' },
  { id: 'c5', type: 'command', title: '/settings', subtitle: 'Account preferences', category: 'Commands', icon: <Settings size={16} />, shortcut: '⌘S' },
  
  // Channels
  { id: 'ch1', type: 'channel', title: '#design', subtitle: '24 members · Product design sync', category: 'Channels', icon: <Hash size={16} /> },
  { id: 'ch2', type: 'channel', title: '#engineering', subtitle: '42 members · Tech stack & architecture', category: 'Channels', icon: <Hash size={16} /> },
  { id: 'ch3', type: 'channel', title: '#marketing', subtitle: '18 members · Growth & campaigns', category: 'Channels', icon: <Hash size={16} /> },
  
  // People
  { id: 'p1', type: 'person', title: 'Sarah Chen', subtitle: 'Senior Product Designer · Online', category: 'People', icon: <User size={16} /> },
  { id: 'p2', type: 'person', title: 'Marcus Wright', subtitle: 'Full Stack Engineer · Away', category: 'People', icon: <User size={16} /> },
  { id: 'p3', type: 'person', title: 'Lena Meyer', subtitle: 'Marketing Lead · Online', category: 'People', icon: <User size={16} /> },
  
  // Files
  { id: 'f1', type: 'file', title: 'brand_guidelines_2024.pdf', subtitle: 'Shared by Sarah Chen in #design · 4.2 MB', category: 'Files', icon: <FileText size={16} />, metadata: 'PDF' },
  { id: 'f2', type: 'file', title: 'api_spec_v2.json', subtitle: 'Shared by Marcus Wright in #engineering · 120 KB', category: 'Files', icon: <FileText size={16} />, metadata: 'JSON' },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'all' | 'messages' | 'files' | 'people' | 'channels'>('all');
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // No internal listener for opening, handled by parent layout
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen]);

  // Filtering Logic
  const filteredResults = useMemo(() => {
    let results = mockData;

    // Filter by Tab
    if (activeTab !== 'all') {
      results = results.filter(r => r.type === activeTab.slice(0, -1) || (activeTab === 'people' && r.type === 'person'));
    }

    // Filter by Query
    if (query) {
      const q = query.toLowerCase();
      if (q.startsWith('/')) {
        results = results.filter(r => r.type === 'command' && r.title.toLowerCase().includes(q));
      } else {
        results = results.filter(r => 
          r.title.toLowerCase().includes(q) || 
          r.subtitle.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q)
        );
      }
    }

    return results;
  }, [query, activeTab]);

  // Handle Keyboard Navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredResults.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredResults.length) % Math.max(1, filteredResults.length));
    } else if (e.key === 'Enter' && filteredResults.length > 0) {
      e.preventDefault();
      executeAction(filteredResults[selectedIndex]);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const tabs: any[] = ['all', 'messages', 'files', 'people', 'channels'];
      const nextIdx = (tabs.indexOf(activeTab) + 1) % tabs.length;
      setActiveTab(tabs[nextIdx]);
    }
  };

  const executeAction = (result: Result) => {
    if (result.type === 'command') {
      const path = result.title.slice(1);
      if (['home', 'messages', 'calendar', 'files', 'settings', 'team'].includes(path)) {
        navigate(`/${path === 'home' ? 'dashboard' : path}`);
      }
    }
    onClose();
  };

  // Grouping results
  const groupedResults = useMemo(() => {
    const groups: Record<string, Result[]> = {};
    filteredResults.forEach(r => {
      if (!groups[r.category]) groups[r.category] = [];
      groups[r.category].push(r);
    });
    return groups;
  }, [filteredResults]);

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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[200]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[201] flex items-start justify-center pt-[12vh] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: 'spring', damping: 25, stiffness: 400 }}
              className="w-[720px] max-h-[70vh] bg-white border-[3px] border-black rounded-[2rem] shadow-[16px_16px_0_0_#000] overflow-hidden flex flex-col pointer-events-auto"
            >
              {/* Search Header */}
              <div className="p-6 border-b-[3px] border-black bg-white flex items-center gap-4 relative">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shrink-0">
                  <Search className="text-white" size={20} strokeWidth={3} />
                </div>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={query.startsWith('/') ? "Run command..." : "Search messages, files, people..."}
                  className="flex-1 bg-transparent border-none outline-none text-xl font-black text-slate-900 placeholder:text-slate-300"
                />
                {query && (
                  <button onClick={() => setQuery('')} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <X size={18} strokeWidth={3} className="text-slate-400" />
                  </button>
                )}
              </div>

              {/* Tabs */}
              <div className="px-6 py-3 flex items-center gap-2 border-b border-slate-100 bg-slate-50/50">
                {(['all', 'messages', 'files', 'people', 'channels'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 rounded-xl text-[10px] font-black capitalize transition-all whitespace-nowrap border-2 ${
                      activeTab === tab 
                      ? 'bg-white text-[#7C3AED] border-black shadow-[3px_3px_0_0_#000] -translate-y-0.5' 
                      : 'text-slate-400 hover:text-slate-900 hover:bg-white border-transparent'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Results Area */}
              <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-white"
              >
                {filteredResults.length > 0 ? (
                  <div className="space-y-6">
                    {Object.entries(groupedResults).map(([category, items]) => (
                      <div key={category}>
                        <div className="px-3 mb-3 flex items-center justify-between">
                          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">{category}</h3>
                        </div>
                        <div className="space-y-1">
                          {items.map((item) => {
                            const globalIdx = filteredResults.indexOf(item);
                            const isSelected = selectedIndex === globalIdx;
                            return (
                              <div
                                key={item.id}
                                onClick={() => executeAction(item)}
                                onMouseEnter={() => setSelectedIndex(globalIdx)}
                                className={`group p-4 rounded-2xl flex items-center gap-4 cursor-pointer transition-all border-2 ${
                                  isSelected 
                                  ? 'bg-slate-50 border-black shadow-[4px_4px_0_0_#000] -translate-y-0.5' 
                                  : 'bg-transparent border-transparent hover:bg-slate-50/50'
                                }`}
                              >
                                <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all border-2 shrink-0 ${
                                  isSelected ? 'bg-[#7C3AED] text-white border-black' : 'bg-slate-50 text-slate-400 border-slate-100'
                                }`}>
                                  {item.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2">
                                    <p className={`text-base font-black truncate transition-colors ${isSelected ? 'text-black' : 'text-slate-700 group-hover:text-black'}`}>
                                      {item.title}
                                    </p>
                                    {item.shortcut && (
                                      <div className={`px-1.5 py-0.5 border-2 rounded-md text-[9px] font-black transition-all ${
                                        isSelected ? 'bg-black text-white border-black' : 'bg-white text-slate-300 border-slate-100'
                                      }`}>
                                        {item.shortcut}
                                      </div>
                                    )}
                                  </div>
                                  <p className={`text-xs font-bold truncate transition-colors ${isSelected ? 'text-slate-500' : 'text-slate-400'}`}>
                                    {item.subtitle}
                                  </p>
                                </div>
                                <CornerDownLeft 
                                  size={14} 
                                  className={`transition-all shrink-0 ${isSelected ? 'text-black opacity-100' : 'opacity-0'}`} 
                                  strokeWidth={3}
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-20 h-20 bg-slate-50 rounded-[2.5rem] flex items-center justify-center mb-6 text-slate-200">
                      <Search size={32} />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">No results for "{query}"</h4>
                    <p className="text-xs font-bold text-slate-400 max-w-[240px] mx-auto mt-2 leading-relaxed">
                      Try different keywords or check your spelling for better matches.
                    </p>
                  </div>
                )}
              </div>

              {/* Footer Hints */}
              <div className="px-8 py-5 border-t-[4px] border-black bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col gap-1">
                      <ArrowUp size={10} className="text-slate-400" />
                      <ArrowDown size={10} className="text-slate-400" />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Navigate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-1.5 py-1 bg-white border border-slate-200 rounded-md shadow-sm">
                      <CornerDownLeft size={10} className="text-slate-900" />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Select</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-1.5 py-1 bg-white border border-slate-200 rounded-md shadow-sm text-[8px] font-black text-slate-900">
                      ESC
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Close</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="px-1.5 py-1 bg-white border border-slate-200 rounded-md shadow-sm text-[8px] font-black text-slate-900">
                      ⌘
                    </div>
                    <div className="px-1.5 py-1 bg-white border border-slate-200 rounded-md shadow-sm text-[8px] font-black text-slate-900">
                      K
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Search Everywhere</span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
