import SizeSelection from "./SizeSelection";
import { randomArray } from "../../auxiliary/randomArray";
import { useState } from "react";
import AlgorithmSelection from "./AlgorithmSelection";
import {
  insertionSort,
  selectionSort,
  BubbleSort,
} from "../../auxiliary/Algorithms";
import {
  VisualizerBar,
  SortingContainer,
  Button,
  Menu,
  Container,
  Wrapper,
} from "../HomeContainer";

export default function HomePage() {
  const [generatedArray, setGeneratedArray] = useState(randomArray(50));
  const [selectedAlgo, setSelectedAlgo] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  function startAlgorithm() {
    if (selectedAlgo === "BubbleSort") {
      BubbleSort(generatedArray, setGeneratedArray);
    }
    if (selectedAlgo === "SelectionSort") {
      selectionSort(generatedArray, setGeneratedArray);
    }
    if (selectedAlgo === "InsertionSort") {
      insertionSort(generatedArray, setGeneratedArray);
    }
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Menu>
            <SizeSelection setSelectedSize={setSelectedSize} />
            <AlgorithmSelection setSelectedAlgo={setSelectedAlgo} />
            <Button onClick={startAlgorithm}>Start</Button>
            <Button
              onClick={() => setGeneratedArray(randomArray(selectedSize))}
            >
              Gerar nova lista
            </Button>
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
