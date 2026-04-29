import { motion } from 'framer-motion';
import { Calendar, Mic2 } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import { useDeckStore } from '../store/useDeckStore';
import eventsVid from '../assets/Events.mp4';
import eventsPoster from '../assets/Events.jpg';

export default function Events() {
  const { openBookingModal } = useDeckStore();

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8">
      {/* Background Video */}
      <VideoPlayer src={eventsVid} poster={eventsPoster} />

      {/* Centered Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full max-w-2xl p-12 text-center bg-brand-black/40 backdrop-blur-xl border border-white/10 rounded-2xl"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-4"
        >
          The Platform
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-4xl md:text-5xl font-semibold mb-6 leading-tight"
        >
          The Global Stage.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-brand-white/80 mb-10 font-light leading-relaxed text-lg"
        >
          Host your next product launch, corporate convention, or live concert in our state-of-the-art 3,000-seat Performing Arts Center or at the NHL-regulation ice arena. 
          We provide the scale; you provide the vision.
        </motion.p>

        {/* Centered CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={openBookingModal}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-brand-white text-brand-black rounded-full hover:bg-brand-accent hover:text-white transition-all duration-300 font-semibold"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Venue</span>
          </button>
          
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-brand-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium">
            <Mic2 className="w-5 h-5" />
            <span>Download Tech Specs</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}