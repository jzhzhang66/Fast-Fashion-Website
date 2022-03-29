import * as React from "react";
import { Menu } from "antd";
const Nav = () => {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item href="/clothing">
          <a href="/clothing">Clothing</a>
        </Menu.Item>
        <Menu.Item href="/shoes">
          <a href="/shoes">Shoes</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/location">Location</a>
        </Menu.Item>
      </Menu>
    </>
  );
};
export default Nav;
