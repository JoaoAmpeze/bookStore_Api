import cupomsController from '../controllers/cupomsController';

export default (app) => {
  app.post('/cupoms/persist', cupomsController.persist);
  app.post('/cupoms/persist/:id', cupomsController.persist);
  app.post('/cupoms/destroy', cupomsController.destroy);
  app.get('/cupoms', cupomsController.get);
  app.get('/cupoms/:id', cupomsController.get);
};
