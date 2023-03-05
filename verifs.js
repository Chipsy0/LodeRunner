/* Toutes les vérifications nécessaires pour la bonne poursuite du jeu */

// vérifie si le niveau est terminé
function verifNiveauReussi() {
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
        binCommence = false;
        debutChrono();
        intScoreNiveau = 0;
        objSons.levelup.play();
    }
}

// vérifie si lode runner est mort
function verifMort() {
    if (tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30)] == 1
        && tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 1) {
        objSons.dead.play();
        binMort = true;
    }
}

// vérifie si le lode runner collecte un lingot 
function verifCollecterLingot() {
    if ((tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30)] == 3
        || tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 3)) {
        collecterLingot(Math.floor(objRunner.intY / 30), Math.floor(objRunner.intX / 30));
    }
}

// vérifie si il y a un trou pour tomber
function verifTrou() {
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


// vérifie si le lode runner se tient à une corde
function verifCorde() {
    binSurCorde = false;
    if (tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30)] == 5
        && tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 5) {
        // vérifie pour animation si le bloc en dessous est une passerelle ou une échelle
        if (tabTableau[Math.floor(objRunner.intY / 30) + 1][Math.floor(objRunner.intX / 30)] != 1
            && tabTableau[Math.floor(objRunner.intY / 30) + 1][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] != 1
            && tabTableau[Math.floor(objRunner.intY / 30) + 1][Math.floor(objRunner.intX / 30)] != 2
            && tabTableau[Math.floor(objRunner.intY / 30) + 1][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] != 2) {
            binSurCorde = true;
        }
    }

    if (binMouvementLeft == true || binMouvementRight == true) {
        if (tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30)] == 5
            && tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 5) {
            var locY = Math.floor(objRunner.intY / 30);
            if (Math.floor(objRunner.intY) != locY * 30 + 2) {
                binFall = true;
            }           
        }

    }
}

