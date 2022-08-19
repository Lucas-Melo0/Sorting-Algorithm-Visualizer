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
} from "./HomeContainer";

export default function HomePage() {
  const [generatedArray, setGeneratedArray] = useState(randomArray(50));
  const [selectedAlgo, setSelectedAlgo] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [isRunning, SetIsRunning] = useState(false);

  function startAlgorithm() {
    if (selectedAlgo === "BubbleSort") {
      BubbleSort(generatedArray, setGeneratedArray, SetIsRunning);
    }
    if (selectedAlgo === "SelectionSort") {
      selectionSort(generatedArray, setGeneratedArray, SetIsRunning);
    }
    if (selectedAlgo === "InsertionSort") {
      insertionSort(generatedArray, setGeneratedArray, SetIsRunning);
    }
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Menu>
            <SizeSelection setSelectedSize={setSelectedSize} />
            <AlgorithmSelection setSelectedAlgo={setSelectedAlgo} />
            <Button disabled={isRunning} onClick={startAlgorithm}>
              Start
            </Button>
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
                  key={index}
                  color={"#FFFFFF"}
                  value={value}
                ></VisualizerBar>
              );
            })}
          </SortingContainer>
        </Container>
      </Wrapper>
    </>
  );
}
