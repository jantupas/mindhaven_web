import React from "react"
import "./contactstyles.css"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../../firebase"
import { useState } from 'react'



function Newsform () {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "news"), {
        title: title,
        date: new Date(date),
        content: content
      });

      
      setTitle('');
      setDate('');
      setContent('');

    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

    return (
        <div>
      <form className="add-news-form" onSubmit={handleSubmit}>
        <label className="news-form-label">Title</label>
        <input 
          type="text"
          className="news-form-input"
          maxLength={100}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label className="news-form-label">Date</label>
        <input 
          type="datetime-local"
          className="news-form-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        
        <label className="news-form-label">Content</label>
        <textarea 
          id="news-content" 
          className="textarea-message" 
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="btn-container">
            <button className ="submit-btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
    )
}

export default Newsform