const { getSegmentsVolumes } = require('../repository/segmentsVolumes')

const segmentsVolumes = async (req, res, next) => {
  try {
    const segmentVolumes = await getSegmentsVolumes()
    res.json(segmentVolumes)
  } catch (err) {
    next(err)
  }
}

module.exports = segmentsVolumes
