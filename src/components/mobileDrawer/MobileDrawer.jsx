import { Drawer } from 'antd';
import { func } from 'prop-types';

const MobileDrawer = ({ open, setOpen }) => {

  const onClose = () => {
    setOpen(false);
  };
 
  return (
    <>

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
    </>
  );
};

MobileDrawer.propTypes = {
  open: func,
  setOpen: func,
}

export default MobileDrawer;