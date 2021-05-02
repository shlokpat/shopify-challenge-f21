import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  color: black !important;
  background-color: ${(props) =>
    props.full === true ? " #50b83c" : "#f0f0f0"};
  font-weight: bold;
  box-shadow: ${(props) =>
    props.full === true ? "rgba(149, 157, 165, 0.35) 0px 0px 35px" : "none"};
  font-family: "Fira Sans";
  text-align: center;
  margin: 0px auto 10px auto;
  width: 100%;
  border-radius: 4px;
  border: 3px solid none;
  padding-top: ${(props) => (props.full === true ? "20px" : "0px")};
  padding-bottom: ${(props) => (props.full === true ? "20px" : "0px")};
`;
const ListFull = styled.div`
  color: white !important;
  background-color: #50b83c;
  font-weight: bold;
  font-size: 30px;
  font-family: "Fira Sans";
  text-align: center;
  margin: auto;
  width: 100%;
  border: 3px solid none;
`;

function Banner(props) {
  return (
    <BannerContainer full={props.isListFull()}>
      {props.isListFull() === true ? (
        <ListFull>Thanks for your input! ✔️</ListFull>
      ) : null}
    </BannerContainer>
  );
}

export default Banner;
