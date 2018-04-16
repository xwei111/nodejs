const express = require('express');
const app = express();

app.set('name',false);

console.log(app.get('name'))

app.listen(8888)