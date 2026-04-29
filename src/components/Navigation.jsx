
import { useDeckStore } from '../store/useDeckStore';

export default function Navigation() {
  const { activeSection, setActiveSection } = useDeckStore();

  const navItems = [
    { id: 'intro', label: 'Overview' },
    { id: 'luxury', label: 'The Avenue' },
    { id: 'entertainment', label: 'Attractions' },
    { id: 'events', label: 'Venues & Events' },
  ];

  return (
    <nav className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === item.id 
                ? 'bg-brand-white text-brand-black' 
                : 'text-brand-white/70 hover:text-brand-white hover:bg-white/10'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}