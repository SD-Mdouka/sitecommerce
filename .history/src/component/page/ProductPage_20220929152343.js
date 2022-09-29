import React, { useState, useEffect } from "react";
import { Layout } from "../share-component/Layout/Layout";
import axios from "axios";
import "../Style/styelProduct.css";

const ProductPage = () => {
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
              <li data-text={profilItme.title}>
                <a href="">
                  <span>{profilItme.category}</span>
                  {/* <img className="Image" src={profilItme.image} /> */}
                  <span>{profilItme.price}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default ProductPage;
