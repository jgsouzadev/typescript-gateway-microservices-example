import { response } from "express";
import server from "./server";

const port = 3002;

server.listen(port, () => {
    console.log('Executing on port ' + port + ' ...')
});