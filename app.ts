import express from 'express';
import setupSwagger from './src/swagger';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { routerTutors } from './src/routes/tutorRoutes';
import errorHandler from './src/middlewares/errorHandler';

const app = express();
const PORT: Number = 3000;

setupSwagger(app);

/**
 * @swagger
 * /api/tutors:
 *   post:
 *     summary: Create a new tutor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tutor'
 *     responses:
 *       201:
 *         description: Tutor created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutor'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InternalServerError'
 */

dotenv.config();

app.use(express.json());
app.use('/api', routerTutors);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

process.env.NODE_ENV !== 'test'
  ? app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    }) &&
    mongoose
      .connect(process.env.MONGO_URI as string)
      .then(() => console.log('Connected to MongoDB'))
      .catch((err) => console.log('Error connecting to MongoDB'))
  : null;
