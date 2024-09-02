import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import "./Header.scss";
import { categories } from "../../helper/data";

export const Header = () => {
  // console.log(categories);
  return (
    <Container className="header">
      <h1>Products List</h1>
      <Stack
        direction="horizontal"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >
        {categories.map((item) => (
          <button key={item} className="">{item.toUpperCase()}</button>
        ))}
      </Stack>
    </Container>
  );
};
