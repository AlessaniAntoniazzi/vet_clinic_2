import express, {Request, Response} from 'express';
import { connectMongo } from './src/db/database';

const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});
app.listen(port, () => {
  console.log(`Server is running `);
});
connectMongo();





