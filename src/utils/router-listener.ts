import * as express from "express";

export const router = express.Router();

const apiRoutes = {
    userLogin: "api/login",
    userSignUp: "api/signup"
}

router.post(apiRoutes.userSignUp, );
router.get(apiRoutes.userLogin, );