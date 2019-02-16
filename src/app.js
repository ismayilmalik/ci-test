const express = require('express');
const app = express();

app.use('*', (req, res, next) => {
    res.json({ msg: 'Hello' });
});

module.exports = app;