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
        {/* <ul className="list-product">
          <li data-text="sum">
            <a href="">sum</a>
          </li>
          <li data-text="mercury">
            <a href="">mercury</a>
          </li>
          <li data-text="venus">
            <a href="">venus</a>
          </li>
          <li data-text="earth">
            <a href="">earth</a>
          </li>
          <li data-text="jupiter">
            <a href="">jupiter</a>
          </li>
          <li data-text="saturn">
            <a href="">saturn</a>
          </li>
          <li data-text="uranus">
            <a href="">uranus</a>
          </li>
          <li data-text="neptune">
            <a href="">neptune</a>
          </li>
        </ul> */}
        <ul className="list-product">
          {product.map((profilItme) => {
            return (
              <li data-text={profilItme.title}>
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
