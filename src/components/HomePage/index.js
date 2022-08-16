import styled from "styled-components";
import SizeSelection from "./SizeSelection";
import { randomArray } from "../../auxiliary/randomArray";
import selectionSort from "../../auxiliary/Algorithms/SelectionSort";
import { useState } from "react";
export default function HomePage() {
  const [generatedArray, setGeneratedArray] = useState(randomArray());

  function selectionSorting(array) {
    const sortedArray = selectionSort(array);
    setGeneratedArray([...generatedArray, sortedArray]);
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Menu>
            <SizeSelection />
            <AlgorithmSelector onClick={() => selectionSorting(generatedArray)}>
              Selection Sort
            </AlgorithmSelector>
            <Button>Start</Button>
          </Menu>
          <SortingContainer>
            {generatedArray.map((value, index) => {
              return <VisualizerBar value={value} key={index}></VisualizerBar>;
            })}
          </SortingContainer>
        </Container>
      </Wrapper>
    </>
  );
}

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
const AlgorithmSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #141b41;
  padding: 5px 5px;
  width: 220px;
  height: 50px;
  background-color: #6f9ceb;
  border-radius: 5px;
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
  background-color: #ebf2fa;
`;
