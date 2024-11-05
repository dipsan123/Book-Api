// env file setup l

require('dotenv').config();


// Importing the module 
const express = require('express');
const app = express();
app.use(express.json());

// Importing the databse connection 
const connect = require('./Data/connnect'); 
connect();




// Improring the router 
const router= require('./Route/book_routes'); 
app.use ('/books', router,(req,res) =>{
    console.log('Book routes connected');
    res.json({
        message: 'Book routes are working'
    })
}); 



app.listen(process.env.PORT, (req, res)=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
