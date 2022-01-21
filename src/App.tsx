import React, { ChangeEvent, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Button } from './components/Button'
import { Input } from './components/Input'

interface IStateProps {
  name: string,
  color: string
}

function App() {
 
  const [data, setData] = useState<IStateProps>({"name": "texto", "color": "#ffffff"})
  
  // functions 
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({...data, name: event.target.value});
  }

  const handleBackgroundColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({...data, color: event.target.value})
  }

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
      <Input inputType={"text"} placeholder={"texto"} handleOnChange={handleTextChange} name={"texto"} value={data.name}/>
      <Input inputType={"color"} handleOnChange={handleBackgroundColorChange} name={"color"} value={data.color}/>
      </InputGroup>
      <Button/>
    </div>
  );
}

export default App;
