import { useState } from "react";

export const useTextInput = () => {
  const [textInput, setTextInput] = useState("");

  const handleTextInput = (text: string) => setTextInput(text);

  return {
    textInput,
    handleTextInput,
  };
}
