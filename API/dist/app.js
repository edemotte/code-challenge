"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const devices_1 = require("./models/devices");
const deviceData = new devices_1.Device();
const port = process.env.PORT || 3000;
const app = express_1.default();
app.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.get('/api/devices', (request, response) => {
    response.status(200).send(deviceData.getDevices());
});
app.listen(port, () => console.log('Server Running'));
