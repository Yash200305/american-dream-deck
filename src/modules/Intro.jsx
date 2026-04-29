import { motion } from 'framer-motion';
import VideoPlayer from '../components/VideoPlayer';
import { useDeckStore } from '../store/useDeckStore';
import introVid from '../assets/Intro.mp4';
import introPoster from '../assets/Intro.jpg';

export default function Intro() {
  const { setActiveSection } = useDeckStore();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Video */}
      <VideoPlayer src={introVid} poster={introPoster} />

      {/* Foreground Content */}
      <div className="relative z-20 text-center flex flex-col items-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-4"
        >
          AMERICAN DREAM
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-xl md:text-2xl text-brand-white/80 font-light tracking-wide mb-12 max-w-2xl"
        >
          3 Million Square Feet of Unprecedented Retail, Entertainment, and Scale.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          onClick={() => setActiveSection('luxury')}
          className="px-8 py-4 bg-brand-white text-brand-black font-semibold rounded-full hover:bg-brand-accent hover:text-brand-white transition-colors duration-300 shadow-lg"
        >
          Enter The Experience
        </motion.button>
      </div>
    </div>
  );
}