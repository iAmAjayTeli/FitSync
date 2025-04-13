import { Header } from './components/layout/Header';
import { ProgressCards } from './components/dashboard/ProgressCards';
import { WeeklyChart } from './components/dashboard/WeeklyChart';
import { Achievements } from './components/dashboard/Achievements';
import { DailyTip } from './components/dashboard/DailyTip';
import { MobileNav } from './components/layout/MobileNav';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6 pb-20 md:pb-6">
        <ProgressCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <WeeklyChart />
          </div>
          <div>
            <DailyTip />
          </div>
        </div>
        
        <Achievements />
      </main>

      <MobileNav />
    </div>
  );
}

export default App;
