import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/outline';

const tips = [
  {
    id: 1,
    title: "Pre-Workout Nutrition",
    tip: "Eat a balanced meal 2-3 hours before workout with complex carbs and lean protein.",
    color: "from-emerald-500/10 to-green-500/10",
    borderColor: "border-emerald-500/20",
    textColor: "text-emerald-400"
  },
  {
    id: 2,
    title: "Post-Workout Recovery",
    tip: "Consume protein within 30 minutes after exercise to support muscle recovery.",
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-400"
  },
  {
    id: 3,
    title: "Daily Hydration",
    tip: "Aim to drink at least 8 glasses of water throughout the day.",
    color: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/20",
    textColor: "text-purple-400"
  }
];

export const NutritionTips = () => {
  return (
    <motion.div 
      className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-lg shadow-purple-500/10 p-6 h-full border border-slate-700/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
        <SparklesIcon className="w-6 h-6 text-emerald-400" />
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
            className={`p-4 rounded-xl bg-gradient-to-r ${tip.color} relative overflow-hidden border ${tip.borderColor}`}
          >
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              <h3 className={`font-semibold ${tip.textColor} mb-2`}>{tip.title}</h3>
              <p className="text-slate-300/80 text-sm">{tip.tip}</p>
            </motion.div>

            <motion.div
              className={`absolute bottom-2 right-2 ${tip.textColor} opacity-10`}
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