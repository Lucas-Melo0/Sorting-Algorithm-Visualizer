import styled from "styled-components";
import { randomArray } from "../../auxiliary/randomArray";

export default function SortingVisualizer() {
  return (
    <>
      {randomArray().map((value, index) => {
        return (
          <VisualizerBar value={value} key={index}>
            {value}
          </VisualizerBar>
        );
      })}
    </>
  );
}

const VisualizerBar = styled.div`
  width: 40px;
  height: ${({ value }) => `${value / 2}px`};
  background-color: #ffffff;
`;
