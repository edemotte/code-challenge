# code-challenge

Web Application Features:
* Get data from CSV file and serve them as data on a server.
* Bird's eye view of the received data from front end achived via charts. 

3rd Party Librarires Used:
* csv-parser
* vuetify
* moment.js
* vue-apexcharts


## Folder Structure: 

###### API (backend code to serve the data parsed from CSV file.)
###### device-interface (front end code to present the data in table & chart )

## To Setup project follow below instructions: 
folder -> API, run **npm install**
command to fire up local server: **npm run dev**


folder -> device-interface, run **npm install**
###### command to begin Vue.Js app: **npm run serve**


(Things I would have done differently with more planning)
* Written the code to retrieve chart data on the backend
* Figure out how to handle a bigger data load.
* Chart Responsiveness

(Found bugs)
* Backend does not retrieve data on first request. (Seems like this is the node async feature at play, finding for a fix)
* Error with checking message counter logic

(Requirements which I was not able to develop due to time constraints)
* Switch between 1 hour and 1 day time intervals.
* Allow users to enter new hex messages via the web application form.
