//si Lode runner meurt 
function mort() {
    objRunner.intY -= 1 * objRunner.intVitesse;
    if (Math.floor(objRunner.intY / 30) == 0) {
        intNbVies--;
        binMort = false;
        binCommence = false;
        if (intNbVies != 0) {
            debutChrono();
            intScore -= intScoreNiveau;
            intScoreNiveau = 0
            initRunner();
            initTableau();
            intnbLingot = 0;
        }
    }
}

//si Lode runner meurt grace à une garde
function mortParGarde() {
    for (var i = 0; i < intNbGardes; i++) {
        var objGarde = tabGardes[i];
        intPosX = objGarde.intX;
        intPosY = objGarde.intY;
        intLargeur = objGarde.intLargeur;
        intHauteur = objGarde.intHauteur;

        if ((((Math.floor(objRunner.intY) >= intPosY && Math.floor(objRunner.intY) <= (intPosY + intHauteur))
            && (Math.floor(objRunner.intX) >= intPosX && Math.floor(objRunner.intX) <= (intPosX + intLargeur)))
            || (((Math.floor(objRunner.intY)) >= intPosY && (Math.floor(objRunner.intY)) <= (intPosY + intHauteur))
                && ((Math.floor(objRunner.intX) + 18) >= intPosX && (Math.floor(objRunner.intX) + 18) <= (intPosX + intLargeur))))

            || ((((Math.floor(objRunner.intY) + 28) >= intPosY && (Math.floor(objRunner.intY) + 28) <= (intPosY + intHauteur))
                && (Math.floor(objRunner.intX) >= intPosX && Math.floor(objRunner.intX) <= (intPosX + intLargeur)))
                || (((Math.floor(objRunner.intY) + 28) >= intPosY && (Math.floor(objRunner.intY) + 28) <= (intPosY + intHauteur))
                    && ((Math.floor(objRunner.intX) + 18) >= intPosX && (Math.floor(objRunner.intX) + 18) <= (intPosX + intLargeur))))) {
            if (binMort == false) {
                objSons.dead.play();
                binMort = true;
            }


        }
    }
}
