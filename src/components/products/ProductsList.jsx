import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products } from "../../helper/data";
import { Header } from "../header/Header";

const ProductsList = ({}) => {
  console.log(products);
  return (
    <>
      <Header />
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
