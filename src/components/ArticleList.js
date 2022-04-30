import React from "react";
import Article from "./Article.js"; 


function ArticleList({posts}){
    const postsElements = posts.map((post) => (
        <Article key={post.id} title = {post.title} date = {post.date} preview = {post.preview}/>
    ))
    return (
        <main>
            {postsElements}
        </main>
    )
    }

export default ArticleList; 