import * as React from "react";
import { Card, Col } from "antd";
import { ClothingCardContainer } from "./ClothingCard.style";

const { Meta } = Card;

const ClothingCard = ({ item }) => {
  return (
    <ClothingCardContainer>
      <Col span={5}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img src={item.image} alt="" />}
        >
          <Meta title={item.title} />
          {item.price}
        </Card>
      </Col>
    </ClothingCardContainer>
  );
};
export default ClothingCard;
