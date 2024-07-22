import Link from "next/link";
import Style from "../styles/navbar.module.css";

const Nav = () => {
  return (
    <>
      <nav className={Style.navbar}>

        <div className={Style}>
          <ul className={Style.navbarList}>

            <li className={Style.navbarItem}>
              <Link className={Style.navbarLink} href="/">Home</Link>
            </li>
            
            <li className={Style.navbarItem}>
              <Link className={Style.navbarLink} href="/about">About</Link>
            </li>

            <li className={Style.navbarItem}>
              <Link className={Style.navbarLink} href="/movie">Movie</Link>
            </li>

            <li className={Style.navbarItem}>
              <Link className={Style.navbarLink} href="/contact">Contact</Link>
            </li>

          </ul>
        </div>
        
      </nav>
    </>
  );
};

export default Nav;
