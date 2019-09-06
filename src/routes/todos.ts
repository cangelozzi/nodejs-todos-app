import { Router, Request, Response } from 'express'
import data from '../data'

const router = Router()

//! Routes

// ---- CREATE
router
  .route('/create')
  .get((req: Request, res: Response) => {
    res.render('todos/create')
  })
  .post((req: Request, res: Response) => {
    const body = req.body
    data.push(body)
    body.id = new Date().getTime()
    res.redirect('/todos/list')
  })

// ---- READ
router.route('/list').get((req: Request, res: Response) => {
  res.render('todos/list', { data })
})

// ---- DELETE
router.route('/delete/:id').get((req: Request, res: Response) => {
  const { id } = req.params
  console.log(id)
  // get index of object with id:37
  let removeIndex = data.map(item => item.id).indexOf(Number(id))
  // remove object
  data.splice(removeIndex, 1)
  res.redirect('/todos/list')
})

// ---- EDIT
router
  .route('/edit/:id')
  .get((req: Request, res: Response) => {
    const { id } = req.params
    const todoArray = data.filter(e => e.id.toString() === id)
    const todo = todoArray[0]
    res.render('todos/edit', { todo })
  })
  .post((req: Request, res: Response) => {
    const { id } = req.params
    const { title, desc } = req.body
    data.forEach(todo => {
      if (todo.id === Number(id)) {
        todo.title = title
        todo.desc = desc
      }
    })
    res.redirect('/todos/list')
  })

export default router
