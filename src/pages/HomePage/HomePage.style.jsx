import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { CenterPageContainer, DefaultPageContainer } from "../../style-helpers";

export const HomepageContainer = styled.main`
  ${DefaultPageContainer}
  justify-content: space-around;
`;

export const HomepageContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  letter-spacing: 1px;
`;

export const EmphasizedText = styled.span`
  color: var(--main-accent-color);
  font-weight: bold;
  display: inline;
`;

export const JoinUsButton = styled(Link)`
  padding: 1.5rem 2rem;
  text-decoration: none;
  color: var(--main-accent-color);
  border: var(--main-accent-color) 2px solid;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.2rem;
  transition: transform 300ms;
  &:hover {
    transform: scale(1.05);
  }
`;
