import express from 'express'
import versionHealthcheck from 'version-healthcheck'
import expressHealthcheck from 'express-healthcheck'
import * as testController from 'controllers/test'

const router = express.Router()

/**
 * @param {function} handlerFunction handler function
 */
const handlerResponse = (handlerFunction) => async (req, res) => {
  req.body = { ...req.query, ...req.params, ...req.body }
  const result = await handlerFunction(req.body)
  // Clone the result because the delete object function will remove the memory value
  const cloneResult = { ...result }
  const { status = 500 } = cloneResult
  delete cloneResult.status
  if (Object.keys(cloneResult).length > 0)
    return res.status(status).json(cloneResult)
  return res.status(status).json()
}

/* Monitoring */
router.get('/up', expressHealthcheck())
router.get('/version', versionHealthcheck)
router.get('/test', handlerResponse(testController.test))

export default router
