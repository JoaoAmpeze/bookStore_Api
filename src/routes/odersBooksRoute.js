import ordersBooksController from '../controllers/ordersBooksController';

export default (app) => {
  app.post('/odersbooks/persist', ordersBooksController.persist);
  app.post('/odersbooks/persist/:id', ordersBooksController.persist);
  app.post('/odersbooks/destroy', ordersBooksController.destroy);
  app.get('/odersbooks', ordersBooksController.get);
  app.get('/odersbooks/:id', ordersBooksController.get);
};
