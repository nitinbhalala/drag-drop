import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineCaretDown } from 'react-icons/ai';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-4 border rounded-lg shadow-lg bg-slate-300">
            <motion.div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={toggleAccordion}
            /* whileHover={{ backgroundColor: '#E5E7EB' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }} */
            >
                <div className="flex items-center">
                    <span className="ml-2 font-bold">{title}</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <AiOutlineCaretDown />
                </motion.div>
            </motion.div>
            <motion.div
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                    transitionEnd: {
                        overflow: isOpen ? 'visible' : 'hidden',
                    },
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Accordion;
