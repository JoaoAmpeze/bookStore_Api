import booksControllers from '../controllers/booksControllers';

export default (app) => {
  app.post('/books/persist', booksControllers.persist);
  app.post('/books/persist/:id', booksControllers.persist);
  app.post('/books/destroy', booksControllers.destroy);
  app.get('/books', booksControllers.get);
  app.get('/books/:id', booksControllers.get);
};
