import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const token = String(req.headers.token)

  if(token){
    const tokenRetrieved = jwt.verify(token, 'secret', (err, decoded) => {
      if(err) return res.status(403).json({error: 'Invalid Token'})

      return next()
    })
  }else{
    return res.status(403).json({error: 'A jwt token is required'})
  }
}