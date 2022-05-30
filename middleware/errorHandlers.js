const { ValidationError } = require('yup');

module.exports.validationErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(422).send(err);
  }

  next();
};

module.exports.errorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(422).send(err);
  }

  res.status(500).send(err);
};
