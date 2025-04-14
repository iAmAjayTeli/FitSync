import { motion } from 'framer-motion';
import { todayStats, goals } from '../../data/mockData';
import {
  ChartBarIcon,
  FireIcon,
  ClockIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';

const ProgressCard = ({
  title,
  value,
  target,
  icon: Icon,
  color,
  progressColor,
}: {
  title: string;
  value: number;
  target: number;
  icon: any;
  color: string;
  progressColor: string;
}) => {
  const progress = Math.min((value / target) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-4 shadow-sm"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-medium text-gray-700">{title}</h3>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-2xl font-bold">{value.toLocaleString()}</p>
          <p className="text-sm text-gray-500">of {target.toLocaleString()}</p>
        </div>
        <div className="w-16 h-16 relative">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#eee"
              strokeWidth="3"
            />
            <motion.path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={progressColor}
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProgressCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <ProgressCard
        title="Steps"
        value={todayStats.steps}
        target={goals.find(g => g.type === 'steps')?.target || 10000}
        icon={ChartBarIcon}
        color="bg-blue-500"
        progressColor="#3b82f6"
      />
      <ProgressCard
        title="Calories"
        value={todayStats.caloriesBurned}
        target={goals.find(g => g.type === 'calories')?.target || 500}
        icon={FireIcon}
        color="bg-orange-500"
        progressColor="#f97316"
      />
      <ProgressCard
        title="Active Minutes"
        value={todayStats.activeMinutes}
        target={goals.find(g => g.type === 'activeMinutes')?.target || 60}
        icon={ClockIcon}
        color="bg-green-500"
        progressColor="#22c55e"
      />
      <ProgressCard
        title="Water Intake"
        value={todayStats.waterGlasses}
        target={8}
        icon={BeakerIcon}
        color="bg-cyan-500"
        progressColor="#06b6d4"
      />
    </div>
  );
}; 