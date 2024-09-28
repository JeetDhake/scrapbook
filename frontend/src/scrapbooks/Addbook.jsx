import React, { useState } from 'react'
import img from '../assets/sb.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Addbook = () => {
    let navigate = useNavigate();
    const [book, setBook] = useState({
        creator: "",
        title: "",
        description: ""
    });
    const { creator, title, description } = book
    const onInputChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/scrapbook",book)
        navigate("/");
    }
    return (
        <>
            <div className="fbx">

                <form className="scrapbook-form" onSubmit={(e) => onSubmit(e)}>
                    <h2>Create Your Scrapbook</h2>

                    <div className="form-group">
                        <label for="creator">Creator Name</label>
                        <input type="text" value={creator} onChange={(e) => onInputChange(e)} id="creator" name="creator" placeholder="Enter your name" required />
                    </div>

                    <div className="form-group">
                        <label for="title">Scrapbook Title</label>
                        <input type="text" value={title} onChange={(e) => onInputChange(e)} id="title" name="title" placeholder="Enter the title" required />
                    </div>

                    <div className="form-group">
                        <label for="description">Description</label>
                        <textarea id="description" value={description} onChange={(e) => onInputChange(e)} name="description" rows="4" placeholder="Describe your scrapbook..." required></textarea>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="submit-button">Create Scrapbook</button>
                    </div>
                </form>
                <div className="imgbx">
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    )
}

export default Addbook
