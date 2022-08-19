import styled from "styled-components";
export default function SizeSelection({ setSelectedSize }) {
  function handleForm(event) {
    setSelectedSize(event.target.value);
  }
  return (
    <>
      <SizeSelector>
        <select onChange={handleForm}>
          <option>Selecione o tamanho da lista</option>
          <option value={25}>Pequeno</option>
          <option value={50}>Médio</option>
          <option value={100}>Grande</option>
        </select>
      </SizeSelector>
    </>
  );
}

const SizeSelector = styled.form`
  text-align: center;
  display: flex;
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
  cursor: pointer;
  select {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
    background-color: #6f9ceb;
  }
`;
