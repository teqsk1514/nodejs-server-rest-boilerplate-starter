const Auth = require('./Auth/Auth')


module.exports = (app) => {
    Auth(app);

    return app;
}