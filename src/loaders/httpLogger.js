const morgan = require('morgan')

module.exports = (app) => {
    app.use(morgan('tiny'))
    return app
}