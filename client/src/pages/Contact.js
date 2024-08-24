import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import '../styles/Contact.css'; 

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="container-fluid d-flex justify-content-center align-items-center contactus">
        <div className="row w-100">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src="/image/contact.jpg"
              alt="contactus"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
            <div className="contact-info">
              <h1 className="bg-dark p-2 text-white">CONTACT US</h1>
              <p className="text-justify mt-2"><b>Address: </b>
              461, Opp. Sangna 1 Row House, Shyamdham Chowk, Nana Varachha Surat
              </p>
              <p className="mt-3">
                <BiMailSend /> : Digitalbusinessplan@gmail.com
              </p>
              <p className="mt-3">
                <BiPhoneCall /> : +91 96243 88392
              </p>
              <p className="mt-3">
                <BiSupport /> : +91 81280 88393
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
