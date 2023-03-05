// Pour creuser les trous
var typeblock = null;
var intTemp = null;

function trou() {
    switch (event.keyCode) {
        case 90: // Z (trou gauche)   
            if (binFall == false && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 - objRunner.intLargeurTab)] == 1) {
                tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 - objRunner.intLargeurTab)] = 8;
                intTemp = intSecondes;
                initTrou(Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab), Math.floor(objRunner.intX / 30 - objRunner.intLargeurTab), intTemp);
                //dessinerTrou(Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab), Math.floor(objRunner.intX / 30 - objRunner.intLargeurTab))

            }

            break;

        case 88: // X (trou droit)
            if (binFall == false && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 1) {
                tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] = 8;
                intTemp = intSecondes;
                initTrou(Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab), Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab), intTemp);
                //dessinerTrou(Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab), Math.floor(objRunner.intX / 30 - objRunner.intLargeurTab))

            }
            break;
    }
}

// init trou
function initTrou(intY, intX, intTemp) {
    objTrou = new Object();
    objTrou.strCouleur = 'black';
    objTrou.intX = intX;
    objTrou.intY = intY;
    objTrou.intTemp = intTemp;
    objTrou.intLargeur = 30;
    objTrou.intHauteur = 30;
    tabObjets[intY][intX] = objPanneau;
}

// Pour dessiner les trou
function dessinerTrou(intY, intX) {
    objC2D.save();
    var objTrou = tabObjets[intY][intX];
    intPosX = objTrou.intX * 30;
    intPosY = objTrou.intY * 30;
    objC2D.fillStyle = objTrou.strCouleur;
    objC2D.fillRect(intPosX, intPosY, objTrou.intLargeur, objTrou.intHauteur);
    objC2D.restore();
}