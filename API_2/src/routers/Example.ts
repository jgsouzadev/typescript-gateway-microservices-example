import { Request, Response, Router } from 'express';

import helloWorld from '../controllers/HelloWorldController';

const ExampleRoute = Router();

ExampleRoute.get('/two/works', helloWorld.index)
ExampleRoute.get('/two', helloWorld.second)


export default ExampleRoute;