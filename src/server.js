import express from "express";
import bodyParser from "body-parser";
import viewEngine from './config/viewEngine'
import initWebRoutes from './route/web'
import connectDB from './config/connectDB'
import cors from 'cors'

require('dotenv').config()


const app = express();
const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app)
initWebRoutes(app)

connectDB()

let port = process.env.PORT
app.listen(port, () => {
    console.log('backend NodeJS is running on the port:' + port)
})