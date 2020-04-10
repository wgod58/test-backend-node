import response from 'constants/responses'
import logger from 'utils/logger'

const test = async (data) => {
  try {
    return {
      data,
      message: 'Hi',
      status: response.OK.status,
    }
  } catch (error) {
    logger.error(error.message)
    return { status: response.SERVER_ERROR.status, message: error.message }
  }
}

export { test }
