import {
  HomeIcon,
  ChartBarIcon,
  TrophyIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  { label: 'Home', icon: HomeIcon, active: true },
  { label: 'Stats', icon: ChartBarIcon, active: false },
  { label: 'Goals', icon: TrophyIcon, active: false },
  { label: 'Settings', icon: Cog6ToothIcon, active: false },
];

export const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1
              ${active ? 'text-indigo-600' : 'text-gray-600'}`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}; 