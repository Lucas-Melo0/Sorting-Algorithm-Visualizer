import styled from "styled-components";
const Wrapper = styled.div`
  background-color: #98b9f2;
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
`;

const Menu = styled.div`
  display: flex;
  height: 20vh;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #141b41;
  width: 220px;
  height: 50px;
  background-color: #6f9ceb;
  border-radius: 5px;
`;
const SortingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 2px;
`;
const VisualizerBar = styled.div`
  display: inline-block;
  width: 4px;
  height: ${({ value }) => `${value / 2}px`};
  background-color: ${({ color }) => color};
`;

export { VisualizerBar, SortingContainer, Button, Menu, Container, Wrapper };
