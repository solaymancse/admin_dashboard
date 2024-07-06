import { Select } from "antd"
import Modals from "../../../components/resusable/modals.jsx/Modals";
import { useState } from "react";
import AddCustomer from "../../../components/addCustomer/AddCustomer";
import { IoIosSearch } from "react-icons/io";

const TableHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="bg-white grid grid-cols-4  gap-8 w-full items-center rounded-md px-10 py-4 mb-4">
            <div className="flex justify-start">
                <p className="text-sm font-medium">Customer Details</p>
            </div>
           
            <div className="flex justify-between items-center border border-slate-200 py-1 rounded-md px-4">
              <input type="text" placeholder="Search" className="outline-none" />
              <IoIosSearch />
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
