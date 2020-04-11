import express from 'express'
import versionHealthcheck from 'version-healthcheck'
import expressHealthcheck from 'express-healthcheck'
import { postEmail } from 'controllers/email.controller'
const router = express.Router()

/* Monitoring */
router.get('/up', expressHealthcheck())
router.get('/version', versionHealthcheck)

router.post('/email', postEmail)

export default router
