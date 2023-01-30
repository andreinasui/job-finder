import {
  FormInputField,
  FormInputLabel,
  FormInputWrapper,
  FormStyled,
} from "./FormInput.style";

export const UserRegistrationForm = ({ children, ...otherProps }) => {
  return <FormStyled {...otherProps}>children</FormStyled>;
};

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormInputWrapper>
      <FormInputField {...otherProps} />
      {label && (
        <FormInputLabel className={otherProps.value.length ? "raise" : ""}>
          {label}
        </FormInputLabel>
      )}
    </FormInputWrapper>
  );
};
