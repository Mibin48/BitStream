import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, MessageSquare, Video, Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useReducedMotion } from 'framer-motion';

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [emails, setEmails] = useState(['', '']);
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
    else navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-black selection:bg-purple-500 selection:text-white pb-24">
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b-[3px] border-black z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-500 border-[2px] border-black rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">B</span>
            </div>
            <span className="font-black text-xl tracking-tight hidden sm:block">BitStream</span>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map(step => (
              <div key={step} className={`w-8 h-8 sm:w-10 sm:h-10 border-[2.5px] border-black rounded-lg flex items-center justify-center font-black transition-colors ${step <= currentStep ? 'bg-green-500 text-white' : 'bg-white text-gray-300'
                }`}>
                {step < currentStep ? <Check size={16} strokeWidth={4} /> : step}
              </div>
            ))}
          </div>

          <button onClick={() => navigate('/dashboard')} className="text-sm font-bold text-gray-500 hover:text-black transition-colors">
            Skip <ArrowRight size={16} strokeWidth={4} className="inline-block ml-1" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="pt-32 px-6 flex justify-center">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
              className="max-w-2xl w-full bg-white border-[3px] border-black rounded-2xl p-8 sm:p-12"
              style={{ boxShadow: '12px 12px 0 0 #0F172A' }}
            >
              <div className="text-center mb-8">
                <div className="inline-block bg-purple-100 border-[3px] border-black px-4 py-1.5 rounded-full mb-4"
                  style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
                  <span className="font-black text-xs text-purple-700 tracking-wider">STEP 1 OF 4</span>
                </div>
                <h1 className="font-black text-3xl sm:text-4xl mb-3">Create your workspace</h1>
                <p className="text-lg text-gray-600 font-medium">
                  This is where your team will collaborate
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block font-bold text-sm mb-2">Workspace name</label>
                  <input
                    type="text"
                    placeholder="e.g., Acme Inc"
                    className="w-full px-5 py-4 border-[3px] border-black rounded-xl font-medium text-lg focus:outline-none focus:ring-4 focus:ring-purple-200 transition-shadow"
                    style={{ boxShadow: '4px 4px 0 0 #0F172A' }}
                  />
                  <p className="text-xs text-gray-500 mt-2 font-medium">
                    This will be visible to your team members
                  </p>
                </div>

                <div>
                  <label className="block font-bold text-sm mb-2">Workspace URL</label>
                  <div className="flex items-center">
                    <div className="bg-gray-100 border-y-[3px] border-l-[3px] border-black px-4 py-4 rounded-l-xl border-r-0 text-gray-500 font-medium whitespace-nowrap">
                      bitstream.app/
                    </div>
                    <input
                      type="text"
                      placeholder="acme-inc"
                      className="flex-1 px-4 py-4 border-[3px] border-black rounded-r-xl font-medium text-lg focus:outline-none focus:ring-4 focus:ring-purple-200 transition-shadow"
                      style={{ boxShadow: '4px 4px 0 0 #0F172A' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-sm mb-3">What's your team size?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['1-10', '11-50', '51-200', '200+'].map(size => (
                      <button
                        key={size}
                        className="py-3 border-[3px] border-black rounded-xl font-bold hover:bg-purple-50 transition-colors focus:bg-purple-100 focus:ring-2 focus:ring-black"
                        style={{ boxShadow: '4px 4px 0 0 #0F172A' }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button onClick={nextStep} className="w-full bg-green-500 border-[3px] border-black py-4 rounded-xl font-black text-lg text-white hover:bg-green-600 hover:-translate-y-1 transition-all mt-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                  style={{ boxShadow: '4px 6px 0 0 #0F172A' }}>
                  Continue <ArrowRight size={18} strokeWidth={4} className="inline-block ml-1" />
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
              className="max-w-2xl w-full bg-white border-[3px] border-black rounded-2xl p-8 sm:p-12"
              style={{ boxShadow: '12px 12px 0 0 #0F172A' }}
            >
              <div className="text-center mb-8">
                <div className="inline-block bg-green-100 border-[3px] border-black px-4 py-1.5 rounded-full mb-4"
                  style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
                  <span className="font-black text-xs text-green-700 tracking-wider">STEP 2 OF 4</span>
                </div>
                <h1 className="font-black text-3xl sm:text-4xl mb-3">Invite your team</h1>
                <p className="text-lg text-gray-600 font-medium">
                  Add team members via email (you can skip this for now)
                </p>
              </div>

              <div className="space-y-4 mb-6">
                {emails.map((email, i) => (
                  <div key={i} className="flex gap-3">
                    <input
                      type="email"
                      placeholder="teammate@company.com"
                      value={email}
                      onChange={(e) => {
                        const newEmails = [...emails];
                        newEmails[i] = e.target.value;
                        setEmails(newEmails);
                      }}
                      className="flex-1 px-5 py-3 border-[3px] border-black rounded-xl font-medium focus:outline-none focus:ring-4 focus:ring-green-200 transition-shadow"
                      style={{ boxShadow: '4px 4px 0 0 #0F172A' }}
                    />
                    <button
                      onClick={() => setEmails(emails.filter((_, index) => index !== i))}
                      disabled={emails.length === 1}
                      aria-label="Remove email"
                      className="w-14 shrink-0 bg-red-100 border-[3px] border-black rounded-xl flex items-center justify-center hover:bg-red-200 disabled:opacity-50 disabled:hover:bg-red-100 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200"
                      style={{ boxShadow: '2px 2px 0 0 #0F172A' }}
                    >
                      <X size={20} strokeWidth={4} />
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setEmails([...emails, ''])}
                className="w-full bg-white border-[3px] border-black py-4 rounded-xl font-bold text-purple-600 mb-8 hover:bg-gray-50 transition-colors"
                style={{ boxShadow: '4px 4px 0 0 #0F172A' }}
              >
                + Add another email
              </button>

              <div className="flex flex-col-reverse sm:flex-row gap-4">
                <button onClick={nextStep} className="flex-1 bg-white border-[3px] border-black py-4 rounded-xl font-bold hover:bg-gray-50 hover:-translate-y-1 transition-all"
                  style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
                  Skip for now
                </button>
                <button onClick={nextStep} className="flex-1 bg-green-500 border-[3px] border-black py-4 rounded-xl font-black text-white hover:bg-green-600 hover:-translate-y-1 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                  style={{ boxShadow: '4px 6px 0 0 #0F172A' }}>
                  Send invites <ArrowRight size={18} strokeWidth={4} className="inline-block ml-1" />
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl w-full bg-white border-[3px] border-black rounded-2xl p-8 sm:p-12"
              style={{ boxShadow: '12px 12px 0 0 #0F172A' }}
            >
              <div className="text-center mb-8">
                <div className="inline-block bg-cyan-100 border-[3px] border-black px-4 py-1.5 rounded-full mb-4"
                  style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
                  <span className="font-black text-xs text-cyan-700 tracking-wider">STEP 3 OF 4</span>
                </div>
                <h1 className="font-black text-3xl sm:text-4xl mb-3">Customize your experience</h1>
                <p className="text-lg text-gray-600 font-medium">Set your default notification and theme preferences</p>
              </div>

              <div className="space-y-4">
                {/* Preference Cards */}
                <div className="bg-white border-[3px] border-black rounded-xl p-5"
                  style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4">
                      <h3 className="font-bold text-lg mb-1">Desktop notifications</h3>
                      <p className="text-sm text-gray-600 font-medium">Get notified about new messages and incoming calls</p>
                    </div>
                    <button className="w-14 h-8 bg-green-500 border-[2.5px] border-black rounded-full relative transition-colors shrink-0">
                      <span className="absolute right-1 top-0.5 w-5 h-5 bg-white border-[2px] border-black rounded-full shadow-sm"></span>
                    </button>
                  </div>
                </div>

                <div className="bg-white border-[3px] border-black rounded-xl p-5"
                  style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4">
                      <h3 className="font-bold text-lg mb-1">Email summaries</h3>
                      <p className="text-sm text-gray-600 font-medium">Receive a daily digest of missed activity</p>
                    </div>
                    <button className="w-14 h-8 bg-gray-200 border-[2.5px] border-black rounded-full relative transition-colors shrink-0">
                      <span className="absolute left-1 top-0.5 w-5 h-5 bg-white border-[2px] border-black rounded-full shadow-sm"></span>
                    </button>
                  </div>
                </div>

                <div className="bg-white border-[3px] border-black rounded-xl p-5"
                  style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4">
                      <h3 className="font-bold text-lg mb-1">Dark mode</h3>
                      <p className="text-sm text-gray-600 font-medium">Use dark theme by default across the app</p>
                    </div>
                    <button className="w-14 h-8 bg-gray-200 border-[2.5px] border-black rounded-full relative transition-colors shrink-0">
                      <span className="absolute left-1 top-0.5 w-5 h-5 bg-white border-[2px] border-black rounded-full shadow-sm"></span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button onClick={() => setCurrentStep(2)} className="bg-white border-[3px] border-black px-6 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors"
                  style={{ boxShadow: '4px 4px 0 0 #0F172A' }}>
                  Back
                </button>
                <button onClick={nextStep} className="flex-1 bg-green-500 border-[3px] border-black py-4 rounded-xl font-black text-lg text-white hover:bg-green-600 hover:-translate-y-1 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                  style={{ boxShadow: '4px 6px 0 0 #0F172A' }}>
                  Continue <ArrowRight size={18} strokeWidth={4} className="inline-block ml-1" />
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl w-full"
            >
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-green-500 border-[4px] border-black rounded-2xl mx-auto flex items-center justify-center animate-bounce-slight"
                  style={{ boxShadow: '8px 8px 0 0 #0F172A' }}>
                  <Check className="text-white" size={48} strokeWidth={4} />
                </div>

                <div>
                  <h1 className="font-black text-4xl sm:text-5xl mb-4">You're all set!</h1>
                  <p className="text-xl text-gray-600 font-medium max-w-lg mx-auto">
                    Welcome to BitStream. Your workspace is ready for collaboration.
                  </p>
                </div>

                {/* Quick Tips Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 mb-12">
                  <div className="bg-purple-50 border-[3px] border-black rounded-xl p-6 text-center"
                    style={{ boxShadow: '6px 6px 0 0 #0F172A' }}>
                    <div className="w-14 h-14 bg-purple-500 border-[2.5px] border-black rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <MessageSquare className="text-white" size={24} />
                    </div>
                    <h4 className="font-black text-lg mb-1">Send a message</h4>
                    <p className="text-sm text-gray-600 font-medium">Start a conversation in #general</p>
                  </div>

                  <div className="bg-green-50 border-[3px] border-black rounded-xl p-6 text-center"
                    style={{ boxShadow: '6px 6px 0 0 #0F172A' }}>
                    <div className="w-14 h-14 bg-green-500 border-[2.5px] border-black rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Video className="text-white" size={24} />
                    </div>
                    <h4 className="font-black text-lg mb-1">Start a call</h4>
                    <p className="text-sm text-gray-600 font-medium">Jump into a quick huddle</p>
                  </div>

                  <div className="bg-cyan-50 border-[3px] border-black rounded-xl p-6 text-center"
                    style={{ boxShadow: '6px 6px 0 0 #0F172A' }}>
                    <div className="w-14 h-14 bg-cyan-500 border-[2.5px] border-black rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Calendar className="text-white" size={24} />
                    </div>
                    <h4 className="font-black text-lg mb-1">Schedule</h4>
                    <p className="text-sm text-gray-600 font-medium">Set up your first team meeting</p>
                  </div>
                </div>

                <button onClick={() => navigate('/dashboard')} className="bg-purple-500 border-[3px] border-black px-12 py-5 rounded-xl font-black text-xl text-white mx-auto hover:bg-purple-600 hover:-translate-y-1 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                  style={{ boxShadow: '6px 8px 0 0 #0F172A' }}>
                  Go to dashboard <ArrowRight size={20} strokeWidth={4} className="inline-block ml-1" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OnboardingPage;
