import styled from "styled-components/macro";
import { Link, NavLink } from "react-router-dom";
import { CenterPageContainer } from "../../style-helpers";

export const NavbarContainer = styled.nav`
  padding: 0.75rem;
  background-image: linear-gradient(darkgray, darkgray);
  background-size: 95% 1px;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const NavbarContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;
`;

export const NavbarLogo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: var(--logo-color);
  text-decoration: none;
  letter-spacing: 6px;
`;

export const NavbarMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const NavbarMenuItem = styled.li``;

export const NavbarMenuItemContent = styled(NavLink)`
  background-image: linear-gradient(
    var(--main-accent-color),
    var(--main-accent-color)
  );
  background-size: 0 2px;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: background-size 250ms ease;
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    background-size: 100% 2px;
  }
  &.active {
    background-size: 100% 2px;
  }
`;
