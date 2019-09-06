import { Router, Request, Response } from 'express'
import data from '../data'

const router = Router()

//! Routes
router
  .route('/create')
  .get((req: Request, res: Response) => {
    res.render('todos/create')
  })
  .post((req: Request, res: Response) => {
    const body = req.body
    data.push(body)
    res.redirect('/todos/list')
  })

router.route('/list').get((req: Request, res: Response) => {
  console.log(data)
  res.render('todos/list', { data })
})

export default router
