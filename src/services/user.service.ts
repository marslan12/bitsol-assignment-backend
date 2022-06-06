import UserModel, { UserDocument } from "../models/user.model";

export async function getUser(id: any) {

    const user = await UserModel.findOne({ id });

    if (!user) {
        return false;
    }

    return user.toJSON();
}

export async function getUsers(perPage: any, page: any) {
    const users = await UserModel
                  .find()
                  .limit(perPage)
                  .skip(perPage * page)
                  .sort({_id: -1});

    if (!users) {
        return false;
    }

    return users;
}

export async function createUser(_user: UserDocument) {
    try {
      const user = await UserModel.create(_user);
      return user.toJSON();
    } catch (e: any) {
      throw new Error(e);
    }
}

export async function updateUser(id: any, _user: UserDocument) {
    try {
      const user = await UserModel.findOneAndUpdate({id: id}, _user);
      return user;
    } catch (e: any) {
      throw new Error(e);
    }
}

export async function deleteUser(id: any) {
    try {
      const user = await UserModel.findOneAndDelete({id: id});
      return user;
    } catch (e: any) {
      throw new Error(e);
    }
}