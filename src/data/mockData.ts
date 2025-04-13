import { User, DailyStats, Goal, Achievement, HealthTip } from '../types';
import dayjs from 'dayjs';

export const user: User = {
  name: 'Alex',
  avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Alex&backgroundColor=ffdfbf&textureChance=100&radius=50',
};

export const todayStats: DailyStats = {
  steps: 8432,
  caloriesBurned: 420,
  activeMinutes: 45,
  waterGlasses: 5,
  date: dayjs().format('YYYY-MM-DD'),
};

export const weeklyStats: DailyStats[] = Array.from({ length: 7 }, (_, i) => ({
  steps: Math.floor(Math.random() * 12000) + 2000,
  caloriesBurned: Math.floor(Math.random() * 600) + 200,
  activeMinutes: Math.floor(Math.random() * 120) + 10,
  waterGlasses: Math.floor(Math.random() * 8) + 2,
  date: dayjs().subtract(6 - i, 'day').format('YYYY-MM-DD'),
}));

export const goals: Goal[] = [
  { type: 'steps', current: 8432, target: 10000 },
  { type: 'calories', current: 420, target: 500 },
  { type: 'activeMinutes', current: 45, target: 60 },
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: '10k Steps',
    description: 'Walked 10,000 steps in a single day',
    icon: '👣',
    earned: true,
    earnedDate: '2024-04-10',
  },
  {
    id: '2',
    title: 'Early Bird',
    description: 'Completed a workout before 7 AM',
    icon: '🌅',
    earned: true,
    earnedDate: '2024-04-12',
  },
  {
    id: '3',
    title: 'Calorie Crusher',
    description: 'Burned 500+ calories in a day',
    icon: '🔥',
    earned: false,
  },
];

export const healthTips: HealthTip[] = [
  {
    id: '1',
    message: 'Stay hydrated! Aim to drink water before you feel thirsty.',
    category: 'wellness',
  },
  {
    id: '2',
    message: 'A 10-minute walk can boost your energy and mood!',
    category: 'exercise',
  },
  {
    id: '3',
    message: "You're doing great! Keep pushing towards your goals.",
    category: 'motivation',
  },
]; 