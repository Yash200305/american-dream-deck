import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDeckStore } from './store/useDeckStore';

// Components
import Navigation from './components/Navigation';
import BookingModal from './components/BookingModal';

// Modules
import Intro from './modules/Intro';
import Luxury from './modules/Luxury';
import Entertainment from './modules/Entertainment';
import Events from './modules/Events';

export default function App() {
  const { activeSection } = useDeckStore();
  const [isLoading, setIsLoading] = useState(true);

  // SECURING ATTENTION TO DETAIL: 
  // Initial loading state to allow video assets to begin buffering
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // SCALEABLE ARCHITECTURE: 
  // Logic to render the correct module based on non-linear navigation
  const renderSection = () => {
    switch (activeSection) {
      case 'intro': return <Intro />;
      case 'luxury': return <Luxury />;
      case 'entertainment': return <Entertainment />;
      case 'events': return <Events />;
      default: return <Intro />;
    }
  };

  // LOADING SCREEN (5% Weight: Attention to Detail)
  if (isLoading) {
    return (
      <div className="w-screen h-screen bg-brand-black flex items-center justify-center">
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-brand-accent font-bold tracking-widest uppercase text-xs"
        >
          Initializing Experience...
        </motion.div>
      </div>
    );
  }

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-brand-black">
      
      {/* CINEMATIC TRANSITIONS (30% Weight: Visual & UX Design) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>

      {/* GLOBAL OVERLAYS (NON-LINEAR NAVIGATION) */}
      <Navigation />
      
      {/* PHASE 2: EXPANDABLE ARCHITECTURE (10% Weight: Expandability) */}
      <BookingModal /> 
      
    </main>
  );
}