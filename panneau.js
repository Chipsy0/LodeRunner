/* Toutes les fonctions en lien avec le panneau d'interface noir */

// Construire le panneau
function initPanneau(intY, intX) {
    objPanneau = new Object();
    objPanneau.strCouleur = 'black';
    objPanneau.intX = intX;
    objPanneau.intY = intY;
    objPanneau.intLargeur = 30;
    objPanneau.intHauteur = 30;
    tabObjets[intY][intX] = objPanneau;
}

// Pour dessiner le panneau
function dessinerPanneau(intY, intX) {
    objC2D.save();
    var objPanneau = tabObjets[intY][intX];
    intPosX = objPanneau.intX * 30;
    intPosY = objPanneau.intY * 30;
    objC2D.fillStyle = objPanneau.strCouleur;
    objC2D.fillRect(intPosX, intPosY, objPanneau.intLargeur, objPanneau.intHauteur);
    objC2D.restore();
}