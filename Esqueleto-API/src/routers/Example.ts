import { Request, Response, Router } from 'express';

import helloWorld from '../controllers/HelloWorldController';

const ExampleRoute = Router();

ExampleRoute.get('/', helloWorld.index)


export default ExampleRoute;