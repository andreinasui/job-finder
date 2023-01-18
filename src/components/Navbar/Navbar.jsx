import {
  NavbarContainer,
  NavbarContent,
  NavbarLogo,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuItemContent,
} from "./Navbar.style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarLogo to="/">OCM</NavbarLogo>
        <NavbarMenu>
          <NavbarMenuItem>
            <NavbarMenuItemContent to="join-us">Join Us</NavbarMenuItemContent>
          </NavbarMenuItem>
        </NavbarMenu>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
