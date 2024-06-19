import { Router } from 'express'
import Middleware from '../../middleware'
import authController from '../../controllers/authController'
import AuthValidator from '../../middleware/validators/AuthValidator'
import { tryCatch } from '../../utils/response'
const router = Router()

router.post('/login', AuthValidator.checkLogin(), Middleware.handleValidatorError, tryCatch(authController.login))

router.post(
  '/register',
  AuthValidator.checkRegister(),
  Middleware.handleValidatorError,
  tryCatch(authController.register)
)

router.post('/logout', tryCatch(authController.logout))

router.post('/refresh-access-token', tryCatch(authController.refreshAccessToken))

router.post('/verify/:email/:code', tryCatch(authController.verifyEmail))

router.post('/new_auth_code_email/:email', tryCatch(authController.newAuthCodeEmail))

export default router
