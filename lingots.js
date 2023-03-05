/* Toutes les fonctions en lien avec les lingots d'or */

// Construire les lingots d'or
function initLingots(intY, intX) {
    var objLingot = new Object();
    objLingot.strCouleurPrim = "#ffd900";
    objLingot.strCouleurSec = "#c48900";
    objLingot.intX = intX;
    objLingot.intY = intY;
    objLingot.intLargeur = 30;
    objLingot.intHauteur = 11.5;
    tabObjets[intY][intX] = objLingot;
}

// Pour dessiner les lingots d'or
function dessinerLingots(intY, intX) {
    objC2D.save();
    var objLingot = tabObjets[intY][intX];
    intPosX = objLingot.intX * 30;
    intPosY = objLingot.intY * 30;
    objC2D.translate(0, 30 - objLingot.intHauteur);
    objC2D.fillStyle = objLingot.strCouleurPrim;
    objC2D.strokeStyle = objLingot.strCouleurSec;
    objC2D.lineWidth = 1.5;
    objC2D.fillRect(intPosX + objLingot.intLargeur / 6, intPosY - 2.25, 2 * objLingot.intLargeur / 3, objLingot.intHauteur / 2);
    objC2D.strokeRect(intPosX + objLingot.intLargeur / 6, intPosY - 2.25, 2 * objLingot.intLargeur / 3, objLingot.intHauteur / 2);
    objC2D.fillRect(intPosX, intPosY + objLingot.intHauteur / 2 - 1.5, objLingot.intLargeur, objLingot.intHauteur / 2);
    objC2D.strokeRect(intPosX, intPosY + objLingot.intHauteur / 2 - 1.5, objLingot.intLargeur, objLingot.intHauteur / 2);
    objC2D.fillStyle = "white";
    objC2D.fillRect(intPosX + 5 * objLingot.intLargeur / 6 - 11.5, intPosY - 1.5, 10, 2);
    objC2D.fillRect(intPosX + objLingot.intLargeur - 9.5, intPosY + objLingot.intHauteur / 2, 8, 1.5);
    objC2D.restore();
}

function collecterLingot(intY,intX){
    intScore += 250;
    tabTableau[intY][intX] = 0;
    tabTableau[intY][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] = 0;
    intnbLingot++;
    objSons.coinpickup.play();
}
