// having TS we can also get Request and Response from express
import { Router, Request, Response } from 'express'

const router = Router()

//! Routes
router.get('/', (req: Request, res: Response) => {
  res.render('index')
})

export default router
