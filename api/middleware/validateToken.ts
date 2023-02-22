import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
export interface CustomRequest extends Request {
 token: string | JwtPayload;
}
export const auth = async (req: Request, res: Response, next: NextFunction) => {
 try {
   const token = req.header('Authorization')?.replace('Bearer ','');
   if (!token) {
     throw new Error();
   }
  jwt.verify(token as string,process.env.JWT_SECRET_KEY as string);
  next();
 } 
 catch (err) {
   res.status(401).send("Please Login to access this Resource");
 }
};