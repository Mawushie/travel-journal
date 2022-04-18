import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <div>
      <Container>
        <ImageDiv>
          <img src={props.item.imageUrl} />
        </ImageDiv>
        <Desc>
          <Title>
            <img src="pin.svg" />
            <h6>{props.item.location}</h6>
            <p className="title">View on Google Maps</p>
          </Title>
          <h1>{props.item.title}</h1>
          <h6>
            {props.item.startDate} - {props.item.endDate}
          </h6>
          <p>{props.item.description}</p>
        </Desc>
      </Container>
      <hr></hr>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 470px;
  height: 168px;
  margin-bottom: 18px;
  margin-top: 18px;
`;

const ImageDiv = styled.div`
  width: 125px;
  height: 168px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;

  img {
    width: 125px;
    height: 168px;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  h1 {
    margin: 0px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #2b283a;
  }

  h6 {
    margin-top: 12px;
    margin-bottom: 0px;
  }

  p {
    width: 326px;
    height: 45px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 10.24px;
    line-height: 15px;
    color: #2b283a;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;

  h6 {
    padding-left: 4px;
    padding-right: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.17em;
    color: #2b283a;
  }

  .title {
    width: 106px;
    height: 13px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    text-decoration-line: underline;
    color: #918e9b;
  }
`;
export default Card;
