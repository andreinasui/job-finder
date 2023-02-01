import styled from "styled-components/macro";
import { CenterPageContainer, DefaultPageContainer } from "../../style-helpers";

export const WFPageContainer = styled.main`
  ${DefaultPageContainer};
  ${CenterPageContainer};
  /* justify-content: space-evenly; */
`;
export const IntroContainer = styled.div`
  display: flex;
  flex: 0.5 0 auto;
  flex-direction: inherit;
  justify-content: space-evenly;
  min-width: 85%;
  min-height: 25vh;
  border-bottom: 2px solid #eee;
  margin-bottom: 5rem;
`;
export const FormContainer = styled.div`
  display: flex;
  flex: 0.5 0 auto;
  min-width: 85%;
  align-items: flex-start;
  justify-content: center;
`;
