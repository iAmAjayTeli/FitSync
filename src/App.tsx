import { useState } from 'react';
import { Header } from './components/layout/Header';
import { ProgressCards } from './components/dashboard/ProgressCards';
import { WeeklyChart } from './components/dashboard/WeeklyChart';
import { Achievements } from './components/dashboard/Achievements';
import { DailyTip } from './components/dashboard/DailyTip';
import { MobileNav } from './components/layout/MobileNav';
import { DesktopNav } from './components/layout/DesktopNav';
import { WorkoutStreak } from './components/dashboard/WorkoutStreak';
import { UpcomingWorkouts } from './components/dashboard/UpcomingWorkouts';
import { NutritionTips } from './components/dashboard/NutritionTips';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-400/10 via-transparent to-transparent -z-10" />
      
      {/* Animated orbs with new colors */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="fixed top-[10%] left-[5%] w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        className="fixed top-[40%] right-[15%] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        className="fixed bottom-[20%] left-[30%] w-[300px] h-[300px] bg-pink-500/30 rounded-full blur-3xl -z-10"
      />
      
      {/* Animated grid background */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10" />
      
      <DesktopNav isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      
      <motion.div 
        className="md:pl-0"
        animate={{
          paddingLeft: isSidebarOpen ? '18rem' : '0rem'
        }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      >
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 pb-24 md:pb-8"
        >
          <motion.div 
            className="grid gap-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-semibold mb-4 text-white">Today's Progress</h2>
              <ProgressCards />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <WorkoutStreak />
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              <motion.div 
                className="lg:col-span-2"
                variants={itemVariants}
              >
                <WeeklyChart />
              </motion.div>
              <motion.div 
                className="lg:col-span-1"
                variants={itemVariants}
              >
                <DailyTip />
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <UpcomingWorkouts />
              </motion.div>
              <motion.div variants={itemVariants}>
                <NutritionTips />
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Achievements />
            </motion.div>
          </motion.div>
        </motion.main>

        <MobileNav />
      </motion.div>

      {/* Decorative elements */}
      <div className="fixed top-0 right-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-80" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.8, 0.4, 0.8] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
      />
    </div>
  );
}

export default App;
