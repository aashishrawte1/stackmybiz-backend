import * as express from "express";
import { userModel } from "models/user.model";
import * as bcrypt from "bcrypt";
import { createToken } from "../../node_modules/typescript/lib/typescript";
import { createCookie } from "utils/jwt-listenert";
import { TokenData } from "interfaces/token-data";
import { otpVerification } from "utils/two-factor.util";
const user = userModel;

export const loginUserApi = async (
  request: express.Request,
  response: express.Response
) => {
  const loginData = request.body;

  const userInDb = await user.findOne({ email: loginData.phone });

  if (userInDb) {
    const isPasswordMatched = bcrypt.compare(
      loginData.password,
      userInDb.password
    );

    if (!isPasswordMatched) {
      return response.send("wrong credentials provided");
    } else {
      userInDb.password = undefined;
    //   const tokenData = createToken(user);
    //   response.setHeader("Set-Cookie", [createCookie(tokenData)]);
      return response.send(userInDb);
    }
  } else {
    return response.send("wrong credentials provided");
  }
};

export const registerUserApi = async (
  request: express.Request,
  response: express.Response
) => {
  const userData = request.body;
  if (await user.findOne({ email: userData.phone })) {
    return response.send("user already exists");
  } else {

    await otpVerification(userData.phone);

    const hashedPassword = bcrypt.hash(userData.password, 10);
    const userInDb = user.create({
      ...userData,
      password: hashedPassword,
    });

    user.password = undefined;
    // const tokenData = createToken(userInDb);
    // response.setHeader("Set-Cookie", [createCookie(tokenData)]);
    response.send(userInDb);
  }
};

export const logoutApi = (
    request: express.Request,
    response: express.Response
  ) => {
      response.setHeader("Set-Cookie", ['Authorization=;Max-age=0']);
      response.send(200);
  }
