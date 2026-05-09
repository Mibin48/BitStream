import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Folder, FolderOpen, File, FileText, Archive,
  ChevronRight, ChevronDown, Search, Plus, Upload, Grid, List,
  Download, Share2, Trash2, Star,
  Filter, SortAsc, FileImage, FileVideo
} from 'lucide-react';

// --- Data ---
type FileItem = {
  id: number; name: string; type: 'pdf' | 'doc' | 'img' | 'vid' | 'zip' | 'other';
  size: string; modified: string; addedBy: string; avatar: string; avatarColor: string; starred?: boolean;
};
type FolderNode = {
  id: number; name: string; color: string; files: number; children?: FolderNode[];
  folderFiles?: FileItem[];
};

const fileTree: FolderNode[] = [
  {
    id: 1, name: 'Design Assets', color: '#9c9bcf', files: 24,
    children: [
      { id: 11, name: 'UI Components', color: '#8b8abc', files: 10, children: [] },
      { id: 12, name: 'Brand Kit', color: '#8b8abc', files: 14, children: [] },
    ],
    folderFiles: [
      { id: 101, name: 'BitStream-Design-System.fig', type: 'other', size: '18.2 MB', modified: 'Today, 9:41 AM', addedBy: 'Sarah Chen', avatar: 'SC', avatarColor: '#f06c9b', starred: true },
      { id: 102, name: 'Logo-Variants.zip', type: 'zip', size: '4.1 MB', modified: 'Yesterday', addedBy: 'Mike Ross', avatar: 'MR', avatarColor: '#c5f06c' },
      { id: 103, name: 'Hero-Banner-v3.png', type: 'img', size: '2.8 MB', modified: 'May 6', addedBy: 'Emma Liu', avatar: 'EL', avatarColor: '#f0e66c' },
    ]
  },
  {
    id: 2, name: 'Engineering', color: '#8b8abc', files: 38,
    children: [
      { id: 21, name: 'Backend Docs', color: '#7a79a8', files: 15 },
      { id: 22, name: 'API Specs', color: '#7a79a8', files: 23 },
    ],
    folderFiles: [
      { id: 201, name: 'Architecture-Overview.pdf', type: 'pdf', size: '3.4 MB', modified: 'Today, 11:00 AM', addedBy: 'Alex Kim', avatar: 'AK', avatarColor: '#8b8abc', starred: true },
      { id: 202, name: 'DB-Schema-v2.docx', type: 'doc', size: '890 KB', modified: 'May 7', addedBy: 'Sarah Chen', avatar: 'SC', avatarColor: '#f06c9b' },
      { id: 203, name: 'Sprint-31-Demo.mp4', type: 'vid', size: '220 MB', modified: 'May 5', addedBy: 'Mike Ross', avatar: 'MR', avatarColor: '#c5f06c' },
    ]
  },
  {
    id: 3, name: 'Marketing', color: '#f0e66c', files: 17,
    children: [],
    folderFiles: [
      { id: 301, name: 'Campaign-Q2.pdf', type: 'pdf', size: '5.6 MB', modified: 'May 6', addedBy: 'Emma Liu', avatar: 'EL', avatarColor: '#f0e66c' },
      { id: 302, name: 'Social-Kit.zip', type: 'zip', size: '12.3 MB', modified: 'May 4', addedBy: 'Alex Kim', avatar: 'AK', avatarColor: '#8b8abc' },
    ]
  },
  {
    id: 4, name: 'HR & Onboarding', color: '#f06c9b', files: 11,
    children: [
      { id: 41, name: 'Policies', color: '#c5679a', files: 6 },
      { id: 42, name: 'Checklists', color: '#c5679a', files: 5 },
    ],
    folderFiles: [
      { id: 401, name: 'Employee-Handbook.pdf', type: 'pdf', size: '1.9 MB', modified: 'Apr 30', addedBy: 'Sarah Chen', avatar: 'SC', avatarColor: '#f06c9b' },
      { id: 402, name: 'Onboarding-Guide.docx', type: 'doc', size: '760 KB', modified: 'Apr 28', addedBy: 'Mike Ross', avatar: 'MR', avatarColor: '#c5f06c' },
    ]
  },
];

