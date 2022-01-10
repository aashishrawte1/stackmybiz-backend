import * as express from "express";
import * as bodyParser from "body-parser";
import { router } from "./utils/router-listener";

const app = express();

function loggerMiddleware( request: express.Request, response: express.Response, next) {
    console.log(`${request.method} ${request.path}`);
    next();
}

app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use('/api', router);

app.listen(5001);
