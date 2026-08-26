import mongoose from 'mongoose'

function databaseReady(_request, response, next) {
  if (mongoose.connection.readyState !== 1) {
    return response.status(503).json({
      status: 'error',
      message: 'Database is unavailable. Please try again later.',
    })
  }

  return next()
}

export default databaseReady
