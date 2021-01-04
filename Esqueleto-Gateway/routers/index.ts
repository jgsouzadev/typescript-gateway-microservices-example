import  Router  from 'express';

import exampleRouter from './paths/Example' ;

const routes = Router();   

routes.use('/v1/Example', exampleRouter);

export default routes;