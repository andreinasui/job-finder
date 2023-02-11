import { forwardRef } from "react";
import { FormInputLabel, TextInputField } from "./UserRegistrationForm.style";

export const TextInputComponent = forwardRef((props, ref) => {
  const { onFocus: customOnFocus, ...otherProps } = props;
  return (
    <TextInputField
      ref={ref}
      type="text"
      onFocus={(event) => {
        event.target.setSelectionRange(
          event.target.value.length,
          event.target.value.length
        );
        customOnFocus?.(event);
      }}
      {...otherProps}
    />
  );
});

const FormTextInput = ({ label, inputProps }) => {
  return (
    <>
      <FormInputLabel>{label}</FormInputLabel>
      <TextInputComponent {...inputProps} />
    </>
  );
};

export default FormTextInput;
