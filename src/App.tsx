import { useState } from 'react';
import { Header } from './components/layout/Header';
import { ProgressCards } from './components/dashboard/ProgressCards';
import { WeeklyChart } from './components/dashboard/WeeklyChart';
import { Achievements } from './components/dashboard/Achievements';
import { DailyTip } from './components/dashboard/DailyTip';
import { MobileNav } from './components/layout/MobileNav';
import { DesktopNav } from './components/layout/DesktopNav';
import { motion } from 'framer-motion';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/40 -z-10" />
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl -z-10" />
      <div className="fixed top-[40%] right-[15%] w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-3xl -z-10" />
      
      <DesktopNav isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      
      <motion.div 
        className="md:pl-0"
        animate={{
          paddingLeft: isSidebarOpen ? '18rem' : '0rem'
        }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      >
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 pb-24 md:pb-8">
          <div className="grid gap-8">
            <ProgressCards />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 h-[400px]">
                <WeeklyChart />
              </div>
              <div className="h-[400px] flex flex-col">
                <DailyTip />
              </div>
            </div>
            
            <Achievements />
          </div>
        </main>

        <MobileNav />
      </motion.div>
    </div>
  );
}

export default App;
