const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use('/assets', express.static(__dirname + '/source/assets/css'));
app.use('/assets', express.static(__dirname + '/source/assets/js'));

app.listen(2345, () => {
    console.log("Servidor funcionando em http://127.0.0.1:2345")
})