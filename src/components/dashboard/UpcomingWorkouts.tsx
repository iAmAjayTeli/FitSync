import { motion } from 'framer-motion';
import { ClockIcon } from '@heroicons/react/24/outline';

const workouts = [
  {
    id: 1,
    name: "Full Body Strength",
    time: "Tomorrow, 9:00 AM",
    duration: "45 min",
    intensity: "Medium",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-400"
  },
  {
    id: 2,
    name: "HIIT Cardio",
    time: "Wednesday, 10:30 AM",
    duration: "30 min",
    intensity: "High",
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/20",
    textColor: "text-orange-400"
  },
  {
    id: 3,
    name: "Yoga Flow",
    time: "Thursday, 8:00 AM",
    duration: "60 min",
    intensity: "Low",
    color: "from-green-500/20 to-teal-500/20",
    borderColor: "border-green-500/20",
    textColor: "text-green-400"
  }
];

export const UpcomingWorkouts = () => {
  return (
    <motion.div 
      className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-lg shadow-purple-500/10 p-6 h-full border border-slate-700/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
        <ClockIcon className="w-6 h-6 text-cyan-400" />
        Upcoming Workouts
      </h2>

      <div className="space-y-4">
        {workouts.map((workout, index) => (
          <motion.div
            key={workout.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`p-4 rounded-xl bg-gradient-to-r ${workout.color} relative overflow-hidden border ${workout.borderColor}`}
          >
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-r ${workout.color} opacity-0 group-hover:opacity-20 transition-opacity`}
            />
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className={`font-semibold ${workout.textColor}`}>{workout.name}</h3>
                <p className="text-slate-400 text-sm mt-1">{workout.time}</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-white">{workout.duration}</span>
                <p className="text-xs text-slate-400 mt-1">Intensity: {workout.intensity}</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-3 text-sm font-medium ${workout.textColor} hover:text-white transition-colors`}
            >
              View Details →
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}; 