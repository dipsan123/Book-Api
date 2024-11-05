
// importig the mongoose module 
const mongoose = require('mongoose');

// setting up the connection to MongoDB
const connect = async ()=>{
    await mongoose.connect(process.env.URL); 
    console.log('Database connection successful');
}; 


// Exporting the mongoose module 
module.exports= connect; 