import * as React from "react";
import Nav from "../components/Nav/Nav";
import "antd/dist/antd.css";
import { ShienLogoStyled } from "../styles/clothing.style";
import ShienLogo from '../images/shienLogo.png';

const ClothingPage = () => {
  return (
    <>
      <Nav />
      <ShienLogoStyled src={ShienLogo} />
    </>
  );
};

export default ClothingPage;
