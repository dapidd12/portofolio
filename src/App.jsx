import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SettingsProvider } from './contexts/SettingsContext';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import AnnouncementBanner from './components/AnnouncementBanner';
import MaintenancePage from './components/MaintenancePage';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import NotFound from './pages/404';
import { useSettings } from './contexts/SettingsContext';
import './utils/liveClock';

function AppContent() {
  const { settings, maintenance } = useSettings();

  if (maintenance?.enabled) {
    return <MaintenancePage maintenanceInfo={maintenance} />;
  }

  return (
    <div className="min-h-screen bg-dark-50 text-white">
      <AnnouncementBanner />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <NotificationProvider>
          <SettingsProvider>
            <AuthProvider>
              <AppContent />
            </AuthProvider>
          </SettingsProvider>
        </NotificationProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;