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
  DropdownContainer,
  DropdownButtons,
  FormInputDropdownWrapper,
} from "./FormInput.style";

const INITIAL_FORM_DATA = {
  name: "",
  age: "",
  phoneNumber: "",
  gender: "",
  county: "",
  photo: "",
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
  const [countyResults, setCountyResults] = useState([]);
  const [showCountyResults, setShowCountyResults] = useState(true);
  const [phoneNumberFieldValid, setPhoneNumberFieldValid] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [genderButtonActive, setGentderButtonActive] = useState("");
  const [ageButtonActive, setAgeButtonActive] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    // TODO: resetFormFields();
  };

  function handleInputChange({ name, value }) {
    setFormData({ ...formData, [name]: value });
  }

  const resetFormFields = () => {
    setFormData(INITIAL_FORM_DATA);
  };
  const handleGenderButtonClick = (event) => {
    const { id, name, value } = event.target;
    setGentderButtonActive(id);
    handleInputChange({ name, value });
  };

  const handleAgeButtonClick = (event) => {
    const { id, name, value } = event.target;
    setAgeButtonActive(id);
    handleInputChange({ name, value });
  };

  const validateNameField = (value) => {
    let result = false;
    if (value.length >= 5) result = true;
    setNameFieldValid(result);
  };
  const validateCountyField = (value) => {
    let result = false;
    if (counties.indexOf(value) !== -1) result = true;
    setCountyFieldValid(result);
    setShowCountyResults(!result);
  };

  const searchCountyInList = (value) => {
    value = value.toLocaleLowerCase();
    if (!value.trim()) {
      setCountyResults([]);
      return;
    }
    const filteredCounties = counties.filter((county) =>
      county.toLocaleLowerCase().startsWith(value)
    );
    validateCountyField(value);
    setCountyResults(filteredCounties);
  };

  const validatePhoneNumberField = (value) => {
    let result = false;
    if (value.length >= 10) result = true;
    setPhoneNumberFieldValid(result);
  };

  const handleTextInputChange = (event) => {
    // TODO: Upgrade form validation
    const { id, name, value } = event.target;
    if (id === "nameField") {
      validateNameField(value);
    }
    if (id === "countyField") {
      searchCountyInList(value);
    }
    if (id === "phoneNumberField") {
      validatePhoneNumberField(value);
    }

    setFormValid(nameFieldValid && countyFieldValid && phoneNumberFieldValid);
    handleInputChange({ name, value });
  };

  const handleSelectCountyDropdown = (event) => {
    const { id, value } = event.target;
    validateCountyField(value);
    handleInputChange({ name: "county", value });
  };

  return (
    <>
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
              Bărbat
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
          <FormInputDropdownWrapper>
            <TextInputField
              id="countyField"
              type="text"
              placeholder="Județ"
              name="county"
              value={formData.county}
              onChange={handleTextInputChange}
              onFocus={(event) => {
                const { value } = event.target;
                searchCountyInList(value);
              }}
              onBlur={() => {
                // setShowCountyResults(false);
              }}
              required
            />
            {!!countyResults.length && showCountyResults && (
              <DropdownContainer>
                {countyResults.map((county, index) => (
                  <DropdownButtons
                    key={index}
                    id={`countyResult-${index}`}
                    type="button"
                    value={county}
                    onClick={handleSelectCountyDropdown}
                  >
                    {county}
                  </DropdownButtons>
                ))}
              </DropdownContainer>
            )}
          </FormInputDropdownWrapper>
        </FormInputContainer>
        <FormInputContainer>
          <FormInputLabel>Telefon</FormInputLabel>
          <PhoneInputStyled
            country={"ro"}
            placeholder="Telefon"
            value={formData.phoneNumber}
            countryCodeEditable={false}
            enableSearch={true}
            onChange={(value, country, e, formattedValue) => {
              handleTextInputChange(e);
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
