/* Toutes les fonctions qui gèrent les mouvements des gardes */

//mouvement horizontal (X)
function mouvementsGardesX() {
    for (var i = 0; i < tabGardes.length; i++) {
        var objGarde = tabGardes[i];

        // vérifie si le garde est sur une corde
        objGarde.binSurCorde = false;
        if (tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] == 5
            && tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 5) {
            // vérifie pour animation si le bloc en dessous est une passerelle ou une échelle
            if (tabTableau[Math.floor(objGarde.intY / 30) + 1][Math.floor(objGarde.intX / 30)] != 1
                && tabTableau[Math.floor(objGarde.intY / 30) + 1][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] != 1
                && tabTableau[Math.floor(objGarde.intY / 30) + 1][Math.floor(objGarde.intX / 30)] != 2
                && tabTableau[Math.floor(objGarde.intY / 30) + 1][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] != 2) {
                objGarde.binSurCorde = true;
            }
        }
        if (objGarde.intDirectionX != 0) {
            if (tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] == 5
                && tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 5) {
                var locY = Math.floor(objGarde.intY / 30);
                if (Math.floor(objGarde.intY) != locY * 30 + 2) {
                    objGarde.binFall = true;
                }           
            }
    
        }

        if (objGarde.binFall != true) {
            //mouvement gauche
            if (objGarde.intDirectionX == -1) {
                if (tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] != 6
                    && tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] != 1
                    && tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab - 1 / 30)][Math.floor(objGarde.intX / 30)] != 1) {
                    objGarde.intX += objGarde.intDirectionX * objGarde.intVitesse;
                }
            }
            //mouvement droit
            if (objGarde.intDirectionX == 1) {
                if (tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] != 6
                    && (tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] != 1
                        && tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab - 1 / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] != 1)) {

                    objGarde.intX += objGarde.intDirectionX * objGarde.intVitesse;
                }
            }
        }

    }
}

//mouvement Veritcal (Y)
function mouvementsGardesY() {
    for (var i = 0; i < tabGardes.length; i++) {
        var objGarde = tabGardes[i];
        objGarde.binDansEchelle = false;
        if (objGarde.intDirectionY != 0) {
            //check s'il est dans l'echelle
            if ((tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] == 2
                && tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 2)
                || (tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30)] == 2
                    && tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 2)
                    || (tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab/2)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab/2)])) {

                objGarde.binDansEchelle = true

                //mouvement en haut
                if (objGarde.intDirectionY == -1) {
                    if (tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + (objGarde.intLargeur / 2) / 30)] == 2
                        || tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab - 1 / 30)][Math.floor(objGarde.intX / 30 + (objGarde.intLargeur / 2) / 30)] == 2) {
                        objGarde.intY -= objGarde.intDirectionY * objGarde.intVitesse;
                    }

                } else {
                    //mouvement en bas
                    if ((tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab + 3 / 30)][Math.floor(objGarde.intX / 30 + (objGarde.intLargeur / 2) / 30)] != 2
                        && tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30 + (objGarde.intLargeur / 2) / 30)] == 2)
                        || tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab + 3 / 30)][Math.floor(objGarde.intX / 30 + (objGarde.intLargeur / 2) / 30)] == 2) {

                        objGarde.intY += objGarde.intDirectionY * objGarde.intVitesse;
                    }
                }
            }
            //mouvement en bas check s'il y a un trou
            if (objGarde.intDirectionY == 1) {
                if (tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] == 5
                    && tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 5
                    && (tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30)] == 0
                        && tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 0)) {
                    objGarde.binFall = true;
                }
            }
        }
    }
}

// Si le garde tombe
function tomberGardes() {
    for (var i = 0; i < tabGardes.length; i++) {
        var objGarde = tabGardes[i];
        // vérifie si le garde tombe
        if (((tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30)] == 0
            && tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 0)
            && (tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] == 0
                && tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 0))
            || (tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30)] == 5
                && tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 5)
            || (tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30)] == 8
                && tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 8)
            || (tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] == 8
                && tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 8
                && tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30)] != 4
                && tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] != 4)) {
            objGarde.binFall = true;
        }
        
        if (objGarde.binFall == true) {
            objGarde.intY += 1 * objGarde.intVitesse;
            // vérifie si le garde a fini de tomber
            if ((tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30)] != 0
                && tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] != 0)
                && (tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30)] != 3
                    && tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] != 3)
                && (tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30)] != 5
                    && tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] != 5)
                && (tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30)] != 8
                    && tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteurTab)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] != 8)) {
                objGarde.binFall = false;
                objSons.falling.pause();
                objSons.falling.currentTime = 0;
            }
            
            if (tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] == 5
                && tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 5) {
                var locY = Math.floor(objGarde.intY / 30);
                if (Math.floor(objGarde.intY) == locY * 30 + 2) {
                    objGarde.binFall = false;
                    objSons.falling.pause();
                    objSons.falling.currentTime = 0;
                }
            }
        }
    }
}




