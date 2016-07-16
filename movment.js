
/*
 a simple exercise for the weekend. create a class name`Robot` which contains the properties:
  `x` (number),
  `y` (number),
  `faceDirection` (string: left, right, up, down)
   
   and will have the methods:
   `turnLeft` will turn the `faceDirection` to its left 
   (which means that if I'm facing up I'll face left and if I'm facing left and I turn left I'll face down).
   a same method but for the other direction will be `turnRight`
   and the last method will be `move` which will change the `x,y` according to the face direction 
   (top will add 1 to the y, down will decrease 1 from the y, left will decrease 1 from the x and right will add 1 to the x)
   
 */

var Directions = {
    North: "north",
    South: "south",
    East: "east",
    West: "west"
}

function Robot(){

    function turnRight(){
        switch(this.faceDirection) {
            case Directions.North:
                this.faceDirection = Directions.East;
                break;
            case Directions.East:
                this.faceDirection = Directions.South;
                break;
            case Directions.South:
                this.faceDirection = Directions.West;
                break;
            case Directions.West:
                this.faceDirection = Directions.North;
                break;
        }

        return this.faceDirection;
    }

    function turnLeft(){
        switch(this.faceDirection) {
            case Directions.North:
                this.faceDirection = Directions.West;
                break;
            case Directions.East:
                this.faceDirection = Directions.North;
                break;
            case Directions.South:
                this.faceDirection = Directions.East;
                break;
            case Directions.West:
                this.faceDirection = Directions.South;
                break;
        }

        return this.faceDirection;
    }

    function move(){
        switch(this.faceDirection) {
            case Directions.North:
                this.y -= 1;
                break;
            case Directions.East:
                this.x += 1;
                break;
            case Directions.South:
                this.y += 1;
                break;
            case Directions.West:
                this.x -= 1;
                break;
        }

        return {x: this.x, y: this.y}
    }

    this.x = 0;
    this.y = 0;
    this.faceDirection = Directions.North;

    this.turnRight = turnRight;
    this.turnLeft = turnLeft;
    this.move = move;

}
