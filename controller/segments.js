const { getAllSegmentsFromDB } = require('../repository/segments')

const segments = async (req, res, next) => {
  try {
    const segments = await getAllSegmentsFromDB()
    res.json(segments)
  } catch (err) {
    next(err)
  }
}

module.exports = segments
