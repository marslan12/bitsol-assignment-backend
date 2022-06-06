import { Request, Response } from "express";
import * as AdminService from "../services/admin.service";

export async function createAdminHandler(req: Request, res: Response) {
    try {
        const admin = await AdminService.createAdmin(req.body);
        return res.send(admin);
    } catch (e: any) {
        console.log(e);
        return res.send(e.message);
    }
}

export async function loginHandler(req: Request, res: Response) {
    try {
      const admin = await AdminService.login(req.body);
      return res.send(admin);
    } catch (e: any) {
      console.log(e);
      return res.send(e.message);
    }
}
