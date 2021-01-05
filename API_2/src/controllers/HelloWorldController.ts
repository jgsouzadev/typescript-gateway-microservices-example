import { Request, Response } from "express";

import Utils from "../utils/index";

class helloWorld {

    async index (request: Request, response: Response) {
        console.log('...')
        
        const utilities = Utils.utilsNumberOne;
        
        console.log(utilities('Hello'))

        response.send('Hello World using TypeScript and Microservices in the secondary API this Util is => ' + utilities)
    }
    async second(request: Request, response: Response) {
        console.log('This is a secondary method')
        response.send('Hello World (again...) using TypeScript (again from the second api) and Microservices this does not have a util ')

    }
}

export default new helloWorld();