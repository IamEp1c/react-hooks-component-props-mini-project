import React from "react";
import blogData from "../data/blog";


function Article({title, date, preview}){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}


export default Article;