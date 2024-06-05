import styles from './navbar.module.css';

export function NavbarLogo() {
  return (
    <div className={styles['navbar__logo']}>
      <h1>Burger Shop</h1>
      <span className={styles['navbar__logo-icon']} role='img'>
        🍔
      </span>
    </div>
  );
}

export function CartButton() {
  return (
    <button role='button' className={styles['navbar__cart-btn']}>
      <span className={styles['navbar__cart-btn-icon']} role='img'>
        🛒
      </span>
      <span className={styles['navbar__cart-total-items']} role='banner'>
        +9
      </span>
    </button>
  );
}

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavbarLogo />
      <CartButton />
    </nav>
  );
}
