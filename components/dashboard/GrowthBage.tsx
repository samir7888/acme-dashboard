import React from 'react';
import { motion } from 'framer-motion';
import type { GrowthBadgeData } from '../../constants/dashboardData';

export interface GrowthBadgeProps extends GrowthBadgeData {
    index?: number;
}


export const GrowthBadge: React.FC<GrowthBadgeProps> = React.memo(({ label, value, index = 0 }) => {
    const isPositive = value > 0;

    return (
        <motion.div
            className="flex flex-col border border-[#eeeeee] rounded-lg p-3 min-w-31.25 bg-white hover-scale"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
            aria-label={`${label}: ${isPositive ? '+' : ''}${value}%`}
        >
            <span className="text-xs text-gray-500 tracking-tight font-mono mb-1">{label}</span>
            <span className={`text-xs font-semibold flex items-center gap-1 font-mono ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {isPositive ? '+' : ''}{value}% {isPositive ? '↑' : '↓'}
            </span>
        </motion.div>
    );
});

GrowthBadge.displayName = 'GrowthBadge';
