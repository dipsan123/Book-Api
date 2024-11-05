
// Creating the schema for book 
const mongoose = require('mongoose');
const schema = new mongoose. Schema({
title: { type:'String', required: true}, 
author: {type:'String', required: true},
published_year: {type: 'Number'}, 


}); 

module.exports= mongoose.model('Book', schema); 