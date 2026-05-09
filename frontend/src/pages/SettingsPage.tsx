import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Bell, Shield, Video, Palette, Globe, KeyRound,
  Smartphone, Monitor, Volume2, Mic, Camera, Check, Upload,
  ChevronRight, LogOut, Trash2, Eye, EyeOff, Lock, Link2
} from 'lucide-react';

// --- Toggle ---
const Toggle = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
  <button onClick={onChange}
    className={`relative w-12 h-6 rounded-full transition-all duration-300 shrink-0 ${enabled ? 'bg-gradient-to-r from-[#8b8abc] to-[#9c9bcf]' : 'bg-slate-200'}`}>
    <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-300 ${enabled ? 'left-6' : 'left-0.5'}`} />
    {enabled && <span className="absolute right-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#c5f06c] rounded-full" />}
  </button>
);

// --- Setting Row ---
const SettingRow = ({ icon: Icon, label, desc, type = 'toggle', enabled, onChange, children }: any) => (
  <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50/70 hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
    <div className="flex items-center gap-3 min-w-0">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#8b8abc]/10 to-[#9c9bcf]/5 border border-[#8b8abc]/15 flex items-center justify-center shrink-0 shadow-sm group-hover:from-[#8b8abc]/15 transition-all">
        <Icon size={16} className="text-[#8b8abc]" />
      </div>
      <div className="min-w-0">
        <p className="font-bold text-sm text-slate-800 truncate">{label}</p>
        {desc && <p className="text-[11px] font-semibold text-slate-400 mt-0.5 truncate">{desc}</p>}
      </div>
    </div>
    {type === 'toggle' && <Toggle enabled={enabled} onChange={onChange} />}
    {type === 'link' && <ChevronRight size={16} className="text-slate-300 group-hover:text-[#8b8abc] transition-colors shrink-0" />}
    {children}
  </div>
);

// --- Section ---
const Section = ({ title, children, accent = '#8b8abc' }: { title: string; children: React.ReactNode; accent?: string }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-3 px-1">
      <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{title}</p>
    </div>
    <div className="space-y-2">{children}</div>
  </div>
);

// --- Input ---
const Input = ({ label, ...props }: any) => (
  <div>
    <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">{label}</label>
    <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#8b8abc]/30 focus:border-[#8b8abc]/40 transition-all" {...props} />
  </div>
);

// --- Save Button ---
const SaveBtn = ({ label = 'Save Changes' }: { label?: string }) => (
  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
    className="flex items-center gap-2 bg-[#c5f06c] text-[#1a1a1a] font-black text-sm px-6 py-3 rounded-xl shadow-md shadow-lime-500/20 hover:bg-[#b8e05a] transition-all border-b-2 border-[#a3c959] active:border-b-0">
    <Check size={15} strokeWidth={3} /> {label}
  </motion.button>
);

// ============ CONTENT PANELS ============

const ProfilePanel = () => (
  <div className="space-y-8">
    <div>
      <h2 className="font-black text-2xl text-slate-900">Profile</h2>
      <p className="text-sm font-semibold text-slate-400 mt-1">Manage how you appear across BitStream.</p>
    </div>
    <div className="flex items-center gap-6 p-5 bg-slate-50 rounded-2xl border border-slate-100">
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8b8abc] to-[#9c9bcf] flex items-center justify-center shrink-0 shadow-lg shadow-purple-900/15">
        <span className="font-black text-white text-2xl">AC</span>
      </div>
      <div>
        <p className="font-black text-slate-800 text-lg">Alex Carter</p>
        <p className="text-sm font-semibold text-slate-400">Product Designer · BitStream Team</p>
        <button className="mt-2 flex items-center gap-1.5 text-xs font-black text-[#8b8abc] hover:text-[#7a79a8] transition-colors">
          <Upload size={12} strokeWidth={3} /> Change photo
        </button>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <Input label="First Name" defaultValue="Alex" />
      <Input label="Last Name" defaultValue="Carter" />
    </div>
    <Input label="Email" type="email" defaultValue="alex@bitstream.app" />
    <Input label="Job Title" defaultValue="Product Designer" />
    <div>
      <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Bio</label>
      <textarea rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#8b8abc]/30 focus:border-[#8b8abc]/40 transition-all resize-none" defaultValue="Building the future of collaboration at BitStream." />
    </div>
    <div className="flex justify-end pt-2"><SaveBtn /></div>
  </div>
);

const NotificationsPanel = () => {
  const [s, setS] = useState({ dm: true, mentions: true, channels: false, meetings: true, email: true, push: false, sounds: true, digest: false });
  const toggle = (k: keyof typeof s) => setS(p => ({ ...p, [k]: !p[k] }));
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-black text-2xl text-slate-900">Notifications</h2>
        <p className="text-sm font-semibold text-slate-400 mt-1">Control what alerts you receive and how.</p>
      </div>
      <Section title="Messages" accent="#f06c9b">
        <SettingRow icon={User} label="Direct Messages" desc="Notify on new DMs" type="toggle" enabled={s.dm} onChange={() => toggle('dm')} />
        <SettingRow icon={Bell} label="Mentions & Replies" desc="When someone @mentions you" type="toggle" enabled={s.mentions} onChange={() => toggle('mentions')} />
        <SettingRow icon={Globe} label="Channel Activity" desc="New messages in joined channels" type="toggle" enabled={s.channels} onChange={() => toggle('channels')} />
      </Section>
      <Section title="Meetings" accent="#8b8abc">
        <SettingRow icon={Video} label="Meeting Invites" desc="Calendar invites and reminders" type="toggle" enabled={s.meetings} onChange={() => toggle('meetings')} />
      </Section>
      <Section title="Delivery" accent="#c5f06c">
        <SettingRow icon={Globe} label="Email Notifications" desc="Receive summaries via email" type="toggle" enabled={s.email} onChange={() => toggle('email')} />
        <SettingRow icon={Smartphone} label="Push Notifications" desc="On your mobile device" type="toggle" enabled={s.push} onChange={() => toggle('push')} />
        <SettingRow icon={Volume2} label="Notification Sounds" desc="Play audio for new messages" type="toggle" enabled={s.sounds} onChange={() => toggle('sounds')} />
        <SettingRow icon={Bell} label="Weekly Digest" desc="Workspace activity summary" type="toggle" enabled={s.digest} onChange={() => toggle('digest')} />
      </Section>
      <div className="flex justify-end"><SaveBtn label="Save Preferences" /></div>
    </div>
  );
};

const AudioVideoPanel = () => {
  const [s, setS] = useState({ hd: true, noise: true, echo: true, mirror: false, blur: false });
  const toggle = (k: keyof typeof s) => setS(p => ({ ...p, [k]: !p[k] }));
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-black text-2xl text-slate-900">Audio & Video</h2>
        <p className="text-sm font-semibold text-slate-400 mt-1">Configure your camera and microphone preferences.</p>
      </div>
      <Section title="Camera" accent="#f06c9b">
        <SettingRow icon={Camera} label="HD Video" desc="Stream at 1080p when available" type="toggle" enabled={s.hd} onChange={() => toggle('hd')} />
        <SettingRow icon={Camera} label="Mirror My Video" desc="Flip camera preview horizontally" type="toggle" enabled={s.mirror} onChange={() => toggle('mirror')} />
        <SettingRow icon={Monitor} label="Background Blur" desc="Blur background during calls" type="toggle" enabled={s.blur} onChange={() => toggle('blur')} />
      </Section>
      <Section title="Microphone" accent="#c5f06c">
        <SettingRow icon={Mic} label="Noise Suppression" desc="Filter background noise automatically" type="toggle" enabled={s.noise} onChange={() => toggle('noise')} />
        <SettingRow icon={Volume2} label="Echo Cancellation" desc="Remove audio echo on calls" type="toggle" enabled={s.echo} onChange={() => toggle('echo')} />
      </Section>
      <div>
        <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-3">Input Device</label>
        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#8b8abc]/30 transition-all">
          <option>Default – MacBook Pro Microphone</option>
          <option>External USB Mic</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-3">Output Device</label>
        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#8b8abc]/30 transition-all">
          <option>Default – System Speakers</option>
          <option>Bluetooth Headphones</option>
        </select>
      </div>
      <div className="flex justify-end"><SaveBtn /></div>
    </div>
  );
};

const AppearancePanel = () => {
  const [theme, setTheme] = useState('light');
  const [accent, setAccent] = useState('#8b8abc');
  const accents = ['#8b8abc', '#c5f06c', '#f06c9b', '#f0e66c', '#f09b6c', '#6cb4f0'];
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-black text-2xl text-slate-900">Appearance</h2>
        <p className="text-sm font-semibold text-slate-400 mt-1">Customize the look and feel of BitStream.</p>
      </div>
      <div>
        <p className="text-xs font-black text-slate-500 uppercase tracking-wider mb-3">Theme</p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: 'light', label: 'Light', bg: 'bg-white', border: 'border-slate-200' },
            { id: 'dark', label: 'Dark', bg: 'bg-slate-800', border: 'border-slate-700' },
            { id: 'system', label: 'System', bg: 'bg-gradient-to-br from-white to-slate-700', border: 'border-slate-200' },
          ].map(t => (
            <button key={t.id} onClick={() => setTheme(t.id)}
              className={`p-4 rounded-2xl border-2 transition-all text-center ${theme === t.id ? 'border-[#8b8abc] shadow-md shadow-purple-900/10' : 'border-slate-100 hover:border-slate-200'}`}>
              <div className={`w-full h-12 rounded-lg ${t.bg} border ${t.border} mb-2`} />
              <p className="text-xs font-black text-slate-600">{t.label}</p>
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-black text-slate-500 uppercase tracking-wider mb-3">Accent Color</p>
        <div className="flex gap-3">
          {accents.map(c => (
            <button key={c} onClick={() => setAccent(c)}
              style={{ background: c }}
              className={`w-9 h-9 rounded-xl transition-all shadow-sm ${accent === c ? 'ring-2 ring-offset-2 ring-[#8b8abc] scale-110' : 'hover:scale-110'}`} />
          ))}
        </div>
      </div>
      <div>
        <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-3">Font Size</label>
        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#8b8abc]/30 transition-all">
          <option>Default (14px)</option>
          <option>Compact (12px)</option>
          <option>Large (16px)</option>
        </select>
      </div>
      <div className="flex justify-end"><SaveBtn /></div>
    </div>
  );
};

const SecurityPanel = () => {
  const [show, setShow] = useState(false);
  const [s, setS] = useState({ twoFactor: true, loginAlerts: true, sessions: false });
  const toggle = (k: keyof typeof s) => setS(p => ({ ...p, [k]: !p[k] }));
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-black text-2xl text-slate-900">Security</h2>
        <p className="text-sm font-semibold text-slate-400 mt-1">Keep your account safe and secure.</p>
      </div>
      <Section title="Authentication">
        <SettingRow icon={Lock} label="Two-Factor Authentication" desc="Add an extra layer of security" type="toggle" enabled={s.twoFactor} onChange={() => toggle('twoFactor')} />
        <SettingRow icon={Bell} label="Login Alerts" desc="Notify on new sign-ins" type="toggle" enabled={s.loginAlerts} onChange={() => toggle('loginAlerts')} />
        <SettingRow icon={Monitor} label="Show Active Sessions" desc="View all logged-in devices" type="toggle" enabled={s.sessions} onChange={() => toggle('sessions')} />
      </Section>
      <Section title="Password">
        <div className="space-y-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <Input label="Current Password" type={show ? 'text' : 'password'} placeholder="••••••••" />
          <Input label="New Password" type={show ? 'text' : 'password'} placeholder="••••••••" />
          <Input label="Confirm Password" type={show ? 'text' : 'password'} placeholder="••••••••" />
          <button onClick={() => setShow(s => !s)} className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-slate-700 transition-colors">
            {show ? <EyeOff size={13} /> : <Eye size={13} />}{show ? 'Hide' : 'Show'} passwords
          </button>
        </div>
      </Section>
      <Section title="Connected Accounts">
        <SettingRow icon={Link2} label="Google" desc="Connected as alex@gmail.com" type="link" />
        <SettingRow icon={Link2} label="GitHub" desc="Not connected" type="link" />
      </Section>
      <div className="flex items-center justify-between pt-2">
        <button className="flex items-center gap-2 text-red-500 font-bold text-sm hover:text-red-700 transition-colors">
          <LogOut size={15} /> Sign out of all devices
        </button>
        <SaveBtn label="Update Password" />
      </div>
    </div>
  );
};

const WorkspacePanel = () => {
  const [s, setS] = useState({ invites: true, public: false, analytics: true });
  const toggle = (k: keyof typeof s) => setS(p => ({ ...p, [k]: !p[k] }));
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-black text-2xl text-slate-900">Workspace</h2>
        <p className="text-sm font-semibold text-slate-400 mt-1">Manage your team workspace settings.</p>
      </div>
      <div className="p-5 bg-gradient-to-br from-[#8b8abc]/10 to-[#c5f06c]/10 rounded-2xl border border-[#8b8abc]/15">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-[#8b8abc] rounded-2xl flex items-center justify-center shadow-lg shadow-purple-900/15">
            <span className="font-black text-white text-xl">B</span>
          </div>
          <div>
            <p className="font-black text-slate-900 text-lg">BitStream HQ</p>
            <p className="text-xs font-semibold text-slate-400">12 members · Pro Plan</p>
          </div>
        </div>
      </div>
      <Input label="Workspace Name" defaultValue="BitStream HQ" />
      <Input label="Workspace URL" defaultValue="bitstream.app/hq" />
      <Section title="Permissions">
        <SettingRow icon={User} label="Allow Member Invites" desc="Members can invite others" type="toggle" enabled={s.invites} onChange={() => toggle('invites')} />
        <SettingRow icon={Globe} label="Public Workspace" desc="Anyone can discover and join" type="toggle" enabled={s.public} onChange={() => toggle('public')} />
        <SettingRow icon={Monitor} label="Usage Analytics" desc="Share anonymous usage data" type="toggle" enabled={s.analytics} onChange={() => toggle('analytics')} />
      </Section>
      <div className="p-4 border border-red-100 bg-red-50/50 rounded-2xl flex items-center justify-between">
        <div>
          <p className="font-black text-sm text-red-600">Delete Workspace</p>
          <p className="text-[11px] font-semibold text-red-400 mt-0.5">This action cannot be undone</p>
        </div>
        <button className="flex items-center gap-2 bg-red-500 text-white font-bold text-xs px-4 py-2 rounded-xl hover:bg-red-600 transition-all">
          <Trash2 size={13} /> Delete
        </button>
      </div>
      <div className="flex justify-end"><SaveBtn /></div>
    </div>
  );
};

// ============ MAIN PAGE ============

const navGroups = [
  { label: 'Account', items: [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
  ]},
  { label: 'Workspace', items: [
    { id: 'audio-video', label: 'Audio & Video', icon: Video },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'workspace', label: 'Workspace', icon: Globe },
  ]},
];

const panels: Record<string, React.FC> = {
  profile: ProfilePanel,
  notifications: NotificationsPanel,
  'audio-video': AudioVideoPanel,
  appearance: AppearancePanel,
  security: SecurityPanel,
  workspace: WorkspacePanel,
};

const SettingsPage = () => {
  const [active, setActive] = useState('profile');
  const Panel = panels[active];

  return (
    <div className="flex-1 flex overflow-hidden bg-[#F1F5F9] gap-5 p-5">

      {/* Settings Navigation Sidebar */}
      <div className="w-64 flex flex-col bg-white/70 backdrop-blur-md border-r border-slate-200/50 shrink-0 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#8b8abc]/5 to-transparent pointer-events-none" />
        <div className="p-5 pb-4 border-b border-slate-100">
          <p className="font-black text-slate-900 text-base">Settings</p>
          <p className="text-[11px] font-semibold text-slate-400 mt-0.5">BitStream HQ</p>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-4 custom-scrollbar">
          {navGroups.map(group => (
            <div key={group.label}>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 px-3 mb-2">{group.label}</p>
              {group.items.map(item => {
                const iconColors: Record<string, string> = {
                  Profile: 'text-[#f06c9b]',
                  Notifications: 'text-[#8b8abc]',
                  Security: 'text-[#f0e66c]',
                  'Appearance': 'text-[#c5f06c]',
                  'Audio & Video': 'text-[#8b8abc]'
                };
                return (
                  <button key={item.id} onClick={() => setActive(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${active === item.id ? 'bg-white shadow-sm text-slate-900 border border-slate-200/50' : 'text-slate-500 hover:bg-white/50 hover:text-slate-700'}`}>
                    <item.icon size={18} strokeWidth={2.5} className={active === item.id ? iconColors[item.label] || 'text-[#8b8abc]' : 'text-slate-400'} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-slate-100">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-500 hover:bg-red-50 font-bold text-sm transition-all">
            <LogOut size={15} strokeWidth={2.5} /> Sign Out
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-br from-white via-slate-50/50 to-purple-50/20 rounded-[2rem] border border-slate-100 shadow-sm custom-scrollbar">
        <div className="max-w-2xl mx-auto px-8 py-8">
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}>
              <Panel />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
