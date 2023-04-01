import Link from "next/link";
import Image from "next/image";
import { convertToPath } from "../lib/utils";

import style from "../src/styles/product.module.css";
import CartButton from "./cartButton";

export default function Product({ item, showAs, qty }) {
  if (showAs === "Page") {
    return (
      <div className={style.page}>
        <div className={style.image}>
          <Image
            src={item.image}
            alt={item.description}
            width={500}
            height={500}
          />
        </div>

        <div className={style.info}>
          <div>
            <h2>{item.title}</h2>
          </div>
          <div className={style.price}>${item.price}</div>
          <div>{item.description}</div>
          <div>
            <CartButton item={item} />
          </div>
        </div>
      </div>
    );
  }

  if (showAs === "ListItem") {
    return (
      <div className={style.listItems}>
        <div>
          <Image
            src={item.image}
            alt={item.description}
            width={70}
            height={70}
          />
        </div>
        <div>
          <h3>{item.title}</h3>
        </div>
        <div>
          <h3>{item.price}</h3>
        </div>
        <h3>{qty === 0 ? "" : <div>{qty} units</div>}</h3>
        <h3>{qty === 0 ? "" : <div>subtotal: ${qty * item.price}</div>}</h3>
      </div>
    );
  }

  return (
    <div className={style.item}>
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <Image
            src={item.image}
            alt={item.description}
            width={340}
            height={300}
          />
        </Link>
      </div>

      <div>
        <h3>
          <Link href={`/store/${item.id}`}>{item.title}</Link>
        </h3>
      </div>

      <div>${item.price}</div>
      <div>
        <CartButton item={item} />
      </div>
    </div>
  );
}
