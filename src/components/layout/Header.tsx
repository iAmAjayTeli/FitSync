import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { user } from '../../data/mockData';
import { BellIcon, UserCircleIcon, SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/outline';

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header = ({ toggleSidebar }: HeaderProps) => {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.hour();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getGreetingIcon = () => {
    const hour = currentTime.hour();
    if (hour < 12) return (
      <div className="p-1.5 rounded-lg bg-gradient-to-br from-orange-400/20 to-yellow-400/20 border border-orange-400/30">
        <SunIcon className="w-5 h-5 text-orange-400" />
      </div>
    );
    if (hour < 17) return (
      <div className="p-1.5 rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-400/20 border border-yellow-400/30">
        <SunIcon className="w-5 h-5 text-yellow-400" />
      </div>
    );
    return (
      <div className="p-1.5 rounded-lg bg-gradient-to-br from-indigo-400/20 to-purple-400/20 border border-indigo-400/30">
        <MoonIcon className="w-5 h-5 text-indigo-400" />
      </div>
    );
  };

  return (
    <motion.header 
      className="bg-slate-800/50 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <motion.button
            onClick={toggleSidebar}
            className="p-2 rounded-lg bg-[#2C415F] text-white hover:bg-[#375270] transition-colors mr-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bars3Icon className="w-6 h-6" />
          </motion.button>

          <div className="flex items-center gap-4">
            <motion.div 
              className="relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={user.avatar}
                alt="User avatar"
                className="w-12 h-12 rounded-xl border-2 border-slate-600/50 shadow-lg shadow-purple-500/10 object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-800 shadow-lg" />
            </motion.div>
            <div>
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center gap-2"
              >
                {getGreetingIcon()}
                <span>{getGreeting()}, {user.name}!</span>
              </motion.h1>
              <p className="text-slate-400 text-sm">
                {currentTime.format('dddd, MMMM D, YYYY')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <motion.button
              className="relative text-slate-300 hover:text-white p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-pink-500" />
            </motion.button>

            <div className="text-right pr-4">
              <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {currentTime.format('HH:mm')}
              </p>
              <p className="text-xs text-slate-400">Local Time</p>
            </div>

            <motion.button
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <UserCircleIcon className="h-6 w-6 text-cyan-400" />
              <span className="text-slate-300 hover:text-white">Profile</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Gradient line at the bottom */}
      <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50" />
    </motion.header>
  );
}; 