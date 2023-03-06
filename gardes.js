/* Toutes les fonctions en lien avec les guardes */

// Pour construire les gardes
var intNbGardes = 3;
var tabGardes = null;
function initGardes() {
    tabGardes = new Array();
    for (var i = 1; i <= intNbGardes; i++) {
        objGarde = new Object();
        objGarde.intLargeur = 18;
        objGarde.intHauteur = 28;
        var intNoPasserelle = Math.floor(Math.random() * 5) + 1;
        var tabOptionsDePosition = null;
        switch (intNoPasserelle) {
            case 1:
                objGarde.intY = (3 * 30) - objGarde.intHauteur;
                tabOptionsDePosition = [1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14, 15];
                break;
            case 2:
                objGarde.intY = (5 * 30) - objGarde.intHauteur;
                tabOptionsDePosition = [19, 20, 21, 22, 23, 25, 27, 28];
                break;
            case 3:
                objGarde.intY = (8 * 30) - objGarde.intHauteur;
                tabOptionsDePosition = [1, 2, 4, 5, 6, 7, 16, 17, 18, 19, 20, 22, 24, 25, 27, 28];
                break;
            case 4:
                objGarde.intY = (11 * 30) - objGarde.intHauteur;
                tabOptionsDePosition = [1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
                break;
            case 5:
                objGarde.intY = (14 * 30) - objGarde.intHauteur;
                tabOptionsDePosition = [6, 8, 22, 23, 24, 26, 27];
                break;
        }
        var intIndexAleatoireTab = objGarde.intX = Math.floor(Math.random() * tabOptionsDePosition.length);
        objGarde.intX = tabOptionsDePosition[intIndexAleatoireTab] * 30 + 6;
        // vérifie que 2 gardes ne sont pas au même endroit
        var binMemePos = false;
        for (var j = 0; j < tabGardes.length; j++) {
            if (tabGardes[j].intX == objGarde.intX && tabGardes[j].intY == objGarde.intY) {
                i--;
                binMemePos = true;
            }
        }
        objGarde.intDirectionX = 0;
        objGarde.intDirectionY = 0;
        objGarde.binDansEchelle = false;
        objGarde.binFall = false;
        objGarde.binLingot = false;
        objGarde.intLargeurTab = (objRunner.intLargeur) / 30;
        objGarde.intHauteurTab = (objRunner.intHauteur) / 30;
        objGarde.intVitesse = objCanvas.width / 1500;
        if (binMemePos == false) {
            tabGardes.push(objGarde);
        }
    }
}

// Pour dessiner les gardes (+animations)
function dessinerGardes() {
    for (var i = 0; i < tabGardes.length; i++) {
        objC2D.save();
        var objGardeCourant = tabGardes[i];
        intPosX = objGardeCourant.intX;
        intPosY = objGardeCourant.intY;
        objC2D.translate(intPosX, intPosY);
        objC2D.fillStyle = 'white';
        objC2D.fillRect(objRunner.intLargeur / 2 - 1.5, 6 + fltAnim / 6, 3, 4); // cou
        objC2D.fillRect(objRunner.intLargeur / 2 - 3, 8 + 1 / 2 + fltAnim / 6, 6, 13); // corps
        objC2D.fillRect(objRunner.intLargeur / 2 - 3, 0 + 1 / 2 + fltAnim / 6, 6, 6); // tête
        objC2D.fillStyle = '#88B1FF';
        objC2D.fillRect(objRunner.intLargeur / 2 - 3, 0 + 1 / 2 + fltAnim / 6, 6, 3); // casquette
        objC2D.fillRect(objRunner.intLargeur / 2 - 5.5, 2 + 1 / 2 + fltAnim / 6, 6, 2); // casquette
        objC2D.fillRect(3, 20 - 1 / 2 + fltAnim / 6, 4, 4); // jambe gauche
        objC2D.fillRect(0, 23, 4, 4); // jambe gauche
        objC2D.fillRect(objRunner.intLargeur - 7, 20 - 1 / 2 + fltAnim / 6, 4, 4); // jambe droite
        objC2D.fillRect(objRunner.intLargeur - 4, 23, 4, 4); // jambe droite
        objC2D.fillRect(objRunner.intLargeur / 2 - 6, 8 - 1 / 2 + fltAnim / 6, 4, 4); // bras gauche
        objC2D.fillRect(0, 11 + fltAnim / 4, 4, 4); // bras gauche
        objC2D.fillRect(objRunner.intLargeur / 2 + 2, 8 - 1 / 2 + fltAnim / 6, 4, 4); // bras droit
        objC2D.fillRect(objRunner.intLargeur - 4, 11 + fltAnim / 4, 4, 4); // bras droit
        objC2D.restore();
    }
}

// Pour déplacer les gardes
function deplacerGardes() {
    for (var i = 0; i < tabGardes.length; i++) {
        var objGardeCourant = tabGardes[i];
        objGardeCourant.intDirectionX = 1;
        objGardeCourant.intDirectionY = 0;
    }
}

// Pour déplacer les gardes
function collectLingotGarde() {
    for (var i = 0; i < tabGardes.length; i++) {
        var objGarde = tabGardes[i];
        if (objGarde.binLingot == false) {
            if ((tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] == 3
                || tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 3)) {
                tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] = 0;
                tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] = 0;
                objGarde.binLingot = true;
            }
        }

    }

}

// initialise le trou rempli par un garde
function initGardeTrou(intY, intX) {
    objGardeTrou = new Object();
    objGardeTrou.strCouleur = 'black';
    objGardeTrou.intX = intX;
    objGardeTrou.intY = intY;
    objGardeTrou.intLargeur = 30;
    objGardeTrou.intHauteur = 30;
    objGardeTrou.objTemps = new Date();
    tabObjets[intY][intX] = objGardeTrou;
}

// Pour dessiner les trous remplis par un garde
function dessinerGardeTrou(intY, intX) {
    objC2D.save();
    var objGardeTrou = tabObjets[intY][intX];
    intPosX = objGardeTrou.intX * 30;
    intPosY = objGardeTrou.intY * 30;
    objC2D.fillStyle = objGardeTrou.strCouleur;
    objC2D.fillRect(intPosX, intPosY, objGardeTrou.intLargeur, objGardeTrou.intHauteur);
    objC2D.restore();
}

// Pour vérifier s'il faut remplir le trou rempli par un garde
function verifDureeGardeTrou(intY, intX) {
    var objVerifTrou = tabObjets[intY][intX];
    var objTempsDebut = objVerifTrou.objTemps;
    var objTempsMaintenant = new Date();
    var intNbSec = (objTempsMaintenant - objTempsDebut) / 1000;
    if (intNbSec >= 8) {
        tabTableau[intY][intX] = 1;
        initPasserelles(intY, intX);
        objSons.filling.play();
    }
    else {
        dessinerGardeTrou(intY, intX);
    }
}