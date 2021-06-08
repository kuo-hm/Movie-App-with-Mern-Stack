import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaGem, FaHeart } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Sidenav = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <ProSidebar
      style={{ "$sidebar-bg-color": "#FF6347 !defaultw" }}
      collapsed={collapse}
    >
      <Menu iconShape="square">
        <MenuItem
          icon={<AiOutlineClose />}
          onClick={() => setCollapse(!collapse)}
        ></MenuItem>
        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        <MenuItem icon={<BsGear />}>Security</MenuItem>
        <SubMenu title="Favorites" icon={<FaHeart />}>
          <MenuItem>Movie</MenuItem>
          <MenuItem>Tv</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default Sidenav;
