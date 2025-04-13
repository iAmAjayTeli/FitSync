import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { user } from '../../data/mockData';

export const Header = () => {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 60000); // Update every minute

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
      className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 py-6 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={user.avatar}
                alt="User avatar"
                className="w-14 h-14 rounded-full border-2 border-white shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white" />
            </div>
            <div className="text-white">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold"
              >
                {getGreeting()}, {user.name}!
              </motion.h1>
              <p className="text-indigo-100 text-sm">
                {currentTime.format('dddd, MMMM D, YYYY')}
              </p>
            </div>
          </div>
          <div className="text-right text-white">
            <p className="text-3xl font-semibold">
              {currentTime.format('HH:mm')}
            </p>
            <p className="text-xs text-indigo-100">Local Time</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}; 