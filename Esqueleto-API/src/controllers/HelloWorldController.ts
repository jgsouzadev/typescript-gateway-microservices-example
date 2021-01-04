import { Request, Response } from "express";

import Utils from "../utils/index";

class helloWorld {

    async index (request: Request, response: Response) {
        console.log('...')
        
        const utilities = Utils.utilsNumberOne;
        
        console.log(utilities('Hello'))

        response.send('Hello World using TypeScript and Microservices this Util is => ' + utilities)
    }

}

export default new helloWorld();