const recentFiles: FileItem[] = [
  { id: 1, name: 'BitStream-Design-System.fig', type: 'other', size: '18.2 MB', modified: 'Today, 9:41 AM', addedBy: 'Sarah Chen', avatar: 'SC', avatarColor: '#f06c9b', starred: true },
  { id: 2, name: 'Architecture-Overview.pdf', type: 'pdf', size: '3.4 MB', modified: 'Today, 11:00 AM', addedBy: 'Alex Kim', avatar: 'AK', avatarColor: '#8b8abc' },
  { id: 3, name: 'Campaign-Q2.pdf', type: 'pdf', size: '5.6 MB', modified: 'Yesterday', addedBy: 'Emma Liu', avatar: 'EL', avatarColor: '#f0e66c' },
  { id: 4, name: 'Sprint-31-Demo.mp4', type: 'vid', size: '220 MB', modified: 'May 5', addedBy: 'Mike Ross', avatar: 'MR', avatarColor: '#c5f06c' },
];

// --- File Icon ---
const FileIcon = ({ type, size = 18 }: { type: string; size?: number }) => {
  const map: Record<string, { Icon: any; color: string; bg: string }> = {
    pdf: { Icon: FileText, color: '#ef4444', bg: 'bg-red-50' },
    doc: { Icon: FileText, color: '#3b82f6', bg: 'bg-blue-50' },
    img: { Icon: FileImage, color: '#f06c9b', bg: 'bg-pink-50' },
    vid: { Icon: FileVideo, color: '#8b8abc', bg: 'bg-purple-50' },
    zip: { Icon: Archive, color: '#f0e66c', bg: 'bg-yellow-50' },
    other: { Icon: File, color: '#9c9bcf', bg: 'bg-indigo-50' },
  };
  const { Icon, color, bg } = map[type] || map.other;
  return (
    <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
      <Icon size={size} color={color} strokeWidth={2} />
    </div>
  );
};

