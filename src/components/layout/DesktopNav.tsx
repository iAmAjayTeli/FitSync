import { motion } from 'framer-motion';
import {
  HomeIcon,
  ChartBarIcon,
  UserIcon,
  CalendarIcon,
  Cog6ToothIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface DesktopNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navItems = [
  { icon: HomeIcon, label: 'Dashboard', isActive: true },
  { icon: ChartBarIcon, label: 'Progress' },
  { icon: CalendarIcon, label: 'Schedule' },
  { icon: UserIcon, label: 'Profile' },
  { icon: Cog6ToothIcon, label: 'Settings' },
];

export const DesktopNav = ({ isOpen, onToggle }: DesktopNavProps) => {
  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 bottom-0 w-72 bg-[#2d2b42] z-40 shadow-xl"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ 
          x: isOpen ? 0 : "-100%",
          opacity: isOpen ? 1 : 0,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
            duration: 0.5
          }
        }}
      >
        <div className="relative h-full">
          <div className="relative p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <motion.h1 
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                FitSync
              </motion.h1>
              <motion.button
                onClick={onToggle}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-[#3f3d56] text-white transition-colors hover:bg-[#4f4d66]"
              >
                <XMarkIcon className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="space-y-3 px-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all relative overflow-hidden group ${
                    item.isActive
                      ? 'bg-[#8b5cf6] text-white shadow-lg hover:bg-[#9d6ef7]'
                      : 'bg-[#2C415F] text-white hover:bg-[#375270] hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <item.icon className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110`} />
                  <span className="relative z-10 text-sm font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Daily Progress Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto p-4 rounded-lg bg-[#3f3d56] hover:bg-[#4f4d66] transition-colors"
            >
              <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                <ChartBarIcon className="w-4 h-4" />
                Daily Progress
              </h3>
              <div className="relative h-1.5 bg-[#2d2b42] rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[#8b5cf6]"
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="mt-2 flex justify-between items-center text-xs">
                <span className="text-[#a8a8b3]">Progress</span>
                <span className="text-white font-medium">65%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}; 