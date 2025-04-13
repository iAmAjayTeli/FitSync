import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { user } from '../../data/mockData';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const Header = ({ toggleSidebar, isSidebarOpen }: HeaderProps) => {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.hour();
    if (hour < 12) return '👋 Good Morning';
    if (hour < 17) return '☀️ Good Afternoon';
    return '🌙 Good Evening';
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/95 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSidebar}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors md:hidden"
            >
              <Bars3Icon className="w-6 h-6" />
            </motion.button>
            
            <motion.div 
              className="relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={user.avatar}
                alt="User avatar"
                className="w-12 h-12 rounded-xl border-2 border-white shadow-sm object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm" />
            </motion.div>
            <div>
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl font-bold text-gray-900"
              >
                {getGreeting()}, {user.name}!
              </motion.h1>
              <p className="text-gray-500 text-sm">
                {currentTime.format('dddd, MMMM D, YYYY')}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <BellIcon className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </motion.button>
            
            <div className="text-right">
              <p className="text-2xl font-semibold text-indigo-600">
                {currentTime.format('HH:mm')}
              </p>
              <p className="text-xs text-gray-500">Local Time</p>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}; 