import { NavbarContainer } from './navbar.styles';
import { NavbarLogo } from './navbar-logo.component';
import { CartButton } from './navbar-cart-button.component';

export function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLogo />
      <CartButton />
    </NavbarContainer>
  );
}
