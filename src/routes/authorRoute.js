import authorControllers from '../controllers/authorControllers';

export default (app) => {
  app.post('/author/persist', authorControllers.persist);
  app.post('/author/persist/:id', authorControllers.persist);
  app.post('/author/destroy', authorControllers.destroy);
  app.get('/author', authorControllers.get);
  app.get('/author/:id', authorControllers.get);
};
