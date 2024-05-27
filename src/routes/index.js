import addressRoute from './addressRoute';
import authorRoute from './authorRoute';
import booksRoute from './booksRoute';
import categoriesRoute from './categoriesRoute';
import cupomRoute from './cupomRoute';
import odersBooksRoute from './odersBooksRoute';
import odersRoute from './odersRoute';
import paymentsRoute from './paymentsRoute';
import userRoute from './userRoute';

function Routes(app) {
  userRoute(app);
  addressRoute(app);
  authorRoute(app);
  booksRoute(app);
  categoriesRoute(app);
  cupomRoute(app);
  odersBooksRoute(app);
  odersRoute(app);
  paymentsRoute(app);
}

export default Routes;