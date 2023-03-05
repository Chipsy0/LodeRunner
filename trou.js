// Pour creuser les trous
var typeblock = null;    
var temp = null;

function trou() {
    switch (event.keyCode) {
        case 90: // Z (trou gauche)   
        if (binFall == true){ 
            //tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 5
            tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 - objRunner.intLargeurTab)] == 5

        } 
        
        break;

    case 88: // X (trou droit)
        
        break;
}
console.log(event.keyCode);
}

