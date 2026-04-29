import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useDeckStore } from '../store/useDeckStore';

export default function BookingModal() {
  const { isBookingModalOpen, closeBookingModal } = useDeckStore();

  return (
    <AnimatePresence>
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Dark blurred backdrop - clicking it closes the modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBookingModal}
            className="absolute inset-0 bg-brand-black/80 backdrop-blur-md"
          />

          {/* The Glassmorphism Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-brand-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Close Button */}
            <button 
              onClick={closeBookingModal}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-10 md:p-14">
              <h2 className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">
                Direct Inquiry
              </h2>
              <h3 className="text-3xl font-semibold mb-8">
                Initiate a Partnership.
              </h3>

              {/* High-End Form Layout */}
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/60 font-medium">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/60 font-medium">Company / Brand</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                      placeholder="LVMH"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/60 font-medium">Area of Interest</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors appearance-none">
                    <option value="" className="bg-brand-black">Select an opportunity...</option>
                    <option value="luxury" className="bg-brand-black">The Avenue - Luxury Leasing</option>
                    <option value="events" className="bg-brand-black">Performing Arts Center - Venue Booking</option>
                    <option value="sponsor" className="bg-brand-black">Big SNOW - Brand Sponsorship</option>
                  </select>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-white text-brand-black rounded-lg hover:bg-brand-accent hover:text-white transition-all duration-300 font-semibold mt-4">
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}