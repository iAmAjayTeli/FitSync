import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { weeklyStats } from '../../data/mockData';
import dayjs from 'dayjs';

type MetricType = 'steps' | 'caloriesBurned' | 'activeMinutes';

const metricConfig = {
  steps: {
    label: 'Steps',
    color: '#3b82f6',
    formatter: (value: number) => value.toLocaleString(),
  },
  caloriesBurned: {
    label: 'Calories',
    color: '#f97316',
    formatter: (value: number) => `${value} cal`,
  },
  activeMinutes: {
    label: 'Active Minutes',
    color: '#22c55e',
    formatter: (value: number) => `${value} min`,
  },
};

export const WeeklyChart = () => {
  const [activeMetric, setActiveMetric] = useState<MetricType>('steps');

  const data = weeklyStats.map((stat) => ({
    ...stat,
    day: dayjs(stat.date).format('ddd'),
  }));

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Weekly Activity</h2>
        <div className="flex gap-2">
          {(Object.keys(metricConfig) as MetricType[]).map((metric) => (
            <button
              key={metric}
              onClick={() => setActiveMetric(metric)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${
                  activeMetric === metric
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              {metricConfig[metric].label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="day"
              tick={{ fill: '#6b7280' }}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis
              tick={{ fill: '#6b7280' }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickFormatter={metricConfig[activeMetric].formatter}
            />
            <Tooltip
              formatter={(value: number) =>
                metricConfig[activeMetric].formatter(value)
              }
            />
            <Bar
              dataKey={activeMetric}
              fill={metricConfig[activeMetric].color}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}; 