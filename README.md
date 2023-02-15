# To-Do App - PERN Stack 

App to generate and save tasks on a local database using PostgreSQL. It contains only a main page where te user can save, edit an delete tasks. 

## Technologies used

- Node & Express
- PostgreSQL
- React

## Setup

This project requires the following dependecies:

    "cors": "^2.8.5"
    "dotenv": "^16.0.2"
    "express": "^4.18.1"
    "morgan": "^1.10.0"
    "nodemon": "^2.0.19"
    "pg": "^8.8.0"
    "@emotion/react": "^11.10.4"
    "@emotion/styled": "^11.10.4"
    "@mui/icons-material": "^5.10.3"
    "@mui/material": "^5.10.5"
    "@mui/styled-engine-sc": "^5.10.3"
    "@testing-library/jest-dom": "^5.16.5"
    "@testing-library/react": "^13.4.0"
    "@testing-library/user-event": "^13.5.0"
    "react": "^18.2.0"
    "react-dom": "^18.2.0"
    "react-router-dom": "^6.4.0"
    "react-scripts": "5.0.1"
    "styled-components": "^5.3.5"


To install the project, just download it directly from terminal with "git clone https://github.com/JEDolce/tasks-app.git", and then run npm install or yarn add.

After installing the project you'll need to create the dabatabase on PostgreSQL and configure the connection to the db on the files config.js and db.js. Also, you'll need to set the environmental variables related to postgres connection USER, PASSWORD, HOST, PORT and DB.  
