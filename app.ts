import express, {Request, Response} from 'express';
import setupSwagger from './src/swagger';
import { connectMongo } from './src/db/database';

const app = express();
const port = 3000;

setupSwagger(app);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns a hello world message
 *     responses:
 *       200:
 *         description: A hello world message
 */

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});
app.listen(port, () => {
  console.log(`Server is running `);
});
connectMongo();





