import styled from "styled-components";
import { randomArray } from "../../auxiliary/randomArray";

export default function SortingVisualizer() {
  return (
    <>
      {randomArray().map((value, index) => {
        return <VisualizerBar value={value} key={index}></VisualizerBar>;
      })}
    </>
  );
}

const VisualizerBar = styled.div`
  display: inline-block;
  width: 4px;
  height: ${({ value }) => `${value / 2}px`};
  background-color: #ebf2fa;
`;
