# code-challenge

## Folder Structure: 

###### API
backend code to serve the data parsed from CSV file.

###### device-interface 
front end code to present the data in table & chart 


## To Setup project follow below instructions: 
folder - API, run **npm install**
###### command to fire up local server: 
**npm run dev**

--------------------------------------------------------------------

folder: device-interface, run **npm install**
###### command to begin Vue.Js app:
**npm run serve**

(Things I would have done differently with more planning)
* Written the code to retrieve chart data on the backend
* Figure out how to handle a bigger data load.

(Found bugs)
* Backend does not retrieve data on first request.
* Error with checking message counter logic

(Requirements which I was not able to develop)
* Switch between 1 hour and 1 day time intervals.
* Allow users to enter new hex messages via the web application form.
