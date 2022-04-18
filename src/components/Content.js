import React from "react";
import styled from "styled-components";
import Card from "./Card";
import data from "../data";

const Content = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return <Container>{cards}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  padding: 27px 40px;
  color: #2b283a;
  box-sizing: border-box;
  background: white;
`;
export default Content;
