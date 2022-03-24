const express = require('express')
const path = require('path');

const app = express()
const port = process.env.PORT || 3000 // Heroku will need the PORT environment variable

app.use(express.static(path.join(__dirname, 'build'), {
    setHeaders: function(res, path) {
        console.log('Settings headers');
        res.set('X-Frame-Options', 'DENY');
        res.set('Access-Control-Expose-Headers', '*');
        console.log('Settings headers');
    }
}));

app.listen(port, () => console.log(`App is live on port ${port}!`))
