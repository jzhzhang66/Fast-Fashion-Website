import * as React from "react";
import { Menu } from "antd";
const Nav = () => {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item href="/">
          <a href="/">Clothing</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/location">Location</a>
        </Menu.Item>
      </Menu>
    </>
  );
};
export default Nav;
