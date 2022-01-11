import { DataStoreInToken } from "interfaces/data-store-token";
import { TokenData } from "interfaces/token-data";
import IUserDB from "interfaces/user.interface";
import * as jwt from 'jsonwebtoken';

export const createToken = (user: IUserDB): TokenData => {
    const expiresIn =  60*60;
    const secret = `` + process.env.JWT_SECRET;
    const dataStoreInToken: DataStoreInToken = {
        _id: user.email,
    }
    return { 
        expiresIn,
        token: jwt.sign(dataStoreInToken, secret, { expiresIn })
    };
}

export const createCookie = (tokenData: TokenData) => {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
}