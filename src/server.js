const express = require('express');

const mainRouter = require('./api/routes/route')




module.exports = async () => {

    const app = express();

    await require('./loaders/index')(app)

    mainRouter(app);


    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))
};