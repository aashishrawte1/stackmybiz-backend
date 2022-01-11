import { DataStoreInToken } from "interfaces/data-store-token";
import { TokenData } from "interfaces/token-data";
import * as jwt from 'jsonwebtoken';

export const createToken = (user: User): TokenData {
    const expiresIn =  60*60;
    const secret = `` + process.env.JWT_SECRET;
    const dataStoreInToken: DataStoreInToken = {
        _id: user._id,
    }
    return { 
        expiresIn,
        token: jwt.sign(dataStoreInToken, secret, { expiresIn })
    };
}