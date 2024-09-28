import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Viewbook = () => {
    const [book, setBook] = useState({
        creator: "",
        title: "",
        description: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadScrapbook()
    }, []);
    const loadScrapbook = async (e) => {
        const result = await axios.get(`http://localhost:8080/scrapbook/${id}`)
        setBook(result.data)
    }
    return (
        <div className="fbx"> 
            <div class="scrapbook-card">
                <h3 class="scrapbook-title">{book.title}</h3>
                <p class="scrapbook-creator">Created by: <strong>{book.creator}</strong></p>
                <p class="scrapbook-description">{book.description}</p>
            </div>
        </div>
    )
}

export default Viewbook
