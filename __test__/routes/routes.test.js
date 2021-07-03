const fastify = require('../../server');

describe('Validar resultados datos del API', () => {
  afterAll(async (done) => {
    fastify.close();
    done();
  });

  test('Respuesta de la API: Devuelve un listado de peliculas [GET `/movies/:movieOption`]', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: 'api/movies/upcoming',
    });
    expect(response.statusCode).toBe(200);
    done();
  });

  test('Respuesta de la API: Devuelve el detalle de una pelicula [GET `/movies/detail/:id`]', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: 'api/movies/detail/upcoming',
    });
    expect(response.statusCode).toBe(200);
    done();
  });
});
