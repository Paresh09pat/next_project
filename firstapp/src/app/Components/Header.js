import Image from "next/image";
import Link from "next/link";
import Styles from "../../app/styles/navbar.module.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className={Styles.main_header}>
        <div className={Styles.navbar_brand}>
          <Link href="/">
         <Image src="/logo.png" alt="" width={150} height={40}/>
          </Link>
        </div>

        <Nav />
      </header>
    </>
  );
};

export default Header;
