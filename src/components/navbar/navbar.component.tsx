import {
  NavbarCartBtn,
  NavbarCartBtnIcon,
  NavbarCartTotalItems,
  NavbarContainer,
  NavbarLogoContainer,
  NavbarLogoIcon,
  NavbarLogoTitle,
} from './navbar.styles';

export function NavbarLogo() {
  return (
    <NavbarLogoContainer>
      <NavbarLogoTitle href='/'>Burger Shop</NavbarLogoTitle>
      <NavbarLogoIcon role='img'>🍔</NavbarLogoIcon>
    </NavbarLogoContainer>
  );
}

export function CartButton() {
  return (
    <NavbarCartBtn href='/cart' role='button'>
      <NavbarCartBtnIcon role='img'>🛒</NavbarCartBtnIcon>
      <NavbarCartTotalItems role='banner'>+9</NavbarCartTotalItems>
    </NavbarCartBtn>
  );
}

export function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLogo />
      <CartButton />
    </NavbarContainer>
  );
}
