import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { Application } from "express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
        title: "Vet Clinic API",
        version: "0.1.0",
        },
        servers: [
        {
            url: "http://localhost:3000",
        },
        ],
    },
    apis: ["./app.ts"],
    };

    const swaggerSpec = swaggerJSDoc(options);

    const setupSwagger = (app: Application) => {
        app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    };

    export default setupSwagger;