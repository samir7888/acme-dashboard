import { DashboardHeader } from '../dashboard/DashboardHeader'
import { DASHBOARD_HEADER_DATA, KPI_DATA } from '../../constants/dashboardData';
import { KPICard } from '../dashboard/KpiCard';
import { SalesRevenueCard } from '../dashboard/SalesRevenueCard';
import { SalesSegmentationCard } from '../dashboard/SalesSegmentationCard'
import { motion } from 'framer-motion'
import LeadsStatusCard from './LeadsStatusCard';
import { WebVisitsCard } from '../dashboard/WebVisitsCard'
export const Dashboard = () => {
    return (
        <div className="ml-64 flex-1 bg-white min-h-screen">
            <DashboardHeader {...DASHBOARD_HEADER_DATA} />

            <div className="p-8 space-y-8 max-w-400 mx-auto">

                {/* KPI */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden rounded-3xl border border-[#eeeeee] bg-white'>
                    {
                        KPI_DATA.map((kpi, index) => (
                            <KPICard key={index} {...kpi} isFirst={index === 0} isLast={index === KPI_DATA.length - 1} index={index} />
                        ))
                    }
                </div>

                <div className='flex flex-col lg:flex-row gap-6'>
                    <SalesRevenueCard />
                    <SalesSegmentationCard />

                </div>

                {/* Row 3: Leads Status & Web Visits */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <LeadsStatusCard />
                    <WebVisitsCard />
                </motion.div>

            </div>
        </div>
    )
}
