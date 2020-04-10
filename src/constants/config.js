export default {
  appName: process.env.APP_NAME,
  database: {
    name: process.env.DATABASE,
    host: process.env.DB_HOST,
    account: process.env.DB_ACCOUNT,
    password: process.env.DB_PASSWORD,
  },
  logLevel: process.env.LOG_LEVEL || 'info',
  environment: process.env.NODE_ENV || 'development',
  serverPort: process.env.PORT,
}
