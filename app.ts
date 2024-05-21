import express  from 'express';
import setupSwagger from './src/swagger';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

// import { connectMongo } from './src/db/database';
import { routerTutors } from './src/routes/tutorRoutes';

const app = express();
const PORT: Number = 3000;

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


dotenv.config();

app.use(express.json());
app.use("/api", routerTutors);
app.use(cors());
app.use(express.urlencoded({ extended: true }));

process.env.NODE_ENV !== 'test' 
    ? app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);

    })&& mongoose.connect(process.env.MONGO_URI as string)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB'))
    : null;


// connectMongo();





