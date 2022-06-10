# etch-a-sketch
Etch-A-Sketch app, applying what I personally learned from my Rock, Paper, Scissors app.

Check it out here: https://dane-dalton.github.io/etch-a-sketch/ (Not supported on mobile browsers)

All feedback is welcome and appreciated!


Lessons learned from this project:

-Be careful editing files in github. A pull is required when you work on your local machine.

-Variables are stored based on their scope. If a variable is not working how you would like it to, check where it is declared.

-While integers and decimals are both 'numbers' in JS, when parsing a DOM element dont forget that ints are still different from floats

-If a grid is misbehaving, take a look at 1) the container dimensions the grid is nested in and 2) the content dimensions within the grid

-Do more thorough bug tests on completion. Input box was bug free outside of giving a float instead of an int. Discovered thanks to my friends who were willing to do some bug tests!