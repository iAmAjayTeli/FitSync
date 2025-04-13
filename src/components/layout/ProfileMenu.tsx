import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import {
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

export const ProfileMenu = () => {
  const menuItems = [
    { label: 'My Profile', icon: UserCircleIcon },
    { label: 'My Progress', icon: ChartBarIcon },
    { label: 'My Health', icon: HeartIcon },
    { label: 'Settings', icon: Cog6ToothIcon },
    { label: 'Logout', icon: ArrowRightOnRectangleIcon },
  ];

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        as={motion.button}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2C415F] text-white hover:bg-[#375270] hover:shadow-md transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <UserCircleIcon className="h-6 w-6" />
        <span>Profile</span>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-3 w-72 origin-top-right rounded-xl bg-[#2d2b42] shadow-xl focus:outline-none">
          {/* User Info Section */}
          <div className="p-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#2C415F] flex items-center justify-center text-white font-semibold text-xl">
                  A
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Alex
                </h3>
                <p className="text-sm text-[#a8a8b3]">user@example.com</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2 space-y-1">
            {menuItems.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                      ${active 
                        ? 'bg-[#8b5cf6] text-white'
                        : 'text-[#a8a8b3] hover:text-white hover:bg-[#8b5cf6]'
                      }
                      
                      
                    `}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>

          {/* Progress Section */}
          <div className="p-4 mt-2 bg-[#1F2937] mx-2 mb-2 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-white flex items-center gap-2">
                <ChartBarIcon className="w-4 h-4" />
                Progress
              </h3>
              <span className="text-sm text-white">65%</span>
            </div>
            <div className="h-1.5 w-full bg-[#2d2b42] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#375270] rounded-full"
                style={{ width: '65%' }}
              />
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}; 