# DinosaurGame

1. Introduction
DinosaurGame is a lite version of the well-known Dinosaur game built in Google Chrome. The game is an endless runner where the goal is to get as much points as possible while dodging obstacles.

2. Features
DinosaurGame includes the following features:

Dinosaur, road, clouds and cactus models
Endless road, clouds and obstacle animations
Dinosaur jumping animation
Collision detection
Scoreboard

3. User Interface
DinosaurGame includes only one main page where the game runs and ends

4. Functionality and Design
The game mostly runs through css built animations and javascript arguments that run them. By pressing spacebar all of the animations and the scoreboard start playing, this is done by using eventlisteners that check if a key is pressed and arguments that start and run the jumping animation based on the keys that were pressed (if Spacebar - Starts game, if ArrowUp - dino jump's). The game will continue playing until the dino model hits the cactus model or in other words if dino's pixels match the cactuses pixels. This is done by using variables that check and hold their pixel positions and an argument that checks if their positions match, when they match all of the animations will stop and a big Game Over screen will popup indicating that the game finished along with the scoreboard reseting until spacebar is hit again.


5. Technical Requirements and Architecture
DinosaurGame was built using html, css and javascript only in Visual Studio Code

6. Out of scope
DinosaurGame does not include the following features

Obstacle spawning on random intervals of a few seconds
Random obstacle spawning

7. User Manual
By pressing Spacebar the game start
By pressing the ArrowUp key the dino jumps 



