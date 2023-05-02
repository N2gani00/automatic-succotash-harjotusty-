// Haku koodi jos kirjotetaan jotain niin filtteröi tietystä osasta tekstiä
let hakuInput = document.getElementById("haku");
let listItem = document.querySelectorAll("li");

hakuInput .addEventListener("input", haku);

// tehään funktio missä haetaan syöttötiedot.
function haku(){
    let keyword = hakuInput.value;

    // mistä haetaan? 
    for( const li of listItem){
        // li osiosta eli jos li tekstissä on tietty sana niin näytetään sanoja missä on sama ellei samoja sanoja
        if (li.textContent.includes(keyword)){
            li.style.display = "list-item";
        }
        // jos ei ole samaa niin ei näytetä sitä mitä siinä ei ole
        else{
        li.style.display = "none";
    }
    }
}