import { useContext } from "react";
import { InquiryFinalisedContext } from "../../contexts/Inquiry/InquiryFinalised";
import { appRoutes } from "../constants";
import {
  EmphasizedText,
  HomepageContainer,
  HomepageContent,
  JoinUsButton,
} from "./HomePage.style";

const HomePage = () => {
  const { setFinalised: setInquiryFinalised } = useContext(
    InquiryFinalisedContext
  );

  const random_workplaces = Math.floor(Math.random() * 51) + 1;

  return (
    <HomepageContainer as="main">
      {setInquiryFinalised(false)}
      <HomepageContent>
        Locuri de muncă in Germania cu salariu intre{" "}
        <span style={{ fontWeight: "bold" }}>1400€ - 2500€ NET</span> și
        contract de muncă legal direct cu{" "}
        <EmphasizedText>Angajatorul German</EmphasizedText>, orele de munca
        suplimentare plătite dublu.
      </HomepageContent>
      <HomepageContent>
        Mai avem {random_workplaces} locuri disponibile.
      </HomepageContent>
      <JoinUsButton to={appRoutes.JOINUS}>
        Apasă aici dacă prezinți interes
      </JoinUsButton>
    </HomepageContainer>
  );
};

export default HomePage;
