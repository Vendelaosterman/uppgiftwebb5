function Application(content) {   
    this.contentdiv = content; // Grundelement 
    this.sum = 0; 
    this.sumArray = [];
    this.diceList = []; 

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
        this.menudiv.classList.add("dice-menubar-wrapper");
        this.menudiv.appendChild(this.closediv);
        this.closediv.classList.add("close");
        this.windowdiv.appendChild(this.tooldiv);
        this.tooldiv.classList.add("dice-toolbar-wrapper");
        this.tooldiv.appendChild(this.toolul);
    
        for (let i = 0; i < 3; i++) {
            let li = document.createElement("li");
            this.toolul.appendChild(li);
        }
    
        this.menuli = this.toolul.getElementsByTagName("li");
        this.menuli[0].classList.add("add");
        this.menuli[1].classList.add("remove");
        this.menuli[2].classList.add("roll");

        // Aktivera eventlyssnare 
        this.menuli[0].addEventListener("click", this.newDice); 
        this.menuli[1].addEventListener("click", this.removeDice); 
        this.menuli[2].addEventListener("click", this.rollDices); 
        this.closediv.addEventListener("click", this.endApplication);
    
        this.toolul.appendChild(this.toolLi);
        this.counterul.classList.add("dice-toolbar-counter-wrapper");
        this.toolLi.appendChild(this.counterul);
    
        for (let i = 0; i < 5; i++) {
            this.sumli = document.createElement("li");
            this.counterul.appendChild(this.sumli);
            this.sumli.classList.add("zero");
        }
    
        this.windowdiv.appendChild(this.dicecontdiv);
        this.dicecontdiv.classList.add("dice-content-wrapper");
        this.dicecontdiv.appendChild(this.dicecontul);

    }

    let a_this = this; 

    this.newDice = function(){
        if (a_this.diceList.length != 40){
            var dice = new Dice();
            dice.roll();
            a_this.diceList.push(dice);
            a_this.countSum();
            a_this.dicecontul.appendChild(dice.diceli);
            a_this.audio();
        }
    }

    this.removeDice = function(){
        if (a_this.diceList.length != 0){
            console.log(a_this.dicecontul);
            a_this.dicecontul.removeChild(a_this.dicecontul.lastChild);
            a_this.diceList.pop();
            a_this.countSum();
            a_this.audio();
        }
    }

    this.rollDices = function () {
        for (let i = 0; i < a_this.diceList.length; i++) {
            a_this.diceList[i].roll();
        }
        a_this.countSum();
        a_this.audio();
    }

    this.countSum = function () {
        this.sum = 0;
        for (let i = 0; i < this.diceList.length; i++) {
            this.sum += this.diceList[i].getDiceNr();
        }
        this.showSum();
        
    }
    
    this.showSum = function(){
        this.sumArr = this.sum.toString().split("");
        var testli = this.counterul.getElementsByTagName("li"); 
        for (let i = 0; i < 5; i++) { // nollställer classnamn
            testli[i].className = "zero";
        }
        for (let i = 0; i < this.sumArr.length; i++) {
            var sumClass;
            switch (this.sumArr[i]) {
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
            let pos = 5 - this.sumArr.length; // sätter position
            testli[pos+i].className = sumClass; 
        }

    }

    this.audio = function(){
        var audio = new Audio("src/wav/add.wav");
        audio.play();
    }

    this.endApplication = function(){
        a_this.windowdiv.remove();
    }

}


