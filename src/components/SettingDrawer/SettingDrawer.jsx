import { Drawer } from 'antd';
import { bool } from 'prop-types';
import Theme from './Theme/Theme';
import Color from './color/Color';
import LayoutType from './Layout/LayoutType';
import ContainerOption from './Container/ContainerOption';
import CardWith from './Card/CardWith';

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
                <LayoutType/>
                <ContainerOption/>
                <CardWith/>

            </Drawer>
        </>
    );
};
SettingDrawer.propTypes = {
    open: bool,
    setOpen: bool,
}
export default SettingDrawer;