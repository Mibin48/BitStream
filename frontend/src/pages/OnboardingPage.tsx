import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Zap, MessageSquare, Video, Shield, Calendar, Bell, Moon, Mail, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [workspaceName, setWorkspaceName] = useState('');
  const [emails, setEmails] = useState(['', '']);
  const [template, setTemplate] = useState<string | null>('engineering');
  const [preferences, setPreferences] = useState({
    notifications: true,
    darkMode: false,
    emailUpdates: true,
    activityDigest: true
  });
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
    else navigate('/dashboard');
  };

  const skipOnboarding = () => {
    navigate('/dashboard');
  };

  const steps = [
    { id: 1, label: 'Workspace' },
    { id: 2, label: 'Team' },
    { id: 3, label: 'Settings' },
  ];

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-blue-500 selection:text-white relative overflow-x-hidden">
      {/* Global Blueprint Grid Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

      {/* Top Nav */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 4 ? 'bg-transparent' : 'bg-slate-900'}`} />
                ))}
              </div>
            </div>
            <span className="font-extrabold text-slate-900 text-xl tracking-tight uppercase">BitStream</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
            <a href="#" className="hover:text-slate-900 transition-colors">Product</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Help</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={skipOnboarding}
            className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors"
          >
            Skip for now
          </button>
          <div className="w-10 h-10 bg-teal-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-sm border-[2px] border-black/5">
            S
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-[1400px] mx-auto w-full pt-12 px-8 gap-16">
        {/* Left Sidebar */}
        <aside className="w-[300px] flex-shrink-0 hidden lg:block">
          <div className="sticky top-32">
            <div className="bg-[#F4F1EA] rounded-[40px] p-10 mb-8 flex flex-col items-center justify-center aspect-square shadow-inner border-[3px] border-black/5">
              <div className="flex flex-col items-center justify-center h-full gap-0 scale-110">
                <motion.div 
                  animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-0 h-0 border-l-[45px] border-r-[45px] border-b-[55px] border-l-transparent border-r-transparent border-b-[#F4B41A] mb-1 z-10 relative" 
                />
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-[130px] h-[65px] bg-[#1167E1] rounded-b-full mb-1 z-20 relative" 
                />
                <motion.div 
                  animate={{ rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="w-[120px] h-[120px] bg-[#7CB59E] z-30 relative" 
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} 
                />
              </div>
            </div>
            
            <h2 className="text-2xl font-extrabold mb-6 leading-tight tracking-tighter">Setting up<br/>your workspace</h2>
            
            <nav className="space-y-2">
              <div className={`px-4 py-3 rounded-2xl text-sm font-bold flex items-center gap-3 transition-all ${currentStep === 1 ? 'bg-slate-100 text-slate-900 border-[2px] border-black/5' : 'text-slate-400'}`}>
                <div className={`w-2 h-2 rounded-full ${currentStep === 1 ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'bg-slate-200'}`} />
                Workspace
              </div>
              <div className={`px-4 py-3 rounded-2xl text-sm font-bold flex items-center gap-3 transition-all ${currentStep === 2 ? 'bg-slate-100 text-slate-900 border-[2px] border-black/5' : 'text-slate-400'}`}>
                <div className={`w-2 h-2 rounded-full ${currentStep === 2 ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'bg-slate-200'}`} />
                Add Team
              </div>
              <div className={`px-4 py-3 rounded-2xl text-sm font-bold flex items-center gap-3 transition-all ${currentStep === 3 ? 'bg-slate-100 text-slate-900 border-[2px] border-black/5' : 'text-slate-400'}`}>
                <div className={`w-2 h-2 rounded-full ${currentStep === 3 ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'bg-slate-200'}`} />
                Settings
              </div>
              <div className={`px-4 py-3 rounded-2xl text-sm font-bold flex items-center gap-3 transition-all ${currentStep === 4 ? 'bg-slate-100 text-slate-900 border-[2px] border-black/5' : 'text-slate-400'}`}>
                <div className={`w-2 h-2 rounded-full ${currentStep === 4 ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-slate-200'}`} />
                Finish
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-5xl pb-20">
          {/* Progress Bar */}
          {currentStep < 4 && (
            <div className="relative flex justify-between items-center mb-12 px-12">
              <div className="absolute left-12 right-12 top-4 h-[3px] bg-slate-100 -z-10" />
              <div 
                className="absolute left-12 top-4 h-[3px] bg-blue-500 -z-10 transition-all duration-700 ease-out shadow-[0_0_8px_rgba(59,130,246,0.4)]" 
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }} 
              />
              
              {steps.map((step) => {
                const isCompleted = step.id < currentStep;
                const isCurrent = step.id === currentStep;
                
                return (
                  <div key={step.id} className="flex flex-col items-center gap-3 bg-white px-3">
                    <div 
                      className={`w-9 h-9 rounded-full flex items-center justify-center border-[2.5px] transition-all duration-500 transform ${
                        isCompleted 
                          ? 'bg-blue-500 border-blue-500 text-white scale-110' 
                          : isCurrent 
                            ? 'bg-white border-blue-500 text-blue-500 scale-110 shadow-lg shadow-blue-100' 
                            : 'bg-white border-slate-200 text-transparent'
                      }`}
                    >
                      {(isCompleted || isCurrent) && <Check size={18} strokeWidth={3} />}
                    </div>
                    <span className={`text-[13px] font-black uppercase tracking-widest ${isCurrent || isCompleted ? 'text-slate-900' : 'text-slate-400'}`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          <h1 className="text-[32px] font-black mb-8 tracking-tighter uppercase">Get Started</h1>

          <div className="border-[3px] border-slate-100 rounded-[40px] p-12 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10 opacity-50" />
            
            <AnimatePresence mode="wait">
              {/* Step 1: Workspace & Templates */}
              {currentStep === 1 && (
                <motion.div 
                  key="step1" 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="max-w-2xl">
                    <h2 className="text-4xl font-black mb-4 tracking-tighter">Start your workspace.</h2>
                    <p className="text-slate-500 font-bold text-lg leading-relaxed">
                      Give your workspace a name and pick a style that fits your work.
                    </p>
                  </div>

                  <div className="space-y-6 max-w-xl">
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 ml-1">Workspace Name</label>
                      <input 
                        type="text" 
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                        placeholder="e.g. My Great Team"
                        className="w-full px-6 py-5 bg-slate-50 border-[3px] border-slate-100 rounded-[20px] font-black text-slate-900 text-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-inner placeholder:text-slate-300"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Pick a Style</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { 
                          id: 'engineering', 
                          title: 'Engineering', 
                          category: 'Chat · Sprints', 
                          color: '#7CB59E', 
                          bg: '#EAF1EE',
                          features: ['Code alerts', 'Chat about code', 'Plan your work']
                        },
                        { 
                          id: 'creative', 
                          title: 'Design', 
                          category: 'Video · Assets', 
                          color: '#E7C696', 
                          bg: '#F9EFE1',
                          features: ['Great video quality', 'Review designs', 'Quick voice chat']
                        },
                        { 
                          id: 'ops', 
                          title: 'Business', 
                          category: 'Security · Planning', 
                          color: '#BDE0D0', 
                          bg: '#D8EFE5',
                          features: ['Keep data safe', 'Shared calendar', 'Activity logs']
                        },
                        { 
                          id: 'personal', 
                          title: 'Personal', 
                          category: 'Just Me · Tasks', 
                          color: '#F97316', 
                          bg: '#FFF7ED',
                          features: ['Private notes', 'Your own tasks', 'Free forever']
                        }
                      ].map((card) => (
                        <div 
                          key={card.id}
                          onClick={() => setTemplate(card.id)}
                          className={`group border-[3px] rounded-[32px] overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2 bg-white relative ${template === card.id ? 'border-blue-500 shadow-xl shadow-blue-50 scale-[1.02]' : 'border-slate-100 hover:border-slate-300'}`}
                        >
                          <div className="p-6 h-36 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: card.bg }}>
                             {template === card.id && (
                               <div className="absolute top-3 right-3 bg-blue-500 text-white p-1 rounded-full shadow-lg">
                                 <Check size={14} strokeWidth={4} />
                               </div>
                             )}
                             <div className="opacity-80 group-hover:scale-110 transition-transform duration-500">
                                {card.id === 'engineering' && <MessageSquare size={48} style={{ color: card.color }} strokeWidth={2.5} />}
                                {card.id === 'creative' && <Video size={48} style={{ color: card.color }} strokeWidth={2.5} />}
                                {card.id === 'ops' && <Shield size={48} style={{ color: card.color }} strokeWidth={2.5} />}
                                {card.id === 'personal' && <Zap size={48} style={{ color: card.color }} strokeWidth={2.5} />}
                             </div>
                          </div>
                          <div className="p-6 flex-1 flex flex-col">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{card.category}</p>
                            <h3 className="text-xl font-black mb-4 tracking-tighter">{card.title}</h3>
                            <ul className="space-y-3 mb-6 flex-1">
                              {card.features.map(f => (
                                <li key={f} className="flex gap-3 items-start text-xs font-bold text-slate-600">
                                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: card.color }} />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button 
                      onClick={nextStep}
                      disabled={!workspaceName.trim()}
                      className="bg-black hover:bg-slate-900 disabled:opacity-20 disabled:cursor-not-allowed text-white font-black px-12 py-5 rounded-[20px] transition-all flex items-center gap-3 text-lg shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none"
                    >
                      Next
                      <ArrowRight size={20} strokeWidth={3} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Team Invites */}
              {currentStep === 2 && (
                <motion.div 
                  key="step2" 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -20 }}
                  className="max-w-xl mx-auto"
                >
                  <div className="text-center mb-12">
                    <div className="inline-block p-4 bg-blue-50 rounded-3xl mb-6">
                      <Mail className="text-blue-600 w-10 h-10" strokeWidth={2.5} />
                    </div>
                    <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase">Add your team</h2>
                    <p className="text-slate-500 font-bold text-lg leading-relaxed">
                      Add your teammates to work together. You can also skip this and do it later.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {emails.map((email, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="flex-1 relative">
                          <input
                            type="email"
                            placeholder="teammate@email.com"
                            value={email}
                            onChange={(e) => {
                              const newEmails = [...emails];
                              newEmails[i] = e.target.value;
                              setEmails(newEmails);
                            }}
                            className="w-full px-6 py-4 bg-slate-50 border-[3px] border-slate-100 rounded-2xl font-bold text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-inner placeholder:text-slate-300"
                          />
                        </div>
                        {emails.length > 1 && (
                          <button 
                            onClick={() => setEmails(emails.filter((_, idx) => idx !== i))}
                            className="p-4 bg-white border-[3px] border-slate-100 rounded-2xl text-slate-300 hover:text-red-500 hover:border-red-100 transition-all"
                          >
                            <X size={20} strokeWidth={3} />
                          </button>
                        )}
                      </div>
                    ))}
                    
                    <button
                      onClick={() => setEmails([...emails, ''])}
                      className="w-full py-4 border-[3px] border-dashed border-slate-100 rounded-2xl font-black text-slate-400 hover:border-slate-300 hover:text-slate-600 hover:bg-slate-50 transition-all uppercase text-xs tracking-widest"
                    >
                      + Add Person
                    </button>

                    <div className="flex gap-4 pt-10">
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="px-8 py-4 bg-white border-[3px] border-slate-100 rounded-2xl font-black text-slate-400 hover:text-slate-900 hover:border-slate-200 transition-all uppercase text-xs tracking-widest"
                      >
                        Back
                      </button>
                      <button
                        onClick={nextStep}
                        className="flex-1 bg-black hover:bg-slate-900 text-white font-black py-5 rounded-[20px] transition-all flex items-center justify-center gap-3 text-lg shadow-[6px_6px_0_0_rgba(0,0,0,0.1)]"
                      >
                        Send Invites
                        <ArrowRight size={20} strokeWidth={3} />
                      </button>
                      <button
                        onClick={nextStep}
                        className="px-8 py-4 bg-white font-black text-slate-400 hover:text-slate-600 transition-all uppercase text-xs tracking-widest"
                      >
                        Skip
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Preferences */}
              {currentStep === 3 && (
                <motion.div 
                  key="step3" 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -20 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="text-center mb-12">
                    <div className="inline-block p-4 bg-purple-50 rounded-3xl mb-6">
                      <Zap className="text-purple-600 w-10 h-10" strokeWidth={2.5} />
                    </div>
                    <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase">Settings</h2>
                    <p className="text-slate-500 font-bold text-lg leading-relaxed">
                      Pick your settings. You can change these anytime in your profile.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { key: 'notifications', label: 'Alerts', desc: 'Get notified for new messages.', icon: Bell },
                      { key: 'darkMode', label: 'Dark Mode', desc: 'Use a dark color theme.', icon: Moon },
                      { key: 'emailUpdates', label: 'Daily Email', desc: 'Get a summary of your work.', icon: Mail },
                      { key: 'activityDigest', label: 'Smart Filter', desc: 'Hide chat when you are busy.', icon: Shield },
                    ].map((pref) => (
                      <div 
                        key={pref.key}
                        onClick={() => togglePreference(pref.key as keyof typeof preferences)}
                        className={`p-6 border-[3px] rounded-[28px] cursor-pointer transition-all flex flex-col justify-between h-44 ${preferences[pref.key as keyof typeof preferences] ? 'bg-slate-900 border-slate-900 text-white shadow-xl' : 'bg-slate-50 border-slate-50 text-slate-900 hover:border-slate-200'}`}
                      >
                        <div className="flex justify-between items-start">
                          <div className={`p-3 rounded-2xl ${preferences[pref.key as keyof typeof preferences] ? 'bg-white/10' : 'bg-white border-2 border-black/5'}`}>
                            <pref.icon size={24} strokeWidth={2.5} />
                          </div>
                          <div className={`w-12 h-6 rounded-full relative transition-colors ${preferences[pref.key as keyof typeof preferences] ? 'bg-blue-500' : 'bg-slate-200'}`}>
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${preferences[pref.key as keyof typeof preferences] ? 'right-1' : 'left-1'}`} />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-black text-lg tracking-tight mb-1">{pref.label}</h3>
                          <p className={`text-[11px] font-bold uppercase leading-relaxed ${preferences[pref.key as keyof typeof preferences] ? 'text-white/60' : 'text-slate-400'}`}>
                            {pref.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-12">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="px-8 py-4 bg-white border-[3px] border-slate-100 rounded-2xl font-black text-slate-400 hover:text-slate-900 hover:border-slate-200 transition-all uppercase text-xs tracking-widest"
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      className="flex-1 bg-black hover:bg-slate-900 text-white font-black py-5 rounded-[20px] transition-all flex items-center justify-center gap-3 text-lg shadow-[6px_6px_0_0_rgba(0,0,0,0.1)]"
                    >
                      Finish
                      <ArrowRight size={20} strokeWidth={3} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Success */}
              {currentStep === 4 && (
                <motion.div 
                  key="step4" 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="text-center py-10"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10, delay: 0.2 }}
                    className="w-24 h-24 bg-green-500 rounded-[30px] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-200"
                  >
                    <Check className="text-white w-12 h-12" strokeWidth={4} />
                  </motion.div>
                  
                  <h2 className="text-5xl font-black mb-4 tracking-tighter uppercase">All set!</h2>
                  <p className="text-slate-500 font-bold text-xl mb-12 max-w-md mx-auto leading-relaxed">
                    Welcome to <span className="text-slate-900">{workspaceName || 'BitStream'}</span>. Your workspace is ready.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                    {[
                      { title: 'Open Chat', icon: MessageSquare, color: 'bg-purple-500' },
                      { title: 'Video Call', icon: Video, color: 'bg-blue-500' },
                      { title: 'Calendar', icon: Calendar, color: 'bg-orange-500' },
                    ].map((item, i) => (
                      <motion.div 
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className="bg-slate-50 border-[3px] border-slate-100 p-6 rounded-[28px] group cursor-pointer hover:border-black transition-all"
                      >
                        <div className={`w-12 h-12 ${item.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          <item.icon size={20} strokeWidth={2.5} />
                        </div>
                        <span className="font-black text-xs uppercase tracking-widest">{item.title}</span>
                      </motion.div>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate('/dashboard')}
                    className="bg-black hover:bg-slate-900 text-white font-black py-6 px-16 rounded-[24px] transition-all inline-flex items-center gap-4 text-xl shadow-[10px_10px_0_0_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none"
                  >
                    Go to Dashboard
                    <ArrowRight size={24} strokeWidth={3} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
      
      {/* Help Button */}
      <div className="fixed bottom-10 right-10 w-14 h-14 bg-white rounded-full border-[3px] border-black shadow-[6px_6px_0_0_#000] flex items-center justify-center text-slate-900 hover:bg-slate-50 cursor-pointer transition-all z-50 font-black text-xl active:translate-x-1 active:translate-y-1 active:shadow-none">
        ?
      </div>
    </div>
  );
};

export default OnboardingPage;
