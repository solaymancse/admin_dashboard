import { Drawer } from 'antd';
import PropTypes from 'prop-types';

const MobileDrawer = ({ open, setOpen }) => {

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      title="Basic Drawer"
      placement="left"
      closable={false}
      onClose={onClose}
      open={open}
      width={280}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

MobileDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default MobileDrawer;
