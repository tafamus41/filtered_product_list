import React from "react";
import { Card, Col } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";

const ProductCard = ({ image, id, description, title, price }) => {
  // console.log(id);
  return (
    <Col sm={12} md={6} lg={4} xl={3}>
      <Card key={id} className="rounded-2 m-auto card" role="button">
        <Card.Header className="d-flex justify-content-between">
          <Card.Title>{price}$</Card.Title>
          <MdFavorite size={30} />
        </Card.Header>
        <Card.Img variant="top" src={image} className="player-logo" />
        <Card.Footer className="card__over">
          <Card.Title>{title}</Card.Title>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductCard;
