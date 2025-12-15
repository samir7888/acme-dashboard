import { SEGMENTATION_DATA } from '../../constants/dashboardData'
import ChannelRow from './ChannelRow';

import { motion } from 'framer-motion';
export const SalesSegmentationCard = () => {
    const { totalCustomers, segments, channels } = SEGMENTATION_DATA;
    return (
        <div className="lg:w-[38%] flex-col space-y-3 bg-white border p-8 border-[#eeeeee] rounded-xl">
            <h3 className="text-md text-gray-500 font-medium">Segmentation</h3>
            <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">{totalCustomers.toLocaleString()}</span>
                <span className="text-sm text-gray-400">total customers</span>

            </div>


            <div className='flex space-x-1 h-3 w-full overflow-hidden mb-4'
                role='progress'
                aria-label='Customer Segmentation'>
                {
                    segments.map((segment) => (
                        <div key={segment.label}
                            className={`${segment.color} rounded-full`}
                            style={{ width: `${segment.percentage}%` }}
                        />
                    ))
                }
            </div>

            {/* Legend */}
            <div className='flex justify-evenly w-full'>
                {
                    SEGMENTATION_DATA.segments.map((segment) => (
                        <div className='flex items-center gap-2'>
                            <div className={`w-2 h-2 rounded-full ${segment.color}`} />

                            <span className='font-mono text-gray-500'>{segment.label}</span>
                        </div>
                    ))
                }
            </div>

            {/* Channel */}

            <div className='flex-1'>
                <div className='flex items-center mt-12 justify-between font-medium text-gray-400'>
                    <span>Channels</span>
                    <div className='flex items-center gap-6'>
                        <span>Number</span>
                        <span>Total</span>
                    </div>

                </div>
                <div className="space-y-1 mt-4">
                    {channels.map((channel, index) => (
                        <ChannelRow key={channel.name} {...channel} index={index} />
                    ))}
                </div>

            </div>
            <motion.button
                className="w-full mt-6 py-2 border border-[#eeeeee] rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                whileTap={{ scale: 0.98 }}
                aria-label="View full reports"
            >
                Full reports
            </motion.button>

        </div>
    )
}
