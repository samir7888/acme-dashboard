
import { motion } from 'framer-motion'
export const DashboardHeader = ({ title, totalLeads }: { title: string, totalLeads: string }) => {
    return (
        <motion.header className="flex items-end gap-3 px-8 py-6  border-b border-[#eeeeee] sticky top-0 bg-white/90 backdrop-blur-sm z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
        >
            <h1 className="text-2xl font-medium text-gray-700">{title}</h1>

            <span className="font-mono uppercase text-xs pb-1 tracking-wide text-gray-400"
                aria-label={`Total leads: ${totalLeads}`}
            >{totalLeads}</span>
        </motion.header>
    )
}
