
function Dice() {

    this.diceli = document.createElement("li"); // ul elementet som li listan ska appenda till. 
    this.diceNr = 0; // nummer som representerar den enskilda tärningen 

    this.roll = function(){
      var random = Math.floor(Math.random()*6+1);
      this.diceNr = random; 
      this.diceli.className = "dice dice-side-" + this.getClass(this.diceNr);
      return random; 
    }

    this.getDiceNr = function(){
      return this.diceNr; 
    }

    this.getClass = function(diceNr){
        var toString; 
        switch (diceNr){
            case 1: 
              toString = "one";
              break; 
            case 2: 
              toString = "two";
              break; 
            case 3: 
              toString = "three";
              break; 
            case 4: 
              toString = "four";
              break; 
            case 5: 
              toString = "five";
              break;
            case 6: 
              toString = "six";
        }
        return toString; 

    }

}


