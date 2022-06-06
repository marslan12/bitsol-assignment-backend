import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import config from "config";

const fetchUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).send({error: "Please authenticate with a valid token."});
  }

  try{
    let accessTokenKey = config.get<string>("accessTokenKey");
    const data = Jwt.verify(token, accessTokenKey);

    return next();
  }
  catch(error){
    return res.status(401).send({error: "Please authenticate with a valid token."});
  }
};

export default fetchUser;
