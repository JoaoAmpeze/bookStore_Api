import ordersController from '../controllers/ordersController';

export default (app) => {
  app.post('/oders/persist', ordersController.persist);
  app.post('/oders/persist/:id', ordersController.persist);
  app.post('/oders/destroy', ordersController.destroy);
  app.get('/oders', ordersController.get);
  app.get('/oders/:id', ordersController.get);
};
