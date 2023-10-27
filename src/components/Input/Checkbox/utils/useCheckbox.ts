import { useState } from "react";
import { OptionsCheckboxProps } from "./Checkbox.interface";

export const useCheckbox = () => {
  const [areSelected, setAreSelected] = useState<OptionsCheckboxProps[]>([]);

  const handleToggle = (
      option: OptionsCheckboxProps,
      multiple: boolean
    ) => {
    const indexOptions = areSelected.findIndex(item => item.id === option.id);
    let copyOfAreSelected = [...areSelected];
    if (indexOptions !== -1) {
      copyOfAreSelected.splice(indexOptions, 1);
    } else {
      multiple ? copyOfAreSelected.push(option) : copyOfAreSelected = [option];

    }
    
    setAreSelected(copyOfAreSelected);
  }
  
  return {
    areSelected,
    handleToggle
  }
}