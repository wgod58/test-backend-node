import 'dotenv/config'
import server from './server'
import config from 'constants/config'
import logger from 'utils/logger'

const initialMsg = {
  environment: config.environment,
  port: config.serverPort,
  appName: config.appName,
  url: '/api',
}

server.listen(config.serverPort, () => {
  logger.info(initialMsg)
})
