import React, { useState, useEffect } from "react";
import { Layout } from "../share-component/Layout/Layout";
import axios from "axios";
import "../Style/styelProduct.css";

const ProductPage = () => {
  //   const req = await fetch("https://fakestoreapi.com/products");
  // const productList = await req.json();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
    });
  }, []);
  return (
    <Layout>
      <section>
        <ul className="list-product">
          {product.map((profilItme) => {
            return (
              <li data-text={profilItme.price}>
                <a href="">{profilItme.title}</a>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default ProductPage;
