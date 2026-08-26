function notFound(request, _response, next) {
  const error = new Error(`Route not found: ${request.method} ${request.originalUrl}`)
  error.statusCode = 404
  next(error)
}

function errorHandler(error, _request, response, _next) {
  const statusCode = error.statusCode || 500
  response.status(statusCode).json({
    status: 'error',
    message: statusCode === 500 ? 'Something went wrong on the server.' : error.message,
  })
}

export { errorHandler, notFound }
