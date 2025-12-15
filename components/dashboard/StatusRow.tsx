import React from 'react'
import { StatusData } from '../../constants/dashboardData'
import { motion } from 'framer-motion';
import { MAX_VISUAL_COUNT } from '../../utils/constants';

export interface StatusRowProps extends StatusData {
    index?: number
}

const StatusRow = ({ label, count, total, color, index = 0 }: StatusRowProps) => {
    const width = Math.min((count / MAX_VISUAL_COUNT) * 100, 100);
    return (
        <motion.div className='flex gap-3'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}

            aria-label={`${label}: ${count} out of ${total}`}>
            <span className='font-mono text-gray-500 w-24'>{label}</span>


            <div className='h-5 flex-1 rounded-2xl bg-gray-100 w-full'>
                <motion.div className={`${color} h-full rounded-2xl`}

                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 400 }}
                />
            </div>

            <span></span>
        </motion.div>
    )
}

export default StatusRow