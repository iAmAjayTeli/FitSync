import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { healthTips } from '../../data/mockData';
import { LightBulbIcon } from '@heroicons/react/24/outline';

export const DailyTip = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    // Change tip every 24 hours
    const savedDate = localStorage.getItem('lastTipDate');
    const today = new Date().toDateString();

    if (savedDate !== today) {
      const newIndex = Math.floor(Math.random() * healthTips.length);
      setCurrentTipIndex(newIndex);
      localStorage.setItem('lastTipDate', today);
    } else {
      const savedIndex = localStorage.getItem('currentTipIndex');
      if (savedIndex) {
        setCurrentTipIndex(parseInt(savedIndex));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentTipIndex', currentTipIndex.toString());
  }, [currentTipIndex]);

  const currentTip = healthTips[currentTipIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-white/20 rounded-lg">
          <LightBulbIcon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Daily Health Tip</h2>
          <p className="text-white/90">{currentTip.message}</p>
          <span className="inline-block mt-2 text-sm text-white/70 capitalize">
            #{currentTip.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}; 