import React from "react"
import "./contactstyles.css"

function Form () {
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="first-form">
                    <div className="form-content">
                        <label>First Name</label>
                        <input 
                            type="text"
                            className="form-input"
                            maxLength={100}
                        />
                    </div>
                    <div className="form-content">
                        <label>Last Name</label>
                        <input 
                            type="text"
                            className="form-input"
                            maxLength={100}
                        />
                    </div>
                    <div className="form-content">
                        <label>Email</label>
                        <input 
                            type="email"
                            className="form-input"
                            maxLength={100}
                        />
                    </div>
                    <div className="form-content">
                        <label>Phone (Optional)</label>
                        <input 
                            type="tel"
                            className="form-input"
                        />
                    </div>
                </div>
                <div className="second-form">
                    <div className="form2-content">
                        <label>Subject</label>
                        <input 
                            type="text"
                            className="form2-input"
                            maxLength={100}
                        />
                    </div>
                    <div className="form2-content">
                        <label>Message</label>
                        <textarea id="form-message" className="textarea-message" rows="5"/>
                    </div>
                </div>
                <div className="btn-container">
                    <button type="submit" className="submit-btn">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Form