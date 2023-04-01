import Link from "next/link";
import style from "../src/styles/menu.module.css";
import { useAppContext } from "./stateWrapper";

export default function Menu() {
  const cart = useAppContext();

  function handleOpenCart() {
    cart.openCart();
  }

  return (
    <nav className={style.menu}>
      <div>
        <Link href="/" className={style.link}>
          HOME
        </Link>
        <Link href="/store" className={style.link}>
          TIENDA
        </Link>
        <Link href="/faq" className={style.link}>
          FAQ
        </Link>
      </div>
      <div>
        <a href="#" className={style.link} onClick={handleOpenCart}>
          Cart ({cart.getNumberOfItems()})
        </a>
      </div>
    </nav>
  );
}
