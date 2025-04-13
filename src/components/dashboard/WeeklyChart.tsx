import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';
import { weeklyStats } from '../../data/mockData';
import dayjs from 'dayjs';

type MetricType = 'steps' | 'caloriesBurned' | 'activeMinutes';

const metricConfig = {
  steps: {
    label: 'Steps',
    color: '#4f46e5',
    gradient: ['#4f46e5', '#6366f1'],
    formatter: (value: number) => value.toLocaleString(),
  },
  caloriesBurned: {
    label: 'Calories',
    color: '#f97316',
    gradient: ['#f97316', '#fb923c'],
    formatter: (value: number) => `${value} cal`,
  },
  activeMinutes: {
    label: 'Active Minutes',
    color: '#22c55e',
    gradient: ['#22c55e', '#4ade80'],
    formatter: (value: number) => `${value} min`,
  },
};

export const WeeklyChart = () => {
  const [activeMetric, setActiveMetric] = useState<MetricType>('steps');
  const [hoveredMetric, setHoveredMetric] = useState<MetricType | null>(null);

  const data = weeklyStats.map((stat) => ({
    ...stat,
    day: dayjs(stat.date).format('ddd'),
  }));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-sm h-full"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-xl font-semibold text-gray-900">Weekly Activity</h2>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
          {(Object.keys(metricConfig) as MetricType[]).map((metric) => (
            <motion.button
              key={metric}
              onClick={() => setActiveMetric(metric)}
              onMouseEnter={() => setHoveredMetric(metric)}
              onMouseLeave={() => setHoveredMetric(null)}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  activeMetric === metric
                    ? 'text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              style={{
                background: activeMetric === metric 
                  ? `linear-gradient(to right, ${metricConfig[metric].gradient[0]}, ${metricConfig[metric].gradient[1]})`
                  : undefined
              }}
            >
              <span className={`relative z-10 ${activeMetric === metric ? 'text-white' : ''}`}>
                {metricConfig[metric].label}
              </span>
              {hoveredMetric === metric && activeMetric !== metric && (
                <motion.div
                  layoutId="metric-hover"
                  className="absolute inset-0 bg-gray-50 rounded-lg -z-0"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="h-[300px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
            <defs>
              {(Object.keys(metricConfig) as MetricType[]).map((metric) => (
                <linearGradient key={metric} id={`gradient-${metric}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={metricConfig[metric].gradient[0]} stopOpacity={0.8}/>
                  <stop offset="100%" stopColor={metricConfig[metric].gradient[1]} stopOpacity={0.3}/>
                </linearGradient>
              ))}
            </defs>
            <XAxis
              dataKey="day"
              tick={{ fill: '#6b7280' }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#6b7280' }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              tickFormatter={metricConfig[activeMetric].formatter}
            />
            <Tooltip
              formatter={(value: number) => metricConfig[activeMetric].formatter(value)}
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
            />
            <Bar
              dataKey={activeMetric}
              fill={`url(#gradient-${activeMetric})`}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}; 