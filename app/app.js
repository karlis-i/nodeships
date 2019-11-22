
'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

const routes = require('./routes');
app.use('/', routes);

app.all('*', (req, res) => res.send('404')); // catch-all fallback

app.listen(port, () => console.log(`App listening on port ${port}!`));
