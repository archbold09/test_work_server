exports.swaggerOptions = {
  routePrefix: 'documentation',
  swagger: {
    info: {
      title: 'Archbold Movies API',
      description: 'Documentación para la API',
      version: '0.1.0',
    },
    host: 'localhost:3001/api',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      {
        name: 'movies',
      },
    ],
  },
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false,
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  exposeRoute: true,
};
