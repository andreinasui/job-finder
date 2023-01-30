import styled, { css } from "styled-components/macro";

export const FormStyled = styled.form`
  display: flex;
  width: 75%;
  flex-direction: column;
  margin-top: 2rem;
`;
export const FormInputContainer = styled.div`
  margin: 2.5rem 0;
  position: relative;
`;
export const FormInputWrapper = styled.div`
  position: relative;
`;
const labelRaise = css`
  color: hsl(0, 0%, 0%);
  font-size: 0.75rem;
  top: -15px;
`;
export const FormInputLabel = styled.label`
  position: absolute;
  top: 25px;
  left: 5px;
  color: hsl(0, 10%, 55%);
  font-size: 1.2;
  transition: 200ms ease all;
  pointer-events: none;
  &.raise {
    ${labelRaise}
  }
`;
export const FormInputField = styled.input`
  display: block;
  min-width: 80%;
  border: none;
  border-bottom: 2px solid hsl(0, 10%, 55%);
  padding: 10px 10px 10px 5px;
  margin: 2rem 0;
  font-size: 1.25rem;
  outline: none;
  &:focus + ${FormInputLabel} {
    ${labelRaise}
  }
`;
