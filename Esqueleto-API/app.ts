import { response } from "express";
import server from "./server";

const port = 3001;

server.listen(port, () => {
    console.log('Executing on port ' + port + ' ...')
});