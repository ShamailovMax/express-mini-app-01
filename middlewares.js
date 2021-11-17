import colors from 'colors'

// здесь будем выкидывать тестовые данные в консоль

export function requestTime (req, res, next) {
  req.requestTime = Date.now()
  next()
}

export function logger (req, res, next) {
  console.log(colors.bgBlack.green(`Req.time: ${req.requestTime}`))
  next()
}
