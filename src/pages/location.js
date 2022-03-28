import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import "antd/dist/antd.css";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Landfill from "../images/Landfill.png";
import WaterPollution from "../images/water-pollution.jpeg";

const menu = (setLocation) => (
  <Menu>
    <Menu.Item key="0">
      <a onClick={(e) => setLocation("LA")}>Los Angeles, CA</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a onClick={(e) => setLocation("NYC")}>Soho, NYC</a>
    </Menu.Item>
    <Menu.Divider />
  </Menu>
);

const LocationPage = () => {
  const [location, setLocation] = useState();
  return (
    <>
      <Nav />
      <Dropdown overlay={menu(setLocation)} >
        <a className="ant-dropdown-link">
          Check out our locations!
          <DownOutlined />
        </a>
        {/* { location && <img src={location === 'LA' ? Landfill : WaterPollution} />} */}
      </Dropdown>
      {location === "LA" && <img src={Landfill} />}
      {location === "NYC" && <img src={WaterPollution} />}
    </>
  );
};

export default LocationPage;
