import { Request, Response } from "express";
import * as UserService from "../services/user.service";

export async function getUserHandler(req: Request, res: Response) {
    try {
      const user = await UserService.getUser(req.query.id);
      return res.send(user);
    } catch (e: any) {
      console.log(e);
      return res.send(e.message);
    }
}

export async function getUsersHandler(req: Request, res: Response) {
    try {
      const users = await UserService.getUsers(req.query.perPage, req.query.page);
      return res.send(users);
    } catch (e: any) {
      console.log(e);
      return res.send(e.message);
    }
}

export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await UserService.createUser(req.body);
        return res.send(user);
    } catch (e: any) {
        console.log(e);
        return res.send(e.message);
    }
}

export async function updateUserHandler(req: Request, res: Response) {
    try {
        const user = await UserService.updateUser(req.query.id, req.body);
        return res.send(user);
    } catch (e: any) {
        console.log(e);
        return res.send(e.message);
    }
}

export async function deleteUserHandler(req: Request, res: Response) {
    try {
        const user = await UserService.deleteUser(req.query.id);
        return res.send(user);
    } catch (e: any) {
        console.log(e);
        return res.send(e.message);
    }
}
