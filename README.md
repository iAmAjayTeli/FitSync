# FitSync - Fitness Tracking Dashboard

A modern, responsive fitness tracking dashboard built with React, TypeScript, and Tailwind CSS. Track your daily fitness goals, view progress over time, and stay motivated with achievements and daily health tips.

## Features

- 📊 Real-time progress tracking for steps, calories, and active minutes
- 📈 Weekly activity visualization with interactive charts
- 🏆 Achievement system with unlockable badges
- 💡 Daily rotating health tips and motivation
- 📱 Fully responsive design with mobile navigation
- ⚡ Built with performance in mind

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- Recharts for data visualization
- Heroicons for icons
- Day.js for date handling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── components/
│   ├── dashboard/
│   │   ├── Achievements.tsx
│   │   ├── DailyTip.tsx
│   │   ├── ProgressCards.tsx
│   │   └── WeeklyChart.tsx
│   └── layout/
│       ├── Header.tsx
│       └── MobileNav.tsx
├── data/
│   └── mockData.ts
├── types/
│   └── index.ts
├── App.tsx
└── main.tsx
```

## Development

- Uses mock data for demonstration purposes
- Easily extensible for backend integration
- Mobile-first responsive design
- TypeScript for type safety
- Modern React patterns and hooks

## License

MIT
