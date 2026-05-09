import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import DocsPage from './pages/DocsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import OnboardingPage from './pages/OnboardingPage';
import SettingsPage from './pages/SettingsPage';
import MessagingPage from './pages/MessagingPage';
import VideoCallPage from './pages/VideoCallPage';
import CalendarPage from './pages/CalendarPage';
import MeetingPage from './pages/MeetingPage';
import FilesPage from './pages/FilesPage';
import TeamPage from './pages/TeamPage';
import NotificationsPage from './pages/NotificationsPage';
import IntegrationsPage from './pages/IntegrationsPage';
import VoiceRoomsPage from './pages/VoiceRoomsPage';
import VoiceCallPage from './pages/VoiceCallPage';
import DashboardLayout from './components/layout/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* App Shell Routes */}
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/messages" element={<DashboardLayout><MessagingPage /></DashboardLayout>} />
        <Route path="/calendar" element={<DashboardLayout><CalendarPage /></DashboardLayout>} />
        <Route path="/voice" element={<DashboardLayout><VoiceRoomsPage /></DashboardLayout>} />
        <Route path="/voice/call/:roomId" element={<VoiceCallPage />} />
        <Route path="/files" element={<DashboardLayout><FilesPage /></DashboardLayout>} />
        <Route path="/meetings" element={<DashboardLayout><MeetingPage /></DashboardLayout>} />
        <Route path="/team" element={<DashboardLayout><TeamPage /></DashboardLayout>} />
        <Route path="/integrations" element={<DashboardLayout><IntegrationsPage /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout><SettingsPage /></DashboardLayout>} />
        <Route path="/notifications" element={<DashboardLayout><NotificationsPage /></DashboardLayout>} />
        <Route path="/video-call" element={<VideoCallPage />} />
      </Routes>
    </Router>
  );
}

export default App;
