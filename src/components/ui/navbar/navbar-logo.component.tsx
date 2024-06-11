import {
  NavbarLogoContainer,
  NavbarLogoIcon,
  NavbarLogoTitle,
} from './navbar.styles';

export function NavbarLogo() {
  return (
    <NavbarLogoContainer>
      <NavbarLogoTitle href='/'>Burger Shop</NavbarLogoTitle>
      <NavbarLogoIcon title='burger-icon' role='img'>
        🍔
      </NavbarLogoIcon>
    </NavbarLogoContainer>
  );
}
