const util = require('util')
const ConfigTemplate = require('./ConfigTemplate')

class JsonConfig extends ConfigTemplate {
    _deserialize(data){
        return JSON.parse(data)
    }

    _serialize(data){
        return JSON.stringify(data, null, '')
    }
}

module.exports = JsonConfig