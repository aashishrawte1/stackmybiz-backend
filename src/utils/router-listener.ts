import { loginUserApi, logoutApi, registerUserApi } from "controller/user.controller";
import * as express from "express";

export const router = express.Router();

const apiRoutes = {
    userLogin: "/login",
    userSignUp: "/signup",
    logout: "/logout",
}

router.post(apiRoutes.userSignUp, loginUserApi as any);
router.post(apiRoutes.userLogin, registerUserApi as any);
router.post(apiRoutes.logout, logoutApi as any);