import React from "react";
import styled, { css } from "react-emotion";

const Container = styled("div")`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  height: 100vh;
  flex-wrap: wrap;
`;

const Box = styled("div")`
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100px;
  border: 1px solid white;
  border-radius: 5px;
  align-items: center;
`;

function generateArrayFromNum(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

function randColor() {
  return Math.round(Math.random() * 255);
}

function randomBackGround() {
  return `rgb(${randColor()},${randColor()}, ${randColor()})`;
}

const Create = ({ count }) => {
  const min = 0;
  const max = parseFloat(count);
  const items = parseFloat(count);
  const increments = (max - min) / items;
  let result = [...Array(items + 1)].map((x, y) => min + increments * y);
  console.log(typeof result.length);
  const divCount = result.map((item, index) => {
    return (
      <Box key={index} style={{ background: randomBackGround() }}>
        {index}
      </Box>
    );
  });
  return (
    <div>
      <Container>{divCount}</Container>
    </div>
  );
};

export default Create;
