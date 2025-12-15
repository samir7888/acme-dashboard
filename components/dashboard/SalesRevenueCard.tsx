import { SALES_REVENUE_DATA } from "../../constants/dashboardData";
import { ArrowDown2, ArrowUp2 } from "../ui/Icons";
import { GrowthBadge } from "../dashboard/GrowthBage"
import {RevenueChart} from "../charts/RevenueChart";
export const SalesRevenueCard = () => {
    const { value, growth, timeframe, growthBadges } = SALES_REVENUE_DATA;
    const isPositive = growth > 0;
    return (
        <div className="flex-1 bg-white border p-8 border-[#eeeeee] rounded-xl">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h3 className="font-medium text-gray-500 text-sm mb-1">Sales Revenue</h3>
                    <div>
                        <span className="text-3xl font-semibold text-gray-900 font-mono mb-1">{value}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">

                        <span
                            className={`flex items-center gap-0.5 font-mono ${isPositive ? "text-green-500" : "text-red-500"
                                }`}
                        >
                            {Math.abs(growth)}%
                            {isPositive ? (
                                <ArrowUp2 className="w-4 h-4 text-green-500" aria-hidden="true" />
                            ) : (
                                <ArrowDown2 className="w-4 h-4 text-red-500" aria-hidden="true" />
                            )}
                            <span className="text-gray-400 font-mono">vs {timeframe}</span>
                        </span>
                    </div>
                </div>



                <div className="flex gap-3">
                    {growthBadges.map((badge, index) => (
                        <GrowthBadge key={index} {...badge} index={index} />
                    ))}
                </div>


            </div>
            <RevenueChart />
        </div>
    );
};
