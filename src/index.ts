import express from 'express';
import { ErrorHandler } from './utils/ErrorHandler';
import 'dotenv/config'
import { Routes } from './routes';
import { sequelize } from './database';
import * as bodyParser from 'body-parser';

sequelize.sync().then(()=>{
    console.log('DB is running')
})

const app = express()

app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));

app.use(ErrorHandler)

Routes(app)

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`)
})

export default app