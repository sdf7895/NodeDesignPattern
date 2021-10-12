const JsonConfig = require('./JsonConfig')

const jsonConfig = new JsonConfig()
jsonConfig.read('samples/conf.json')
jsonConfig.set('nodejs', 'design patterns')
jsonConfig.save('samples/conf_mod.json')