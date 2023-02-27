import { useEffect, useState } from "react";
import FormDropdown from "./FormDropdown";
import FormOptionSelect from "./FormOptionSelect";
import FormTextInput from "./FormTextInput";
import {
  FormStyled,
  PhoneInputStyled,
  FormInputContainer,
  FormInputLabel,
  FormSubmitButtonContainer,
  FormSubmitButton,
} from "./UserRegistrationForm.style";

const INITIAL_FORM_DATA = {
  name: "",
  age: "",
  phoneNumber: "",
  gender: "",
  county: "",
  photo: "",
  trained: false,
};

const counties = [
  "Bucureşti",
  "Alba",
  "Arad",
  "Arges",
  "Bacău",
  "Bihor",
  "Bistriţa-Năsăud",
  "Botoşani",
  "Braşov",
  "Brăila",
  "Buzău",
  "Caraş-Severin",
  "Călăraşi",
  "Cluj",
  "Constanţa",
  "Covasna",
  "Dâmboviţa",
  "Dolj",
  "Galaţi",
  "Giurgiu",
  "Gorj",
  "Harghita",
  "Hunedoara",
  "Ialomiţa",
  "Iaşi",
  "Ilfov",
  "Maramureş",
  "Mehedinţi",
  "Mureş",
  "Neamţ",
  "Olt",
  "Prahova",
  "Satu",
  "Sălaj",
  "Sibiu",
  "Suceava",
  "Teleorman",
  "Timiş",
  "Tulcea",
  "Vâlcea",
  "Vaslui",
  "Vrancea",
];

export const UserRegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [nameFieldValid, setNameFieldValid] = useState(false);
  const [countyFieldValid, setCountyFieldValid] = useState(false);
  const [phoneNumberFieldValid, setPhoneNumberFieldValid] = useState(false);
  const [ageSelected, setAgeSelected] = useState(false);
  const [genderSelected, setGenderSelected] = useState(false);

  let formValid =
    nameFieldValid &&
    countyFieldValid &&
    phoneNumberFieldValid &&
    ageSelected &&
    genderSelected;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  function handleInputChange({ name, value }) {
    setFormData({ ...formData, [name]: value });
  }

  const validateNameField = (value) => {
    let result = false;
    if (value.length >= 5) result = true;
    setNameFieldValid(result);
  };

  const validateCountyField = (value) => {
    let result = false;
    if (counties.indexOf(value) !== -1) result = true;
    setCountyFieldValid(result);
  };

  const validatePhoneNumberField = (value) => {
    let result = false;
    if (value.length >= 10) result = true;
    setPhoneNumberFieldValid(result);
  };

  const handleTextInputChange = (textFieldId, formName, value) => {
    if (textFieldId === "nameField") {
      validateNameField(value);
    }
    if (textFieldId === "countyField") {
      validateCountyField(value);
    }
    if (textFieldId === "phoneNumberField") {
      validatePhoneNumberField(value);
    }

    handleInputChange({ name: formName, value });
  };

  return (
    <>
      <FormStyled onSubmit={handleFormSubmit}>
        <FormInputContainer>
          <FormTextInput
            label="Nume"
            inputProps={{
              id: "nameField",
              type: "text",
              placeholder: "Nume",
              name: "name",
              onChange: (event) => {
                const { id, name, value } = event.target;
                handleTextInputChange(id, name, value);
              },
              required: true,
            }}
          />
        </FormInputContainer>
        <FormInputContainer>
          <label>Poza (optional)</label>
          <p>PLACEHOLDER_TODO</p>
        </FormInputContainer>
        <FormInputContainer>
          <FormOptionSelect
            label="Gen"
            name="gender"
            inputChange={handleInputChange}
            items={[
              { dataValue: "man", displayValue: "Bărbat" },
              { dataValue: "woman", displayValue: "Femeie" },
            ]}
            onOptionSelect={() => setGenderSelected(true)}
          />
        </FormInputContainer>
        <FormInputContainer>
          <FormOptionSelect
            label="Vârsta"
            name="age"
            inputChange={handleInputChange}
            onOptionSelect={() => setAgeSelected(true)}
            items={[
              { dataValue: "18-25", displayValue: "18-25" },
              { dataValue: "25-30", displayValue: "25-30" },
              { dataValue: "30-40", displayValue: "30-40" },
              { dataValue: "40-55", displayValue: "40-55" },
            ]}
          />
        </FormInputContainer>
        <FormInputContainer>
          <FormDropdown
            label={"Județ"}
            textInputProps={{
              id: "countyField",
              placeholder: "Județ",
              name: "county",
              onChange: handleTextInputChange,
              required: true,
            }}
            dropDownItems={counties}
          />
        </FormInputContainer>
        <FormInputContainer>
          <FormInputLabel>Telefon</FormInputLabel>
          <PhoneInputStyled
            country={"ro"}
            placeholder="Telefon"
            countryCodeEditable={false}
            enableSearch={true}
            onChange={(value, country, e, formattedValue) => {
              const { id, name, value: eventValue } = e.target;
              handleTextInputChange(id, name, eventValue);
            }}
            inputProps={{
              required: true,
              id: "phoneNumberField",
              name: "phoneNumber",
            }}
          />
        </FormInputContainer>
        <FormSubmitButtonContainer>
          <FormSubmitButton disabled={!formValid} type="submit">
            Trimite
          </FormSubmitButton>
        </FormSubmitButtonContainer>
      </FormStyled>
    </>
  );
};
