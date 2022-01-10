import * as express from "express";

export const router = express.Router();

router.post('/signup', (request, response) => {
    response.send("hello world");
});

router.get('/login', (request, response) => {
    response.send("hello world");
});