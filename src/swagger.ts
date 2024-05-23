import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Vet Clinic',
      version: '1.0.0',
      description: 'API documentation for the Tutor application',
    },
    tags: [
      {
        name: 'Tutors',
      },
      {
        name: 'Pets',
      },
    ],
    components: {
      schemas: {
        Tutor: {
          type: 'object',
          required: ['name', 'phone', 'email', 'date_of_birth', 'zipCode'],
          properties: {
            name: {
              type: 'string',
              example: 'John Doe',
            },
            phone: {
              type: 'number',
              example: 1234567890,
            },
            email: {
              type: 'string',
              example: 'john.doe@example.com',
            },
            date_of_birth: {
              type: 'string',
              format: 'date',
              example: '1990-01-01',
            },
            zipCode: {
              type: 'number',
              example: 12345,
            },
            pets: {
              type: 'array',
              items: {
                type: 'string',
                example: '60d21b4667d0d8992e610c85',
              },
            },
          },
        },
        ValidationError: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              example: 'Validation Error',
            },
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  resource: {
                    type: 'string',
                    example: 'email',
                  },
                  message: {
                    type: 'string',
                    example: 'invalid email',
                  },
                },
              },
            },
          },
        },
        InternalServerError: {
          type: 'object',
          properties: {
            statusCode: {
              type: 'number',
              example: 500,
            },
            message: {
              type: 'string',
              example: 'Something went wrong',
            },
            error: {
              type: 'string',
              example: 'Internal Server Error',
            },
          },
        },
        BadRequest: {
          type: 'object',
          properties: {
            statusCode: {
              type: 'number',
              example: 400,
            },
            message: {
              type: 'string',
              example: 'Bad Request',
            },
            error: {
              type: 'string',
              example: 'Bad Request',
            },
          },
        },
        NotFoundError: {
          type: 'object',
          properties: {
            statusCode: {
              type: 'number',
              example: 404,
            },
            message: {
              type: 'string',
              example: 'Not Found',
            },
            error: {
              type: 'string',
              example: 'Not Found',
            },
          },
        },
      },
    },
    paths: {
      '/api/tutors': {
        get: {
          tags: ['Tutors'],
          summary: 'Retrieve a list of tutors',
          responses: {
            200: {
              description: 'A list of tutors',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Tutor',
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          tags: ['Tutors'],
          summary: 'Create a new tutor',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Tutor',
                },
              },
            },
          },
          responses: {
            201: {
              description: 'Tutor created successfully',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Tutor',
                  },
                },
              },
            },
            400: {
              description: 'Bad request',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ValidationError',
                  },
                },
              },
            },
            500: {
              description: 'Internal server error',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/InternalServerError',
                  },
                },
              },
            },
          },
        },
      },
      '/api/tutors/{id}': {
        put: {
          tags: ['Tutors'],
          summary: 'Update an existing tutor',
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: {
                type: 'string',
                example: '60d21b4667d0d8992e610c85',
              },
              description: 'ID of the tutor to update',
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    email: {
                      type: 'string',
                      example: 'john.doe@example.com',
                    },
                    date_of_birth: {
                      type: 'string',
                      format: 'date',
                      example: '1990-01-01',
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Tutor updated successfully',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Tutor',
                  },
                },
              },
            },
            400: {
              description: 'Bad request',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ValidationError',
                  },
                },
              },
            },
            404: {
              description: 'Tutor not found',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      statusCode: {
                        type: 'number',
                        example: 404,
                      },
                      message: {
                        type: 'string',
                        example: 'Tutor not found',
                      },
                      error: {
                        type: 'string',
                        example: 'Not Found',
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: 'Internal server error',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/InternalServerError',
                  },
                },
              },
            },
          },
        },
        delete: {
          tags: ['Tutors'],
          summary: 'Delete a tutor by ID',
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: {
                type: 'string',
                example: '60d21b4667d0d8992e610c85',
              },
              description: 'ID of the tutor to delete',
            },
          ],
          responses: {
            204: {
              description: 'Tutor deleted successfully',
            },
            400: {
              description: 'Bad request',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/BadRequest',
                  },
                },
              },
            },
            404: {
              description: 'Tutor not found',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/NotFoundError',
                  },
                },
              },
            },
            500: {
              description: 'Internal server error',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/InternalServerError',
                  },
                },
              },
            },
          },
        },
      },
      
    },
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'],
};

const specs = swaggerJSDoc(options);

export default (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
