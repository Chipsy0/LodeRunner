/* Toutes les fonctions en lien avec le sol */

// Construire le sol
function initSol(intY, intX) {
    var objSol = new Object();
    objSol.strCouleur = 'gray';
    objSol.intX = intX;
    objSol.intY = intY;
    objSol.intLargeur = 30;
    objSol.intHauteur = 30;
    tabObjets[intY][intX] = objSol;
}

// Pour dessiner le sol
function dessinerSol(intY, intX) {
    objC2D.save();
    var objSol = tabObjets[intY][intX];
    intPosX = objSol.intX * 30;
    intPosY = objSol.intY * 30;
    objC2D.strokeStyle = '#3d3c3b';
    objC2D.lineWidth = 2;
    objC2D.fillStyle = objSol.strCouleur;
    objC2D.beginPath();
    objC2D.fillRect(intPosX, intPosY, objSol.intLargeur, objSol.intHauteur);
    objC2D.strokeRect(intPosX + 1, intPosY + 1, objSol.intLargeur - 2, objSol.intHauteur - 2);
    objC2D.closePath();
    objC2D.restore();
}