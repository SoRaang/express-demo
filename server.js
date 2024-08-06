const express = require('express');
const app = express()
const port = 3000;
const path = require('path'), async = require('async'), fs = require('fs');

const users = [
    { name: 'Kim', email: 'dsc0320@hotmail.com' },
    { name: 'Hong', email: 'hong@naver.com' },
    { name: 'Choi', email: 'choig@gmail.com' }
];

app.listen(port, () => {
    console.log(`* 서버 실행 중 (http://localhost:${ port })`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/greet', (req, res) => {
    res.send(JSON.stringify({ message: '반갑습니다!' }));
});

app.get('/users', (req, res) => {
    res.json(users);
});