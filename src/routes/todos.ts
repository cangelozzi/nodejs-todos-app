import { Router, Request, Response } from 'express'
import data from '../data'

const router = Router()

// helpers references
const stateTodos = ['Inserted', 'Processing', 'Completed']

//! Routes

// ---- CREATE
router
  .route('/create')
  .get((req: Request, res: Response) => {
    res.render('todos/create', { stateTodos })
  })
  .post((req: Request, res: Response) => {
    const body = req.body
    console.log(body)
    data.push(body)
    body.id = new Date().getTime()
    if (body.todostate === 'Completed') {
      body.completed = true
    } else {
      body.completed = false
    }
    res.redirect('/todos/list')
  })

// ---- READ
router.route('/list').get((req: Request, res: Response) => {
  res.render('todos/list', { data })
})

// ---- DELETE
router.route('/delete/:id').get((req: Request, res: Response) => {
  const { id } = req.params
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
    const stateTodosFiltered = stateTodos.filter(e => e !== todo.todostate)
    res.render('todos/edit', { todo, stateTodosFiltered })
  })
  .post((req: Request, res: Response) => {
    const { id } = req.params
    const { title, desc, todostate, duedate } = req.body
    data.forEach(todo => {
      if (todo.id === Number(id)) {
        todo.title = title
        todo.desc = desc
        todo.todostate = todostate
        todo.duedate = duedate
      }
      if (todo.todostate === 'Completed') {
        todo.completed = true
      } else {
        todo.completed = false
      }
    })
    res.redirect('/todos/list')
  })

export default router
