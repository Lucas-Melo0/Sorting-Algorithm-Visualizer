import styled from "styled-components";
import SizeSelection from "./SizeSelection";
import { randomArray } from "../../auxiliary/randomArray";
import { useState } from "react";
import BubbleSort from "../../auxiliary/Algorithms";
export default function HomePage() {
  const [generatedArray, setGeneratedArray] = useState(randomArray());

  async function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }

      let temp = array[i];
      array[i] = array[minIndex];
      setGeneratedArray([...generatedArray, array]);
      array[minIndex] = temp;
      setGeneratedArray([...generatedArray, array]);
      console.log(generatedArray);
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 30)
      );
    }
    return generatedArray;
  }
  async function BubbleSort(array) {
    let swapCounter = -1;
    for (let i = 0; i < array.length - 1; i++) {
      if (swapCounter === 0) {
        break;
      }
      swapCounter = 0;
      for (let j = 0; j < array.length - i; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          setGeneratedArray([...generatedArray, array]);
          array[j + 1] = temp;
          setGeneratedArray([...generatedArray, array]);
          swapCounter++;
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 30)
          );
        }
      }
    }
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Menu>
            <SizeSelection />
            <AlgorithmSelector onClick={() => selectionSort(generatedArray)}>
              Selection Sort
            </AlgorithmSelector>
            <Button>Start</Button>
          </Menu>
          <SortingContainer>
            {generatedArray.map((value, index) => {
              return (
                <VisualizerBar
                  color={"#FFFFFF"}
                  value={value}
                  key={index}
                ></VisualizerBar>
              );
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
  background-color: ${({ color }) => color};
`;
