const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./test.db')
const segmentsResource = {}

const formatSegment = (segment) => {
  return {
    'code': segment.code,
    'name': segment.name
  }
}

const formatSegments = (segments) => {
  return segments.map(segment => formatSegment(segment))
}
segmentsResource.getAllSegmentsFromDB = async () => {
  return new Promise((resolve, reject) => {
    db.all('select * from segments', (err, segmentsRows) => {
      if (err !== null) {
        reject(err)
      } else {
        resolve(formatSegments(segmentsRows))
      }
    })
  })
}

module.exports = segmentsResource
