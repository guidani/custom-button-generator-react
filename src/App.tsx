import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const [bgColor, setColor] = useState<string>("#fff");
  const [text, setText] = useState<string>("button");

  const handleColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setColor(event.target.value);
  };

  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setText(event.target.value);
  };

  const Button = styled.button`
    background-color: ${bgColor};
  `;

  const InputGroup = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 2rem ;
    margin-bottom: 2rem;
    border-bottom: 1px solid #2e2e2e;
  `

  const Header = styled.h1`
    font-family: 'Verdana', sans-serif;
    padding: 2rem 0;
  `

  return (
    <div>
      <Header>Custom Button Generator</Header>
      <InputGroup>
        <input type="color" onChange={handleColorChange} />
        <input type="text" onChange={handleTextChange} placeholder="Text inside button!"/>
      </InputGroup>
      <Button>{text}</Button>
    </div>
  );
}

export default App;
