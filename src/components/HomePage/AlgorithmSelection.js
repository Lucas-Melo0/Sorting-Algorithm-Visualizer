import styled from "styled-components";
export default function AlgorithmSelection({ setSelectedAlgo }) {
  function handleForm(event) {
    setSelectedAlgo(event.target.value);
  }

  return (
    <>
      <AlgorithmSelector>
        <select onChange={handleForm}>
          <option>Selecione um algoritmo</option>
          <option value={"SelectionSort"}>Selection Sort</option>
          <option value={"BubbleSort"}>Bubble Sort</option>
          <option value={"InsertionSort"}>Insertion Sort</option>
        </select>
      </AlgorithmSelector>
    </>
  );
}

const AlgorithmSelector = styled.form`
  display: flex;
  cursor: pointer;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #141b41;
  padding: 5px 5px;
  width: 220px;
  height: 50px;
  background-color: #6f9ceb;
  border-radius: 5px;
  &:hover {
    opacity: 0.7;
  }
  select {
    all: unset;
    background-color: #6f9ceb;
  }
`;
