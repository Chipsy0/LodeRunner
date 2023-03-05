/* Toutes les fonctions en lien avec les cordes */

// Construire les cordes
function initCorde(intY, intX) {
    var objCorde = new Object();
    objCorde.strCouleur = "#ffd900";
    objCorde.intX = intX;
    objCorde.intY = intY;
    objCorde.intLargeur = 30;
    objCorde.intHauteur = 2.5;
    tabObjets[intY][intX] = objCorde;
}

// Pour dessiner les cordes
function dessinerCordes(intY, intX) {
    objC2D.save();
    var objCorde = tabObjets[intY][intX];
    intPosX = objCorde.intX * 30;
    intPosY = objCorde.intY * 30;
    objC2D.fillStyle = objCorde.strCouleur;
    objC2D.fillRect(intPosX, intPosY + 4, objCorde.intLargeur, objCorde.intHauteur);
    objC2D.restore();
}