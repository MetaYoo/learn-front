const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// 解析 application/json
// app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req, resp) => {
    let query = req.query;
    console.log(query);
    resp.send('Hello World!');
});
app.post('/post', (req, res) => {
    // console.log(req.body);
    console.log(req.body.name);
    res.send('Ok!');
});
app.listen(3000, () => {
    console.info('Server started!');
})