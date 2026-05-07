import { useState } from 'react';
import { User, Bell, Shield, CreditCard, Layout, Upload, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  const tabs = [
    { name: 'Profile', icon: User },
    { name: 'Notifications', icon: Bell },
    { name: 'Security', icon: Shield },
    { name: 'Billing', icon: CreditCard },
    { name: 'Workspace', icon: Layout }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-black selection:bg-purple-500 selection:text-white">
      {/* We could use Navbar, but typically settings might be inside the app or have a simpler header. 
          Let's use a simple back button header here for app-like feel. */}
      <div className="bg-white border-b-[3px] border-black px-6 py-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="w-10 h-10 bg-white border-[2.5px] border-black rounded-lg flex items-center justify-center font-black hover:bg-gray-50 transition-colors shadow-[2px_2px_0_0_#0F172A]">
            <ArrowLeft strokeWidth={4} />
          </Link>
          <h1 className="font-black text-2xl">Settings</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar Nav */}
        <div className="w-full md:w-64 bg-white border-[3px] border-black rounded-2xl p-4 shrink-0"
             style={{ boxShadow: '8px 8px 0 0 #0F172A' }}>
          <div className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                  activeTab === tab.name 
                    ? 'bg-purple-500 text-white border-[2.5px] border-black shadow-[2px_2px_0_0_#0F172A]' 
                    : 'text-gray-600 hover:bg-gray-100 border-[2.5px] border-transparent hover:border-black'
                }`}
              >
                <tab.icon size={20} strokeWidth={2.5} />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full bg-white border-[3px] border-black rounded-2xl p-8 sm:p-12"
             style={{ boxShadow: '12px 12px 0 0 #0F172A' }}>
          
          {activeTab === 'Profile' && (
            <div className="space-y-10">
              <div>
                <h2 className="font-black text-3xl mb-2">Public Profile</h2>
                <p className="text-gray-600 font-medium">Manage how you appear to others in your workspace.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-32 h-32 bg-green-400 border-[3px] border-black rounded-2xl flex items-center justify-center relative shadow-[6px_6px_0_0_#0F172A] overflow-hidden">
                    <span className="text-white font-black text-5xl">JD</span>
                  </div>
                  <button className="bg-white border-[2.5px] border-black px-4 py-2 rounded-xl font-bold text-sm shadow-[2px_2px_0_0_#0F172A] hover:-translate-y-0.5 transition-transform flex items-center gap-2">
                    <Upload size={16} /> Upload new
                  </button>
                </div>

                <div className="flex-1 space-y-6 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-bold text-sm mb-2">First Name</label>
                      <input type="text" defaultValue="John" className="w-full px-4 py-3 border-[3px] border-black rounded-xl font-medium focus:outline-none focus:ring-4 focus:ring-purple-200 shadow-[4px_4px_0_0_#0F172A]" />
                    </div>
                    <div>
                      <label className="block font-bold text-sm mb-2">Last Name</label>
                      <input type="text" defaultValue="Doe" className="w-full px-4 py-3 border-[3px] border-black rounded-xl font-medium focus:outline-none focus:ring-4 focus:ring-purple-200 shadow-[4px_4px_0_0_#0F172A]" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-sm mb-2">Job Title</label>
                    <input type="text" defaultValue="Senior Engineer" className="w-full px-4 py-3 border-[3px] border-black rounded-xl font-medium focus:outline-none focus:ring-4 focus:ring-purple-200 shadow-[4px_4px_0_0_#0F172A]" />
                  </div>

                  <div>
                    <label className="block font-bold text-sm mb-2">Bio</label>
                    <textarea rows={4} className="w-full px-4 py-3 border-[3px] border-black rounded-xl font-medium focus:outline-none focus:ring-4 focus:ring-purple-200 shadow-[4px_4px_0_0_#0F172A] resize-none" defaultValue="Building the future of collaboration."></textarea>
                  </div>
                </div>
              </div>

              <div className="border-t-[3px] border-black pt-8 flex justify-end">
                <button className="bg-green-500 border-[3px] border-black px-8 py-3.5 rounded-xl font-black text-white shadow-[4px_4px_0_0_#0F172A] hover:-translate-y-1 transition-transform flex items-center gap-2">
                  <Check size={20} strokeWidth={3} /> Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'Notifications' && (
            <div className="space-y-10">
              <div>
                <h2 className="font-black text-3xl mb-2">Notification Preferences</h2>
                <p className="text-gray-600 font-medium">Choose what we should notify you about.</p>
              </div>

              <div className="space-y-6">
                {[
                  { title: 'Direct Messages', desc: 'When someone mentions you or sends a direct message.', enabled: true },
                  { title: 'Channel Messages', desc: 'When there is activity in channels you have joined.', enabled: false },
                  { title: 'Meeting Invites', desc: 'When someone schedules a meeting with you.', enabled: true },
                  { title: 'Workspace Updates', desc: 'Weekly digest of workspace activity.', enabled: true }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 border-[3px] border-black rounded-xl p-5 flex items-center justify-between shadow-[4px_4px_0_0_#0F172A]">
                    <div className="pr-4">
                      <h3 className="font-black text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 font-medium">{item.desc}</p>
                    </div>
                    {/* Toggle Switch */}
                    <button className={`w-14 h-8 border-[2.5px] border-black rounded-full relative transition-colors shrink-0 ${item.enabled ? 'bg-green-500' : 'bg-gray-300'}`}>
                      <span className={`absolute top-0.5 w-5 h-5 bg-white border-[2px] border-black rounded-full shadow-sm transition-transform ${item.enabled ? 'right-1' : 'left-1'}`}></span>
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t-[3px] border-black pt-8 flex justify-end">
                <button className="bg-green-500 border-[3px] border-black px-8 py-3.5 rounded-xl font-black text-white shadow-[4px_4px_0_0_#0F172A] hover:-translate-y-1 transition-transform flex items-center gap-2">
                  <Check size={20} strokeWidth={3} /> Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {['Security', 'Billing', 'Workspace'].includes(activeTab) && (
            <div className="space-y-10 text-center py-20">
              <div className="w-24 h-24 bg-yellow-300 border-[4px] border-black rounded-3xl mx-auto flex items-center justify-center rotate-12 shadow-[8px_8px_0_0_#0F172A] mb-8">
                {activeTab === 'Security' && <Shield size={40} className="text-black" strokeWidth={2.5} />}
                {activeTab === 'Billing' && <CreditCard size={40} className="text-black" strokeWidth={2.5} />}
                {activeTab === 'Workspace' && <Layout size={40} className="text-black" strokeWidth={2.5} />}
              </div>
              <h2 className="font-black text-4xl mb-4">{activeTab} Settings</h2>
              <p className="text-xl text-gray-600 font-medium max-w-md mx-auto">
                This section is under construction. Settings for {activeTab.toLowerCase()} will be available here soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
