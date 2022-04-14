# ToDoList
This is a single page aplication created using React JS that satisfies the actions of CREATE, EDIT and DELETE a task introduced by the user at any given moment. The app is connected to a database which means our task will be stored even after we have closed the aplication. 

# Backend
For the backend process I used MySql as my database manager to store all the data in one single table that takes values of id, tasks, descriptions of the task and the dates parameters required by Sequelize. We make a connection between the database and our app using sequelize datatypes in order to make changes in the database and store our data. As a final step we create our API and make the necessary set ups to our routes and our server using Cors and Express.

*Cors: 2.8.5

*Express:4.17.3

*Mysql: 2.18.1

*Sequelize: 6.19.0

# Frontend
For the front process I used React and Bootstrap. We start by calling the URI that we set up in the backend and creating our functions using hooks (useState, getState) where we will use axios to connect to our backend process and style this on a table where we will be storing our tasks and putting them on display for the user. We create an edit button using Link from 'react-router-dom' in order to create a different route for our edit task feature. On our edit.js we create our functions connected to the backend process and return a form that takes the selected task by its id and allows us to edit its content. Finally we import all this to our app.js and display it using Routes.

*axios: 0.26.1

*bootstrap: 5.1.3

*react: 18.0.0
