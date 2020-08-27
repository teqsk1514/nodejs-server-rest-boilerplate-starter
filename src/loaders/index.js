const httpLogger = require('./httpLogger')

module.exports = (expressApp) => {
    httpLogger(expressApp)
}