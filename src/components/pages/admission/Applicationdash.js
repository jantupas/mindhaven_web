import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { getDocs, collection, doc, updateDoc, deleteDoc } from "firebase/firestore";
import Admdashnav from "./Admdashnav";

function Applicationdash() {
  const [applicationData, setApplicationData] = useState([]);
  const [filter, setFilter] = useState("pending");

  useEffect(() => {
    fetchDataFromFirestore();
  }, [filter]);

  async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "applicant_information"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      dateofbirth: doc.data().dateofbirth.toDate()
    }));
    setApplicationData(data);
  }

  async function handleApproveClick(applicationId) {
    const isConfirmed = window.confirm("Are you sure you want to approve this application?");
    if (!isConfirmed) {
      return;
    }
    try {
      await updateApplicationStatus(applicationId, "approved");
      const application = applicationData.find(app => app.id === applicationId);
      if (application) {
        const number = application.number;
        await sendSMSApprove(number);
      }
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }

  async function handleDenyClick(applicationId) {
    const isConfirmed = window.confirm("Are you sure you want to deny this application?");
    if (!isConfirmed) {
      return;
    }
    try {
      await updateApplicationStatus(applicationId, "denied");
      const application = applicationData.find(app => app.id === applicationId);
      if (application) {
        const number = application.number;
        await sendSMSDeny(number);
      }
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }

  async function handlePendingClick(applicationId) {
    const isConfirmed = window.confirm("Are you sure you want to mark this application as pending?");
    if (!isConfirmed) {
      return;
    }
    try {
      await updateApplicationStatus(applicationId, "pending");
      const application = applicationData.find(app => app.id === applicationId);
      if (application) {
        const number = application.number;
        await sendSMSPending(number);
      }
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }

  async function handleDeleteClick(applicationId) {
    const isConfirmed = window.confirm("Are you sure you want to delete this application?");
    if (!isConfirmed) {
      return;
    }
    try {
      const applicationRef = doc(db, "applicant_information", applicationId);
      await deleteDoc(applicationRef);
      fetchDataFromFirestore();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  }

  async function updateApplicationStatus(applicationId, status) {
    const applicationRef = doc(db, "applicant_information", applicationId);
    await updateDoc(applicationRef, { status });
    fetchDataFromFirestore();
  }

  async function sendSMSApprove(number) {
    // SMS sending logic
  }

  async function sendSMSDeny(number) {
    // SMS sending logic
  }

  async function sendSMSPending(number) {
    // SMS sending logic
  }

  return (
    <div className="whole-contact-container">
      <div className="contact-background">
        <Admdashnav />
        <div className="app-dash-cont">
          <h1 className="app-dash-title">MANAGE APPLICATIONS</h1>
          <div className="filter-buttons">
            <button className="pending-btn" onClick={() => setFilter("pending")}>Pending</button>
            <button className="approved-btn" onClick={() => setFilter("approved")}>Approved</button>
            <button className="denied-btn" onClick={() => setFilter("denied")}>Denied</button>
          </div>
          <div className="table-container">
            <table className="application-table">
              <thead>
                <tr>
                  <th className="app-table-title">First Name</th>
                  <th className="app-table-title">Middle Name</th>
                  <th className="app-table-title">Last Name</th>
                  <th className="app-table-title">Date of Birth</th>
                  <th className="app-table-title">Gender</th>
                  <th className="app-table-title">Nationality</th>
                  <th className="app-table-title">Email</th>
                  <th className="app-table-title">Username</th>
                  <th className="app-table-title">Number</th>
                  <th className="app-table-title">Status</th>
                  <th className="app-table-title">Reference Number</th>
                  <th className="app-table-title">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applicationData.map((application) => (
                  (application.status === filter) && (
                    <tr key={application.id}>
                      <td className="app-table-content">{application.firstname}</td>
                      <td className="app-table-content">{application.middlename}</td>
                      <td className="app-table-content">{application.lastname}</td>
                      <td className="app-table-content">{application.dateofbirth.toLocaleDateString()}</td>
                      <td className="app-table-content">{application.gender}</td>
                      <td className="app-table-content">{application.nationality}</td>
                      <td className="app-table-content">{application.email}</td>
                      <td className="app-table-content">{application.username}</td>
                      <td className="app-table-content">{application.number}</td>
                      <td className="app-table-content">{application.status}</td>
                      <td className="app-table-content">{application.refno}</td>
                      <td className="app-table-btns">
                        <button
                          className="app-approve-btn"
                          onClick={() => handleApproveClick(application.id)}
                        >
                          Approve
                        </button>
                        <button
                          className="app-deny-btn"
                          onClick={() => handleDenyClick(application.id)}
                        >
                          Deny
                        </button>
                        <button
                          className="app-pending-btn"
                          onClick={() => handlePendingClick(application.id)}
                        >
                          Pending
                        </button>
                        <button
                          className="app-deny-btn"
                          onClick={() => handleDeleteClick(application.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applicationdash;
