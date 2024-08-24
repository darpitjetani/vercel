import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/About.css";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="container-fluid d-flex justify-content-center align-items-center aboutus">
        <div className="row w-100">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src="/image/Aboutt.jpg"
              alt="aboutus"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
            <div className="about-info">
              <h1 className="bg-dark p-2 text-white">ABOUT US</h1>
              <p className="text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                officiis obcaecati esse tempore unde ratione, eveniet mollitia,
                perferendis eius temporibus dicta blanditiis doloremque explicabo
                quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
                accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
                commodi illum quidem neque tempora name.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
