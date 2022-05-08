import React from 'react';

const Blog = () => {
    return (
        <div className='my-2'>
            <h2 className='text-center mb-2'>Shoe Hub Blog</h2>
            <h4>Q1: Difference between `javascript` and `nodejs`?</h4>
            <p className='mb-2'>Answer:Javascript is a programming language that is used for writing scripts on the website and can run only on the browser. NodeJS is a Javascript runtime environment which help JS to run outside the browser.JS mainly used at client side where as Node mainly used at server side.</p>
            <h4>Q2: When should you use `nodejs` and when should you use `mongodb`?</h4>
            <p className='mb-2'>Answer:Node.js is an interpreter or runtime/ running environment for JavaScript which execute the application. MongoDB is a nosql datebase. If application needs the ability to persistently store data in a way that you can efficiently query or update it later, then we can use MongoDB.There are many other databases available like MongoDB .</p>
            <h4>Q3: Differences between `sql` and `nosql` databases?</h4>
            <p>Answer: SQL databases are table based databases and vertically scalable whereas NoSQL databases can be document based, key-value pairs, graph databases and horizontally scalable. SQL databeses are Cross-platform support, Secure and free and noSQL is easy to use, High performance, and Flexible tool</p>

        </div>
    );
};

export default Blog;