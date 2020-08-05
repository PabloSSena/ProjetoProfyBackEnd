import express from 'express';

const app = express();

app.get('/users',(request,response) => {
    return response.json("hELoooo")
})

app.listen(3333)