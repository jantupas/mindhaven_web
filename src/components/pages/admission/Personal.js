import React from "react"
import "./admissionstyles.css"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../../firebase"
import { useState, useEffect } from 'react'

function Personal () {

    const [firstname, setFirstName] = useState('');
    const [middlename, setMiddleName] = useState('');
    const [lastname, setLastName] = useState('');
    const [dateofbirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [number, setNumber] = useState('');
    const [submissionMessage, setSubmissionMessage] = useState('');

    useEffect(() => {
        if (submissionMessage) {
            
            const timer = setTimeout(() => {
                setSubmissionMessage('');
            }, 3000); 

            return () => clearTimeout(timer);
        }
    }, [submissionMessage]);

    const handlePerSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const docRef = await addDoc(collection(db, "applicant_information"), {
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            dateofbirth: new Date(dateofbirth),
            gender: gender,
            nationality: nationality,
            email: email,
            username: username,
            number: number
          });
          
          setSubmissionMessage('We have received your submission. Thank you!');
          setFirstName('');
          setMiddleName('');
          setLastName('');
          setDateOfBirth('');
          setGender('');
          setNationality('');
          setEmail('');
          setUsername('');
          setNumber('');
    
        } catch (error) {
          console.error("Error adding document: ", error);
          setSubmissionMessage('There was an error processing your submission. Please try again.');
        }
      };

    return (
        <div className="personal-form-container">
            <h1 className="per-form-title">PERSONAL INFORMATION</h1>
            <form className="personal-form" onSubmit={handlePerSubmit}>
                <div className="per-form-content">
                    <div className="per-form-con">
                        <label className="personal-label">*First Name</label>
                        <input 
                            type="text"
                            className="personal-form-in"
                            maxLength={100}
                            required
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="per-form-con">
                        <label className="personal-label">Middle Name</label>
                        <input 
                            type="text"
                            className="personal-form-in"
                            maxLength={100}
                            value={middlename}
                            onChange={(e) => setMiddleName(e.target.value)}                            
                        />
                    </div>
                    <div className="per-form-con">
                        <label className="personal-label">*Last Name</label>
                        <input 
                            type="text"
                            className="personal-form-in"
                            maxLength={100}
                            required
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="per-form-con">
                        <label className="personal-label">*Date of Birth</label>
                        <input 
                            type="date"
                            className="personal-form-in"
                            required
                            value={dateofbirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                    </div>
                    <div className="per-form-con">
                        <label className="personal-label">*Gender</label>
                        <select id="gender" name="gender" className="personal-select" required value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value=""></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="per-form-con">
                        <label className="personal-label">*Nationality</label>
                        <select id="nationality" name="nationality" className="personal-select" required value={nationality} onChange={(e) => setNationality(e.target.value)}>
                            <option value=""></option>
                            <option value="Afghan">Afghan</option>
                            <option value="Albanian">Albanian</option>
                            <option value="Algerian">Algerian</option>
                            <option value="Argentinian">Argentinian</option>
                            <option value="Australian">Australian</option>
                            <option value="Austrian">Austrian</option>
                            <option value="Bangladeshi">Bangladeshi</option>
                            <option value="Brazilian">Brazilian</option>
                            <option value="Canadian">Canadian</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Egyptian">Egyptian</option>
                            <option value="Filipino">Filipino</option>
                            <option value="French">French</option>
                            <option value="German">German</option>
                            <option value="Indian">Indian</option>
                            <option value="Indonesian">Indonesian</option>
                            <option value="Italian">Italian</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Russian">Russian</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="per-form-con">
                        <label className="personal-label">*Parent/Guardian Email</label>
                        <input 
                            type="email"
                            className="personal-form-in"
                            maxLength={100}
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="per-form-con">
                        <label className="personal-label">Parent/Guardian Facebook Username</label>
                        <input 
                            type="text"
                            className="personal-form-in"
                            maxLength={100}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="per-form-con">
                        <label className="personal-label">*Mobile Number </label>
                        <input 
                            type="tel"
                            className="personal-form-in"
                            required
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                </div>
                <div className="per-btn-container">
                <button className ="per-submit-btn" type="submit">Submit</button>
                </div>
            </form>
            <div className={`submission-message ${submissionMessage ? 'show' : ''}`}>
                {submissionMessage}
            </div>
        </div>
    )
}

export default Personal