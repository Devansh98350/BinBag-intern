import React from "react";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundColor: "#321D56 " }}>
      <div className="fcol1" style={{ display: "flex", height: "100px" }}>
        <div
          className="frow1"
          style={{ flex: 2, color: "white", margin: " 30px 100px 0 100px" }}
        >
          <h>
            Binbag is building the infrastructure to accelerate circularity for
            end-of-life electronics (e-waste)
          </h>
        </div>
        <div
          className="frow2"
          style={{ flex: 1, color: "white", marginTop: "30px" }}
        >
          <h>Privacy Policy</h>
        </div>
        <div
          className="frow3"
          style={{ flex: 1, color: "white", marginTop: "30px" }}
        >
          <h>Terms of Use</h>
        </div>
      </div>
      <div
        className="fcol1"
        style={{
          display: "flex",
          color: "white",
          height: "50px",
          marginLeft: "45%",
          marginTop: "50px",
        }}
      >
        <h> @Binbag (Internship Assignment)</h>
      </div>
    </div>
  );
};

export default Footer;
