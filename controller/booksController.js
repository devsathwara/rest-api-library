// GET /books - Retrieve a list of all books.
// GET /books/:isbn - Retrieve a specific book by its ISBN.
// POST /books - Add a new book.
// PUT /books/:isbn - Edit the details of a book.
// DELETE /books/:isbn - Delete a book by its ISBN.
// title
// autho
// genre
// isbn
const bookModel = require("../models/Books");
exports.getAllbooks =  async(req,res)=>{
    try {
        const book=await bookModel.getAllBooks();
        console.log(book)
        if (!book){
            return res.status(404).json({ msg: "No books found" });
        }
        else{
            res.status(200).json(book);
        }
    } catch (error) {
        console.error(error);
    }
}
exports.createNewbook=async(req, res) =>{
    try {
        const {title,author,genre,isbn}=req.body;
        if(!title || !author||!genre||!isbn){
            return res.status(400).json({msg:"Missing fields"});
            }
            const bookExist=await bookModel.getBookByIsbn(isbn);
            if(bookExist){
                return res.status(409).json({msg:'This book already exists'})
            }
            await bookModel.createBook(title, author, genre, isbn);
            res.status(201).json({msg: 'Book created successfully!'});            
    } catch (error) {
        console.error(error);
    }
}
exports.findOneBook=async (req,res)=> {
    try {
        const isbn=req.params.isbn;
        const book=await bookModel.getBookByIsbn(isbn);
        console.log(book)
        if (!book){
            return res.status(404).json({ msg: "No book found with that ISBN." });
        }
        else{
            res.status(200).json(book);
        }
    } catch (error) {
        console.error(error);
    }
}
exports.updateBookDetails = async (req, res) => {
    try {
        const isbn = req.params.isbn;
        const {title,genre,author} = req.body;
        // Check for existing book
        let book = await bookModel.getBookByIsbn(isbn);
        if (!book){
        return res.status(404).json({ msg: "No book to update!" });
        }
        // Update the book
        book = await bookModel.updateBook(isbn, title,author,genre);
        // Return the updated book
        res.status(200).json(book);
    } catch (error) {
        console.error(error);
    }
}
exports.deleteBook = async (req, res) => {
    try {
        const isbn = req.params.isbn;
        await bookModel.deleteBook(isbn)
        res.status(200).json(`${isbn} book deleted`)
        
    } catch (error) {
        console.error(error);
    }
}

