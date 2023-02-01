import styled, { css } from "styled-components/macro";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css";

export const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  row-gap: 7rem;
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormInputLabel = styled.label`
  align-self: flex-start;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
`;
export const TextInputField = styled.input`
  border: 2px solid #eee;
  padding: 0.75rem;
  min-width: 20rem;
  font-size: 1rem;
  outline: none;
  border-radius: 5px;
  &:focus {
    border-color: var(--primary-color);
  }
`;
export const SelectOptionsContainer = styled.div`
  display: flex;
  border: 2px solid #eee;
  font-size: 1rem;
  border-radius: 5px;
`;
export const SelectButton = styled.button`
  flex: 1 1 0;
  border: 2px transparent;
  padding: 0.75rem;
  font-size: 0.9rem;
  background-color: ${(props) =>
    props.selected ? "var(--primary-color)" : "white"};
  margin: 0.25rem;
  border-radius: inherit;
  transition: background-color 300ms ease;
  &:hover {
    background-color: var(--primary-color);
  }
  &:focus {
    outline: 2px solid var(--primary-color);
  }
`;
export const FormSubmitButtonContainer = styled.div`
  grid-column: span 2;
`;
export const FormSubmitButton = styled.button`
  background-color: white;
  border: var(--primary-color) 2px solid;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.75rem 1.25rem;
  transition: transform 300ms;
  &:hover:not(:disabled) {
    transform: scale(1.05);
  }
  &:disabled {
    border-color: #eee;
  }
`;

export const PhoneInputStyled = styled(PhoneInput)`
  & .special-label {
    display: none;
  }
  & .form-control {
    /* display: inline-block; */
    /* border: none; */
    /* border-bottom: 2px solid hsl(0, 10%, 55%); */
    /* border-radius: 0; */
    /* padding: 10px 10px 10px 5px; */
    /* margin: 2rem 0; */
    /* font-size: 1.2rem; */
    /* outline: none; */
  }
  & .flag-dropdown {
    /* display: inline-block; */
    /* position: absolute; */
    /* border: none; */
    /* border-bottom: 2px solid hsl(0, 10%, 55%); */
    /* border-radius: 0; */
    /* background-color: white; */
  }
`;
