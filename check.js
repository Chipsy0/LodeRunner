//check if won
function checkWin() {
    if (Math.floor(objRunner.intY / 30) == 0 && Math.floor(objRunner.intX / 30) == 19) {
        intScore += 1500;
        intNiveau++;
        tabTableau[1][19] = 0;
        tabTableau[2][19] = 0;
        tabTableau[3][19] = 0;
        tabTableau[4][19] = 0;

        tabObjets[1][19] = null;
        tabObjets[2][19] = null;
        tabObjets[3][19] = null;
        tabObjets[4][19] = null;

        initRunner();
        initTableau();
        intnbLingot = 0;
        debutChrono();
        binCommence = false;
        intScoreNiveau = 0;
    }
}

//check if dead
function checkDead() {
    if (tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30)] == 1
        && tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 1) {
        objSons.dead.play();
        binMort = true;

    }
}

//collecter lingot 
function collectLingot() {
    if ((tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30)] == 3
        || tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 3)) {
        collecterLingot(Math.floor(objRunner.intY / 30), Math.floor(objRunner.intX / 30));
    }
}

//check si il y a un trou pour tomber
function checkTrou() {
    if (((tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30)] == 0
        && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 0)
        && (tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30)] == 0
            && tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 0))
        || (tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30)] == 5
            && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 5)
        || (tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30)] == 8
            && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 8)) {
        binFall = true;
    }
}


//verifie pour allez correctement sur corde
function checkCorde() {
    if (binMouvementLeft == true || binMouvementRight == true) {
        //verify pour allez correctement sur corde
        if (tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30)] == 5
            && tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 5) {
            var locY = Math.floor(objRunner.intY / 30);
            if (Math.floor(objRunner.intY) != locY * 30 + 2) {
                binFall = true;
            }
            // vérif pour animation si le bloc en dessous est une passerelle ou une échelle
            if (tabTableau[Math.floor(objRunner.intY / 30) + 1][Math.floor(objRunner.intX / 30)] != 1
                && tabTableau[Math.floor(objRunner.intY / 30) + 1][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] != 1
                && tabTableau[Math.floor(objRunner.intY / 30) + 1][Math.floor(objRunner.intX / 30)] != 2
                && tabTableau[Math.floor(objRunner.intY / 30) + 1][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] != 2) {
                binSurCorde = true;
            }
        }

    }
}

