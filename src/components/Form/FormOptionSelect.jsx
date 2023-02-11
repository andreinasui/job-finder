import { useState } from "react";
import {
  FormInputLabel,
  SelectOptionsContainer,
  SelectButton,
} from "./UserRegistrationForm.style";

const FormOptionSelect = ({
  label,
  name,
  items,
  inputChange,
  optionSelected: optionSelectedProp,
}) => {
  const [buttonActive, setButtonActive] = useState("");
  let isSelected = buttonActive !== "";

  let optionSelected =
    typeof optionSelectedProp === "function"
      ? optionSelectedProp(isSelected)
      : optionSelectedProp;

  const handleOnClick = (event) => {
    const { id, name, value } = event.target;
    setButtonActive(id);
    inputChange({ name, value });
  };

  return (
    <>
      <FormInputLabel>{label}</FormInputLabel>
      <SelectOptionsContainer optionSelected={optionSelected}>
        {items &&
          items.map(({ dataValue, displayValue }, index) => (
            <SelectButton
              key={index}
              name={name}
              id={`${name}Button-${index}`}
              value={dataValue}
              type="button"
              selected={buttonActive === `${name}Button-${index}`}
              onClick={handleOnClick}
            >
              {displayValue}
            </SelectButton>
          ))}
      </SelectOptionsContainer>
    </>
  );
};

export default FormOptionSelect;
