import React from "react";
import ScrollButton from "../share-component/BtnTopScroll/BtnScroll";
import Content from "../share-component/Home/Content";
import Main from "../share-component/Home/Main";
import { Layout } from "../share-component/Layout/Layout";
import "../Style/StyleHome.js";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Main />
        <Content />
        <ScrollButton />
      </Layout>
    </>
  );
};

export default HomePage;
