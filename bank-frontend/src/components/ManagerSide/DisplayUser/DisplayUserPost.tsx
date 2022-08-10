import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { json } from 'stream/consumers';
import './DisplayUser.css';

type DisplayProps = {
    accType: any,
    prefix : string,
    firstName: string,  
    lastName: string,
    contactNo: string,
    email: string,
    dob: string,
    address: string,
    city: string,
    state: string
};

const ShowUser = () => {
  const { accNo } = useParams();
  const [accType, setAccType] = useState('');
    const [prefix, setPrefix] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    

  const [result, setResult] = useState<DisplayProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("http://localhost:8000/api/get_user/" + accNo, {
        method: "GET"
      });
      const jsonData = await data.json();
      console.log(jsonData);
      setAccType(jsonData.accType);
      setPrefix(jsonData.prefix);
      setFirstName(jsonData.firstName);
      setLastName(jsonData.lastName);
      setContactNo(jsonData.contactNo);
      setEmail(jsonData.email);
      setDob(jsonData.dob);
      setAddress(jsonData.address);
      setCity(jsonData.city);
      setState(jsonData.state);
    };

    api();
  }, []);
  console.log(result);
  
  return (
    <section id="display" className="testimonials section-bg">
      <div className="testimonial-item showRecommendation">
      <div className="container">
        <div className="display-title">
          <h2>Display</h2>
          <p></p>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              
            <table style={{border: '1px solid rgba(0, 0, 0, 0.05)'}}>
            <thead>
                <tr>
                    <td>Account Type</td>
                    <td>Prefix</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Contact Number</td>
                    <td>Email</td>
                    <td>Date of Birth</td>
                    <td> Address </td>
                    <td>City</td>
                    <td>State</td>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td>{accType}</td>
                        <td>{prefix}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{contactNo}</td>
                        <td>{email}</td>
                        <td>{dob}</td>
                        <td>{address}</td>
                        <td>{city}</td>
                        <td>{state}</td>
                    </tr>
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
<br></br>
      </div>
    </section>
  );
};

export default ShowUser;