// Pour creuser les trous (touche z et x)
function trou() {
    switch (event.keyCode) {
        case 90: // Z (trou gauche)   
            if (binFall == false && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 - objRunner.intLargeurTab)] == 1) {
                tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 - objRunner.intLargeurTab)] = 8;
                initTrou(Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab),Math.floor(objRunner.intX / 30 - objRunner.intLargeurTab));
                objSons.digging.play();
            }

            break;

        case 88: // X (trou droit)
            if (binFall == false && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.ceil(objRunner.intX / 30 + objRunner.intLargeurTab)] == 1) {
                tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.ceil(objRunner.intX / 30 + objRunner.intLargeurTab)] = 8;
                initTrou(Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab),Math.ceil(objRunner.intX / 30 + objRunner.intLargeurTab));
                objSons.digging.play();
            }
            break;
    }
}

// init trou
function initTrou(intY, intX) {
    objTrou = new Object();
    objTrou.strCouleur = 'black';
    objTrou.intX = intX;
    objTrou.intY = intY;
    objTrou.intLargeur = 30;
    objTrou.intHauteur = 30;
    objTrou.objTemps = new Date();
    tabObjets[intY][intX] = objTrou;
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

// Pour vérifier si il faut remplir le trou
function verifTrou(intY, intX){
    var objVerifTrou = tabObjets[intY][intX];
    var objTempsDebut = objVerifTrou.objTemps;
    var objTempsMaintenant = new Date();
    var intNbSec = (objTempsMaintenant - objTempsDebut)/1000;
    console.log(intNbSec);
    if (intNbSec >= 8){
        tabTableau[intY][intX] = 1;
        initPasserelles(intY,intX);
    }
    else{
        dessinerTrou(intY,intX);
    }
}