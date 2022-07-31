const fs = require('fs')
const path = require('path')

class Utils {
  static rootPathWith(_path) {
    return path.join(path.dirname(require.main.filename), _path)
  }

  static getDataDB(dbName) {
    return JSON.parse(fs.readFileSync(Utils.rootPathWith(`/db/${dbName}.json`), 'utf8'))
  }

  static writeDataToDB(dbName, data) {
    fs.writeFileSync(Utils.rootPathWith(`/db/${dbName}.json`), JSON.stringify(data, null, 2))
  }
}

module.exports = Utils
