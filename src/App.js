import "./App.css";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import Content from "./components/Content";

function App() {
  return (
    <Container>
      <NavBar />
      <Content />
    </Container>
  );
}

const Container = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export default App;
