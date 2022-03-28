import * as React from "react";
import { Menu } from "antd";
const Nav = () => {
  return (
    <>
      <Menu
        mode="horizontal"
      >
        <Menu.Item >
          Clothing
        </Menu.Item>
        <Menu.Item >
          Shoes
        </Menu.Item>
        <Menu.Item >
          Location
        </Menu.Item>
      </Menu>
    </>
  );
};
export default Nav;
