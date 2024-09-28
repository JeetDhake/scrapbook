import React, { useEffect, useState } from 'react'
import img from '../assets/scrapbook.png'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Card = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        const result = await axios.get("http://localhost:8080/scrapbooks");
        setBooks(result.data)
    }

    return (
        <>
            <div className="fb">


                {
                    books.map((book, index) => (
                        <div className="product-card" key={index} id={index + 1}>
                            <div className="card-header">
                                <img src={img} className="ico" alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="product-title">{book.title}</h5>
                                <span>{book.creator}</span>
                            </div>
                            <div className="card-footer">
                                <Link to={`ViewScrapbook/${book.id}`} className="btn btn-secondary">
                                    <i className="bi bi-cart3"></i>
                                    View
                                </Link>
                                <Link to={`EditScrapbook/${book.id}`} className="btn btn-primary">
                                    <i class="bi bi-bag"></i>
                                    Update
                                </Link>
                            </div>
                        </div>
                    ))
                }

            </div>

        </>

    )
}

export default Card
