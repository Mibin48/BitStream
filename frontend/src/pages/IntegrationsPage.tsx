import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Check, 
  ChevronRight, Zap, Users, Shield,
  ArrowRight, Sparkles, Play, Info, CheckCircle2, X,
  Code, HardDrive, Palette, Layout, FileText
} from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  developer: string;
  icon: any;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  installs: string;
  status: 'installed' | 'available';
  tags: string[];
  features: string[];
  fullDescription: string;
}

const integrations: Integration[] = [
  {
    id: '1',
    name: 'GitHub',
    developer: 'GitHub, Inc.',
    icon: Code,
    category: 'Development',
    description: 'Connect your repositories, track PRs, and manage issues directly from BitStream.',
    rating: 4.9,
    reviews: 1240,
    installs: '50K+',
    status: 'installed',
    tags: ['Repo', 'PRs', 'CI/CD'],
    features: ['Real-time PR notifications', 'Create issues from chat', 'Link unfurling'],
    fullDescription: 'The GitHub integration for BitStream keeps your development workflow in sync. Get notified about PRs, reviews, and issues without leaving your workspace.'
  },
  {
    id: '2',
    name: 'Google Drive',
    developer: 'Google',
    icon: HardDrive,
    category: 'File Storage',
    description: 'Access, share, and manage your Google Drive files within any BitStream channel.',
    rating: 4.7,
    reviews: 850,
    installs: '100K+',
    status: 'available',
    tags: ['Cloud', 'Docs', 'Storage'],
    features: ['Direct file sharing', 'File search', 'Permission management'],
    fullDescription: 'Bring your files where the conversation happens. The Google Drive integration allows for seamless file sharing and real-time collaboration.'
  },
  {
    id: '3',
    name: 'Figma',
    developer: 'Figma',
    icon: Palette,
    category: 'Design',
    description: 'Get design updates, comments, and file previews right in your project channels.',
    rating: 4.8,
    reviews: 620,
    installs: '30K+',
    status: 'installed',
    tags: ['UI/UX', 'Collaborate', 'Prototyping'],
    features: ['Live file previews', 'Comment notifications', 'Version tracking'],
    fullDescription: 'Bridge the gap between design and development. Figma for BitStream brings live design updates to your team.'
  },
  {
    id: '4',
    name: 'Jira',
    developer: 'Atlassian',
    icon: Layout,
    category: 'Development',
    description: 'Track sprints, create tickets, and update issue status without switching tabs.',
    rating: 4.5,
    reviews: 980,
    installs: '40K+',
    status: 'available',
    tags: ['Agile', 'Tickets', 'Productivity'],
    features: ['Create Jira tickets', 'Status updates', 'Sprint tracking'],
    fullDescription: 'Keep your projects on track. Jira for BitStream allows for rapid ticket creation and status management directly from any channel.'
  },
  {
    id: '5',
    name: 'Zoom',
    developer: 'Zoom Video',
    icon: Play,
    category: 'Communication',
    description: 'Launch and schedule Zoom meetings directly from BitStream messages.',
    rating: 4.6,
    reviews: 1100,
    installs: '80K+',
    status: 'available',
    tags: ['Video', 'Meetings', 'Call'],
    features: ['Instant meetings', 'Scheduled calls', 'Record notifications'],
    fullDescription: 'Meet face-to-face with a single command. Zoom integration makes scheduling and joining meetings effortless.'
  },
  {
    id: '6',
    name: 'Notion',
    developer: 'Notion Labs',
    icon: FileText,
    category: 'Productivity',
    description: 'Sync your docs, databases, and knowledge base with BitStream.',
    rating: 4.9,
    reviews: 2100,
    installs: '60K+',
    status: 'installed',
    tags: ['Knowledge', 'Docs', 'Database'],
    features: ['Page unfurling', 'Database updates', 'Content search'],
    fullDescription: 'The perfect companion for your knowledge base. Notion for BitStream keeps your team informed and organized.'
  }
];

const IntegrationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedApp, setSelectedApp] = useState<Integration | null>(null);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

  const featuredApps = integrations.slice(0, 3); // For demo, use first 3

  // Auto-rotate carousel
  useState(() => {
    const timer = setInterval(() => {
      setActiveCarouselIndex((prev) => (prev + 1) % featuredApps.length);
    }, 5000);
    return () => clearInterval(timer);
  });

  const categories = [
    'All', 'Popular', 'Productivity', 'Development', 'Design', 
    'Communication', 'File Storage', 'Project Management'
  ];

  const filteredIntegrations = useMemo(() => {
    return integrations.filter(app => {
      const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           app.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || app.category === activeCategory;
      const matchesStatus = statusFilter === 'All' || 
                           (statusFilter === 'Installed' && app.status === 'installed') ||
                           (statusFilter === 'Available' && app.status === 'available');
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchQuery, activeCategory, statusFilter]);

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#F1F5F9] overflow-y-auto custom-scrollbar pb-20 relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8b8abc]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c5f06c]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200 p-12 lg:p-16 relative overflow-hidden shrink-0">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #8b8abc 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#8b8abc]/10 px-3 py-1 rounded-full border border-[#8b8abc]/20">
                <Sparkles size={14} className="text-[#8b8abc]" />
              </div>
              <span className="text-[10px] font-black text-[#8b8abc] uppercase tracking-widest">Marketplace</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Extend BitStream with <br />
              <span className="bg-gradient-to-r from-[#8b8abc] to-[#7a79a8] bg-clip-text text-transparent">
                powerful apps.
              </span>
            </h1>
            <p className="text-slate-500 font-medium text-lg mb-10 max-w-md leading-relaxed">
              Connect your favorite tools and automate your workflow with over 100+ production-ready integrations.
            </p>
            
            <div className="relative max-w-xl group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#8b8abc] transition-colors">
                <Search size={20} strokeWidth={2.5} />
              </div>
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-14 pr-8 text-lg font-bold placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-[#8b8abc]/10 focus:border-[#8b8abc] transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Featured Carousel */}
          <div className="w-full lg:w-[480px] shrink-0">
            <div className="relative h-[340px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCarouselIndex}
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  className="absolute inset-0 bg-white border border-slate-200/80 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b8abc]/5 rounded-full -translate-y-12 translate-x-12" />
                  <div className="flex items-start justify-between relative z-10">
                    <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      {featuredApps[activeCarouselIndex] && (
                        (() => {
                          const FeaturedIcon = featuredApps[activeCarouselIndex].icon;
                          return <FeaturedIcon size={36} className="text-[#8b8abc]" strokeWidth={2} />;
                        })()
                      )}
                    </div>
                    <div className="bg-[#c5f06c] text-slate-900 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-md shadow-[#c5f06c]/20 border border-[#c5f06c]">
                      <Zap size={10} fill="currentColor" />
                      Featured
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-black text-slate-900 mb-2">{featuredApps[activeCarouselIndex].name}</h3>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed line-clamp-2">
                      {featuredApps[activeCarouselIndex].description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between relative z-10">
                    <button 
                      onClick={() => setSelectedApp(featuredApps[activeCarouselIndex])}
                      className="bg-gradient-to-br from-[#8b8abc] to-[#7a79a8] text-white px-7 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:shadow-xl hover:shadow-[#8b8abc]/20 transition-all flex items-center gap-2 group/btn border-b-4 border-purple-900/20 active:border-b-0"
                    >
                      View Details
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex gap-2">
                      {featuredApps.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveCarouselIndex(i)}
                          className={`h-1.5 rounded-full transition-all ${i === activeCarouselIndex ? 'w-8 bg-[#8b8abc]' : 'w-2 bg-slate-200'}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full p-8 flex gap-8 relative z-10">
        {/* Sidebar Filters */}
        <aside className="w-64 shrink-0 hidden lg:block">
          <div className="sticky top-8 space-y-8">
            <div className="bg-white border border-slate-200 rounded-[2rem] p-7 shadow-sm shadow-slate-200/50">
              <div className="flex items-center gap-2 mb-8">
                <Filter size={16} className="text-[#8b8abc]" />
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">Browse Filters</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-4 block">Status</label>
                  <div className="space-y-1">
                    {['All', 'Installed', 'Available'].map(status => (
                      <button
                        key={status}
                        onClick={() => setStatusFilter(status)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                          statusFilter === status 
                          ? 'bg-[#8b8abc]/10 text-[#8b8abc] border border-[#8b8abc]/20' 
                          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        {status}
                        {statusFilter === status && <CheckCircle2 size={14} />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#8b8abc] to-[#7a79a8] rounded-[2.5rem] p-7 shadow-xl shadow-[#8b8abc]/20 text-white relative overflow-hidden group cursor-pointer border-b-4 border-purple-900/30">
              <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12 group-hover:scale-110 transition-transform">
                <Zap size={100} fill="currentColor" />
              </div>
              <h4 className="text-xl font-black leading-tight mb-3 relative z-10">Build your <br />own App</h4>
              <p className="text-xs font-bold text-white/80 mb-6 relative z-10 leading-relaxed">Use our robust API to connect your internal workflows.</p>
              <button className="bg-[#c5f06c] text-slate-900 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-[#b4dd59] transition-colors relative z-10 shadow-lg border-b-4 border-lime-700/30">
                Developer Hub
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-8 px-4 lg:px-0">
          {/* Categories Nav - True Minimalist Style */}
          <div className="flex items-center justify-between bg-white border border-slate-200 rounded-[2rem] p-3 shadow-sm shadow-slate-200/40">
            <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200/50">
              {categories.slice(0, 6).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-[11px] font-bold capitalize transition-all whitespace-nowrap ${
                    activeCategory === cat 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/50">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Grid size={16} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Grid Display */}
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'} gap-8`}>
            {filteredIntegrations.map((app) => {
              const AppIcon = app.icon;
              return (
                <motion.div
                  layout
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-slate-200 rounded-[2.5rem] p-7 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 hover:border-[#8b8abc]/30 transition-all flex flex-col group cursor-pointer"
                  onClick={() => setSelectedApp(app)}
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#8b8abc]/5 transition-colors">
                      <AppIcon size={32} strokeWidth={2} className="text-[#8b8abc]" />
                    </div>
                  <div className="flex flex-col items-end gap-2">
                    {app.status === 'installed' && (
                      <div className="bg-[#c5f06c]/20 text-[#5a7a1a] px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider flex items-center gap-1.5 border border-[#c5f06c]/30">
                        <CheckCircle2 size={10} />
                        Connected
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                      <Users size={12} />
                      {app.installs}
                    </div>
                  </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#8b8abc] transition-colors">{app.name}</h3>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed line-clamp-2">
                      {app.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <div key={s} className={`w-1.5 h-1.5 rounded-full ${s <= Math.floor(app.rating) ? 'bg-[#c5f06c]' : 'bg-slate-200'}`} />
                      ))}
                      <span className="text-[10px] font-bold text-slate-400 ml-1">{app.rating}</span>
                    </div>
                    <button className="text-[10px] font-black uppercase tracking-widest text-[#8b8abc] group-hover:translate-x-1 transition-transform flex items-center gap-2">
                      Manage <ChevronRight size={14} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredIntegrations.length === 0 && (
            <div className="bg-white border border-slate-200 rounded-[3rem] p-16 text-center shadow-sm">
              <div className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 text-slate-200">
                <Search size={40} />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">No integrations found</h2>
              <p className="text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
                We couldn't find any results for "{searchQuery}". Try searching for something else or browse our categories.
              </p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                className="mt-8 bg-[#8b8abc] text-white px-8 py-3 rounded-2xl font-black uppercase tracking-widest hover:bg-[#7a79a8] transition-all shadow-xl shadow-[#8b8abc]/20"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* App Detail Modal */}
      <AnimatePresence>
        {selectedApp && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedApp(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col relative z-10 border border-white/20"
            >
              {/* Close Button - Floats over content */}
              <button 
                onClick={() => setSelectedApp(null)}
                className="absolute top-8 right-8 z-[30] w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-xl border border-slate-200 text-slate-900 rounded-2xl flex items-center justify-center shadow-xl transition-all hover:rotate-90 hover:scale-110 active:scale-95"
              >
                <X size={22} strokeWidth={2.5} />
              </button>

              <div className="flex-1 overflow-y-auto custom-scrollbar">
                {/* Modal Header Section */}
                <div className="relative p-12 lg:p-16 border-b border-slate-100 overflow-hidden">
                  {/* Decorative background for header */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#8b8abc]/10 to-transparent skew-x-12 translate-x-20 pointer-events-none" />
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 1px 1px, #8b8abc 1px, transparent 0)',
                      backgroundSize: '32px 32px'
                    }}
                  />

                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 relative z-10 text-center lg:text-left">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white border border-slate-100 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-[#8b8abc]/20 group-hover:scale-105 transition-transform shrink-0">
                      {(() => {
                        const ModalIcon = selectedApp.icon;
                        return <ModalIcon size={72} strokeWidth={1.5} className="text-[#8b8abc]" />;
                      })()}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                        <span className="bg-[#8b8abc]/10 text-[#8b8abc] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#8b8abc]/20">
                          {selectedApp.category}
                        </span>
                        {selectedApp.status === 'installed' && (
                          <span className="bg-[#c5f06c] text-[#5a7a1a] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#c5f06c] shadow-lg shadow-[#c5f06c]/30">
                            Active Integration
                          </span>
                        )}
                      </div>
                      <h2 className="text-5xl font-black text-slate-900 mb-3 tracking-tight">{selectedApp.name}</h2>
                      <div className="flex items-center gap-6 text-slate-500 font-bold text-sm">
                        <span className="flex items-center gap-2">
                          <Users size={16} className="text-[#8b8abc]" /> {selectedApp.installs} installs
                        </span>
                        <span className="flex items-center gap-2">
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(s => <div key={s} className={`w-1.5 h-1.5 rounded-full ${s <= 4 ? 'bg-[#c5f06c]' : 'bg-slate-200'}`} />)}
                          </div>
                          {selectedApp.rating} Rating
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-3 gap-14">
                  <div className="lg:col-span-2 space-y-10">
                    <section>
                      <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                        <Info size={20} className="text-[#8b8abc]" />
                        About {selectedApp.name}
                      </h3>
                      <p className="text-slate-600 font-medium text-lg leading-relaxed">
                        {selectedApp.description} Standardizing team communication by bringing your favorite tools directly into your BitStream workspace. Automate repetitive tasks and keep everyone in the loop with real-time updates.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                        <Sparkles size={20} className="text-[#8b8abc]" />
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['Real-time notifications', 'Automated workflows', 'Direct link sharing', 'Unified search integration'].map(feature => (
                          <div key={feature} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <div className="w-8 h-8 bg-[#c5f06c] rounded-lg flex items-center justify-center shadow-md">
                              <Check size={16} className="text-slate-900" />
                            </div>
                            <span className="text-sm font-bold text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8">
                      <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Action Hub</h4>
                      {selectedApp.status === 'installed' ? (
                        <div className="space-y-4">
                          <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl">
                            Configure Settings
                          </button>
                          <button className="w-full bg-white border border-rose-100 text-rose-500 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-rose-50 transition-all">
                            Disconnect
                          </button>
                        </div>
                      ) : (
                        <button className="w-full bg-gradient-to-br from-[#8b8abc] to-[#7a79a8] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-2xl transition-all shadow-xl border-b-4 border-purple-900/20 active:border-b-0">
                          Add to Workspace
                        </button>
                      )}
                    </div>

                    <div className="px-8 space-y-6">
                      <div>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Permissions</h4>
                        <div className="space-y-2">
                          {['Read messages', 'Post in channels', 'Access files'].map(p => (
                            <div key={p} className="flex items-center gap-2 text-xs font-bold text-slate-600">
                              <Shield size={12} className="text-[#8b8abc]" /> {p}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntegrationsPage;
