import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { UserRegistrationForm } from "components";
import { SaveUserToDB } from "db";
import {
  FormContainer,
  IntroContainer,
  WFPageContainer,
} from "./WorkplaceFound.style";

const WorkplacesFound = () => {
  const randWPFound = useRef(Math.floor(Math.random() * 3) + 1);
  const { state } = useLocation();
  const { inquiryEntries } = state;

  const unifyData = (formData, inquiryEntries) => {
    return { user: formData, inquiryEntries };
  };

  const handleFormSubmit = (formData) => {
    const unifiedData = unifyData(formData, inquiryEntries);
    console.log(unifiedData);
    SaveUserToDB(unifiedData);
  };

  return (
    <WFPageContainer>
      <IntroContainer>
        <h1>Mulțumim pentru răspunsuri!</h1>
        <h1> Găsim cea mai bună variantă pentru dumneavoastră!</h1>
        <p>
          <>{randWPFound.current}</>{" "}
          {randWPFound.current === 1 ? <>loc</> : <>locuri</>} de muncă{" "}
          {randWPFound.current === 1 ? <>disponibil</> : <>disponibile</>}{" "}
          pentru tine.
        </p>
        <h2>
          Vă rugăm să completați datele pentru ca echipa noastră să vă poată
          contacta.
        </h2>
      </IntroContainer>
      <FormContainer>
        <UserRegistrationForm onSubmit={handleFormSubmit} />
      </FormContainer>
    </WFPageContainer>
  );
};

export default WorkplacesFound;
