import Link from 'next/link';
import styles from './navbar.module.css';

export function NavbarLogo() {
  return (
    <div className={styles['navbar__logo']}>
      <Link href='/' className={styles['navbar__logo-title']}>
        Burger Shop
      </Link>

      <span className={styles['navbar__logo-icon']} role='img'>
        🍔
      </span>
    </div>
  );
}

export function CartButton() {
  return (
    <Link href='/cart' role='button' className={styles['navbar__cart-btn']}>
      <span className={styles['navbar__cart-btn-icon']} role='img'>
        🛒
      </span>
      <span className={styles['navbar__cart-total-items']} role='banner'>
        +9
      </span>
    </Link>
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
