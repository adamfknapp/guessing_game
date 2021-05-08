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
  