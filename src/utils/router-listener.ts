import { loginUserApi, registerUserApi } from "controller/user.controller";
import * as express from "express";

export const router = express.Router();

const apiRoutes = {
    userLogin: "/login",
    userSignUp: "/signup"
}

router.post(apiRoutes.userSignUp, loginUserApi as any);
router.get(apiRoutes.userLogin, registerUserApi as any);