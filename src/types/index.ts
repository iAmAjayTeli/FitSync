export interface User {
  name: string;
  avatar: string;
}

export interface DailyStats {
  steps: number;
  caloriesBurned: number;
  activeMinutes: number;
  waterGlasses: number;
  date: string;
}

export interface Goal {
  type: 'steps' | 'calories' | 'activeMinutes';
  current: number;
  target: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
}

export interface HealthTip {
  id: string;
  message: string;
  category: 'motivation' | 'nutrition' | 'exercise' | 'wellness';
} 