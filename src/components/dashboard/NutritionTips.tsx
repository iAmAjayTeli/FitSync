import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/outline';

const tips = [
  {
    id: 1,
    title: "Pre-Workout Nutrition",
    tip: "Eat a balanced meal 2-3 hours before workout with complex carbs and lean protein.",
    color: "from-green-100 to-emerald-50"
  },
  {
    id: 2,
    title: "Post-Workout Recovery",
    tip: "Consume protein within 30 minutes after exercise to support muscle recovery.",
    color: "from-blue-100 to-indigo-50"
  },
  {
    id: 3,
    title: "Daily Hydration",
    tip: "Aim to drink at least 8 glasses of water throughout the day.",
    color: "from-purple-100 to-pink-50"
  }
];

export const NutritionTips = () => {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <SparklesIcon className="w-6 h-6 text-emerald-500" />
        Nutrition Tips
      </h2>

      <div className="grid gap-4">
        {tips.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className={`p-4 rounded-xl bg-gradient-to-r ${tip.color} relative overflow-hidden`}
          >
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.tip}</p>
            </motion.div>

            <motion.div
              className="absolute bottom-2 right-2 opacity-10 text-gray-900"
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: index * 0.2 + 0.4 }}
            >
              <SparklesIcon className="w-12 h-12" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}; 