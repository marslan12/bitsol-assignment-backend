import { Request, Response } from "express";
import {seedUsers} from "../services/seedUsers.service";

export async function seedUserHandler(req: Request, res: Response) {
    try {
      const response = await seedUsers();
      return res.send(response);
    } catch (e: any) {
      console.log(e);
      return res.send(e.message);
    }
}