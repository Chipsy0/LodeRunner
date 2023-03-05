/* Toutes les fonctions en lien avec les murs */

// Construire les murs
function initMurs(intY, intX) {
    objMur = new Object();
    objMur.strCouleur = '#0b2b02';
    objMur.intX = intX;
    objMur.intY = intY;
    objMur.intLargeur = 30;
    objMur.intHauteur = 30;
    tabObjets[intY][intX] = objMur;
}

// Pour dessiner les murs
function dessinerMurs(intY, intX) {
    objC2D.save();
    var objMur = tabObjets[intY][intX];
    intPosX = objMur.intX * 30;
    intPosY = objMur.intY * 30;
    objC2D.fillStyle = objMur.strCouleur;
    objC2D.fillRect(intPosX, intPosY, objMur.intLargeur, objMur.intHauteur);
    objC2D.restore();
}