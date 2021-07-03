module.exports = (app, opts, next) => {
  /* Configuracion de rutas */
  const { errorsSchema, movieOptionParamsSchema, idParamsSchema } = require('../utils/schemas');
  const hooks = require('../utils/hooks');
  const controller = require('../controller/moviesController');

  /* Manejo errores rutas */
  errorsSchema(app);

  /* Consultar peliculas*/
  app.route({
    method: 'GET',
    url: '/movies/:movieOption',
    schema: {
      params: movieOptionParamsSchema,
    },
    preHandler: (request, reply, done) => {
      hooks.validateOptionMovie(request, reply);
      done();
    },
    handler: controller.getMovies,
  });

  /* Consultar 1 pelicula*/
  app.route({
    method: 'GET',
    url: '/movies/detail/:id',
    schema: {
      params: idParamsSchema,
    },
    preHandler: (request, reply, done) => {
      hooks.validateParamId(request, reply);
      done();
    },
    handler: controller.getMovie,
  });

  next();
};
