import { ChangeEventHandler } from "react";

interface Iprops {
    inputType: string
    placeholder?: string
    name?: string
    value?: string
    handleOnChange?: ChangeEventHandler<HTMLInputElement>
}


export const Input = ({inputType, placeholder, name, value, handleOnChange}: Iprops) => {
  return (
      <>
        <input type={inputType} placeholder={placeholder} onChange={handleOnChange} name={name} value={value}/>
      </>
  );
}
