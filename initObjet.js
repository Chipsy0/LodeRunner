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

// Construire le runner
function initRunner() {
    objRunner = new Object();
    objRunner.strCouleur = 'black';
    objRunner.intLargeur = 18;
    objRunner.intHauteur = 28;
    objRunner.intX = 15 * 30;
    objRunner.intY = (16 * 30) - objRunner.intHauteur;
    objRunner.intDirectionX = 1;
    objRunner.intDirectionY = 1;
    objRunner.intLargeurTab = (objRunner.intLargeur) / 30;
    objRunner.intHauteurTab = (objRunner.intHauteur) / 30;
    objRunner.intVitesse = objCanvas.width / 1300;
}

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

// Construire les sons
function initSons() {
    objSons = new Object();

    var objSon = document.createElement('audio');
    objSon.setAttribute('src', 'coinpickup.mp3');
    objSon.load();
    objSons.coinpickup = objSon;

    objSon = document.createElement('audio');
    objSon.setAttribute('src', 'falling.mp3');
    objSon.load();
    objSons.falling = objSon;

    /*objSon = document.createElement('audio');
    objSon.setAttribute('src', 'SonDisparitionVortex.mp3');
    objSon.load();
    objSons.disparitionVortex = objSon;

    objSon = document.createElement('audio');
    objSon.setAttribute('src', 'SonBalleBaton.mp3');
    objSon.load();
    objSons.balleBaton = objSon;*/

    
}
