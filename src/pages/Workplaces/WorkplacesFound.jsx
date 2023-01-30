import { useState } from "react";
import { UserRegFormInput, UserRegistrationForm } from "../../components";
import {
  FormStyled,
  FormInputWrapper,
  PhoneInputStyled,
  WFPageContainer,
  FormInputLabel,
  FormInputField,
} from "./WorkplaceFound.style";

const INITIAL_FORM_DATA = {
  lastName: "",
  firstName: "",
  age: "",
  phoneNumber: "",
  gender: "man",
  county: "",
};

const WorkplacesFound = () => {
  const randWPFound = Math.floor(Math.random() * 3) + 1;

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // TODO: Add data to db and corelate it with qna
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <WFPageContainer>
      <h1>Găsim cea mai bună variantă pentru dumneavoastră</h1>
      <p>
        <span>{randWPFound}</span> locuri de muncă disponibile pentru tine.
      </p>
      <h2>
        Mulțumim pentru răspunsuri. Vă rugăm să completați datele pentru ca
        echipa noastră să vă poată contacta.
      </h2>
      <UserRegistrationForm onSubmit={handleFormSubmit}>
        <UserRegFormInput 
          label="Prenume"
          required
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </UserRegistrationForm>
      {/*   <label>Nume</label> */}
      {/*   <input */}
      {/*     type="text" */}
      {/*     name="lastName" */}
      {/*     value={formData.lastName} */}
      {/*     onChange={handleInputChange} */}
      {/*     required */}
      {/*     autoFocus */}
      {/*   /> */}
      {/*   <label>Telefon</label> */}
      {/*   <PhoneInputStyled */}
      {/*     country="ro" */}
      {/*     inputProps={{ */}
      {/*       name: "phoneNumber", */}
      {/*       required: true, */}
      {/*     }} */}
      {/*     value={formData.phoneNumber} */}
      {/*     onChange={(value, country, e, formattedValue) => { */}
      {/*       handleInputChange(e); */}
      {/*     }} */}
      {/*   /> */}
      {/*   <label>Gen</label> */}
      {/*   <select */}
      {/*     name="gender" */}
      {/*     value={formData.gender} */}
      {/*     onChange={handleInputChange} */}
      {/*   > */}
      {/*     <option value="man">Bărbat</option> */}
      {/*     <option value="woman">Femeie</option> */}
      {/*   </select> */}
      {/*   <label>Județ</label> */}
      {/*   <input */}
      {/*     type="text" */}
      {/*     name="county" */}
      {/*     value={formData.county} */}
      {/*     onChange={handleInputChange} */}
      {/*     required */}
      {/*   /> */}
      {/*   <label>Vârsta</label> */}
      {/*   <input */}
      {/*     type="text" */}
      {/*     name="age" */}
      {/*     value={formData.age} */}
      {/*     onChange={handleInputChange} */}
      {/*     required */}
      {/*   /> */}
      {/*   <button type="submit">Trimite</button> */}
      {/* </FormStyled> */}
    </WFPageContainer>
  );
};

export default WorkplacesFound;
