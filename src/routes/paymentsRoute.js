import paymentsControllers from '../controllers/paymentsControllers';

export default (app) => {
  app.post('/payments/persist', paymentsControllers.persist);
  app.post('/payments/persist/:id', paymentsControllers.persist);
  app.post('/payments/destroy', paymentsControllers.destroy);
  app.get('/payments', paymentsControllers.get);
  app.get('/payments/:id', paymentsControllers.get);
};
