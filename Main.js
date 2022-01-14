
var Main = {
    
    init : function(){
        let windowBtn = document.getElementById("icon-dice"); // hämtar knapp i DOM
        windowBtn.addEventListener("click", function(){ // applicerar händelselyssnare på knapp
            var application = new Application(document.getElementById("page-content-wrapper")); // Ny instans av Application
            application.createElems(); 
            Main.dragNdrop(); 
        });
    },
    
    // metod för att hanter drag & drop
    dragNdrop : function(){
            var windows = document.getElementsByClassName("dice-window-wrapper");
            var drag = new DragnDrop(); // Ny instans av DragnDrop
            for (var i = 0; i < windows.length; i++) { //går igenom alla spelfönster som finns i DOMen
                var x = drag.add(windows[i], windows[i].getElementsByClassName("dice-menubar-wrapper")[0]); //anropar drag objektets add funktion med två parametrar; spelfönster och menybar
            }
    }

};

window.addEventListener("load", Main.init); // initmetoden anropas när webbsidan är inladdad

