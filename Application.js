function Application(content) { // konstruktor med grundelement som parameter
    this.contentdiv = content; // grundelement  
    this.diceList = []; // array med tärningsobjekt 
    
    // Metod för att skapa element
    this.createElems = function () {

        this.windowdiv = document.createElement("div");
        this.menudiv = document.createElement("div");
        this.closediv = document.createElement("div");
        this.tooldiv = document.createElement("div");
        this.toolul = document.createElement("ul");
        this.toolLi = document.createElement("li");
        this.counterul = document.createElement("ul");
        this.dicecontdiv = document.createElement("div");
        this.dicecontul = document.createElement("ul");
        this.contentdiv.appendChild(this.windowdiv);
        this.windowdiv.classList.add("dice-window-wrapper");
        this.windowdiv.appendChild(this.menudiv);
        this.windowdiv.style.position = "absolute";
        this.menudiv.classList.add("dice-menubar-wrapper");
        this.menudiv.appendChild(this.closediv);
        this.closediv.classList.add("close");
        this.windowdiv.appendChild(this.tooldiv);
        this.tooldiv.classList.add("dice-toolbar-wrapper");
        this.tooldiv.appendChild(this.toolul);
    
        for (let i = 0; i < 3; i++) { // skapar 3 st li-element
            let li = document.createElement("li");
            this.toolul.appendChild(li);
        }
    
        this.menuli = this.toolul.getElementsByTagName("li");
        this.menuli[0].classList.add("add");
        this.menuli[1].classList.add("remove");
        this.menuli[2].classList.add("roll");

        // Aktivera eventlyssnare för knappar 
        this.menuli[0].addEventListener("click", this.newDice); 
        this.menuli[1].addEventListener("click", this.removeDice); 
        this.menuli[2].addEventListener("click", this.rollDices); 
        this.closediv.addEventListener("click", this.endApplication);
    
        this.toolul.appendChild(this.toolLi);
        this.counterul.classList.add("dice-toolbar-counter-wrapper");
        this.toolLi.appendChild(this.counterul);
    
        for (let i = 0; i < 5; i++) { // skapar 5 st li-element
            this.sumli = document.createElement("li");
            this.counterul.appendChild(this.sumli);
            this.sumli.classList.add("zero");
        }
    
        this.windowdiv.appendChild(this.dicecontdiv);
        this.dicecontdiv.classList.add("dice-content-wrapper");
        this.dicecontdiv.appendChild(this.dicecontul);

    }

    var a_this = this; // sparar ref till det aktuella objektet

    // Metod för att hantera och skapa ny instans av en tärning
    this.newDice = function(){
        if (a_this.diceList.length != 40){ // kontrollerar antalet understiger 40 st objekt 
            var dice = new Dice(); // ny instans av Dice
            dice.roll();
            a_this.diceList.push(dice); // pushar in objektet i diceList 
            a_this.countSum();
            a_this.dicecontul.appendChild(dice.diceli); // applicerar li-elementet sist i dicecontul
            a_this.audio();
        }
    }
    // Metod för att ta bort en tärning
    this.removeDice = function(){
        if (a_this.diceList.length != 0){ // kontrollerar om det finns tärningar i spelfönstret
            a_this.dicecontul.removeChild(a_this.dicecontul.lastChild); // tar bort sista elementet
            a_this.diceList.pop(); // tar bort sista värdet (objektet) i diceList 
            a_this.countSum();
            a_this.audio();
        }
    }
    // Metod för att slumpa befintliga tärningar
    this.rollDices = function () {
        for (let i = 0; i < a_this.diceList.length; i++) { // loopar igenom längden på diceList
            a_this.diceList[i].roll(); // anropar roll för varje dice objekt 
        }
        a_this.countSum();
        a_this.audio();
    }
    // Metod för att bräkna totalsumma 
    this.countSum = function () {
        this.sum = 0;
        for (let i = 0; i < this.diceList.length; i++) { // loopar igenom längden på diceList
            this.sum += this.diceList[i].getDiceNr(); // multiplicerar sum med varje enskild tärnings nummer
        }
        this.showSum();
        
    }
    // Metod för att applicera summan visuellt 
    this.showSum = function(){
        this.sumArr = this.sum.toString().split(""); // konverterar till string och splittar summan
        var testli = this.counterul.getElementsByTagName("li"); 
        for (let i = 0; i < 5; i++) { // nollställer klassnamn till zero 
            testli[i].className = "zero";
        }
        for (let i = 0; i < this.sumArr.length; i++) { // loopar igenom längden på sumArr
            var sumClass;
            switch (this.sumArr[i]) { // ändrar värdet på varje värde i sumArr till klassnamn
                case '0':
                    sumClass = "zero";
                    break; 
                case '1':
                    sumClass = "one";
                    break; 
                case '2':
                    sumClass = "two";
                    break; 
                case '3':
                    sumClass = "three";
                    break;
                case '4':
                    sumClass = "four";
                    break;
                case '5':
                    sumClass = "five";
                    break;
                case '6':
                    sumClass = "six";
                    break;
                case '7':
                    sumClass = "seven";
                    break;
                case '8':
                    sumClass = "eight";
                    break;
                case '9':
                    sumClass = "nine";     

            } 
            let pos = 5 - this.sumArr.length; // sparar position 
            testli[pos+i].className = sumClass; //sätter position & klassnamn
        }

    }
    // Metod för att spela upp ljudfil 
    this.audio = function(){
        var audio = new Audio("src/wav/add.wav");
        audio.play();
    }
    // Metod för att stänga ner fönster 
    this.endApplication = function(){
        a_this.windowdiv.remove();
    }

}


