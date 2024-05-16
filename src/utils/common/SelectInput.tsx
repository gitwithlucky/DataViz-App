import { SelectInputProps } from "../helpers";

const SelectInput = ({
  name,
  selectId,
  optionValues,
  currentValue,
  onChange,
}: SelectInputProps) => {
  return (
    <select name={name} id={selectId} value={currentValue} onChange={onChange}>
      {optionValues.map((option: string, idx) => (
        <option key={`${option}+${idx}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
