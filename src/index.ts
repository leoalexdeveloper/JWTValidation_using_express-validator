import express, {Router} from 'express'
import userRouter from './Features/User/index'
import jwt from 'jsonwebtoken'

const token = jwt.sign({email: 'leo@leo.com'}, "secret")

const app = express()
app.use(express.json())
app.use('/user', userRouter)

app.listen(3000, () => console.log('Server are running'))