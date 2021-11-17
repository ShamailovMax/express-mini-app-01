import express from 'express'
import path from 'path'
import { requestTime, logger } from './middlewares.js'
import serverRoutes from './routes/servers.js'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3001 // если есть другой порт - юзаем его
const app = express() // инициализация приложения

// настраиваем шаблонизатор ejs
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)
app.use(serverRoutes)

app.get('/', (req, res) => {
  res.render('index', { title: 'Главная', isActive: 'main' })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'Что это за проект?', isActive: 'about' })
})

app.listen(PORT, () => {
  console.log(`Server has been started on the port ${PORT}...`)
})
