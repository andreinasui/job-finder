import { useRef, useState } from "react";
import { TextInputComponent } from "./FormTextInput";
import {
  DropdownButtons,
  DropdownContainer,
  FormInputDropdownWrapper,
  FormInputLabel,
} from "./UserRegistrationForm.style";

const FormDropdown = ({ label, textInputProps, dropDownItems }) => {
  const { onChange: onTextInputChange, ...otherTextInputProps } =
    textInputProps;
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const textInputRef = useRef(null);

  const searchInList = (value) => {
    value = value.toLocaleLowerCase();
    if (!value.trim()) {
      setResults([]);
      return;
    }
    const filteredCounties = dropDownItems.filter((item) =>
      item.toLocaleLowerCase().startsWith(value)
    );
    setShowResults(true);
    setResults(filteredCounties);
  };

  const handleSelectDropdownItem = (event) => {
    setShowResults(false);
    const { name, value } = event.target;
    textInputRef.current.value = value;
    onTextInputChange(textInputRef.current.id, name, value);
  };

  return (
    <>
      <FormInputLabel>{label}</FormInputLabel>
      <FormInputDropdownWrapper>
        <TextInputComponent
          ref={textInputRef}
          onChange={(event) => {
            const { id, name, value } = event.target;
            searchInList(value);
            onTextInputChange(id, name, value);
          }}
          onFocus={(event) => {
            event.target.setSelectionRange(
              event.target.value.length,
              event.target.value.length
            );
            searchInList(event.target.value);
          }}
          {...otherTextInputProps}
        />
        {!!results.length && showResults && (
          <DropdownContainer
            onBlur={() => {
              setShowResults(false);
            }}
          >
            {results.map((item, index) => (
              <DropdownButtons
                key={index}
                name={textInputRef.current.name}
                id={`${textInputRef.current.name}Result-${index}`}
                type="button"
                value={item}
                onClick={(event) => {
                  handleSelectDropdownItem(event);
                }}
              >
                {item}
              </DropdownButtons>
            ))}
          </DropdownContainer>
        )}
      </FormInputDropdownWrapper>
    </>
  );
};

export default FormDropdown;
