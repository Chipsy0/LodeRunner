// Construire les passerelles
function initPasserelles(intY, intX) {
    var objPasserelle = new Object();
    objPasserelle.strCouleurPrim = '#8E443D';
    objPasserelle.strCouleurSec = '#441F1E';
    objPasserelle.intLargeur = 30;
    objPasserelle.intHauteur = 30;
    objPasserelle.intX = intX;
    objPasserelle.intY = intY;
    tabObjets[intY][intX] = objPasserelle;
}

// Pour dessiner les passerelles
function dessinerPasserelles(intY, intX) {
    objC2D.save();
    var objPasserelle = tabObjets[intY][intX];
    intPosX = objPasserelle.intX * 30;
    intPosY = objPasserelle.intY * 30;
    objC2D.fillStyle = objPasserelle.strCouleurPrim;
    objC2D.fillRect(intPosX, intPosY, objPasserelle.intLargeur, objPasserelle.intHauteur);
    objC2D.strokeStyle = objPasserelle.strCouleurSec;
    objC2D.fillStyle = objPasserelle.strCouleurSec;
    objC2D.lineWidth = 2;
    objC2D.translate(intPosX, intPosY);
    objC2D.strokeRect(1, 0, objPasserelle.intLargeur - 2, objPasserelle.intHauteur / 2);
    objC2D.beginPath();
    objC2D.moveTo(0, objPasserelle.intHauteur);
    objC2D.lineTo(objPasserelle.intLargeur, objPasserelle.intHauteur);
    objC2D.stroke();
    objC2D.beginPath();
    objC2D.moveTo(objPasserelle.intLargeur / 2, objPasserelle.intHauteur / 2);
    objC2D.lineTo(objPasserelle.intLargeur / 2, objPasserelle.intHauteur);
    objC2D.stroke();
    objC2D.fillRect(objPasserelle.intLargeur / 2, objPasserelle.intHauteur / 2, 3, objPasserelle.intHauteur / 2);
    objC2D.restore();
}