import FooterPage from "@/components/footer";
import Header from "@/components/header";
import { ProductCatalog } from "@/components/productcatalog";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <ProductCatalog />
      <FooterPage />
    </div>
  );
};

export default page;
