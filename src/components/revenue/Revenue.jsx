import { Select } from "antd"
import Chart from "../chart/Chart"
import BreakupChart from "../chart/BreakupChart"
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import Areacharts from "../chart/Areacharts";

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
                            defaultValue="lucy"
                            style={{
                                width: 120,
                            }}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },

                            ]}
                        />
                    </div>
                </div>

                <div className="flex">
                    <div className="w-[500px] h-[300px] mt-8">
                        <Chart />
                    </div>
                    <div className="bg-white shadow-sm">
                        <p>HEllo</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="bg-white rounded-md shadow-sm grid p-8 grid-cols-2">
                    <div className="">
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
                    <div className="w-[200px] h-[200px]">
                        <BreakupChart />
                    </div>
                </div>
                <div className="bg-white rounded-md shadow-sm grid p-8">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold">Monthly Earnings</p>
                        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#49BEFF]">
                            <FaDollarSign color="#fff"/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-2xl font-bold">$6,820</p>
                    </div>
                    <div>
                        <Areacharts/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Revenue
