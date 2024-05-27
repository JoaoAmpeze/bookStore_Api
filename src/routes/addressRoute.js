import addressController from '../controllers/addressaddressController';

export default (app) => {
  app.post('/address/persist', addressController.persist);
  app.post('/address/persist/:id', addressController.persist);
  app.post('/address/destroy', addressController.destroy);
  app.get('/address', addressController.get);
  app.get('/address/:id', addressController.get);
};
