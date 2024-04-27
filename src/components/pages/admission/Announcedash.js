import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { getDocs, collection, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./dashboardstyles.css";

function Announcedash() {
  const [announcementData, setAnnouncementData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState({
    id: "",
    title: "",
    date: "",
    content: ""
  });

  useEffect(() => {
    fetchDataFromFirestore();
  }, []);

  async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "announcements"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().date.toDate()
    }));
    setAnnouncementData(data);
  }

  function handleModifyClick(announcement) {
    setCurrentAnnouncement(announcement);
    setEditMode(true);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCurrentAnnouncement((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleCancel() {
    setEditMode(false);
  }
  function handleDateChange(event) {
    const { name, value } = event.target;
    setCurrentAnnouncement((prevState) => ({
      ...prevState,
      [name]: new Date(value) 
    }));
  }
  

  async function handleSubmit(event) {
    event.preventDefault();
    const { id, title, date, content } = currentAnnouncement;
    const announcementRef = doc(db, "announcements", id);
    await updateDoc(announcementRef, {
      title,
      date,
      content
    });
    setEditMode(false);
    fetchDataFromFirestore();
  }

  return (
    <div className="admdash-ann-cont">
      <h1 className="ann-dash-title">MANAGE ANNOUNCEMENTS</h1>
      <table className="announcement-table">
        <thead>
          <tr>
            <th className="ann-table-title">TITLE</th>
            <th className="ann-table-title">DATE</th>
            <th className="ann-table-title">CONTENT</th>
            <th className="ann-table-title">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {announcementData.map((announcement) => (
            <tr key={announcement.id}>
              <td className="ann-table-content">{announcement.title}</td>
              <td className="ann-table-content">
                {announcement.date.toLocaleDateString()}
              </td>
              <td className="ann-table-content">{announcement.content}</td>
              <td className="ann-table-content">
                <button
                  className="ann-modify-btn"
                  onClick={() => handleModifyClick(announcement)}
                >
                  Modify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editMode && (
        <div className="adm-ann-form-container">
        <form onSubmit={handleSubmit} className="adm-ann-form">
        <div className="adm-ann-container">
            <label className="adm-ann-con-title">Title</label>
            <input 
                className="adm-ann-in"
                type="text"
                name="title"
                value={currentAnnouncement.title}
                onChange={handleInputChange}
            />
        </div>
        <div className="adm-ann-container">
            <label className="adm-ann-con-title">Date</label>
            <input 
                className="adm-ann-in"
                type="date"
                name="date"
                value={new Date(currentAnnouncement.date.getTime() - (currentAnnouncement.date.getTimezoneOffset() * 60000)).toISOString().split("T")[0]}
                onChange={handleDateChange}
            />
        </div>
        <div className="adm-ann-container">
            <label className="adm-ann-con-title">Content</label>
            <textarea
                className="adm-ann-in"
                name="content"
                value={currentAnnouncement.content}
                onChange={handleInputChange}
            ></textarea>
        </div>
        <div className="ann-modify-btn-con">
            <button className="ann-cancel-btn" onClick={handleCancel}>Cancel</button>
            <button className="ann-modify-btn" type="submit">Submit</button>
          </div>
        </form>
        </div>
      )}
    </div>
  );
}

export default Announcedash;
