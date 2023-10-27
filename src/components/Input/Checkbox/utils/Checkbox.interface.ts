export type OptionsCheckboxProps = {
  id: number;
  label: string;
  
};

export type CheckboxProps = {
  options: OptionsCheckboxProps[];
  multiple?: boolean;
  onChange: (option: OptionsCheckboxProps[]) => void;
};