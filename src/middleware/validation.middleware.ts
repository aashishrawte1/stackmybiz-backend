// import { plainToClass } from 'class-transformers';
// import { validate, ValidationError } from 'class-validator';
// import * as express from 'express';
// import HttpException from '../exceptions/HttpException'

// export function validationMiddleware<T>(type: any, skipMissingProperties = false): express.RequestHandler {
//     return (req, res, next) => {
//         validate(plainToClass(type, req.body))
//         .then((error: ValidationError[]) => {
//             if (error.length > 0 ){
//                 const message = errors.map((error: ValidationError) => 
//                 Object.values(error.constraints).join(', '));
//                 next(new HttpException(400, message));
//             } else {
//                 next();
//             }
//         });
//     };
// }