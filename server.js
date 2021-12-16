const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/exrisk'));

app.get('/*', (req,res,next) => {
    console.log(req.params);
    res.sendFile(path.join(__dirname + '/dist/exrisk/index.html'));
});

app.listen(process.env.PORT || 8000);
console.log(`app running on port ${process.env.PORT || 8000}`);