// --- Folder Tree Node ---
const TreeNode = ({ node, depth = 0, activeId, onSelect }: {
  node: FolderNode; depth?: number; activeId: number | null; onSelect: (n: FolderNode) => void;
}) => {
  const [open, setOpen] = useState(depth === 0);
  const hasChildren = node.children && node.children.length > 0;
  const isActive = activeId === node.id;

  return (
    <div>
      <button
        onClick={() => { setOpen(o => !o); onSelect(node); }}
        className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-all group
          ${isActive ? 'bg-[#8b8abc]/10 text-[#8b8abc]' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
        style={{ paddingLeft: `${12 + depth * 16}px` }}
      >
        {hasChildren ? (
          open ? <ChevronDown size={13} className="shrink-0 text-slate-400" /> : <ChevronRight size={13} className="shrink-0 text-slate-400" />
        ) : <span className="w-3.5 shrink-0" />}
        {open && hasChildren
          ? <FolderOpen size={15} style={{ color: node.color }} className="shrink-0" />
          : <Folder size={15} style={{ color: node.color }} className="shrink-0" />
        }
        <span className="flex-1 truncate text-left">{node.name}</span>
        <span className="text-[10px] font-black px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500 group-hover:bg-white transition-colors">
          {node.files}
        </span>
      </button>
      <AnimatePresence>
        {open && hasChildren && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
            {node.children!.map(child => (
              <TreeNode key={child.id} node={child} depth={depth + 1} activeId={activeId} onSelect={onSelect} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Folder Card ---
const FolderCard = ({ folder, onClick }: { folder: FolderNode; onClick: () => void }) => {
  const palette = ['#c5f06c', '#f06c9b', '#f0e66c', '#8b8abc', '#9c9bcf', '#f09b6c'];
  return (
    <motion.button
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group text-left bg-white border border-slate-100 rounded-[2.5rem] p-6 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:border-[#8b8abc]/30 transition-all overflow-hidden relative"
    >
      {/* Folder Illustration */}
      <div className="relative h-44 mb-6 flex items-end justify-center perspective-1000">
        {/* Back Panel - Taller */}
        <div
          className="absolute bottom-0 left-2 right-2 h-32 rounded-3xl border border-white/40 shadow-inner"
          style={{
            background: `linear-gradient(135deg, ${folder.color}, ${folder.color}dd)`,
            transform: 'rotateX(5deg)'
          }}
        />

        {/* Multiple Papers Sticking Out - Higher up */}
        <motion.div
          animate={{ y: [0, -4, 0], rotate: [-5, -7, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-8 w-16 h-20 bg-white rounded-xl shadow-lg border border-slate-100 z-[1] flex flex-col p-3 gap-2"
        >
          <div className="w-full h-1.5 bg-slate-50 rounded-full" />
          <div className="w-2/3 h-1.5 bg-slate-50 rounded-full" />
          <div className="w-full h-1.5 bg-slate-50 rounded-full" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -6, 0], rotate: [3, 5, 3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-16 left-16 w-16 h-20 bg-white rounded-xl shadow-lg border border-slate-100 z-[2] flex items-center justify-center"
        >
          <FileText size={18} className="text-slate-100" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -2, 0], rotate: [10, 12, 10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-16 left-24 w-16 h-20 bg-white rounded-xl shadow-lg border border-slate-100 z-[1]"
        />

        {/* Front Panel with Tab */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 rounded-3xl shadow-[0_-10px_30px_rgba(0,0,0,0.1)] z-[10] border-t border-white/30 flex items-end p-5"
          style={{
            background: `linear-gradient(to bottom right, ${folder.color}, ${folder.color}ee)`,
          }}
        >
          {/* Folder Tab with "Inverted" Radius (Concave Corners) */}
          <div
            className="absolute -top-4 left-6 w-16 h-8 rounded-t-2xl"
            style={{ background: folder.color }}
          >
            {/* Left Inverted Corner */}
            <div
              className="absolute -left-4 bottom-0 w-4 h-4"
              style={{
                background: `radial-gradient(circle at 0 0, transparent 70%, ${folder.color} 72%)`
              }}
            />
            {/* Right Inverted Corner */}
            <div
              className="absolute -right-4 bottom-0 w-4 h-4"
              style={{
                background: `radial-gradient(circle at 100% 0, transparent 70%, ${folder.color} 72%)`
              }}
            />
          </div>

          {/* Integrated App Icons / Color Dots */}
          <div className="flex -space-x-2">
            {palette.slice(0, 3).map((c, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-white shadow-sm flex items-center justify-center overflow-hidden"
                style={{ background: c }}
              >
                <div className="w-full h-full opacity-10 bg-black/5" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-20">
        <h4 className="font-black text-slate-800 text-lg truncate tracking-tight">{folder.name}</h4>
        <div className="flex items-center gap-2.5 mt-1.5">
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-2.5 py-1 rounded-lg">
            {folder.files} Items
          </span>
          <div className="w-1.5 h-1.5 bg-[#c5f06c] rounded-full" />
          <span className="text-[11px] font-bold text-slate-400">2.4 GB</span>
        </div>
      </div>
    </motion.button>
  );
};

// --- File Row ---
const FileRow = ({ file, view, isSelected, onSelect }: { 
  file: FileItem; view: 'list' | 'grid'; isSelected: boolean; onSelect: (id: number) => void 
}) => {
  const [hovered, setHovered] = useState(false);
  if (view === 'grid') {
    return (
      <motion.div
        whileHover={{ y: -3 }}
        onClick={() => onSelect(file.id)}
        className={`border rounded-2xl p-4 flex flex-col gap-3 transition-all cursor-pointer group shadow-sm hover:shadow-md
          ${isSelected ? 'bg-[#8b8abc]/5 border-[#8b8abc] ring-2 ring-[#8b8abc]/20' : 'bg-white border-slate-100 hover:border-slate-200'}`}
      >
        <FileIcon type={file.type} size={20} />
        <div>
          <p className="font-bold text-slate-800 text-xs truncate">{file.name}</p>
          <p className="text-[10px] font-semibold text-slate-400 mt-0.5">{file.size}</p>
        </div>
        <div className="flex items-center gap-1.5 mt-auto">
          <div className="w-5 h-5 rounded-full text-[8px] font-black flex items-center justify-center text-white"
            style={{ background: file.avatarColor }}>{file.avatar}</div>
          <span className="text-[10px] text-slate-400 truncate font-semibold">{file.addedBy}</span>
        </div>
      </motion.div>
    );
  }
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(file.id)}
      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all cursor-pointer group border
        ${isSelected ? 'bg-[#8b8abc]/10 border-[#8b8abc] shadow-sm' : 'hover:bg-slate-50 border-transparent hover:border-slate-100'}`}
    >
      <FileIcon type={file.type} />
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm text-slate-800 truncate flex items-center gap-1.5">
          {file.name}
          {file.starred && <Star size={11} className="text-[#f0e66c] fill-[#f0e66c] shrink-0" />}
        </p>
        <p className="text-[11px] font-semibold text-slate-400">{file.size}</p>
      </div>
      <div className="hidden md:flex items-center gap-2 w-44">
        <div className="w-6 h-6 rounded-full text-[9px] font-black flex items-center justify-center text-white shrink-0"
          style={{ background: file.avatarColor }}>{file.avatar}</div>
        <span className="text-xs font-semibold text-slate-500 truncate">{file.addedBy}</span>
      </div>
      <span className="hidden lg:block text-[11px] font-semibold text-slate-400 w-28 text-right shrink-0">{file.modified}</span>
      <div className="w-32 flex justify-end">
        <AnimatePresence>
          {(hovered || isSelected) && (
            <motion.div initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 8 }}
              className="flex items-center gap-1">
              {[Download, Share2, Star, Trash2].map((Icon, i) => (
                <button key={i} className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
                  <Icon size={13} strokeWidth={2} />
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- Main Page ---
const FilesPage = () => {
  const [activeFolder, setActiveFolder] = useState<FolderNode | null>(fileTree[0]);
  const [search, setSearch] = useState('');
  const [view, setView] = useState<'list' | 'grid'>('list');
  const [sideTab, setSideTab] = useState<'folders' | 'recent' | 'starred'>('folders');
  const [selectedFileId, setSelectedFileId] = useState<number | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const displayFiles = activeFolder?.folderFiles ?? recentFiles;
  const displayFolders = activeFolder?.children ?? fileTree;
  const filtered = displayFiles.filter(f => f.name.toLowerCase().includes(search.toLowerCase()));

  const selectedFile = displayFiles.find(f => f.id === selectedFileId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && selectedFileId) {
        e.preventDefault();
        setShowPreview(prev => !prev);
      }
      if (e.key === 'Escape') {
        setShowPreview(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedFileId]);

  return (
    <div className="flex-1 flex overflow-hidden bg-[#F1F5F9] gap-5 p-5">

      {/* Left Sidebar */}
      <div className="w-64 flex flex-col gap-6 bg-white/70 backdrop-blur-md rounded-[2.5rem] border border-slate-200/50 shadow-sm shrink-0 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8b8abc]/5 to-[#f06c9b]/5 pointer-events-none" />
        <div className="p-5 pb-3 border-b border-slate-100 flex items-center justify-between">
          <span className="font-black text-slate-800 text-base">Files</span>
          <div className="flex gap-1">
            <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors">
              <Plus size={15} strokeWidth={2.5} />
            </button>
            <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors">
              <Upload size={15} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus-within:border-[#8b8abc]/40 focus-within:ring-2 focus-within:ring-[#8b8abc]/10 transition-all">
            <Search size={13} className="text-slate-400 shrink-0" />
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search files..."
              className="bg-transparent text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none w-full" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 px-4 pb-3">
          {(['folders', 'recent', 'starred'] as const).map(t => (
            <button key={t} onClick={() => setSideTab(t)}
              className={`flex-1 py-1.5 rounded-lg text-[10px] font-black capitalize transition-all ${sideTab === t ? 'bg-[#8b8abc] text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}>
              {t}
            </button>
          ))}
        </div>

        {/* Tree */}
        <div className="flex-1 overflow-y-auto px-2 pb-4 space-y-0.5 custom-scrollbar">
          {sideTab === 'folders' && fileTree.map(node => (
            <TreeNode key={node.id} node={node} activeId={activeFolder?.id ?? null}
              onSelect={n => setActiveFolder(n)} />
          ))}
          {sideTab === 'recent' && recentFiles.map(f => (
            <div key={f.id} className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-all">
              <FileIcon type={f.type} size={13} />
              <span className="text-xs font-semibold text-slate-600 truncate flex-1">{f.name}</span>
            </div>
          ))}
          {sideTab === 'starred' && recentFiles.filter(f => f.starred).map(f => (
            <div key={f.id} className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-all">
              <FileIcon type={f.type} size={13} />
              <span className="text-xs font-semibold text-slate-600 truncate flex-1">{f.name}</span>
            </div>
          ))}
        </div>

        {/* Storage indicator */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-wide">Storage</span>
            <span className="text-[10px] font-black text-slate-700">6.8 / 20 GB</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden flex">
            <motion.div initial={{ width: 0 }} animate={{ width: '15%' }} transition={{ duration: 1 }} className="h-full bg-[#8b8abc]" title="Docs" />
            <motion.div initial={{ width: 0 }} animate={{ width: '10%' }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-[#c5f06c]" title="Media" />
            <motion.div initial={{ width: 0 }} animate={{ width: '5%' }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-[#f06c9b]" title="Other" />
            <motion.div initial={{ width: 0 }} animate={{ width: '4%' }} transition={{ duration: 1, delay: 0.6 }} className="h-full bg-[#f0e66c]" title="Archives" />
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex gap-1 items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#8b8abc]" /><span className="text-[8px] font-bold text-slate-400">Docs</span></div>
            <div className="flex gap-1 items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#c5f06c]" /><span className="text-[8px] font-bold text-slate-400">Media</span></div>
            <div className="flex gap-1 items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#f06c9b]" /><span className="text-[8px] font-bold text-slate-400">Misc</span></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-white rounded-[2rem] shadow-sm border border-slate-100">

        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-6 pb-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 font-black text-slate-800 text-lg hover:text-[#8b8abc] transition-colors">
              {activeFolder ? (
                <>
                  <Folder size={20} style={{ color: activeFolder.color }} />
                  {activeFolder.name}
                </>
              ) : 'All Files'}
              <ChevronDown size={16} className="text-slate-400" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 px-3 py-2 rounded-xl transition-all">
              <Filter size={13} /> Filter
            </button>
            <button className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 px-3 py-2 rounded-xl transition-all">
              <SortAsc size={13} /> Sort
            </button>
            <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl p-1">
              <button onClick={() => setView('list')}
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${view === 'list' ? 'bg-[#8b8abc] text-white shadow-sm' : 'text-slate-400 hover:text-slate-700'}`}>
                <List size={14} />
              </button>
              <button onClick={() => setView('grid')}
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${view === 'grid' ? 'bg-[#8b8abc] text-white shadow-sm' : 'text-slate-400 hover:text-slate-700'}`}>
                <Grid size={14} />
              </button>
            </div>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#c5f06c] text-[#1a1a1a] font-black text-xs px-4 py-2.5 rounded-xl shadow-sm border-b-2 border-[#a3c959] active:border-b-0 transition-all hover:shadow-md">
              <Upload size={14} strokeWidth={2.5} />
              Upload
            </motion.button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-7 py-5 custom-scrollbar">

          {/* Folder Grid */}
          {displayFolders.length > 0 && (
            <div className="mb-7">
              <h3 className="font-black text-slate-800 text-base mb-4 flex items-center gap-2">
                <Folder size={18} className="text-[#8b8abc]" />
                Folders
                <span className="text-xs font-bold text-slate-400">({displayFolders.length})</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {displayFolders.map((folder) => (
                  <FolderCard key={folder.id} folder={folder} onClick={() => setActiveFolder(folder)} />
                ))}
              </div>
            </div>
          )}

          {/* Files Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-black text-slate-800 text-base flex items-center gap-2">
                <File size={18} className="text-[#f06c9b]" />
                Files
                <span className="text-xs font-bold text-slate-400">({filtered.length})</span>
              </h3>
            </div>

            {view === 'list' ? (
              <div>
                {/* Column headers */}
                <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-slate-50 mb-2">
                  <div className="w-9 shrink-0" />
                  <span className="flex-1 text-[10px] font-black uppercase tracking-wider text-slate-400">Name</span>
                  <span className="hidden md:block text-[10px] font-black uppercase tracking-wider text-slate-400 w-44">Added By</span>
                  <span className="hidden lg:block text-[10px] font-black uppercase tracking-wider text-slate-400 w-28 text-right">Modified</span>
                  <div className="w-32 shrink-0" />
                </div>
                <div className="space-y-0.5">
                  {filtered.map(f => (
                    <FileRow 
                      key={f.id} 
                      file={f} 
                      view="list" 
                      isSelected={selectedFileId === f.id} 
                      onSelect={setSelectedFileId} 
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {filtered.map(f => (
                  <FileRow 
                    key={f.id} 
                    file={f} 
                    view="grid" 
                    isSelected={selectedFileId === f.id} 
                    onSelect={setSelectedFileId} 
                  />
                ))}
              </div>
            )}

            {filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4">
                  <Search size={28} className="text-slate-300" />
                </div>
                <p className="font-black text-slate-400 text-sm">No files found</p>
                <p className="text-xs text-slate-300 font-semibold mt-1">Try a different search term</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Peek Modal */}
      <AnimatePresence>
        {showPreview && selectedFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-[3rem] shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col"
            >
              <div className="h-64 bg-[#F8FAFC] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8b8abc]/5 to-transparent" />
                <motion.div 
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                >
                  <FileIcon type={selectedFile.type} size={64} />
                </motion.div>
                <button 
                  onClick={() => setShowPreview(false)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <Filter size={18} className="rotate-45" /> {/* Close icon substitute */}
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">{selectedFile.name}</h2>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {selectedFile.type.toUpperCase()} • {selectedFile.size}
                    </p>
                  </div>
                  <button className="w-12 h-12 rounded-2xl bg-[#c5f06c] flex items-center justify-center shadow-lg shadow-[#c5f06c]/20 border-b-4 border-[#a3c959]">
                    <Download size={20} className="text-[#1a1a1a]" strokeWidth={2.5} />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Modified</p>
                    <p className="text-sm font-black text-slate-700">{selectedFile.modified}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Added By</p>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-lg flex items-center justify-center text-[8px] font-black text-white" style={{ background: selectedFile.avatarColor }}>
                        {selectedFile.avatar}
                      </div>
                      <p className="text-sm font-black text-slate-700">{selectedFile.addedBy}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-900/10">
                    Open File
                  </button>
                  <button className="px-6 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95">
                    Share
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

export default FilesPage;
