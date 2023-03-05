/* Toutes les fonctions en lien avec les échelles */

// Construire les échelles
function initEchelles(intY, intX) {
    var objEchelle = new Object();
    objEchelle.strCouleurPrim = "#FF9900";
    objEchelle.strCouleurSec = "#ffd900";
    objEchelle.intX = intX;
    objEchelle.intY = intY;
    objEchelle.intHauteur = 30;
    tabObjets[intY][intX] = objEchelle;
}

// Pour dessiner les échelles
function dessinerEchelles(intY, intX) {
    objC2D.save();
    var objEchelle = tabObjets[intY][intX];
    intPosX = objEchelle.intX * 30;
    intPosY = objEchelle.intY * 30;

    objC2D.fillStyle = objEchelle.strCouleurPrim;
    objC2D.fillRect(intPosX, intPosY, 5, 30);
    objC2D.fillRect(intPosX + 25, intPosY, 5, 30);
    objC2D.restore();

    objC2D.fillStyle = objEchelle.strCouleurSec;
    objC2D.fillRect(intPosX + 3, intPosY + 2, 30 - 6, 2);
    objC2D.fillRect(intPosX + 3, intPosY + objEchelle.intHauteur / 4 + 2, 30 - 6, 2);
    objC2D.fillRect(intPosX + 3, intPosY + 2 * objEchelle.intHauteur / 4 + 2, 30 - 6, 2);
    objC2D.fillRect(intPosX + 3, intPosY + 3 * objEchelle.intHauteur / 4 + 2, 30 - 6, 2);
}

function apparitionEchelleDeFin() {
    tabTableau[1][19] = 2;
    tabTableau[2][19] = 2;
    tabTableau[3][19] = 2;
    tabTableau[4][19] = 2;
    initEchelles(1, 19);
    initEchelles(2, 19);
    initEchelles(3, 19);
    initEchelles(4, 19);
}