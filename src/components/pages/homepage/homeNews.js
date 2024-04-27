import React, { useState, useEffect } from "react"
import news_img1 from "./news_img1.png"
import news_img2 from "./news_img2.png"
import { db } from "../../../firebase"
import { getDocs, collection, limit, query, orderBy } from "firebase/firestore"
import "./homepage.css"
import { Link } from "react-router-dom"

async function fetchDataFromFirestore() {
    const q = query(collection(db, "news"), orderBy("date", "desc"), limit(2))
    const querySnapshot = await getDocs(q)

    const data = []
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()})
    })

    return data
}

function Homenews (){
    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore()
            setNewsData(data)
        }
        fetchData()
    }, [])
    return (
        <div>
            {newsData.map((news, index) => (
                <div className="announcement-container">
                <img 
                    src={index === 0 ? news_img1 : news_img2} 
                    alt="school news image" 
                    className="home-image3" 
                />
                <div key={news.id} className="announcement-description">
                    <h2>{news.title}</h2>
                    <p>{news.date.toDate().toLocaleDateString()}</p>
                    <p className="home-ann-description">{news.content}</p>
                    <Link to="../announcement" className="read-more">READ MORE</Link>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Homenews