import { Space, Table, Tag } from "antd";
import HomeBox from "../../../components/homeBox/HomeBox";
import { ticketBoxdata } from "../../../Data";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Tickets',
    dataIndex: 'ticket',
    key: 'ticket',
  },
  {
    title: 'Assign To',
    dataIndex: 'assignTo',
    key: 'assignTo',
    render: (assignTo) => (
      <div className="flex items-center space-x-2">
        <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src={assignTo.image} alt="" />
        </div>
        <p className="text-xs font-semibold">{assignTo.name}</p>
      </div>
    ),
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (status) => (
      <>
        <Tag color={status === "Close" ? "green" : status === "Open" ? "blue" : "red"}>{status}</Tag>
      </>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a><FaRegEdit className='text-green-800' /></a>
        <a><RiDeleteBin6Line className='text-red-500' /></a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    id: '1',
    ticket: "Sed ut perspiciatis unde omnis iste",
    address: 'New York No. 1 Lake Park',
    status: "Close",
    assignTo: {
      name: 'Dilshad Jahin',
      image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157722/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash_uftkdg.jpg",
    }
  },
  {
    key: '2',
    id: '2',
    ticket: "Sed ut perspiciatis unde omnis iste",
    address: 'London No. 1 Lake Park',
    status: 'Pending',
    assignTo: {
      name: 'Daisy Jahin',
      image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157721/linkedin-sales-solutions-pAtA8xe_iVM-unsplash_e4svmu.jpg",
    }
  },
  {
    key: '3',
    id: '3',
    ticket: "Sed ut perspiciatis unde omnis iste",
    address: 'Sydney No. 1 Lake Park',
    status: 'Open',
    assignTo: {
      name: 'Mehzin Jahin',
      image: "https://res.cloudinary.com/dba7qvc2l/image/upload/v1720157722/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash_uftkdg.jpg",
    }
  },
];

export default function Tickets() {
  return (
    <div className="max-w-5xl mx-auto">

      <HomeBox data={ticketBoxdata} grid="grid md:grid-cols-2 xl:grid-cols-4" />

      <div className="mt-6" >
        <Table columns={columns} dataSource={data} />
      </div>

    </div>
  )
}
