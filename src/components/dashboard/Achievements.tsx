import { motion } from 'framer-motion';
import { achievements } from '../../data/mockData';

const AchievementCard = ({
  title,
  description,
  icon,
  earned,
  earnedDate,
}: {
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`p-4 rounded-xl ${
        earned ? 'bg-white' : 'bg-gray-50'
      } shadow-sm relative overflow-hidden`}
    >
      {earned && (
        <div className="absolute top-2 right-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Earned
          </span>
        </div>
      )}
      <div className="flex items-start gap-4">
        <div
          className={`text-2xl ${
            earned ? 'opacity-100' : 'opacity-50'
          }`}
        >
          {icon}
        </div>
        <div>
          <h3
            className={`font-medium ${
              earned ? 'text-gray-900' : 'text-gray-500'
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm ${
              earned ? 'text-gray-600' : 'text-gray-400'
            }`}
          >
            {description}
          </p>
          {earned && earnedDate && (
            <p className="text-xs text-gray-500 mt-1">
              Earned on {new Date(earnedDate).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Achievements = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Achievements
        </h2>
        <span className="text-sm text-gray-500">
          {achievements.filter((a) => a.earned).length} of{' '}
          {achievements.length} earned
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} {...achievement} />
        ))}
      </div>
    </div>
  );
}; 