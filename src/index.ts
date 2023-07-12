import express, { response } from 'express';
import { config } from 'dotenv';

config();

const app = express();

const port = process.env.PORT || 3333;

app.get('/gremiovaisercampeao', (request, response) => {
    response.send('Atenção terraquinos')
})

app.listen(port, () => console.log(`listening on port ${port}! `))
