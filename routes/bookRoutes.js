// GET /books - Retrieve a list of all books.
// GET /books/:isbn - Retrieve a specific book by its ISBN.
// POST /books - Add a new book.
// PUT /books/:isbn - Edit the details of a book.
// DELETE /books/:isbn - Delete a book by its ISBN.
const express = require('express');
const bookController = require('../controller/booksController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();



router.post('/addbook', authMiddleware,bookController.createNewbook);
router.get('/book/:isbn',authMiddleware,bookController.findOneBook);
router.get('/allbook',authMiddleware,bookController.getAllbooks);
router.delete('/deletebook/:isbn',authMiddleware,bookController.deleteBook);
router.put('/updatebook/:isbn',authMiddleware,bookController.updateBookDetails);
module.exports = router;