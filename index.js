const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./src/cors/cors');

const conversationRoute = require('./src/router/conversation');

const app = express();

app.use(bodyParser.json());
app.use(allowCors);
app.use('/api', conversationRoute);
app.use(express.static('./public'));



const port = 3006;

app.listen(port, () => console.log(`Running on port ${port}`));