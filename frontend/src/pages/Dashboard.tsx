import { Home, MessageSquare, Video, Calendar, Folder, Users, ChevronDown, Plus, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen text-black font-sans selection:bg-purple-500 selection:text-white">
      {/* Sidebar (Left) */}
      <div className="w-64 bg-white border-r-[3px] border-black h-screen fixed left-0 top-0 flex flex-col z-20">
        {/* Workspace Header */}
        <div className="p-4 border-b-[3px] border-black">
          <button className="w-full flex items-center justify-between p-3 border-[2.5px] border-black rounded-xl hover:bg-gray-50 transition-colors"
                  style={{ boxShadow: '0 3px 0 0 #0F172A' }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-500 border-[2px] border-black rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">A</span>
              </div>
              <span className="font-black text-sm truncate">Acme Inc</span>
            </div>
            <ChevronDown size={16} strokeWidth={4} aria-hidden="true" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {[
            { icon: Home, label: 'Home', active: true },
            { icon: MessageSquare, label: 'Messages', badge: '12' },
            { icon: Video, label: 'Calls' },
            { icon: Calendar, label: 'Calendar', badge: '3' },
            { icon: Folder, label: 'Files' },
            { icon: Users, label: 'Team' }
          ].map((item, i) => (
            <button 
              key={i}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-bold text-sm transition-all ${
                item.active 
                  ? 'bg-purple-500 text-white border-[2px] border-black' 
                  : 'text-gray-700 hover:bg-gray-100 border-[2px] border-transparent hover:border-black hover:-translate-y-0.5'
              }`}
              style={item.active ? { boxShadow: '2px 2px 0 0 #0F172A' } : {}}
            >
              <div className="flex items-center gap-3">
                <item.icon size={18} strokeWidth={2.5} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded-md border-[2px] border-black shadow-sm">
                  {item.badge}
                </span>
              )}
            </button>
          ))}

          {/* Channels Section */}
          <div className="pt-6 mt-4 border-t-[3px] border-black">
            <div className="flex items-center justify-between px-3 mb-3">
              <span className="text-xs font-black text-gray-500 uppercase tracking-wider">Channels</span>
              <button className="w-6 h-6 border-[2px] border-black rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                      style={{ boxShadow: '2px 2px 0 0 #0F172A' }}>
                <Plus size={14} strokeWidth={3} />
              </button>
            </div>
            <div className="space-y-1">
              {['general', 'design', 'engineering', 'marketing'].map(channel => (
                <button key={channel} className="w-full text-left px-3 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100 rounded-lg hover:translate-x-1 transition-transform">
                  <span className="text-gray-400 mr-2">#</span>{channel}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* User Profile (Bottom) */}
        <div className="p-4 border-t-[3px] border-black bg-gray-50">
          <Link to="/settings" className="w-full flex items-center gap-3 p-2.5 bg-white border-[2.5px] border-black rounded-xl hover:-translate-y-0.5 transition-transform"
                style={{ boxShadow: '0 3px 0 0 #0F172A' }}>
            <div className="relative">
              <div className="w-10 h-10 bg-green-500 border-[2px] border-black rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">JD</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-400 border-[2px] border-black rounded-full"></div>
            </div>
            <div className="flex-1 text-left overflow-hidden">
              <div className="font-black text-sm truncate">John Doe</div>
              <div className="text-xs text-gray-500 font-bold">Online</div>
            </div>
            <Settings size={18} className="text-gray-400" />
          </Link>
        </div>
      </div>

      {/* Main Content Area (Center) */}
      <div className="ml-64 mr-[340px] flex-1 p-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white border-[3px] border-black rounded-2xl p-8 mb-8"
               style={{ boxShadow: '8px 8px 0 0 #0F172A' }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
              <div>
                <h1 className="font-black text-4xl mb-2">Good morning, John! 👋</h1>
                <p className="text-lg text-gray-600 font-medium">Here's what's happening today</p>
              </div>
              <button className="bg-green-500 border-[3px] border-black px-6 py-3.5 rounded-xl font-black text-white hover:bg-green-600 hover:-translate-y-1 transition-all whitespace-nowrap"
                      style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
                Start meeting
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Unread', value: '12', color: 'bg-purple-100', textColor: 'text-purple-700' },
                { label: 'Meetings', value: '3', color: 'bg-green-100', textColor: 'text-green-700' },
                { label: 'Tasks', value: '8', color: 'bg-cyan-100', textColor: 'text-cyan-700' },
                { label: 'Files', value: '24', color: 'bg-pink-100', textColor: 'text-pink-700' }
              ].map((stat, i) => (
                <div key={i} className={`${stat.color} border-[2.5px] border-black rounded-xl p-5 hover:-translate-y-1 transition-transform cursor-pointer`}
                     style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
                  <div className={`font-black text-3xl ${stat.textColor} mb-1`}>{stat.value}</div>
                  <div className="text-sm font-bold text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="bg-white border-[3px] border-black rounded-2xl p-8"
               style={{ boxShadow: '8px 8px 0 0 #0F172A' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-black text-2xl">Recent Activity</h2>
              <button className="text-sm font-bold text-purple-600 hover:underline">View all</button>
            </div>
            
            <div className="space-y-4">
              {/* Activity items */}
              {[
                { type: 'message', user: 'Sarah', action: 'sent a message in', target: '#design', time: '2m ago', color: 'bg-purple-500', initial: 'S' },
                { type: 'call', user: 'Team', action: 'started a', target: 'video call', time: '15m ago', color: 'bg-green-500', initial: 'T' },
                { type: 'file', user: 'Mike', action: 'uploaded a file to', target: '#engineering', time: '1h ago', color: 'bg-cyan-500', initial: 'M' }
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border-[2.5px] border-black rounded-xl hover:bg-gray-50 transition-colors shadow-[2px_2px_0_0_#0F172A]">
                  <div className={`w-12 h-12 ${activity.color} border-[2px] border-black rounded-xl flex items-center justify-center shrink-0`}>
                    <span className="text-white font-black text-lg">{activity.initial}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base font-medium truncate">
                      <span className="font-black">{activity.user}</span> {activity.action} <span className="font-bold text-purple-600">{activity.target}</span>
                    </p>
                    <p className="text-xs font-bold text-gray-500 mt-0.5">{activity.time}</p>
                  </div>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors shrink-0">
                    <span className="font-black tracking-widest text-gray-400" aria-label="More options">…</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel (Activity & Calendar) */}
      <div className="w-[340px] bg-white border-l-[3px] border-black h-screen fixed right-0 top-0 overflow-y-auto z-20 hidden xl:block">
        {/* Calendar Widget */}
        <div className="p-6 border-b-[3px] border-black bg-yellow-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-black text-xl">Today's Schedule</h3>
            <button className="w-8 h-8 bg-white border-[2px] border-black rounded-lg flex items-center justify-center hover:bg-gray-100 shadow-[2px_2px_0_0_#0F172A]">
              <Plus size={16} strokeWidth={3} />
            </button>
          </div>
          
          <div className="space-y-3">
            {/* Meeting cards */}
            {[
              { time: '10:00 AM', title: 'Design Review', attendees: 4, color: 'bg-purple-200' },
              { time: '2:30 PM', title: 'Client Call', attendees: 2, color: 'bg-green-200' },
              { time: '4:00 PM', title: 'Team Standup', attendees: 8, color: 'bg-cyan-200' }
            ].map((meeting, i) => (
              <div key={i} className={`${meeting.color} border-[2.5px] border-black rounded-xl p-4 hover:-translate-y-1 transition-transform cursor-pointer`}
                   style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
                <div className="font-black text-xs uppercase tracking-wider mb-2 bg-white inline-block px-2 py-0.5 rounded border-[2px] border-black">{meeting.time}</div>
                <div className="font-black text-lg mb-2">{meeting.title}</div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[...Array(Math.min(meeting.attendees, 3))].map((_, j) => (
                      <div key={j} className="w-6 h-6 rounded-full border-[2px] border-black bg-white overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}${j}`} alt="avatar" />
                      </div>
                    ))}
                    {meeting.attendees > 3 && (
                      <div className="w-6 h-6 rounded-full border-[2px] border-black bg-gray-100 flex items-center justify-center text-[10px] font-black">
                        +{meeting.attendees - 3}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold bg-white px-2 py-1 rounded-md border-[2px] border-black">
                    <Video size={12} strokeWidth={3} /> Join
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-white border-[2.5px] border-black rounded-xl py-3 mt-4 font-black text-sm hover:bg-gray-50 transition-colors"
                  style={{ boxShadow: '2px 2px 0 0 #0F172A' }}>
            View full calendar <ArrowRight size={16} strokeWidth={4} className="inline-block ml-1" />
          </button>
        </div>

        {/* Online Team Members */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-black text-xl">Team Online</h3>
            <span className="bg-green-100 text-green-800 font-black text-xs px-2 py-1 rounded-md border-[2px] border-black">8</span>
          </div>
          
          <div className="space-y-2">
            {['Sarah Chen', 'Mike Ross', 'Emma Wilson', 'Alex Turner'].map((name, i) => (
              <button key={i} className="w-full flex items-center gap-3 p-2 hover:bg-gray-50 rounded-xl transition-colors group">
                <div className="relative">
                  <div className={`w-10 h-10 border-[2px] border-black rounded-xl flex items-center justify-center shadow-[2px_2px_0_0_#0F172A] group-hover:shadow-[0px_0px_0_0_#0F172A] group-hover:translate-y-[2px] group-hover:translate-x-[2px] transition-all
                    ${i % 4 === 0 ? 'bg-purple-400' : i % 4 === 1 ? 'bg-green-400' : i % 4 === 2 ? 'bg-cyan-400' : 'bg-pink-400'}
                  `}>
                    <span className="text-white font-black text-sm">{name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-400 border-[2px] border-black rounded-full z-10"></div>
                </div>
                <div className="flex-1 text-left">
                  <div className="font-black text-sm">{name}</div>
                  <div className="text-xs text-gray-500 font-bold">Online</div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
                  <div className="w-7 h-7 bg-white border-[2px] border-black rounded-lg flex items-center justify-center hover:bg-gray-100">
                    <MessageSquare size={12} strokeWidth={3} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
