import React, { useState  } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "../../styles/AuthStyles.css";

const Register = () => {
    const [firstname, setFirstname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [aadhaar, setAadhaar] = useState("");
    const [pan, setPan] = useState("");
    const [photo, setPhoto] = useState(null);
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [pathurl, setPathurl] = useState("");
    // const [code, setCode] = useState("");
    const [referenceCode, setReferenceCode] = useState('');

    const navigate = useNavigate();


    const upload = () => {
        if (photo) {
            const formData = new FormData();
            formData.append('file', photo);
    
            axios.post("http://localhost:5000/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                setPathurl(res?.data?.file?.path);
                toast.success(res?.data?.message);
            })
            .catch(err => {
                console.error(err);
                toast.error("Failed to upload file");
            });
        } else {
            toast.error("No file selected");
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/v1/auth/register", {
                firstname,
                middlename,
                lastname,
                address,
                aadhaar,
                pan,
                photo: pathurl,
                email,
                mobile,
                password,
                // code,
                referenceCode
            },
            
            {
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            alert(`User registered successfully make payment after send code `);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                if (error.response.data.message === 'Email or mobile is already registered.') {
                    alert('User already registered with this email or mobile.');
                }  else if (error.response.data.message === 'Invalid reference code. You cannot register without a valid reference code.') {
                    alert('Invalid reference code. Please provide a valid reference code.');
                }  else {
                    alert(error.response.data.message);
                  }
            }  else {
                alert('Something went wrong. Please try again later.');
              }
            }
    };


    

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };
    
    
    return (
        <Layout title="Register - Ecommer App">
            <Toaster />
            <div className="form-container" style={{ minHeight: "90vh" }}>
                <form onSubmit={handleSubmit}>
                    <h4 className="title">REGISTER FORM</h4>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your first Name"
                            required
                            autoFocus
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={middlename}
                            onChange={(e) => setMiddlename(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your middle name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your last name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your address"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={aadhaar}
                            onChange={(e) => setAadhaar(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your aadhaar number"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={pan}
                            onChange={(e) => setPan(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your pan number"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input type="file" onChange={handleFileChange} required />
                        <button type="button" onClick={upload}>Upload</button>
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="tel"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your mobile number"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your password"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={referenceCode}
                            onChange={(e) => setReferenceCode(e.target.value)}
                            className="form-control"
                            placeholder="Enter referenceCode number"
                            required
                        />
                    </div>
                
                    {/* <button type="button" onClick={fetchCode}>referece code</button><br/><br/>  */}
                    {/* <div>
                        <p id="code-display">Generate Code: {code}</p>
                        <button type="button" onClick={fetchCode}>Generate Code</button><br/><br/>
                    </div>  */}
                     <button type="submit" className="btn btn-primary">
                        REGISTER
                    </button>
                </form> 
                {/* {message && <p>{message}</p>} */}
            </div>
        </Layout>
    );
};

export default Register;
