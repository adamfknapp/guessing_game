# Guessing game

## Purpose
The goal of this project is to learn React and Django by building a simple application.

## Specification
This project:

- Pulls random questions from a public API `opentdb.com`. In the back end, the `views.py` file will randomize the answers and display the results to the user.
- If the user selects the correct answer their score will be increased. A new question will be retired from the API after any user answers up to the maximum number of questions.
- When the maximum number of questions is reached, the users current score will be logged in the Django database. Also, the user will get feedback on how their score compares with historical games.
- The CSS used at the end of the game will dynamically update based on how the users score compares to the historical average. If the users score is below average the background color will be red, otherwise it will be green.
- At the end of each game, the user will be shown a button to give them the opportunity to play a new game.
 
## Contents
This Django app consists of a single app title game. This app relies on the following files, located under the `game` folder,  to complete the specification:
- services.py
 This file houses the code that queries the questions API. The returned data is not modified in this file. This code was split into a seperate fail for scalability. While the file currently only contains a single function, building out this app could require additional API calls. Housing them in a central file would be cleaner.
 
- urls.py
 Only two paths were used for this project. A route for the Admin view and a route to return the question data.
 
- views.py
 This file contains a single function titled `Questions`. The `Questions` function handles both GET requests and POST requests.
  A GET request to `Questions` will return a new question from the API, decode the text - which is base64 encoded, randomize the answers, and collect the historical game data that displayed at the end of the game.
 
 The POST request to `Questions` will log the results of a game in the database.
 
- models.py
 This file contains a single model that logs scores from historical games. 
 
- static/index.js
 This is a React based file that handles the game interaction.  This file uses Tailwind CSS from a CDN.
 
   **App Class**
   The top level component for the React App
 
   **Mybutton class**
   A child class of App that defines the CSS for the button choice buttons. This class also handles when each button is clicked. This button calls functions in the Parent class to update state.
 
   **Score class**
   A second child component for displaying the current score to the user.
 
   **incriment /decrement function**
   These functions will update the score and the number of questions answered.
 
   **decrement function**
   This function will fetch the next question

