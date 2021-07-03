module.exports = (app, opts, next) => {
  /* Consultar peliculas */

  app.get(
    '/movies/:movieOption',
    {
      schema: {
        description: 'Consultar peliculas [Estrenos, Populares, Mejor Rankeadas].',
        tags: ['movies'],
        params: {
          type: 'object',
          properties: {
            movieOption: { type: 'string', example: 'upcoming , popular , top_rated' },
          },
          required: ['true'],
        },
      },
    },
    (req, reply) => {}
  );

  /* Consultar detalle de una pelicula */

  app.get(
    '/movies/detail/:id',
    {
      schema: {
        description: 'Consultar detalles de una pelicula.',
        tags: ['movies'],
        params: {
          type: 'object',
          properties: {
            id: { type: 'number', example: '9485' },
          },
          required: ['true'],
        },
      },
    },
    (req, reply) => {}
  );

  next();
};
