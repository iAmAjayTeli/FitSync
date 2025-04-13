import { motion } from 'framer-motion';
import { CalendarDaysIcon, FireIcon, TrophyIcon } from '@heroicons/react/24/outline';

export const WorkoutStreak = () => {
  const currentStreak = 7; // This would come from your actual data
  const lastWorkout = "Today"; // This would come from your actual data
  const longestStreak = 14; // This would come from your actual data

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FireIcon className="w-6 h-6 text-orange-500" />
        Workout Streak
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div 
          className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-xl p-4 text-center"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="text-4xl font-bold text-orange-500 mb-2"
          >
            {currentStreak}
          </motion.div>
          <p className="text-gray-600">Current Streak</p>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 text-center"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-center mb-2">
            <CalendarDaysIcon className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-gray-600">Last Workout</p>
          <p className="text-lg font-semibold text-blue-600">{lastWorkout}</p>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-center mb-2">
            <TrophyIcon className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-gray-600">Longest Streak</p>
          <p className="text-lg font-semibold text-purple-600">{longestStreak} days</p>
        </motion.div>
      </div>

      <div className="mt-6">
        <div className="flex gap-1 justify-between">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`h-12 w-12 rounded-lg flex items-center justify-center ${
                i < currentStreak ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-400'
              }`}
            >
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}; 