import style from "../src/styles/cartButton.module.css";
import { useAppContext } from "./stateWrapper";

export default function CartButton({ item }) {
  const cart = useAppContext();
  function handleClick() {
    cart.addItemToCart(item);
    cart.openCart();
  }
  return (
    <button className={style.button} onClick={handleClick}>
      add to cart
    </button>
  );
}
