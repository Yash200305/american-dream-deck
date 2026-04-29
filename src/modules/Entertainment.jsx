import { motion } from 'framer-motion';
import { Ticket, PlayCircle } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import attractionsVid from '../assets/Attractions.mp4';
import attractionsPoster from '../assets/Attractions.jpg';

export default function Entertainment() {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-8">
      {/* Background Video */}
      <VideoPlayer src={attractionsVid} poster={attractionsPoster} />

      {/* Centered Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full max-w-2xl p-12 text-center bg-brand-black/50 backdrop-blur-xl border border-white/10 rounded-2xl"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-4"
        >
          World-Class Attractions
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-4xl md:text-6xl font-semibold mb-6 leading-tight tracking-tight"
        >
          Gravity Defying. <br />
          <span className="text-white/60">Year Round.</span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-brand-white/80 mb-10 font-light leading-relaxed text-lg"
        >
          From North America's largest indoor water park to the continent's only indoor real-snow ski resort. 
          Sponsor high-footfall environments that draw tens of millions of destination visitors annually.
        </motion.p>

        {/* Centered CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand-white text-brand-black rounded-full hover:bg-brand-accent hover:text-white transition-all duration-300 font-semibold">
            <Ticket className="w-5 h-5" />
            <span>Sponsorship Tiers</span>
          </button>
          
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-brand-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium">
            <PlayCircle className="w-5 h-5" />
            <span>Watch Sizzle Reel</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}