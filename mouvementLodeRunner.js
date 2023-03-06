/* Toutes les fonctions qui gèrent le mouvement du lode runner */

//mouvement horizontal (X)
function mouvementX() {
    //mouvement gauche
    if (binMouvementLeft == true) {
        if (tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30)] != 6
            && tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30)] != 1
            && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab - 1 / 30)][Math.floor(objRunner.intX / 30)] != 1) {
            objRunner.intX += objRunner.intDirectionX * objRunner.intVitesse;
        }
    }
    //mouvement droit
    if (binMouvementRight == true) {
        if (tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] != 6
            && (tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] != 1
                && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab - 1 / 30)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] != 1)) {

            objRunner.intX += objRunner.intDirectionX * objRunner.intVitesse;
        }
    }
}

//mouvement Veritcal (Y)
function mouvementY() {
    binDansEchelle = false;
    if (binMouvementUP == true || binMouvementDOWN == true) {
        //check s'il est dans l'echelle
        if ((tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30)] == 2
            && tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 2)
            || (tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30)] == 2
                && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 2)) {

            binDansEchelle = true

            //mouvement en haut
            if (binMouvementUP == true) {
                if (tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30 + (objRunner.intLargeur / 2) / 30)] == 2
                    || tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab - 1 / 30)][Math.floor(objRunner.intX / 30 + (objRunner.intLargeur / 2) / 30)] == 2) {
                    objRunner.intY -= objRunner.intDirectionY * objRunner.intVitesse;
                }

            } else {
                //mouvement en bas
                if ((tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab + 3 / 30)][Math.floor(objRunner.intX / 30 + (objRunner.intLargeur / 2) / 30)] != 2
                    && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 + (objRunner.intLargeur / 2) / 30)] == 2)
                    || tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab + 3 / 30)][Math.floor(objRunner.intX / 30 + (objRunner.intLargeur / 2) / 30)] == 2) {

                    objRunner.intY += objRunner.intDirectionY * objRunner.intVitesse;
                }
            }
        }
        //mouvement en bas check s'il y a un trou
        if (binMouvementUP == false) {
            if (tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30)] == 5
                && tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 5
                && (tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30)] == 0
                    && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 0)) {
                binFall = true;
            }
        }
    }
}




