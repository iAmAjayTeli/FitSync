import { motion } from 'framer-motion';
import { CalendarDaysIcon, FireIcon, TrophyIcon } from '@heroicons/react/24/outline';

export const WorkoutStreak = () => {
  const currentStreak = 7; // This would come from your actual data
  const lastWorkout = "Today"; // This would come from your actual data
  const longestStreak = 14; // This would come from your actual data

  return (
    <motion.div 
      className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-lg shadow-purple-500/10 p-6 h-full border border-slate-700/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
        <FireIcon className="w-6 h-6 text-orange-400" />
        Workout Streak
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div 
          className="bg-gradient-to-br from-orange-500/10 to-rose-500/10 rounded-xl p-4 text-center border border-orange-500/20"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="text-4xl font-bold text-orange-400 mb-2"
          >
            {currentStreak}
          </motion.div>
          <p className="text-orange-200/80">Current Streak</p>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-4 text-center border border-cyan-500/20"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-center mb-2">
            <CalendarDaysIcon className="w-6 h-6 text-cyan-400" />
          </div>
          <p className="text-cyan-200/80">Last Workout</p>
          <p className="text-lg font-semibold text-cyan-400">{lastWorkout}</p>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 text-center border border-purple-500/20"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-center mb-2">
            <TrophyIcon className="w-6 h-6 text-purple-400" />
          </div>
          <p className="text-purple-200/80">Longest Streak</p>
          <p className="text-lg font-semibold text-purple-400">{longestStreak} days</p>
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
              className={`h-12 w-12 rounded-lg flex items-center justify-center backdrop-blur-sm ${
                i < currentStreak 
                  ? 'bg-gradient-to-br from-orange-500 to-rose-500 text-white border border-orange-400/50' 
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700/50'
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