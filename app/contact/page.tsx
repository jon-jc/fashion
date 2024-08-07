import ContactPage from "@/components/contact";
import FooterPage from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <ContactPage />
      <FooterPage />
    </div>
  );
};

export default page;
