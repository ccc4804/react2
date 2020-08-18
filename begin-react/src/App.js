import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const palette = {
  blue: "#228be6",
  gray: "#496057",
  pink: "#f06595",
};

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <ButtonGroup>
          <Button size="small">BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button color="pink" size="large">
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="small" outline>BUTTON</Button>
          <Button color="gray" outline>BUTTON</Button>
          <Button color="pink" size="large" outline>
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" fullWidth>BUTTON</Button>
          <Button color="gray" size="large" fullWidth>BUTTON</Button>
          <Button color="pink" size="large" fullWidth>
            BUTTON
          </Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
