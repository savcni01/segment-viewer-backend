const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./test.db')
const segmentsVolumesResource = {}

const formatSegmentVolume = (segmentCode, volume) => {
  return {
    'segmentCode': segmentCode,
    'volume': volume
  }
}

const formatSegmentsVolumes = (segmentsVolumes) => {
  return segmentsVolumes.map(segmentVolumes => formatSegmentVolume(segmentVolumes))
}

segmentsVolumesResource.getSegmentsVolumes = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      db.all(`select * from segmentVolumes`, (err, segmentsRows) => {
        if (err !== null) {
          reject(err)
        } else {
          resolve(formatSegmentsVolumes(segmentsRows))
        }
      })
    }, 2000)
  })
}

module.exports = segmentsVolumesResource
