const { respuestaErronea } = require('./response');

const errorHandler = (request, reply, mensaje, estado) => {
  respuestaErronea(request, reply, mensaje, estado, `[Error Controller]: ${mensaje}`);
};

module.exports = { errorHandler };
