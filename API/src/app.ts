import express, {Application, Request, Response } from 'express';
import { Device } from './models/devices';

const deviceData = new Device();

const app: Application = express();

app.use((request: Request, response: Response, next)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/api/devices', (request: Request, response: Response)=>{
    response.status(200).send(deviceData.getDevices());
});

app.listen(5000, ()=> console.log('Server Running'));