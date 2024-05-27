import addressesControllers from '../controllers/addressesControllers';

export default (app) => {
  app.post('/address/persist', addressesControllers.persist);
  app.post('/address/persist/:id', addressesControllers.persist);
  app.post('/address/destroy', addressesControllers.destroy);
  app.get('/address', addressesControllers.get);
  app.get('/address/:id', addressesControllers.get);
};
