import styled from "styled-components";
import SizeSelection from "./SizeSelection";
import AlgorithmSelection from "./AlgorithmSelection";
export default function HomePage() {
  return (
    <>
      <Wrapper>
        <Container>
          <Menu>
            <SizeSelection />
            <AlgorithmSelection />
            <Button>Start</Button>
          </Menu>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: aliceblue;
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
  color: #ffffff;
  padding: 5px 5px;
  width: 220px;
  height: 50px;
  background-color: #4298f5;
  border-radius: 5px;
`;
