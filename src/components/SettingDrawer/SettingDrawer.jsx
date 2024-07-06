import { Drawer } from 'antd';
import { bool } from 'prop-types';
import Theme from './Theme/Theme';
import Color from './color/Color';

const SettingDrawer = ({ open, setOpen }) => {

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Drawer
                title="Pick Your Style"
                placement="right"
                width={300}
                onClose={onClose}
                open={open}
            >
                <Theme/>
                <Color/>

            </Drawer>
        </>
    );
};
SettingDrawer.propTypes = {
    open: bool,
    setOpen: bool,
}
export default SettingDrawer;