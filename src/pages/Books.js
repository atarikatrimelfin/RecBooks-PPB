import React, { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import "./Books.css";
import CardBook from "../components/CardBook";

const Books = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect (() => {
        const fetchBooks = async () => {
            const res = await axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=KFvtzEOG5gyvdiTyzOJ1QqswfdYM96NR")
            
            setBooks(res.data.results.books);
            console.log(res.data.results.books);
        };

        fetchBooks();
    },  []);

    return (
        <>
        <div>
            <h1 id="pageTitle">Current Reccomendation</h1>
            {/* <p id="toDetails" onClick={event =>  window.location.href='/Detail'}>See Books' Synopsis</p> */}
            {books.map((book, rank) => (
                <Fragment key={book.rank}>
                        <div onClick={() => navigate(`/bookdetail/${book.rank}`, { state: book })}>
                        <CardBook
                            ranking={book.rank}
                            judul={book.title}
                            penulis={book.author}
                            sampul={book.book_image}
                            links={book.amazom_product_url}
                        />
                        </div>
                    {books.length === rank + 1 && <div style={{ marginBottom: 80 }} />}
                </Fragment>
            ))}
        </div>
        </>
    );
};

export default Books;