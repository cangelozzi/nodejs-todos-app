import express from 'express'
import morgan from 'morgan'
import path from 'path'
import hbs from 'express-handlebars'

// Routes
import routes from './routes'
import todosRoutes from './routes/todos'

//! this class builds the application structure including server setups
class Application {
  app: express.Application

  // initialize express, and use various configurations...
  constructor() {
    this.app = express()
    this.settings()
    this.middlewares()
    this.routes()
  }

  // app settings (ie. view,ports...)
  settings() {
    this.app.set('port', 3000)
    this.app.set('views', path.join(__dirname, 'views'))
    this.app.engine(
      '.hbs',
      hbs({
        layoutsDir: path.join(this.app.get('views'), 'layouts'),
        partialsDir: path.join(this.app.get('views'), 'partials'),
        defaultLayout: 'main',
        extname: '.hbs'
      })
    )

    // use above configured view engine
    this.app.set('view engine', '.hbs')
  }

  // middlewares handling
  middlewares() {
    this.app.use(morgan('dev'))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
  }

  // express routings
  routes() {
    this.app.use(routes)
    this.app.use('/todos', todosRoutes)
    this.app.use(express.static(path.join(__dirname, 'public')))
  }

  // start server at port 3000
  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(
        `Server is running, visit ->  https://localhost:${this.app.get('port')}`
      )
    })
  }
}

export default Application
