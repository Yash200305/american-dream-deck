import { create } from 'zustand';

export const useDeckStore = create((set) => ({
  // The current section the user is exploring
  // Available sections: 'intro', 'overview', 'luxury', 'entertainment', 'events'
  activeSection: 'intro',
  
  // Video playback state to ensure videos don't talk over each other
  isVideoPlaying: true,
  
  // For the Phase 2 Expandable Architecture (Booking/Sponsorship modal)
  isBookingModalOpen: false,

  // Actions
  setActiveSection: (section) => set({ activeSection: section }),
  toggleVideo: () => set((state) => ({ isVideoPlaying: !state.isVideoPlaying })),
  openBookingModal: () => set({ isBookingModalOpen: true }),
  closeBookingModal: () => set({ isBookingModalOpen: false }),
}));