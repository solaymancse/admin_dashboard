import { Link } from "react-router-dom";
// import BreakupChart from "../../../components/chart/BreakupChart";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";


export default function Tickets() {
  return (
    <div className="bg-white">

      {/* tickets header */}

      <div className="flex justify-between  p-6 rounded-md">
        <div className="">
          <h2 className="text-black font-semibold md:text-2xl text-lg">Ticket Apps</h2>
          <Link className="text-grey-400 md:text-lg text-xs">Home - </Link> <Link className="text-grey-400 md:text-lg text-xs">Tickets</Link>
        </div>
        <div className="flex gap-6">

          <button className="bg-[#687EFF] btn text-white text-sm rounded-md"> My Tickets</button>
          <button className="bg-[#687EFF] btn text-white   rounded-md">Create</button>
        </div>
      </div>

      {/* ticket body */}

      <div className="grid md:grid-cols-2 gap-6 px-6 ">
        <div className="bg-blue-950 h-[160px] xl:w-[400px] rounded-md">
          <h3 className="text-xl  font-semibold mx-4 mt-4 text-white" >435</h3>
          <p className="text-sm font-normal mx-4 text-[#8483AA]">Resolved Tickets </p>

          <div className="mt-10">

            <div className="flex justify-between">
              <p className="text-sm font-normal mx-4 text-[#8483AA]">136 Pending </p>
              <p className="text-sm font-normal mx-4 text-[#8483AA]">68% </p>

            </div>

            <progress className="progress progress-secondary w-56 mx-4" value="100" max="100"></progress>
          </div>

        </div>
        <div>
          <div className="bg-white  rounded-md shadow-sm grid  lg:grid-cols-2">
            <div className="w-full">

              <div>
                <div className="flex gap-4">
                  <p className="text-2xl font-bold mb-2">$36,358</p>
                  <div className="w-[80px] h-[30px] flex justify-center items-center rounded-md bg-[#E6FFFA]">
                    <FaArrowUp color="#52C770" />
                    <p className="text-[#52C770]">2.2%</p>
                  </div>
                </div>

                <div>
                <p className="text-base font-semibold my-2 text-[#aaa8cb]"> Pending Tickets in March </p>
                </div>

                <div className="flex gap-2">
                  <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#E6FFFA]">
                    <FaArrowTrendUp color="#4ee3c5" />
                  </div>
                  <p>+9%
                    <span className="text-[#777] text-sm ml-2">  last year</span></p>
                </div>

              </div>
              <div className="flex gap-2 my-2">
                <div className="flex gap-2 item-center">
                  <div className="w-[10px] h-[10px] rounded-full bg-green-400"></div>
                  <p>2023</p>
                </div>
                <p>2024</p>

              </div>
            </div>
            {/* <div className="w-full h-[200px]">
              <BreakupChart />
            </div> */}
          </div>
        </div>
      </div>


    </div>
  )
}
