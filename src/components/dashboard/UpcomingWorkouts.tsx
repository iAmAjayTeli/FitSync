import { motion } from 'framer-motion';
import { ClockIcon } from '@heroicons/react/24/outline';

const workouts = [
  {
    id: 1,
    name: "Full Body Strength",
    time: "Tomorrow, 9:00 AM",
    duration: "45 min",
    intensity: "Medium",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 2,
    name: "HIIT Cardio",
    time: "Wednesday, 10:30 AM",
    duration: "30 min",
    intensity: "High",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 3,
    name: "Yoga Flow",
    time: "Thursday, 8:00 AM",
    duration: "60 min",
    intensity: "Low",
    color: "from-green-500 to-teal-500"
  }
];

export const UpcomingWorkouts = () => {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <ClockIcon className="w-6 h-6 text-indigo-500" />
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
            className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden group"
          >
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-r ${workout.color} opacity-0 group-hover:opacity-10 transition-opacity`}
            />
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{workout.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{workout.time}</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-gray-900">{workout.duration}</span>
                <p className="text-xs text-gray-500 mt-1">Intensity: {workout.intensity}</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-3 text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              View Details →
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}; 