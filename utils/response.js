const responseSuccess = (request, reply, data, state) => {
  reply.status(state || 200).send({
    error: false,
    body: data,
  });
};

const responseError = (request, reply, data, state, errorDetail = null) => {
  reply.status(state || 500).send({
    error: data,
    body: false,
  });
};

module.exports = { responseSuccess, responseError };
