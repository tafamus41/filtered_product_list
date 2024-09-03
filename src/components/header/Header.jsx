import React from "react";
import { Container, Stack } from "react-bootstrap";
import "./Header.scss";
import { categories } from "../../helper/data";
// import { useState } from "react";

export const Header = ({handleButon}) => {
// const[category,setCategory]=useState("");

// const handleCategory=()=>{
// console.log(handleButon());
// }
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
          <button onClick={()=>handleButon(item)} key={item} className="">{item.toUpperCase()}</button>
        ))}
      </Stack>
    </Container>
  );
};
