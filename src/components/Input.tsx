import React from "react";

type Input = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  type: "text" | "checkbox" | "color";
};

const Input = ({ type, inputValue, setInputValue }: Input) => {
  return (
    <input
      type={type}
      className="w-full p-2 rounded-sm mb-2"
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
    />
  );
};

export default Input;
