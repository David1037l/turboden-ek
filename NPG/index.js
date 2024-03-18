const kontejner = document.getElementById("kontejner");
const tlacitko = document.getElementById("BTN");
const OdebratTl = document.getElementById("REM");
let hodnota = 1;

function pridatElement(){
    const myElement = document.createElement('input');
    myElement.type = "text";

    myElement.id= `elem${hodnota}`;

    const myBr= document.createElement('br');
    myBr.id = `elemBr${hodnota}`;

    kontejner.appendChild(myElement);
    kontejner.appendChild(myBr);
    hodnota++;
}

function OdebratElement(){
    if(hodnota > 1){
        let jmeno = `elem${hodnota-1}`;
    const RemElement = document.getElementById(jmeno);
    
    kontejner.removeChild(RemElement);
    hodnota--;
    }
    else{
        alert("Není co smazat!")
    }
}

tlacitko.onclick = pridatElement;
OdebratTl.onclick = OdebratElement;