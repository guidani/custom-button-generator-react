import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { ButtonStyled } from "./components/Button";
import { Input } from "./components/Input";
import { Header, InputGroup } from "./styles.style";

interface IStateProps {
  textInside: string;
  textInsideColor: string;
  backgroundColor: string;
}

function App() {
  const [data, setData] = useState<IStateProps>({
    textInside: "texto",
    backgroundColor: "#000000",
    textInsideColor: "#ffffff"
  });

  // functions
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, textInside: event.target.value });
  };

  const handleBackgroundColorChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setData({ ...data, backgroundColor: event.target.value });
  };

  const handleTextInsideColorChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setData({ ...data, textInsideColor: event.target.value });
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
          value={data.textInside}
        />
        <Input
          inputType={"color"}
          handleOnChange={handleBackgroundColorChange}
          name={"color"}
          value={data.backgroundColor}
        />
                <Input
          inputType={"color"}
          handleOnChange={handleTextInsideColorChange}
          name={"textInsideColor"}
          value={data.textInsideColor}
        />
      </InputGroup>
      <ButtonStyled 
      color={data.backgroundColor}
      // textInsideColor={data.textInsideColor}
      >
        {data.textInside}
      </ButtonStyled>
    </div>
  );
}

export default App;
