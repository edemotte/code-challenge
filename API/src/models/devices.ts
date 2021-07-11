const PATH = "./src/models/data.csv";
import csv from "csv-parser";
import fs from "fs";


class Device {

    devicesData: { time: string, hexPayload: string}[] = [];
    // devicesChartData: { x: string, y: string }[] = []
    decodedData: { time: string, messageCounter: number}[] = [];
    currentHexCounter: number = 0;
    messageCounter: number = 0;
    deviceTemperature: number = 0;
    temperatureCalibrationConstant: number = 128;

    convertCSVtoJSON(){

      //converting CSV into JSON assuming that commas/quotations are not in the fields. (***not implemented, used csv parser instead.***)
      // https://stackoverflow.com/questions/27979002/convert-csv-data-into-json-format-using-javascript

      try {
        fs.createReadStream(PATH)
          .pipe(csv())
          .on('data', (data) => this.devicesData.push(data))
          .on('end', () => {
          this.devicesData;
        });
        
      } catch (error) {
          console.log("Error Parsing CSV File", error)
      }
    }

    decodeDeviceData(){
      
        // slice the hexpayload
        // get the second byte and save it in a variable
        // on next iteration check if next payload is an increment of the previous payload.
        // if not, for the moment console log the error. and continue.
      console.log("length", this.devicesData.length)
      this.devicesData.forEach((device, index) =>{
       

        if(index === 0){
          this.currentHexCounter = this.getMessageCounter(device.hexPayload);
        }

        if(this.currentHexCounter === this.getMessageCounter(device.hexPayload)){
          
          const time = device.time;
          const messageCounter = this.getMessageCounter(device.hexPayload);
          const temperature = this.getDeviceTemperature(device.hexPayload);

          let decodedDevice = {
            time: time,
            messageCounter: messageCounter,
            temperature: temperature 
          }
  
          this.decodedData.push(decodedDevice);
          
          this.currentHexCounter += 1;
        }
        else{

          // for testing purposes else condition logic has not being considered. (also seems like all the sample data is monotonically incremented)
          console.log("Counter Error");
        }

      });
    }

    getMessageCounter(hexPayload: string){
      //assuming the length and format of the hexload never changes.
      let hexString = hexPayload.slice(2).replace(/^0+/, '');

      //remove leading zeros to help with hexadecimal conversion
      this.messageCounter = parseInt(hexString, 16);

      return this.messageCounter;
    }

    getDeviceTemperature(hexPayload: string){
      let temperature = hexPayload.slice(0,2);

      //calibrate temperature;
      this.deviceTemperature = parseInt(temperature, 16) - 128;

      return this.deviceTemperature;
    }

    getDevices(){

      // get devices
      this.convertCSVtoJSON();
      this.decodeDeviceData();
      //reset this.decodedData
      const allDevices = this.decodedData;
      this.decodedData = [];

      return allDevices;

    }

    addNewDevice(){

    }

    getChartdata(){
      // this.convertCSVtoJSON()
    }

}

export { Device };