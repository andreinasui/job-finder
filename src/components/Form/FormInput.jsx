import { useRef, useState } from "react";
import {
  FormStyled,
  PhoneInputStyled,
  FormInputContainer,
  FormInputLabel,
  TextInputField,
  SelectOptionsContainer,
  SelectButton,
  FormSubmitButtonContainer,
  FormSubmitButton,
} from "./FormInput.style";

const INITIAL_FORM_DATA = {
  name: "",
  age: "",
  phoneNumber: "",
  gender: "",
  county: "",
  photo: "",
};

export const UserRegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [nameFieldValid, setNameFieldValid] = useState(false);
  const [countyFieldValid, setCountyFieldValid] = useState(false);
  const [phoneNumberFieldValid, setPhoneNumberFieldValid] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [genderButtonActive, setGentderButtonActive] = useState("");
  const [ageButtonActive, setAgeButtonActive] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    // TODO: resetFormFields();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetFormFields = () => {
    setFormData(INITIAL_FORM_DATA);
  };
  const handleGenderButtonClick = (event) => {
    setGentderButtonActive(event.target.id);
    handleInputChange(event);
  };

  const handleAgeButtonClick = (event) => {
    setAgeButtonActive(event.target.id);
    handleInputChange(event);
  };

  const validateNameField = (value) => {
    let result = false;
    if (value.length >= 5) result = true;
    setNameFieldValid(result);
  };
  const validateCountyField = (value) => {
    let result = false;
    if (value.length >= 3) result = true;
    setCountyFieldValid(result);
  };
  const validatePhoneNumberField = (value) => {
    let result = false;
    if (value.length >= 10) result = true;
    setPhoneNumberFieldValid(result);
  };

  const handleTextInputChange = (event) => {
    // TODO: Upgrade form validation
    if (event.target.id === "nameField") {
      validateNameField(event.target.value);
    }
    if (event.target.id === "countyField") {
      validateCountyField(event.target.value);
    }
    if (event.target.id === "phoneNumberField") {
      validatePhoneNumberField(event.target.value);
    }
    setFormValid(nameFieldValid && countyFieldValid && phoneNumberFieldValid);
    handleInputChange(event);
  };

  return (
    <FormStyled onSubmit={handleFormSubmit}>
      <FormInputContainer>
        <FormInputLabel>Nume</FormInputLabel>
        <TextInputField
          id="nameField"
          type="text"
          placeholder="Nume"
          name="name"
          value={formData.name}
          onChange={handleTextInputChange}
          required
        />
      </FormInputContainer>
      <FormInputContainer>
        <label>Poza (optional)</label>
        <p>PLACEHOLDER_TODO</p>
      </FormInputContainer>
      <FormInputContainer>
        <FormInputLabel>Gen</FormInputLabel>
        <SelectOptionsContainer>
          <SelectButton
            key={1}
            id={"genderButton-1"}
            value="man"
            name="gender"
            type="button"
            selected={genderButtonActive === "genderButton-1"}
            onClick={handleGenderButtonClick}
          >
            Barbat
          </SelectButton>
          <SelectButton
            key={2}
            id={"genderButton-2"}
            selected={genderButtonActive === "genderButton-2"}
            value="woman"
            name="gender"
            type="button"
            onClick={handleGenderButtonClick}
          >
            Femeie
          </SelectButton>
        </SelectOptionsContainer>
      </FormInputContainer>
      <FormInputContainer>
        <FormInputLabel>Varsta</FormInputLabel>
        <SelectOptionsContainer>
          <SelectButton
            key={1}
            id={"ageButton-1"}
            value="18-25"
            name="age"
            type="button"
            selected={ageButtonActive === "ageButton-1"}
            onClick={handleAgeButtonClick}
          >
            18-25
          </SelectButton>
          <SelectButton
            key={2}
            id={"ageButton-2"}
            value="25-30"
            name="age"
            type="button"
            selected={ageButtonActive === "ageButton-2"}
            onClick={handleAgeButtonClick}
          >
            25-30
          </SelectButton>
          <SelectButton
            key={3}
            id={"ageButton-3"}
            value="30-40"
            name="age"
            type="button"
            selected={ageButtonActive === "ageButton-3"}
            onClick={handleAgeButtonClick}
          >
            30-40
          </SelectButton>
          <SelectButton
            key={4}
            id={"ageButton-4"}
            value="40-55"
            name="age"
            type="button"
            selected={ageButtonActive === "ageButton-4"}
            onClick={handleAgeButtonClick}
          >
            40-55
          </SelectButton>
        </SelectOptionsContainer>
      </FormInputContainer>
      <FormInputContainer>
        <FormInputLabel>Județ</FormInputLabel>
        <TextInputField
          id="countyField"
          type="text"
          placeholder="Județ"
          name="county"
          value={formData.county}
          onChange={handleTextInputChange}
          required
        />
      </FormInputContainer>
      <FormInputContainer>
        <FormInputLabel>Telefon</FormInputLabel>
        <TextInputField
          id="phoneNumberField"
          type="text"
          placeholder="Numarul de telefon"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleTextInputChange}
          required
        />
      </FormInputContainer>
      <FormSubmitButtonContainer>
        <FormSubmitButton disabled={!formValid} type="submit">
          Trimite
        </FormSubmitButton>
      </FormSubmitButtonContainer>
    </FormStyled>
  );
};
