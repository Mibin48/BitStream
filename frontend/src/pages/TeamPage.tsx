import { useState } from 'react';
import {
  Users, UserPlus, Shield, Mail, History, Settings,
  Search, MoreVertical, MessageSquare, Video, Clock,
  CheckCircle2, Plus, Trash2, X, Download, UserCog,
  Lock, AlertCircle, UserCheck, Globe, Zap, Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// --- Types ---
type MemberStatus = 'online' | 'offline' | 'away';
type Role = 'Admin' | 'Member' | 'Guest';

interface Member {
  id: number;
  name: string;
  role: string;
  roleType: Role;
  dept: string;
  status: MemberStatus;
  avatar: string;
  color: string;
  email: string;
  joined: string;
  bio: string;
  workload: number[];
}

interface RoleDefinition {
  id: string;
  name: Role;
  permissions: string[];
  color: string;
  memberCount: number;
}

interface Invitation {
  id: number;
  email: string;
  invitedBy: string;
  dateSent: string;
  status: 'pending' | 'expired';
}

interface ActivityItem {
  id: number;
  user: string;
  action: string;
  target: string;
  timestamp: string;
  icon: any;
}

// --- Components ---
const WorkloadSparkline = ({ data, color }: { data: number[], color: string }) => {
  const max = Math.max(...data);
  const height = 24;
  const width = 60;
  const step = width / (data.length - 1);

  const points = data.map((val, i) => {
    const x = i * step;
    const y = height - (val / max) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="flex flex-col gap-1 items-end">
      <svg width={width} height={height} className="overflow-visible">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
          className={`${color.replace('bg-', 'text-')} opacity-50`}
        />
      </svg>
      <span className="text-[7px] font-black text-slate-400 uppercase tracking-tighter">Activity</span>
    </div>
  );
};

// --- Data ---
const members: Member[] = [
  { id: 1, name: 'Sarah Chen', role: 'Product Lead', roleType: 'Admin', dept: 'Product', status: 'online', avatar: 'SC', color: 'bg-[#f06c9b]', email: 'sarah@bitstream.app', joined: 'Jan 12, 2024', bio: 'Obsessed with user experience and dark chocolate.', workload: [40, 70, 45, 90, 65, 80, 95] },
  { id: 2, name: 'Mike Ross', role: 'Senior Engineer', roleType: 'Admin', dept: 'Engineering', status: 'online', avatar: 'MR', color: 'bg-[#8b8abc]', email: 'mike@bitstream.app', joined: 'Feb 05, 2024', bio: 'Rust enthusiast and coffee addict.', workload: [80, 60, 95, 40, 70, 85, 75] },
  { id: 3, name: 'Emma Liu', role: 'UI Designer', roleType: 'Member', dept: 'Design', status: 'away', avatar: 'EL', color: 'bg-[#c5f06c]', email: 'emma@bitstream.app', joined: 'Mar 18, 2024', bio: 'Pixels are my passion.', workload: [30, 40, 35, 50, 45, 60, 55] },
  { id: 4, name: 'Alex Kim', role: 'Backend Dev', roleType: 'Member', dept: 'Engineering', status: 'offline', avatar: 'AK', color: 'bg-[#f0e66c]', email: 'alex@bitstream.app', joined: 'Jan 22, 2024', bio: 'Scaling systems and hiking mountains.', workload: [90, 85, 80, 75, 70, 65, 60] },
  { id: 5, name: 'Jane Doe', role: 'Marketing Lead', roleType: 'Member', dept: 'Marketing', status: 'online', avatar: 'JD', color: 'bg-[#f09b6c]', email: 'jane@bitstream.app', joined: 'Apr 02, 2024', bio: 'Data-driven storyteller.', workload: [20, 30, 25, 40, 35, 50, 45] },
  { id: 6, name: 'David Smith', role: 'Frontend Dev', roleType: 'Guest', dept: 'Engineering', status: 'online', avatar: 'DS', color: 'bg-[#8b8abc]', email: 'david@bitstream.app', joined: 'Feb 14, 2024', bio: 'React & Neobrutalism lover.', workload: [50, 60, 55, 70, 65, 80, 75] },
];

const roles: RoleDefinition[] = [
  { id: '1', name: 'Admin', permissions: ['All Access', 'Billing', 'Member Management', 'Settings'], color: 'bg-purple-100 text-purple-600', memberCount: 2 },
  { id: '2', name: 'Member', permissions: ['Create Channels', 'Invite Members', 'Post Content'], color: 'bg-blue-100 text-blue-600', memberCount: 3 },
  { id: '3', name: 'Guest', permissions: ['View Content', 'Limited Messaging'], color: 'bg-orange-100 text-orange-600', memberCount: 1 },
];

const invitations: Invitation[] = [
  { id: 1, email: 'robert.fox@example.com', invitedBy: 'Sarah Chen', dateSent: 'May 08, 2024', status: 'pending' },
  { id: 2, email: 'jenny.wilson@example.com', invitedBy: 'Mike Ross', dateSent: 'May 05, 2024', status: 'pending' },
  { id: 3, email: 'guy.hawkins@example.com', invitedBy: 'Sarah Chen', dateSent: 'Apr 28, 2024', status: 'expired' },
];

const activityLog: ActivityItem[] = [
  { id: 1, user: 'Sarah Chen', action: 'changed role of', target: 'Emma Liu', timestamp: '2 hours ago', icon: UserCog },
  { id: 2, user: 'Mike Ross', action: 'joined the team', target: '', timestamp: '5 hours ago', icon: UserPlus },
  { id: 3, user: 'System', action: 'updated permissions for', target: 'Guest Role', timestamp: 'Yesterday', icon: Lock },
  { id: 4, user: 'Alex Kim', action: 'invited', target: 'Robert Fox', timestamp: '2 days ago', icon: Mail },
];

const departments = ['All', 'Product', 'Engineering', 'Design', 'Marketing'];

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState<'members' | 'roles' | 'invites' | 'activity' | 'settings'>('members');
  const [activeDept, setActiveDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showInviteModal, setShowInviteModal] = useState(false);
  const navigate = useNavigate();

  const filteredMembers = members.filter(m => {
    const matchesDept = activeDept === 'All' || m.dept === activeDept;
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const stats = [
    { label: 'Total Members', val: members.length.toString(), color: 'bg-[#8b8abc]', icon: Users, sub: 'Growing Team' },
    { label: 'Online Now', val: members.filter(m => m.status === 'online').length.toString(), color: 'bg-[#c5f06c]', icon: Zap, sub: 'Highly Active' },
    { label: 'Team Pulse', val: '10am - 2pm', color: 'bg-[#f06c9b]', icon: History, sub: 'Peak Collaboration' },
    { label: 'Roles', val: roles.length.toString(), color: 'bg-[#f0e66c]', icon: Shield, sub: 'Access Layers' },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-y-auto px-8 pt-4 pb-8 gap-6 relative custom-scrollbar">

      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-64 h-64 bg-pink-100/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 shrink-0">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-[#8b8abc] rounded-[2rem] flex items-center justify-center shadow-2xl shadow-purple-900/20 border-b-4 border-purple-900/40">
            <Users size={32} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Team Hub</h1>
            <p className="text-slate-500 font-bold text-base tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c5f06c]" />
              Manage 48 workspace collaborators
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white/60 backdrop-blur-md text-slate-700 font-black text-sm px-6 py-4 rounded-2xl shadow-sm border border-white/80 hover:bg-white transition-all"
          >
            <Download size={18} />
            Export Data
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowInviteModal(true)}
            className="flex items-center gap-3 bg-[#c5f06c] text-[#1a1a1a] font-black text-sm px-7 py-4 rounded-2xl shadow-xl shadow-lime-500/20 border-b-4 border-[#a3c959] active:border-b-0 transition-all"
          >
            <UserPlus size={20} strokeWidth={2.5} />
            Invite Members
          </motion.button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10 shrink-0">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white/60 backdrop-blur-md p-6 rounded-[2.5rem] border border-white shadow-sm flex items-center gap-5 group hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300">
            <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center text-white shadow-lg border-b-2 border-black/10`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{stat.label}</p>
              <p className="text-2xl font-black text-slate-900 leading-none tracking-tight">{stat.val}</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2 flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${stat.color}`} />
                {stat.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white/40 backdrop-blur-xl rounded-[3.5rem] border border-white/60 shadow-2xl shadow-slate-200/50 flex flex-col relative z-10">

        {/* Navigation Tabs */}
        <div className="px-10 pt-8 border-b border-white/40 flex items-center justify-between shrink-0">
          <div className="flex gap-10">
            {[
              { id: 'members', label: 'Members', icon: Users },
              { id: 'roles', label: 'Role Management', icon: Shield },
              { id: 'invites', label: 'Pending Invites', icon: Mail },
              { id: 'activity', label: 'Activity Log', icon: History },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2.5 pb-8 text-base font-black transition-all relative ${activeTab === tab.id ? 'text-[#8b8abc]' : 'text-slate-400 hover:text-slate-600'
                  }`}
              >
                <tab.icon size={20} strokeWidth={2.5} />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#8b8abc] rounded-t-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col p-10">
          <AnimatePresence mode="wait">
            {activeTab === 'members' && (
              <motion.div
                key="members"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex-1 flex flex-col gap-8"
              >
                {/* Member Filters */}
                <div className="flex flex-col lg:flex-row gap-6 items-center shrink-0">
                  <div className="flex-1 flex gap-3 overflow-x-auto no-scrollbar w-full pb-2">
                    {departments.map(dept => (
                      <button
                        key={dept}
                        onClick={() => setActiveDept(dept)}
                        className={`px-7 py-3.5 rounded-2xl text-xs font-black transition-all whitespace-nowrap border-2 ${activeDept === dept
                            ? 'bg-[#8b8abc] border-[#8b8abc] text-white shadow-lg shadow-purple-900/20 scale-105'
                            : 'bg-white/60 border-transparent text-slate-500 hover:bg-white hover:border-slate-100 shadow-sm'
                          }`}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>

                  <div className="w-full lg:w-96 relative group">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#8b8abc] transition-colors" size={20} strokeWidth={3} />
                    <input
                      type="text"
                      placeholder="Search for a teammate..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-14 pr-6 py-4 bg-white/60 backdrop-blur-sm border-2 border-transparent rounded-[1.75rem] text-sm font-bold focus:outline-none focus:border-[#8b8abc] focus:bg-white transition-all shadow-sm focus:ring-8 focus:ring-purple-500/5"
                    />
                  </div>
                </div>

                {/* Members List/Grid */}
                <div className="pb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-10">
                    {filteredMembers.map(member => (
                      <motion.div
                        key={member.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="bg-white rounded-[3rem] border border-slate-100 p-8 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col"
                      >
                        {/* Status Glow */}
                        <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-10 pointer-events-none ${member.status === 'online' ? 'bg-[#c5f06c]' :
                            member.status === 'away' ? 'bg-[#f0e66c]' : 'bg-slate-300'
                          }`} />

                        <div className="flex justify-between items-start mb-8 relative z-10">
                          <div className="relative">
                            <motion.div
                              whileHover={{ rotate: 10, scale: 1.1 }}
                              className={`w-20 h-20 ${member.color} rounded-[2rem] flex items-center justify-center font-black text-3xl text-white shadow-xl border-4 border-white`}
                            >
                              {member.avatar}
                            </motion.div>
                            <div className={`absolute -bottom-2 -right-2 w-7 h-7 rounded-full border-[6px] border-white shadow-md ${member.status === 'online' ? 'bg-[#c5f06c]' :
                                member.status === 'away' ? 'bg-[#f0e66c]' : 'bg-slate-300'
                              }`} />
                          </div>
                          <div className="flex items-center gap-4">
                            <WorkloadSparkline data={member.workload} color={member.color} />
                            <button className="w-11 h-11 rounded-2xl hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#f06c9b] transition-colors border border-transparent hover:border-slate-100">
                              <MoreVertical size={20} />
                            </button>
                          </div>
                        </div>

                        <div className="mb-6 relative z-10">
                          <h3 className="font-black text-slate-900 text-xl tracking-tight truncate mb-1">{member.name}</h3>
                          <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">{member.role}</p>
                          <div className="flex items-center gap-3">
                            <span className={`text-xs font-black px-3 py-1.5 rounded-xl uppercase tracking-wider ${member.roleType === 'Admin' ? 'bg-purple-100 text-purple-600' :
                                member.roleType === 'Member' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                              }`}>{member.roleType}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                            <span className="text-xs font-black text-slate-400 uppercase tracking-wider bg-slate-50 px-3 py-1.5 rounded-xl">{member.dept}</span>
                          </div>
                        </div>

                        <div className="space-y-3 mb-8 relative z-10">
                          <div className="flex items-center gap-3 text-slate-500 text-sm font-bold">
                            <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400"><Mail size={14} /></div>
                            {member.email}
                          </div>
                          <div className="flex items-center gap-3 text-slate-500 text-sm font-bold">
                            <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400"><Clock size={14} /></div>
                            Joined {member.joined}
                          </div>
                        </div>

                        <p className="text-sm font-bold text-slate-400 leading-relaxed line-clamp-2 italic mb-8 relative z-10 bg-slate-50/50 p-4 rounded-2xl border border-dashed border-slate-200">
                          "{member.bio}"
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-auto relative z-10">
                          <button
                            onClick={() => navigate('/messages')}
                            className="flex items-center justify-center gap-2.5 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs hover:bg-[#8b8abc] transition-all shadow-lg shadow-slate-900/10 active:scale-95"
                          >
                            <MessageSquare size={16} strokeWidth={2.5} /> Message
                          </button>
                          <button
                            onClick={() => navigate('/video-call')}
                            className="flex items-center justify-center gap-2.5 py-4 bg-[#c5f06c] text-[#1a1a1a] rounded-2xl font-black text-xs hover:shadow-xl hover:shadow-lime-500/20 transition-all border-b-4 border-[#a3c959] active:border-b-0 active:scale-95"
                          >
                            <Video size={16} strokeWidth={2.5} /> Meet Now
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'roles' && (
              <motion.div
                key="roles"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col gap-8 pb-10"
              >
                <div className="flex items-center justify-between shrink-0">
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Role Definitions</h2>
                    <p className="text-sm font-bold text-slate-500">Configure what members can see and do within the workspace.</p>
                  </div>
                  <button className="flex items-center gap-3 bg-[#8b8abc] text-white font-black text-sm px-6 py-4 rounded-2xl shadow-xl shadow-purple-900/10 border-b-4 border-purple-900 active:border-b-0 transition-all">
                    <Plus size={20} strokeWidth={2.5} /> Add Custom Role
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
                  {roles.map(role => (
                    <div key={role.id} className="bg-white border-2 border-slate-50 rounded-[3.5rem] p-8 shadow-sm flex flex-col gap-8 hover:shadow-2xl transition-all duration-300">
                      <div className="flex justify-between items-center">
                        <div className={`px-5 py-2 rounded-2xl font-black text-[11px] uppercase tracking-widest ${role.color} border-2 border-current/10 shadow-sm`}>
                          {role.name}
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                          <Users size={12} /> {role.memberCount} Active
                        </span>
                      </div>

                      <div className="space-y-6 flex-1">
                        <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] flex items-center gap-2">
                          <Lock size={12} /> Permissions Set
                        </h4>
                        <ul className="space-y-4">
                          {role.permissions.map((p, i) => (
                            <li key={i} className="flex items-center gap-4 text-sm font-bold text-slate-700 bg-slate-50/50 p-3 rounded-2xl border border-slate-100">
                              <CheckCircle2 size={18} className="text-[#c5f06c]" strokeWidth={3} />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-3 pt-6 border-t border-slate-50">
                        <button className="flex-1 py-4 bg-slate-50 hover:bg-slate-100 text-slate-700 font-black text-xs rounded-2xl transition-all border-2 border-slate-100 shadow-sm">
                          Edit Permissions
                        </button>
                        <button className="w-14 h-14 flex items-center justify-center text-slate-400 hover:text-red-500 rounded-2xl hover:bg-red-50 transition-all border-2 border-transparent hover:border-red-100">
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'invites' && (
              <motion.div
                key="invites"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="pb-10"
              >
                <div className="bg-white border-2 border-slate-50 rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/20">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50/80 border-b border-slate-100">
                        <th className="px-10 py-7 text-xs font-black text-slate-400 uppercase tracking-wider">Invited Member</th>
                        <th className="px-10 py-7 text-xs font-black text-slate-400 uppercase tracking-wider">Invited By</th>
                        <th className="px-10 py-7 text-xs font-black text-slate-400 uppercase tracking-wider">Date Sent</th>
                        <th className="px-10 py-7 text-xs font-black text-slate-400 uppercase tracking-wider">Status</th>
                        <th className="px-10 py-7 text-xs font-black text-slate-400 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {invitations.map(invite => (
                        <tr key={invite.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-10 py-7">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600"><Mail size={18} /></div>
                              <p className="text-sm font-bold text-slate-900">{invite.email}</p>
                            </div>
                          </td>
                          <td className="px-10 py-7 text-sm font-bold text-slate-600">{invite.invitedBy}</td>
                          <td className="px-10 py-7 text-sm font-bold text-slate-500">{invite.dateSent}</td>
                          <td className="px-10 py-7">
                            <span className={`px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-sm ${invite.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                              }`}>
                              {invite.status}
                            </span>
                          </td>
                          <td className="px-10 py-7">
                            <div className="flex gap-3">
                              <button className="px-6 py-2.5 bg-slate-900 text-white font-black text-[10px] rounded-xl uppercase tracking-widest transition-all shadow-lg shadow-slate-900/10 hover:bg-[#8b8abc]">Resend</button>
                              <button className="p-2.5 text-slate-400 hover:text-red-500 transition-colors bg-slate-50 rounded-xl border border-slate-100 hover:border-red-100"><X size={18} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === 'activity' && (
              <motion.div
                key="activity"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-4xl mx-auto w-full pb-10"
              >
                <div className="relative space-y-12 before:absolute before:left-[2.75rem] before:top-8 before:bottom-8 before:w-1 before:bg-gradient-to-b before:from-purple-100 before:via-slate-100 before:to-transparent">
                  {activityLog.map((log) => (
                    <div key={log.id} className="relative flex gap-10 items-start">
                      <div className="w-20 h-20 rounded-3xl bg-white border-2 border-slate-100 shadow-xl flex items-center justify-center text-[#8b8abc] z-10 shrink-0 group hover:border-[#8b8abc] transition-all">
                        <log.icon size={28} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 pt-3">
                        <div className="bg-white/60 backdrop-blur-sm rounded-[2.5rem] p-7 border-2 border-slate-50 group hover:border-[#8b8abc]/20 hover:bg-white transition-all shadow-sm hover:shadow-xl">
                          <p className="text-base font-bold text-slate-700 leading-relaxed">
                            <span className="font-black text-slate-900 text-base">{log.user}</span> {log.action} <span className="font-black text-slate-900 text-base">{log.target}</span>
                          </p>
                          <div className="flex items-center gap-3 mt-4">
                            <Clock size={14} className="text-slate-400" />
                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{log.timestamp}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                            <span className="text-[10px] font-black text-[#8b8abc] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-lg">Verified Action</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-4xl mx-auto w-full pb-10"
              >
                <div className="space-y-10">
                  {/* Guest Boundary Controls */}
                  <div className="bg-white/60 backdrop-blur-md border-2 border-slate-50 rounded-[3.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 bg-orange-500 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-orange-900/20 border-b-4 border-orange-900/30">
                        <Globe size={24} strokeWidth={2.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-900 tracking-tight">Guest Boundary Controls</h3>
                        <p className="text-sm font-bold text-slate-400 tracking-wide uppercase">For freelancers & external partners</p>
                      </div>
                    </div>
                    <div className="mt-8 space-y-6">
                      <div className="flex items-center justify-between p-7 bg-orange-50/50 border-2 border-orange-100/50 rounded-[2.5rem] group hover:bg-white hover:border-orange-200 transition-all">
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-500 shadow-sm group-hover:scale-110 transition-transform"><Shield size={20} /></div>
                          <div>
                            <p className="text-base font-black text-slate-900">Channel Restricted Access</p>
                            <p className="text-sm font-bold text-slate-500">Guests only see explicitly assigned channels.</p>
                          </div>
                        </div>
                        <div className="w-14 h-7 bg-orange-500 rounded-full relative cursor-pointer shadow-inner">
                          <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full shadow-lg" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-7 bg-orange-50/50 border-2 border-orange-100/50 rounded-[2.5rem] group hover:bg-white hover:border-orange-200 transition-all">
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-500 shadow-sm group-hover:scale-110 transition-transform"><Clock size={20} /></div>
                          <div>
                            <p className="text-lg font-black text-slate-900">Time-boxed Guest Expiry</p>
                            <p className="text-sm font-bold text-slate-500">Auto-revoke access after project ends.</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-5">
                          <select className="bg-white border-2 border-orange-100 rounded-2xl px-6 py-3 text-xs font-black focus:outline-none appearance-none cursor-pointer shadow-sm hover:border-orange-400 transition-all">
                            <option>30 Days</option>
                            <option>60 Days</option>
                            <option>90 Days</option>
                          </select>
                          <div className="w-14 h-7 bg-slate-200 rounded-full relative cursor-pointer shadow-inner">
                            <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-lg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-md border-2 border-slate-50 rounded-[3.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight mb-8 flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white"><Lock size={20} /></div>
                      Access & Security
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border-2 border-transparent hover:border-purple-100 hover:bg-white transition-all">
                        <div>
                          <p className="text-base font-black text-slate-900">Join Approval Required</p>
                          <p className="text-sm font-bold text-slate-500">Admins must approve new member requests.</p>
                        </div>
                        <div className="w-14 h-7 bg-[#c5f06c] rounded-full relative cursor-pointer shadow-inner">
                          <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full shadow-lg" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border-2 border-transparent hover:border-purple-100 hover:bg-white transition-all">
                        <div>
                          <p className="text-lg font-black text-slate-900">Default Member Role</p>
                          <p className="text-sm font-bold text-slate-500">Automatic role assignment for new users.</p>
                        </div>
                        <select className="bg-white border-2 border-slate-100 rounded-2xl px-6 py-3 text-xs font-black focus:outline-none hover:border-[#8b8abc] transition-all">
                          <option>Member</option>
                          <option>Guest</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-md border-2 border-slate-50 rounded-[3.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-8 flex items-center gap-4">
                      <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center text-white"><UserCheck size={20} /></div>
                      Workspace Health
                    </h3>
                    <div className="space-y-8">
                      <div>
                        <div className="flex justify-between items-end mb-4 px-2">
                          <div>
                            <p className="text-base font-black text-slate-900">Team Size Capacity</p>
                            <p className="text-sm font-bold text-slate-500">Active collaborators vs limit</p>
                          </div>
                          <p className="text-lg font-black text-[#8b8abc]">48 <span className="text-slate-300 font-bold">/ 100</span></p>
                        </div>
                        <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden p-1 shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '48%' }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-[#8b8abc] to-purple-400 rounded-full shadow-[0_0_15px_rgba(139,138,188,0.5)]"
                          />
                        </div>
                        <div className="mt-4 p-4 bg-purple-50 rounded-2xl border border-dashed border-purple-200 flex items-center gap-3">
                          <AlertCircle size={14} className="text-[#8b8abc]" />
                          <p className="text-xs font-black text-[#8b8abc] uppercase tracking-widest">Upgrade to Pro for unlimited team slots</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-5 pt-4">
                    <button className="px-10 py-5 bg-white text-slate-500 font-black text-sm rounded-[1.75rem] border-2 border-slate-100 hover:bg-slate-50 transition-all shadow-sm">Discard</button>
                    <button className="px-12 py-5 bg-[#8b8abc] text-white font-black text-sm rounded-[1.75rem] shadow-2xl shadow-purple-900/20 border-b-4 border-purple-900 active:border-b-0 transition-all transform hover:-translate-y-1">Save Changes</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Invite Modal Overlay */}
      <AnimatePresence>
        {showInviteModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowInviteModal(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-xl bg-white rounded-[4rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden border-t-[12px] border-[#c5f06c]"
            >
              <div className="p-12">
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Add Collaborator</h2>
                    <p className="text-sm font-bold text-slate-500 mt-2">Grow your workspace with new talent.</p>
                  </div>
                  <button onClick={() => setShowInviteModal(false)} className="w-14 h-14 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all">
                    <X size={32} />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-3 px-2">Work Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#8b8abc] transition-colors" size={24} />
                      <input
                        type="email"
                        placeholder="teammate@company.com"
                        className="w-full pl-16 pr-8 py-5 bg-slate-50 border-2 border-transparent rounded-[2rem] text-base font-bold focus:outline-none focus:border-[#8b8abc] focus:bg-white transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-3 px-2">Access Role</label>
                      <div className="relative">
                        <select className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent rounded-[2rem] text-base font-bold focus:outline-none focus:border-[#8b8abc] focus:bg-white transition-all shadow-inner appearance-none cursor-pointer">
                          <option>Member</option>
                          <option>Admin</option>
                          <option>Guest</option>
                        </select>
                        <Shield className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={20} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-3 px-2">Department</label>
                      <div className="relative">
                        <select className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent rounded-[2rem] text-base font-bold focus:outline-none focus:border-[#8b8abc] focus:bg-white transition-all shadow-inner appearance-none cursor-pointer">
                          <option>Engineering</option>
                          <option>Design</option>
                          <option>Product</option>
                          <option>Marketing</option>
                        </select>
                        <Filter className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-purple-50/50 rounded-[3rem] border-2 border-dashed border-purple-100 flex items-center gap-6">
                    <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-[#8b8abc] shadow-xl border-b-4 border-purple-100 shrink-0">
                      <Zap size={28} strokeWidth={2.5} className="animate-pulse" />
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1">Instant Activation</p>
                      <p className="text-sm font-bold text-[#8b8abc]">New members will receive a secure magic link to join your workspace instantly.</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-12 py-6 bg-slate-900 text-white font-black text-base rounded-[2.5rem] shadow-2xl shadow-slate-900/20 border-b-8 border-black active:border-b-0 transition-all flex items-center justify-center gap-3"
                >
                  <Mail size={24} strokeWidth={2.5} /> Send Invitation
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </div>
  );
};

export default TeamPage;
