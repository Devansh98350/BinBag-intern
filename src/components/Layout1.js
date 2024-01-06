import React from "react";
import { Toaster } from "react-hot-toast";
import Header1 from "../components/Header/Header1.js";
import Footer from "../components/Footer/Footer.js";
import { Helmet } from "react-helmet";

const Layout1 = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header1 />
      <main style={{ minHeight: "68.4vh" }}>
        <Toaster /> {children}
      </main>
      <Footer />
    </div>
  );
};

Layout1.defaultProps = {
  title: "BinBag Intern Task",
  description: "Assignment",
  keywords: "ReactJs",
  author: "Devanshu Kumar",
};

export default Layout1;
