import { omit } from "lodash";
import config from "config";
import Jwt from "jsonwebtoken";
import AdminModel, { AdminDocument } from "../models/admin.model";

export async function createAdmin(_admin: AdminDocument) {
  try {
    const admin = await AdminModel.create(_admin);

    return omit(admin.toJSON(), "password");
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function login(body: any) {
    let email = body.email;
    let password = body.password;

    const admin = await AdminModel.findOne({ email });

    if (!admin) {
        return false;
    }

    const isValid = await admin.comparePassword(password);

    if (!isValid) return false;

    let payload = {
        "_id": admin._id
    };

    let accessTokenKey = config.get<string>("accessTokenKey");
    let Token = await Jwt.sign(payload, accessTokenKey, {
        expiresIn: "24h",
    });

    return { Admin: omit(admin.toJSON(), "password"), Token: Token};
}