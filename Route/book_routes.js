const express = require('express');
const router = express.Router();
const model = require('../Model/book'); 

// Create a Book - API to create a book data and information
router.post('/books', async (req, res) => { 
  const { title, author, published_year } = req.body;
  console.log(title, author, published_year); 

  try {
    const book = await model.create({
      title,
      author,
      published_year
    });

    res.json({
      message: "Book Created Successfully",
      data: book
    }); 

  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({
      message: "Error creating book",
      error: error.message
    });
  }
}); 

module.exports = router;
