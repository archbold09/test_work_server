const APIMovie = require('../api/dbMovies');
const { responseSuccess, responseError } = require('../utils/response');
const { errorHandler } = require('../utils/errorHandler');

module.exports = {
  getMovies: async (request, reply) => {
    try {
      const data = request.params.movieOption != '' ? request.params.movieOption : 'upcoming';

      const result = await APIMovie.getMovies(data);

      if (!result) {
        return responseError(request, reply, 'Error al obtener los datos.', 202);
      }

      return responseSuccess(request, reply, result, 200);
    } catch (error) {
      return responseError(request, reply, 'Error interno.', 500, error);
    }
  },

  getMovie: async (request, reply) => {
    try {
      const data = request.params.id;

      const result = await APIMovie.getDetailMovie(data);

      if (!result) {
        return responseError(request, reply, 'Error al obtener los datos.', 202);
      }

      return responseSuccess(request, reply, result, 200);
    } catch (error) {
      return responseError(request, reply, 'Error interno.', 500, error);
    }
  },
};
