import winston from 'winston'
import 'winston-daily-rotate-file'

import config from 'constants/config'
/**
 * Logging levels in winston
 *    error: 0,
 *    warn: 1,
 *    info: 2,
 *    verbose: 3,
 *    debug: 4,
 *    silly: 5
 */

const transport = new winston.transports.DailyRotateFile({
  filename: `${config.appName}-%DATE%.log`,
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  dirname: config.tmpDir || './tmp/',
})

const logger = winston.createLogger({
  level: config.logLevel || 'info',
  transports: [transport, new winston.transports.Console()],
})

export { logger as default }
