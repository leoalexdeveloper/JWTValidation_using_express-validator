import {Router, Request, Response} from 'express'
import {tokenValidation} from '../../middlewares/tokenValidation'
import {header, validationResult} from 'express-validator'

const userRouter = Router()

const validationRules = [
  header('token').isJWT().withMessage('A valid jwt is required')
]

userRouter.post('/', validationRules /* , tokenValidation */, (req: Request, res:Response) => {
  const errors = validationResult(req)
  if(errors.isEmpty()){
    res.send('User Registration')
  }else{
    res.status(403).json(errors)
  }
})

export default userRouter