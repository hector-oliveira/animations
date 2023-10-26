import { useState } from "react";

export const useToggleState = (initialState: boolean) => {
  const [isToggle, setToggle] = useState(initialState);
  const handleToggleState = () => setToggle(!isToggle);
  return {
    isToggle,
    handleToggleState
  }
}