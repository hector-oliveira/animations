import React from "react";

export const useCheckBox = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const handleClick = () => setIsClicked(prevState => !prevState);

  return { isClicked, handleClick}
}