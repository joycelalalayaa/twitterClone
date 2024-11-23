import dotenv from 'dotenv';
import express, {Express, Request, Response} from "express";

dotenv.config();
const port =process.env.PORT;

console.log("server start on port " + port);
const app: Express = express();

app.get('/', (_req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
  
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
  