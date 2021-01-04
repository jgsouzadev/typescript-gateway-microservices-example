import  Router  from 'express';

import ExampleRoute from './Example';

const routes = Router();   

routes.use('/', ExampleRoute);


export default routes;