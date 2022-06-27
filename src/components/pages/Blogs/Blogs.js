import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-primary fw-bolder'>Blogs</h1>
            <div>
                <div className='shadow p-4 rounded-4'>
                    <h4><span className='fw-bold'>Question: </span>What are the difference between javascript and nodejs?</h4>
                    <p className='fs-5' style={{ textAlign: "justify" }}>
                        * JavaScript is a heigh level programming language but the node is the run time environment of javascript.
                        <br />
                        * NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side but the JavaScript itself a high level interpreted updated version of the ECMA script which is able to use the concept of Oops but it is based on prototype inheritance.
                    </p>
                </div>
                <div className='shadow p-4 rounded-4 mt-5 mb-5'>
                    <h4><span className='fw-bold'>Question: </span>When should you use nodejs and when should you use mongodb?</h4>
                    <p className='fs-5' style={{ textAlign: "justify" }}>
                        We know that node is the runtime environment of javascript. It is mainly used in server site to run the server application. In this way the Mongodb is the database where the data are stored. The node is used to get data from client site and stored the those data to the mongodb database and retrace the data from the database to the client site when necessary.
                    </p>
                </div>
                <div className='shadow p-4 rounded-4 mt-5 mb-5'>
                    <h4><span className='fw-bold'>Question: </span> What are the differences between sql and nosql databases?</h4>
                    <p className='fs-5' style={{ textAlign: "justify" }}>
                        * SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.

                        * SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.

                        * SQL database should maintain a certain protocol but noSQL database has no certain protocol for example if we use the mongodb which is a noSQL database then we can put an object to the database but it is not possible in SQL database.

                        * SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </p>
                </div>
                <div className='shadow p-4 rounded-4 mt-5 mb-5'>
                    <h4><span className='fw-bold'>Question: </span>What is the purpose of jwt and how does it work?</h4>
                    <p className='fs-5' style={{ textAlign: "justify" }}>
                        JWT is JSON WEB TOKEN which is used to secure the api available to the users. It is the authorization system where JWT defines the user to access the data.
                        If any user wants to visit a certain root where he has no access then the JWT system protects that user to visit.

                        JWT generates a complicated token and pass it to the authorized users. When an authorized user wants to visit a certain root then it check the token is mached or not and generates the permission.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;