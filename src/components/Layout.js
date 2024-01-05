import React from "react";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "68.4vh" }}>
        <Toaster /> {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "BinBag Intern Task",
  description: "Assignment",
  keywords: "ReactJs",
  author: "Devanshu Kumar",
};

export default Layout;
