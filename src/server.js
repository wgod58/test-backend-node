import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import logger from 'utils/logger'
import routes from 'routes'
import responses from 'constants/responses'
const BODY_PARSER_LIMIT = '10mb'
const app = express()

app.server = http.createServer(app)
app.use(compression())
app.use(helmet())
app.use(cors())

app.use(
  bodyParser.json({
    limit: BODY_PARSER_LIMIT,
  }),
)

app.use(
  morgan('tiny', {
    stream: {
      write: message => logger.info(message.trim()),
    },
  }),
)

// Set query object as body in request if there's a 'GET' method
app.use((req, _, next) => {
  if (
    !(
      req.body &&
      req.body.operationName &&
      req.body.operationName === 'IntrospectionQuery'
    )
  ) {
    logger.info(req.body, 'req.body')
  }
  next()
})

app.use('/api', routes)

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next({
    status: responses.NOT_FOUND.status,
    message: responses.NOT_FOUND.message,
  })
})

// Error handler middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  logger.error(err)
  const error = {
    status: err.status || responses.SERVER_ERROR.status,
    message: err.message || responses.SERVER_ERROR.message,
  }
  res.status(error.status).json(error)
  next(err)
})

export default app
