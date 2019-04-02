const express = require('express');
const http = require('http');
const path = require('path');

let app = express();

let server = http.createServer(app);

let port = process.env.PORT || 3000;

let clientPath = path.join(__dirname, '../public');

app.use(express.static(clientPath));

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
})
