import { Select } from "antd"
import Chart from "../chart/Chart"
import BreakupChart from "../chart/BreakupChart"
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import Areacharts from "../chart/Areacharts";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const Revenue = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-white shadow-sm col-span-2 rounded-md p-6">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-xl font-semibold">Revenue Updates</h1>
                        <p className="text-sm">Overview of Profit</p>
                    </div>
                    <div>
                        <Select
                            defaultValue="July 2024"
                            style={{
                                width: 120,
                                border: '1px solid gray',
                                backgroundColor: '#f0f0f0',
                                borderRadius: '4px',
                            }}
                            options={[
                                {
                                    value: 'May 2024',
                                    label: 'May 2024',
                                },
                                {
                                    value: 'June 2024',
                                    label: 'June 2024',
                                },
                                {
                                    value: 'July 2024',
                                    label: 'July 2024',
                                },


                            ]}
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-3">
                    <div className="w-full col-span-2 h-[300px] mt-8">
                        <Chart />
                    </div>

                    {/* revenue report card started */}

                    
                    <div className="bg-white shadow-sm h-full w-full my-2">
                        <div className="flex items-center gap-4">
                            <div className="text-xl bg-[#ECF2FF] h-12 w-12 flex items-center ">
                                <MdOutlineDashboardCustomize className="text-[#365bb2] mx-2 text-3xl" />
                            </div>
                            <div className="">
                                <p className="text-xl font-bold mb-2">$36,358</p>
                                <p className="text-base font-normal mb-2">Total Earnings</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 my-3">
                            <div className="w-[10px] h-[10px] rounded-full bg-[#4570EA] "></div>
                            <div>

                                <p className="text-base font-normal mb-2">Earnings this month</p>
                                <p className="text-xl font-semibold mb-2">$26,30</p>
                            </div>
                        </div>
                        <div className="flex  gap-8 my-3">
                            <div className="w-[10px] h-[10px] rounded-full bg-[#4570EA]"></div>
                            <div>
                                <p className="text-base font-normal mb-2">Expense this month</p>
                                <p className="text-xl font-semibold mb-2">$2,358</p>
                            </div>
                        </div>
                        <button className="bg-[#4570EA] w-full text-white p-2 rounded-lg flex justify-center text-base">
                            View Full Report
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col gap-4">
                <div className="bg-white  rounded-md shadow-sm grid p-8 lg:grid-cols-2">
                    <div className="w-full">
                        <p className="text-xl font-semibold mb-4">Yearly Breakup</p>
                        <div>
                            <p className="text-2xl font-bold mb-2">$36,358</p>
                            <div className="flex gap-2">
                                <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#E6FFFA]">
                                    <FaArrowTrendUp color="#4ee3c5" />
                                </div>
                                <p>+9%
                                    <span className="text-[#777] text-sm ml-2">  last year</span></p>
                            </div>

                        </div>
                        <div className="flex gap-2">
                            <div className="flex gap-2 item-center">
                                <div className="w-[10px] h-[10px] rounded-full bg-green-400"></div>
                                <p>2023</p>
                            </div>
                            <p>2024</p>

                        </div>
                    </div>
                    <div className="w-full h-[200px]">
                        <BreakupChart />
                    </div>
                </div>
                <div className="bg-white rounded-md shadow-sm grid p-8">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold">Monthly Earnings</p>
                        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#49BEFF]">
                            <FaDollarSign color="#fff" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-2xl font-bold">$6,820</p>
                    </div>
                    <div>
                        <Areacharts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Revenue
