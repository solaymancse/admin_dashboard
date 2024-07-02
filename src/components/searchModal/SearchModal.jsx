import { Modal } from 'antd';
import { func } from 'prop-types';
import { IoIosSearch } from 'react-icons/io';

const SearchModal = ({ isModalOpen, setIsModalOpen }) => {

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>

            <Modal footer={null}  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="flex mt-8 items-center justify-between border border-slate-200 py-2 rounded-md px-6">
                    <input type="text" placeholder="Search" className="outline-none" />
                    <IoIosSearch />
                </div>
            </Modal>
        </>
    );
};

SearchModal.propTypes = {
    isModalOpen: func,
    setIsModalOpen: func,
}

export default SearchModal;