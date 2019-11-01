const express = require('express');
const app = express();

const path = require('path')

app.use('/', express.static(__dirname + '/public')); // ← adjust
app.listen(3000, () => { console.log('listening'); });

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})