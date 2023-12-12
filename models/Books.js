// /models/bookModel.js
const knexconfig = require("../knexfile");
const knex = require("knex")(knexconfig.development);

const db = knex;

module.exports = {
  getAllBooks: async () => {
    return await db('book_tbl').select('*');
  },
  getBookById: async (bookId) => {
    return await db('book_tbl').select('*').where({ id: bookId }).first();
  },
  createBook: async (title, author, genre, isbn) => {
    return await db('book_tbl').insert({title, author, genre, isbn});
  },
  updateBook: async (isbn, title, author, genre) => {
    return await db('book_tbl').where({ isbn: isbn }).update({title, author, genre});
  },
  deleteBook: async (isbn) => {
    return await db('book_tbl').delete().where({ isbn: isbn });
  },
  searchBooks: async (searchTerm) => {
    return await db('book_tbl')
      .where('title', 'like', `%${searchTerm}%`)
      .orWhere('author', 'like', `%${searchTerm}%`)
      .orWhere('genre', 'like', `%${searchTerm}%`)
      .select('*');
  },
  getBookByIsbn: async (bookId) => {
    return await db('book_tbl').select('*').where({ isbn: bookId }).first();
  },
};
