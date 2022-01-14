
function Dice() { //constructor 

    this.diceli = document.createElement("li"); // skapar li-element för det aktuella objektet 
    this.diceNr = 0; // egenskap som representerar den enskilda tärningens nr

    // Metod för att slumpa fram en siffra och addera klassnamn 
    this.roll = function(){
      var random = Math.floor(Math.random()*6+1); // slumpar fram en siffra mellan 1 och 6 
      this.diceNr = random; // sparar random i egenskapen diceNr
      this.diceli.className = "dice dice-side-" + this.getClass(this.diceNr); // anropar getClass med tärningen siffra som parameter. getClass returnerar ett css-klassnamn. 
      return random; 
    }

    // Metod för att returna tärningens aktuella siffra 
    this.getDiceNr = function(){
      return this.diceNr; 
    }
    
    // Metod för att konvertera siffran till ett css-klassnamn. 
    this.getClass = function(diceNr){
        var toString; 
        switch (diceNr){ // switch-sats som konverterar siffran 
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


