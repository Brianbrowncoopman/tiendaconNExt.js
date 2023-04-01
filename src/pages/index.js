import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import styleProduct from "../../src/styles/product.module.css";
import Layout from "../../components/layout";
import { getLatestItems } from "../../services/itemService";
import Product from "../../components/product";
import style from "../../src/styles/Home.module.css";

export default function Home({ items }) {
  return (
    <Layout title="Bienvenido">
      <div>
        <div className={style.banner}>
          <div className={style.bannerBackground}>
            <div className={style.bannerInfo}>
              <h2>Shop the summer 2023 colection</h2>
              <p>lorem</p>
            </div>
          </div>
        </div>
      </div>

      <h3>Latest Products</h3>
      <div className={styleProduct.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="item" />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticsProps() {
  const res = await getLatestItems();

  return {
    props: {
      items: res,
    },
  };
}
