import { Form } from "react-router-dom";
import { appRoutes } from "../constants";

const WorkplacesFound = () => {
  const randWPFound = Math.floor(Math.random() * 3) + 1;

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>Găsim cea mai bună variantă pentru dumneavoastră</h1>
      <p>
        <span>{randWPFound}</span> locuri de muncă disponibile pentru tine.
      </p>
      <h2>
        Mulțumim pentru răspunsuri. Vă rugăm să completați datele pentru ca
        echipa noastră să vă poată contacta.
      </h2>
      <Form method="post" action={appRoutes.WORKPLACES_ABS}>
        <label>Nume</label>
        <input type="text" name="nume" />
        <label>Prenume</label>
        <input type="text" name="prenume" />
        <label>Telefon</label>
        <label>Gen</label>
        <label>Județ</label>
        <label>Vârsta</label>
      </Form>
    </>
  );
};

export default WorkplacesFound;
