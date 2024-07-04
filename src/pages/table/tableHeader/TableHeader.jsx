import { Select } from "antd"
import Modals from "../../../components/resusable/modals.jsx/Modals";
import { useState } from "react";
import AddCustomer from "../../../components/addCustomer/AddCustomer";

const TableHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="bg-white grid grid-cols-5 w-full items-center rounded-md px-10 py-4 mb-4">
            <div className="flex justify-start">
                <p className="text-sm font-medium">Customer Details</p>
            </div>
            <div className="border col-span-2  border-slate-200 rounded-md ">
                <input type="text" placeholder="search" className="outline-none w-full p-2" />
            </div>
            <div>
                <Select defaultValue="lucy" style={{ width: 120 }} />
            </div>
            <div className="flex justify-end items-center text-white rounded-md">
                <button onClick={showModal} className="bg-[#687EFF] py-2 px-2 w-[120px] rounded-md">Add</button>
            </div>
            <Modals isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <AddCustomer/>
            </Modals>
        </div>
    )
}

export default TableHeader
