import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// 1. Components Imports
import Navbar from "./components/Layout/Navbar.jsx";
import Footer from './components/Layout/Footer';
import WhatsAppButton from './components/WhatsAppButton.jsx';

// 2. Pages Imports
import Home from './pages/Home';
import Admin from './pages/Admin';
import Brands from './pages/Brands';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';

// ========== SCROLL TO TOP COMPONENT ==========
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// ========== ERROR BOUNDARY COMPONENT ==========
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console (you can also send to a logging service)
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="min-h-screen theme-bg-dark theme-text-primary flex items-center justify-center p-4">
          <div className="glass-card max-w-2xl w-full p-8 text-center">
            {/* Sun icon with animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 mx-auto mb-6 rounded-full solar-gradient 
                       flex items-center justify-center"
            >
              <svg 
                className="w-12 h-12 text-background" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
                  clipRule="evenodd" 
                />
              </svg>
            </motion.div>

            {/* Error Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Oops! <span className="text-accent">Something Went Wrong</span>
            </motion.h1>

            {/* Error Message */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/70 mb-8"
            >
              Don't worry, even the sun hides behind clouds sometimes. 
              Our team has been notified and we're working on it!
            </motion.p>

            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-left"
              >
                <p className="text-red-500 font-mono text-sm">
                  {this.state.error.toString()}
                </p>
                {this.state.errorInfo && (
                  <details className="mt-2">
                    <summary className="text-red-400 cursor-pointer">Stack Trace</summary>
                    <pre className="mt-2 text-xs text-red-300 overflow-auto max-h-40">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {/* Refresh Button */}
              <button
                onClick={() => window.location.reload()}
                className="btn-primary"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Refresh Page
                </span>
              </button>

              {/* Go Home Button */}
              <button
                onClick={() => window.location.href = '/'}
                className="btn-secondary"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Go to Home
                </span>
              </button>
            </motion.div>

            {/* Contact Support */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-white/50 text-sm"
            >
              Need immediate help? {' '}
              <a 
                href="tel:+1234567890" 
                className="text-accent hover:underline"
              >
                Call Support
              </a>
              {' '} or {' '}
              <a 
                href="mailto:support@solartech.com" 
                className="text-accent hover:underline"
              >
                Email Us
              </a>
            </motion.p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// ========== PAGE WRAPPER WITH SCROLL ==========
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

// ========== MAIN APP CONTENT ==========
const AppContent = () => {
  const location = useLocation();
  
  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />
      
      <div className="min-h-screen theme-bg-dark theme-text-primary">
        {/* Navbar har page par dikhega */}
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            } />
            
            <Route path="/admin" element={
              <PageWrapper>
                <Admin />
              </PageWrapper>
            } />
            
            <Route path="/brands" element={
              <PageWrapper>
                <Brands />
              </PageWrapper>
            } />
            
            <Route path="/dashboard" element={
              <PageWrapper>
                <Dashboard />
              </PageWrapper>
            } />
            
          
            
            <Route path="/projects" element={
              <PageWrapper>
                <Projects />
              </PageWrapper>
            } />
            
            <Route path="/testimonials" element={
              <PageWrapper>
                <Testimonials />
              </PageWrapper>
            } />

               <Route path="/products" element={
              <PageWrapper>
                <Products />
              </PageWrapper>
            } />
          </Routes>
        </AnimatePresence>

        {/* WhatsApp Button aur Footer bhi har jagah dikhenge */}
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
};

// ========== MAIN APP WITH ERROR BOUNDARY ==========
function App() {
  return (
    <Router>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </Router>
  );
}

export default App;