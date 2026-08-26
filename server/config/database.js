import mongoose from 'mongoose'

async function connectDatabase() {
  const mongoUri = process.env.MONGO_URI

  if (!mongoUri) {
    console.warn('MONGO_URI is not configured. Starting without a database connection.')
    return false
  }

  try {
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 2000 })
    console.log(`MongoDB connected: ${mongoose.connection.name}`)
    return true
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`)
    return false
  }
}

export default connectDatabase
