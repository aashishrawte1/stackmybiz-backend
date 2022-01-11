import 'dotenv/config';
import * as express from "express";
import * as bodyParser from "body-parser";
import { router } from "./utils/router-listener";
import { validateEnv } from "./utils/validateEnv";
import { DatabaService } from 'utils/db-listener';

validateEnv();
const app = express();

function loggerMiddleware( request: express.Request, response: express.Response, next) {
    console.log(`${request.method} ${request.path}`);
    next();
}

app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use('/api', router);
DatabaService.init();

app.listen(5001);
