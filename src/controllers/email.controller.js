import logger from '../utils/logger'
import { sendEmail } from '../services/email/email'
import responses from '../constants/responses'

// eslint-disable-next-line import/prefer-default-export
export function postEmail(req, res, next) {
  logger.info('Attempting to send email...')
  const options = req.body
  try {
    sendEmail(options)
      .then(() => {
        logger.info('POST /email success')
        res.json('OK')
      })
      .catch(e => {
        throw e
      })
  } catch (err) {
    logger.error('POST /email error')
    const error = {
      status: err.status || responses.BAD_REQUEST.status,
      message: err.message || responses.BAD_REQUEST.message,
    }
    res.status(error.status).send(error.message)
  }
}
