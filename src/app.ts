import express from "express";
import cors from "cors";
import config from "config";
import connect from "./utils/connect";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

const port = config.get<Number>('port');
app.listen(port, async ()=> {
    console.log(`App is running at port ${port}`);

    await connect();

    routes(app);
});