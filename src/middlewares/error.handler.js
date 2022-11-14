function logErrors(err, req, res, netx){
  console.log('logErrors');
  console.error(err);
  netx(err);
}

function errorHandler(err, req, res, netx){
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, netx){
  if (err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  netx(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler}
