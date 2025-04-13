import {
  HomeIcon,
  ChartBarIcon,
  TrophyIcon,
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', icon: HomeIcon, active: true },
  { label: 'Stats', icon: ChartBarIcon, active: false },
  { label: 'Goals', icon: TrophyIcon, active: false },
  { label: 'Settings', icon: Cog6ToothIcon, active: false },
];

interface DesktopNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const DesktopNav = ({ isOpen, onToggle }: DesktopNavProps) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.button
            key="menu-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggle}
            className="fixed left-6 top-6 p-3 bg-white rounded-xl shadow-lg text-gray-500 hover:text-indigo-600 transition-all duration-200 z-50 hidden md:flex items-center gap-2"
            style={{
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Bars3Icon className="w-6 h-6" />
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="text-sm font-medium overflow-hidden whitespace-nowrap"
            >
              Menu
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.nav
        initial={false}
        animate={{
          width: isOpen ? '18rem' : '0rem',
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : -40,
        }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        className={`hidden md:block fixed left-0 top-0 bottom-0 bg-white/95 border-r border-gray-100 shadow-lg backdrop-blur-lg overflow-hidden`}
      >
        <div className="flex flex-col h-full p-6 relative">
          {/* Close button */}
          <AnimatePresence>
            {isOpen && (
              <motion.button
                key="close-button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={onToggle}
                className="absolute right-4 top-4 p-2 rounded-lg text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <XMarkIcon className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 pt-12"
          >
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-1"
                >
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    FitSync
                  </h2>
                  <p className="text-gray-500 text-sm">Your fitness companion</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="space-y-2">
            {navItems.map(({ label, icon: Icon, active }, index) => (
              <motion.button
                key={label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center w-full px-4 py-3.5 rounded-xl text-left transition-all duration-200 group relative overflow-hidden
                  ${
                    active
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50/80 hover:text-indigo-600'
                  }`}
              >
                <div className="relative z-10 flex items-center w-full">
                  <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                    active ? '' : 'group-hover:text-indigo-600'
                  }`} />
                  <AnimatePresence>
                    {isOpen && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        className="font-medium ml-3 whitespace-nowrap overflow-hidden"
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {active && isOpen && (
                    <motion.div
                      layoutId="active-nav-indicator"
                      className="ml-auto w-2 h-2 rounded-full bg-white"
                    />
                  )}
                </div>
                {active && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-auto"
              >
                <div className="bg-gradient-to-r from-indigo-50/80 to-purple-50/80 rounded-2xl p-4 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 relative z-10">Daily Progress</h3>
                  <div className="flex items-center relative z-10">
                    <div className="relative w-12 h-12">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2.5"/>
                        <motion.circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          className="stroke-current text-indigo-500"
                          strokeWidth="2.5"
                          strokeDasharray="100"
                          strokeDashoffset="25"
                          transform="rotate(-90 18 18)"
                          initial={{ strokeDashoffset: 100 }}
                          animate={{ strokeDashoffset: 25 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-indigo-600">
                        75%
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="text-xs text-gray-500">Keep going!</p>
                      <p className="text-sm font-medium text-gray-900">You're doing great today</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}; 