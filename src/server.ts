import * as express from "express";
import * as bodyParser from "body-parser";
import { router } from "./utils/router-listener";
import { validateEnv } from "./utils/validateEnv";
import { DatabaService } from 'utils/db-listener';
import * as cookieParser from "cookie-parser";

const app = express();

function loggerMiddleware( request: express.Request, response: express.Response, next: express.NextFunction) {
    console.log(`${request.method} ${request.path}`);
    next();
}

app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api', router);
DatabaService.init();

app.listen(5001);
