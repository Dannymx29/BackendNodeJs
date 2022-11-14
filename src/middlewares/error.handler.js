function logErrors(err, req, res, netx){
  console.log('logErrors');
  console.error(err);
  netx(err);
}

function errorHandler(err, req, res, netx){
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = { logErrors, errorHandler }
