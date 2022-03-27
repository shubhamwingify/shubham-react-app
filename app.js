const express = require('express')
const path = require('path');

const app = express()
const port = 3000 // Heroku will need the PORT environment variable

app.use('*', express.static(path.join(__dirname, 'build'), {
    setHeaders: function(res, path) {
        res.set('Access-Control-Allow-Origin', ['*']);
        res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.set('X-Frame-Options', 'DENY');
        res.set('Access-Control-Expose-Headers', '*');
    }
}));

app.listen(port, () => console.log(`App is live on port ${port}!`))
