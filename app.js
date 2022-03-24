const express = require('express')
const path = require('path');

const app = express()
const port = process.env.PORT || 3000 // Heroku will need the PORT environment variable

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', ['*']);
    res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('X-Frame-Options', 'DENY');
    res.set('Access-Control-Expose-Headers', '*');
    next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`App is live on port ${port}!`))
