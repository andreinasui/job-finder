import PhoneInput from "react-phone-input-2";
import styled, { css } from "styled-components/macro";
import "react-phone-input-2/lib/semantic-ui.css";
import { CenterPageContainer, DefaultPageContainer } from "../../style-helpers";

export const PhoneInputStyled = styled(PhoneInput)`
  & .special-label {
    text-transform: uppercase;
  }
  & .form-control {
  }
  & .flag-dropdown {
  }
`;

export const WFPageContainer = styled.main`
  ${DefaultPageContainer};
  ${CenterPageContainer};
  padding: 2rem;
  justify-content: space-evenly;
`;
