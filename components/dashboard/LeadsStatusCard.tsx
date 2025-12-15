import React from 'react'
import { LEADS_STATUS_DATA } from '../../constants/dashboardData';
import StatusRow from './StatusRow';

const LeadsStatusCard = () => {
    const { totalInPipeline, statuses } = LEADS_STATUS_DATA;
    return (
        <div className="lg:col-span-5 bg-white p-8 rounded-xl border  border-[#eeeeee]">

            <h3 className='text-sm font-medium text-gray-500 tracking-wide mb-4'>Leads by Status</h3>
            <div className='flex items-baseline gap-2 mb-5'>
                <span className='text-3xl tracking-tight font-bold text-gray-900'>{totalInPipeline.toLocaleString()}</span>
                <span className='text-gray-400 tracking-tight'>in pipeline</span>
            </div>

            {/* Status Row */}

            <div className='space-y-4'>
                  {
                    statuses.map((status, index) => (
                        <StatusRow key={status.label} {...status} index={index} />
                    ))
                  }
            </div>


        </div>
    )
}

export default LeadsStatusCard