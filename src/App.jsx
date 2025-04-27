import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home'; 
import AboutPage from './pages/About';
import SpaceDots from './components/SpaceDots';
import MouseTrail from './components/MouseTrail';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function PageWrapper({ children }) {
  return <>{children}</>;
}

function AppContent() {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setLoaded(true);
      document.body.style.overflow = '';
    }, 800);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.substring(1);
  };
  
  const handleNavigation = (page) => {
    const path = page === 'home' ? '/' : `/${page}`;
    navigate(path);
  };

  return (
    <>
      <div className="relative">
        <ScrollToTop />
        
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-[#030712] to-[#050505]" />
        
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-cyan-400 rounded-full opacity-20 animate-ping"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-[pulse_0.8s_infinite]"></div>
              </div>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
              />
            </div>
          </motion.div>
        )}
        
        <MouseTrail />
        <SpaceDots count={60} color="rgba(0, 211, 241" opacity={0.3} />
        <Header onNavigate={handleNavigation} currentPage={getCurrentPage()} />
        
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageWrapper>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Home onNavigate={handleNavigation} />
                </motion.div>
              </PageWrapper>
            } />
            <Route path="/about" element={
              <PageWrapper>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AboutPage />
                </motion.div>
              </PageWrapper>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
