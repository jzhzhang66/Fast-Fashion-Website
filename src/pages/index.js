import * as React from "react";
import Nav from "../components/Nav/Nav";
import "antd/dist/antd.css";
import ClothingCard from "../components/ClothingCard/ClothingCard";
import { ShienLogoStyled } from "../styles/clothing.style";
import ShienLogo from "../images/shienLogo.png";
import GreenButtonDown from "../images/clothing/green-button-down.jpg";
import GreenKnittedSkirt from "../images/clothing/green-knitted-skirt.png";
import GriddedTwoPieceSet from "../images/clothing/gridded-two-piece-set.jpg";
import MomJeans from "../images/clothing/mom-jeans.jpg";
import PatternedSweaterSet from "../images/clothing/patterned-sweater-set.jpg";
import SparklyPinkCropTop from "../images/clothing/sparkly-pink-crop-top.jpg";
import TieDyeMiniDress from "../images/clothing/tie-dye-mini-dress.jpg";
import WhiteFloralTop from "../images/clothing/white-floral-top.jpg";
import { Row, Col } from "antd";

const clothes = [
  { image: GreenButtonDown, title: "Green Button Down", price: "$20" },
  { image: GreenKnittedSkirt, title: "Green Knitted Skirt", price: "$22" },
  { image: GriddedTwoPieceSet, title: "Gridded Two Piece Set", price: "$31" },
  { image: MomJeans, title: "Mom Jeans", price: "$29" },
  { image: PatternedSweaterSet, title: "Patterned Sweater Set", price: "$28" },
  { image: SparklyPinkCropTop, title: "Sparkly Pink Crop Top", price: "$14" },
  { image: TieDyeMiniDress, title: "Tie Dye Mini Dress", price: "$19" },
  { image: WhiteFloralTop, title: "White Floral Top", price: "$15" },
];

const IndexPage = () => {
  return (
    <>
      <Nav />
      <ShienLogoStyled src={ShienLogo} />
      <Row gutter={16}>
        {clothes.map((c) => (
            <ClothingCard item={c}  />
        ))}
      </Row>
    </>
  );
};

export default IndexPage;
