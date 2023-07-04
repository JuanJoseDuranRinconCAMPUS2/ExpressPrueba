import dotenv from 'dotenv';
import express from 'express';
import storageCampus from './routers/campus.js';
console.clear();
dotenv.config();
const appExpress = express();
appExpress.use("/campus", storageCampus);
const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})