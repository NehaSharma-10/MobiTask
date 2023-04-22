# MobiTask
# Mobilicis India Pvt. Ltd. 
Node Js Assignment                                                                                                                                                                                                                                                                                                                                
# Prerequisites
 HTML, CSS, Javascript, ReactJS, Node Js, Mongodb

# Description
This is the project having five different condition, we need to display the data in frontend according to those condition. first after creating node server i have fetch data from mongoDB using nodeJs framework expressJS.                                                                                                                             
# How to use the Application 
 Install Node JS
 Refer to https://nodejs.org/en/ to install nodejs
 
 # Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

npm install -g create-react-app

# Cloning and Running the Application in local
Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

npm install
In order to run the application Type the following command

npm start
The Application Runs on localhost:3000



# Application design
Components
Customers Component : This Component displays a list of customers. This Component gets the data from a json file in assets folder

CustomerDetails Component : This Component Displays the details of the selected customer. This Component gets its data from a json file in assets folder as well. This Component is the Child Component of Customers Component

HTTP client
axios library is used to make HTTP Calls

URL
The application has just one url /customerlist which ties to Customers Component

Resources
create-react-app : The following link has all the commands that can be used with create-react-app https://github.com/facebook/create-react-app

ReactJS : Refer to https://reactjs.org/ to understand the concepts of ReactJS

React Bootstrap : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap
