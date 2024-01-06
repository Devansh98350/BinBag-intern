import React from "react";
import Layout from "../Layout";
import logo from "../../assests/photo.webp";
import design from "../../assests/design.webp";

const Homepage = () => {
  return (
    <Layout title="Binbag - Internship Task">
      <div className="photo" style={{ width: "98.79vw", height: "100%" }}>
        <img
          src={logo}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div>
          <h1
            style={{
              position: "absolute",
              top: "45%",
              left: "26.7%",
              fontSize: "60px",
              fontWeight: "bold",
              transform: "translate(-50%, -50%)",
              color: "green",
              textAlign: "left",
              backgroundColor: "white",
            }}
          >
            Bringing Planet
          </h1>
          <h2
            style={{
              position: "absolute",
              top: "60%",
              left: "30%",
              fontSize: "60px",
              fontWeight: "bold",
              transform: "translate(-50%, -50%)",
              color: "orange",
              textAlign: "left",
              backgroundColor: "white",
            }}
          >
            and Profit Together
          </h2>
          <p
            style={{
              position: "absolute",
              top: "80%",
              left: "11%",
              right: "40%",
              fontSize: "23px",
              color: "white",
              textAlign: "left",
            }}
          >
            Managing waste does not have to come at the cost of your business's
            productivity. At Binbag, we bring together everything you need to
            recycle e-waste so that you can focus on growing your business.
          </p>
        </div>
      </div>
      <div className="disturb" style={{ backgroundColor: "white" }}>
        <h1
          style={{
            fontFamily: "Comforta",
            fontSize: "50px",
            marginLeft: "9%",
            color: "#FFC300 ",
          }}
        >
          Save time. Save cost. Be fully compliant
        </h1>
        <div className="row" style={{ display: "flex" }}>
          <div className="column1" style={{ flex: 0.6 }}>
            <h3
              style={{
                fontSize: "15px",
                marginTop: "30px",
                marginLeft: "15%",
                fontWeight: "bold",
              }}
            >
              {" "}
              Guaranteed Service. Across India
            </h3>
            <h4
              style={{
                fontSize: "15px",
                marginLeft: "15%",
                marginRight: "30%",
              }}
            >
              {" "}
              Timely and guaranteed pick-up anywhere in India with our own
              transportation and logistics partners.
            </h4>
            <h3
              style={{
                fontSize: "15px",
                marginTop: "30px",
                marginLeft: "15%",
                fontWeight: "bold",
              }}
            >
              {" "}
              Regulatory Compliant
            </h3>
            <h4
              style={{
                fontSize: "15px",
                marginLeft: "15%",
                marginRight: "30%",
              }}
            >
              {" "}
              Binbag runs its own Pollution Board-approved recycling units to
              ensure you are always on the right side of the law.
            </h4>
            <h3
              style={{
                fontSize: "15px",
                marginTop: "30px",
                marginLeft: "15%",
                fontWeight: "bold",
              }}
            >
              {" "}
              Manage multiple locations
            </h3>
            <h4
              style={{
                fontSize: "15px",
                marginLeft: "15%",
                marginRight: "30%",
              }}
            >
              {" "}
              Whether you have 2 locations or 20, our technology platform
              provides a seamless digital experience from scheduling a pickup,
              visibility across locations, and managing payment.
            </h4>
          </div>
          <div className="column2" style={{ flex: 0.4 }}>
            <div className="photo" style={{ width: "25.79vw", height: "100%" }}>
              <img
                src={design}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <button1
            style={{
              backgroundColor: "green",
              color: "White",
              width: "150px",
              height: "30px",
              borderRadius: "25px",
              fontWeight: "bold",
            }}
          >
            Get Started
          </button1>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
