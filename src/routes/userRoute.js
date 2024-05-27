import userControllers from '../controllers/userControllers';

export default (app) => {
  app.post('/user/persist', userControllers.persist);
  app.post('/user/persist/:id', userControllers.persist);
  app.post('/user/destroy', userControllers.destroy);
  app.get('/user', userControllers.get);
  app.get('/user/:id', userControllers.get);
};
