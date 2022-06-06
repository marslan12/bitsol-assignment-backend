import { Express } from "express";
import * as AdminController from "./controllers/admin.controller";
import * as UserController from "./controllers/user.controller";
import { seedUserHandler } from "./controllers/seedUsers.controller";
import fetchUser from "./middleware/fetchUser";

function routes(app: Express){
    app.post("/admin", AdminController.createAdminHandler);
    app.post("/login", AdminController.loginHandler);

    app.get("/user", fetchUser, UserController.getUserHandler);
    app.get("/users", fetchUser, UserController.getUsersHandler);
    app.post("/user", fetchUser, UserController.createUserHandler);
    app.put("/user", fetchUser, UserController.updateUserHandler);
    app.delete("/user", fetchUser, UserController.deleteUserHandler);

    app.post("/seedUsers", fetchUser, seedUserHandler);
}

export default routes;