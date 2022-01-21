import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { ButtonStyled } from "./components/Button";
import { Input } from "./components/Input";
import { Header, InputGroup } from "./styles.style";

interface IStateProps {
  name: string;
  color: string;
}


function App() {
  const [data, setData] = useState<IStateProps>({
    name: "texto",
    color: "#000000",
  });

  // functions
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, name: event.target.value });
  };

  const handleBackgroundColorChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setData({ ...data, color: event.target.value });
  };


  return (
    <div>
      <Header>Custom Button Generator</Header>
      <InputGroup>
        <Input
          inputType={"text"}
          placeholder={"texto"}
          handleOnChange={handleTextChange}
          name={"texto"}
          value={data.name}
        />
        <Input
          inputType={"color"}
          handleOnChange={handleBackgroundColorChange}
          name={"color"}
          value={data.color}
        />
      </InputGroup>
      <ButtonStyled color={data.color} />
    </div>
  );
}

export default App;
