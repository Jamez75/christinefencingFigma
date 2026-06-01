import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { SplashScreen } from './components/SplashScreen';
import { Navigation } from './components/Navigation';
import { BottomNav } from './components/BottomNav';
import { HomePage } from './components/HomePage';
import { DonatePage } from './components/DonatePage';
import { GalleryPage } from './components/GalleryPage';
import { AchievementsPage } from './components/AchievementsPage';
import { EventsPage } from './components/EventsPage';
import { AboutPage } from './components/AboutPage';
import { PWAHead } from './components/PWAHead';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    if (hasSeenSplash) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <BrowserRouter>
      <PWAHead />
      <div className="min-h-screen bg-white pb-20">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}