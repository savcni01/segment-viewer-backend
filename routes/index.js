const segments = require('../controller/segments')
const segmentsVolumes = require('../controller/segmentsVolumes')

const routes = (app) => {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
  })
  // Segments Routes
  app.get('/segments', segments)
  app.get('/segments/volumes', segmentsVolumes)
}

module.exports = routes
