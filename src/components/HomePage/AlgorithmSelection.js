import styled from "styled-components";
export default function AlgorithmSelection() {
  return (
    <>
      <AlgorithmSelector>Heap Sort</AlgorithmSelector>
    </>
  );
}

const AlgorithmSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  padding: 5px 5px;
  width: 220px;
  height: 50px;
  background-color: #4298f5;
  border-radius: 5px;
`;
