type inputProps = {
  inputType: string;
  inputName: string;
};

export const Input = ({ inputType }: inputProps) => {
  return <input type={inputType} name="color" />;
};
