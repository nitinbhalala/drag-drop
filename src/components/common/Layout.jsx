import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LeftSideBar from '../LeftSidebar';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const isWindowsDevice = process.browser && window.navigator.platform.includes('Win');

    return (
        <div className="flex min-h-screen">
            {/* Toggle Button for Mobile */}
            <motion.button
                className={`fixed z-50 block p-2 text-white bg-gray-800 rounded md:hidden ${isWindowsDevice ? 'left-4' : 'right-4'
                    }`}
                onClick={toggleSidebar}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                {isSidebarOpen ? 'Close' : 'Open'}
            </motion.button>

            {/* Left Sidebar */}
            <motion.div
                className={`w-1/3 md:w-1/4 bg-gray-200 p-4 ${isSidebarOpen ? 'block' : 'hidden'
                    } md:block`}
                initial={{ x: isWindowsDevice ? '-100%' : '100%' }}
                animate={{ x: 0 }}
                exit={{ x: isWindowsDevice ? '-100%' : '100%' }}
                transition={{ duration: 0.3 }}
            >
                <LeftSideBar />
            </motion.div>

            {/* Body Content */}
            <div className="w-full p-4 md:w-3/4">
                {children}
            </div>
        </div>
    );
};

export default Layout;
