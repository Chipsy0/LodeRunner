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
        objGarde.binSurCorde = false;
        objGarde.binFall = false;
        objGarde.binBloque = false;
        objGarde.binLingot = false;
        objGarde.intLargeurTab = (objGarde.intLargeur) / 30;
        objGarde.intHauteurTab = (objGarde.intHauteur) / 30;
        objGarde.intVitesse = objCanvas.width / 1200;
        if (binMemePos == false) {
            tabGardes.push(objGarde);
        }
    }
}

// Pour dessiner les gardes (+animations)
function dessinerGardes() {
    for (var i = 0; i < tabGardes.length; i++) {

        var objGardeCourant = tabGardes[i];

        objC2D.save();
        intPosX = objGardeCourant.intX;
        intPosY = objGardeCourant.intY;

        if (objGardeCourant.binFall == true) {
            objC2D.translate(intPosX, intPosY);
            objC2D.fillStyle = 'white';
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 1.5, 6, 3, 2); // cou
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 3, 0, 6, 6); // tête
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 3, 8, 6, 9); // corps
            objC2D.fillStyle = '#88B1FF';
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 3, 0, 6, 3); // casquette
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 5, 3 / 2, 6, 2); // casquette
            objC2D.fillRect(5, 17 + fltAnim / 2, 4, 4); // jambe gauche
            objC2D.fillRect(2, 21 + fltAnim / 2, 4, 4); // jambe gauche
            objC2D.fillRect(objGardeCourant.intLargeur - 9, 17 - fltAnim / 2, 4, 4); // jambe droite
            objC2D.fillRect(objGardeCourant.intLargeur - 6, 21 - fltAnim / 2, 4, 4); // jambe droite
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 6, 8, 4, 4); // bras gauche
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 9 + fltAnim / 2, 7 - fltAnim / 2, 4, 4); // bras gauche
            objC2D.fillRect(objGardeCourant.intLargeur / 2 + 2, 8, 4, 4); // bras droit
            objC2D.fillRect(objGardeCourant.intLargeur / 2 + 5 + fltAnim / 2, 7 + fltAnim / 2, 4, 4); // bras droit
            objC2D.restore();
        }
        else if (objGardeCourant.binSurCorde == true) {
            if (objGardeCourant.intDirectionX == 1) {
                objC2D.translate(intPosX, intPosY);
                objC2D.fillStyle = '#6F93D9';

                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 1, 6, 4, 4); // bras droit
                objC2D.fillRect(objGardeCourant.intLargeur - 9 - fltAnim, 3, 4, 4); // bras droit

                objC2D.fillRect(3, 20 - 1 / 2 + fltAnim / 6, 4, 4); // jambe gauche
                objC2D.fillRect(2 - fltAnim / 3, 23 + fltAnim / 6, 4, 4); // jambe gauche
                objC2D.fillStyle = 'white';
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 4.5, 6, 3, 4); // cou
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 6, 8 + fltAnim / 6, 6, 12); // corps
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 6, 1 / 2 + fltAnim / 6, 6, 6); // tête
                objC2D.fillStyle = '#88B1FF';
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 6, 1 / 2 + fltAnim / 6, 6, 3); // casquette
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 2, 3 / 2 + fltAnim / 6, 6, 2); // casquette
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 6, 6, 4, 4); // bras gauche
                objC2D.fillRect(1 + fltAnim, 3, 4, 4); // bras gauche

                objC2D.fillRect(7, 20 - 1 / 2 + fltAnim / 6, 4, 4); // jambe droite
                objC2D.fillRect(6 + fltAnim / 3, 23 + fltAnim / 6, 4, 4); // jambe droite
                objC2D.fillStyle = 'black';
                objC2D.restore();
            }
            else if (objGardeCourant.intDirectionX == -1) {
                objC2D.translate(intPosX, intPosY);
                objC2D.fillStyle = '#6F93D9';

                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 4, 6, 4, 4); // bras gauche
                objC2D.fillRect(5 + fltAnim, 3, 4, 4); // bras gauche
                objC2D.fillRect(objGardeCourant.intLargeur - 7, 20 - 1 / 2 + fltAnim / 6, 4, 4); // jambe droite
                objC2D.fillRect(objGardeCourant.intLargeur - 6 + fltAnim / 3, 23 + fltAnim / 6, 4, 4); // jambe droite

                objC2D.fillStyle = 'white';
                objC2D.fillRect(objGardeCourant.intLargeur / 2 + 0.5, 6, 3, 2); // cou
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 1, 8 + fltAnim / 6, 6, 12); // corps
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 1, 1 / 2 + fltAnim / 6, 6, 6); // tête
                objC2D.fillStyle = '#88B1FF';
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 1, 1 / 2 + fltAnim / 6, 6, 3); // casquette
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 5, 3 / 2 + fltAnim / 6, 6, 2); // casquette
                objC2D.fillRect(objGardeCourant.intLargeur / 2 + 2, 6, 4, 4); // bras droit
                objC2D.fillRect(objGardeCourant.intLargeur - 7 - fltAnim, 3, 4, 4); // bras droit

                objC2D.fillRect(7, 20 - 1 / 2 + fltAnim / 6, 4, 4); // jambe gauche
                objC2D.fillRect(8 - fltAnim / 3, 23 + fltAnim / 6, 4, 4); // jambe gauche
                objC2D.fillStyle = 'black';
                objC2D.restore();
            }
            else if (objGardeCourant.intDirectionX == 1) {
                objC2D.translate(intPosX, intPosY);
                objC2D.fillStyle = 'white';
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 1.5, 5, 3, 4); // cou
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 3, 1, 6, 5); // tête
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 3, 8, 6, 12); // corps
                objC2D.fillStyle = '#88B1FF';
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 3, 0, 6, 3); // casquette
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 5, 3 / 2, 6, 2); // casquette
                objC2D.fillRect(3, 19 + fltAnim / 4, 4, 4); // jambe gauche
                objC2D.fillRect(0, 23 + fltAnim / 4, 4, 4); // jambe gauche
                objC2D.fillRect(objGardeCourant.intLargeur - 7, 19 - fltAnim / 8, 4, 4); // jambe droite
                objC2D.fillRect(objGardeCourant.intLargeur - 4, 23 - fltAnim / 8, 4, 4); // jambe droite
                objC2D.fillRect(objGardeCourant.intLargeur / 2 - 6, 8, 4, 4); // bras gauche
                objC2D.fillRect(0, 4, 4, 4); // bras gauche
                objC2D.fillRect(objGardeCourant.intLargeur / 2 + 2, 8, 4, 4); // bras droit
                objC2D.fillRect(objGardeCourant.intLargeur - 4, 4, 4, 4); // bras droit
                objC2D.restore();
            }
        }
        else if (objGardeCourant.binDansEchelle == true) {
            objC2D.translate(intPosX, intPosY);
            objC2D.fillStyle = 'white';
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 1.5, 6, 3, 2); // cou
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 3, 0, 6, 6); // tête
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 3, 8, 6, 13); // corps
            objC2D.fillStyle = '#88B1FF';
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 3, 0, 6, 3); // casquette
            objC2D.fillRect(4 - fltAnim / 3, 17 + fltAnim / 2, 4, 4); // jambe gauche
            objC2D.fillRect(1 - fltAnim / 3, 21 + fltAnim / 2, 4, 4); // jambe gauche
            objC2D.fillRect(objGardeCourant.intLargeur - 8 - fltAnim / 3, 17 - fltAnim / 2, 4, 4); // jambe droite
            objC2D.fillRect(objGardeCourant.intLargeur - 5 - fltAnim / 3, 21 - fltAnim / 2, 4, 4); // jambe droite
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 6, 8, 4, 4); // bras gauche
            objC2D.fillRect(0, 7 - fltAnim, 4, 4); // bras gauche
            objC2D.fillRect(objGardeCourant.intLargeur / 2 + 2, 8, 4, 4); // bras droit
            objC2D.fillRect(objGardeCourant.intLargeur - 4, 7 + fltAnim, 4, 4); // bras droit
            objC2D.restore();
        }
        else if (objGardeCourant.intDirectionX == -1 && binMort == false && binGameOver == false) {
            objC2D.translate(intPosX, intPosY);
            objC2D.fillStyle = '#6F93D9';

            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 1 - fltAnim, 8 - 3 / 4 - fltAnim / 4, 4, 4); // bras gauche
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 1 - 2.5 * fltAnim, 12 - fltAnim / 2, 4, 4); // bras gauche

            objC2D.fillRect(objGardeCourant.intLargeur / 2 + fltAnim, 18 - fltAnim / 3, 4, 6); // jambe gauche
            objC2D.fillRect(objGardeCourant.intLargeur / 2 + 2 * fltAnim, 24 - 2 - 2 * fltAnim / 3, 4, 4); // jambe gauche
            objC2D.fillStyle = 'white';
            objC2D.fillRect(objGardeCourant.intLargeur / 2 + 0.5, 6, 3, 2); // cou
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 1, 8 + fltAnim / 6, 6, 12); // corps
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 1, 1 / 2 + fltAnim / 6, 6, 6); // tête
            objC2D.fillStyle = '#88B1FF';
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 1, 1 / 2 + fltAnim / 6, 6, 3); // casquette
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 5, 3 / 2 + fltAnim / 6, 6, 2); // casquette
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 1 + fltAnim, 8 + 3 / 4 + fltAnim / 4, 4, 4); // bras droit
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 1 + 2.5 * fltAnim, 12 + fltAnim / 2, 4, 4); // bras droit

            objC2D.fillRect(objGardeCourant.intLargeur / 2 - fltAnim, 18 - fltAnim / 3, 4, 6); // jambe droite
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 2 * fltAnim, 24 - 2 - 2 * fltAnim / 3, 4, 4); // jambe droite
            objC2D.fillStyle = 'black';
            objC2D.restore();
        }
        else if (objGardeCourant.intDirectionX == 1 && binMort == false && binGameOver == false) {
            objC2D.translate(intPosX, intPosY);
            objC2D.fillStyle = '#6F93D9';

            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 5 + fltAnim, 8 + 3 / 4 + fltAnim / 4, 4, 4); // bras droit
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 5 + 2.5 * fltAnim, 12 + fltAnim / 2, 4, 4); // bras droit

            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 4 - fltAnim, 18 - fltAnim / 3, 4, 6); // jambe droite
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 4 - 2 * fltAnim, 24 - 2 - 2 * fltAnim / 3, 4, 4); // jambe droite
            objC2D.fillStyle = 'white';
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 4.5, 6, 3, 4); // cou
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 6, 8 + fltAnim / 6, 6, 12); // corps
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 6, 1 / 2 + fltAnim / 6, 6, 6); // tête
            objC2D.fillStyle = '#88B1FF';
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 6, 1 / 2 + fltAnim / 6, 6, 3); // casquette
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 2, 3 / 2 + fltAnim / 6, 6, 2); // casquette
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 5 - fltAnim, 8 + 3 / 4 - fltAnim / 4, 4, 4); // bras gauche
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 5 - 2.5 * fltAnim, 12 - fltAnim / 2, 4, 4); // bras gauche
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 6 + fltAnim, 18 - fltAnim / 3, 4, 6); // jambe gauche
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 6 + 2 * fltAnim, 24 - 2 - 2 * fltAnim / 3, 4, 4); // jambe gauche

            objC2D.fillStyle = 'black';
            objC2D.restore();
        }
        else {
            objC2D.translate(intPosX, intPosY);
            objC2D.fillStyle = 'white';
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 1.5, 6 + fltAnim / 6, 3, 4); // cou
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 3, 8 + 1 / 2 + fltAnim / 6, 6, 13); // corps
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 3, 0 + 1 / 2 + fltAnim / 6, 6, 6); // tête
            objC2D.fillStyle = '#88B1FF';
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 3, 0 + 1 / 2 + fltAnim / 6, 6, 3); // casquette
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 5.5, 2 + 1 / 2 + fltAnim / 6, 6, 2); // casquette
            objC2D.fillRect(3, 20 - 1 / 2 + fltAnim / 6, 4, 4); // jambe gauche
            objC2D.fillRect(0, 23, 4, 4); // jambe gauche
            objC2D.fillRect(objGardeCourant.intLargeur - 7, 20 - 1 / 2 + fltAnim / 6, 4, 4); // jambe droite
            objC2D.fillRect(objGardeCourant.intLargeur - 4, 23, 4, 4); // jambe droite
            objC2D.fillRect(objGardeCourant.intLargeur / 2 - 6, 8 - 1 / 2 + fltAnim / 6, 4, 4); // bras gauche
            objC2D.fillRect(0, 11 + fltAnim / 4, 4, 4); // bras gauche
            objC2D.fillRect(objGardeCourant.intLargeur / 2 + 2, 8 - 1 / 2 + fltAnim / 6, 4, 4); // bras droit
            objC2D.fillRect(objGardeCourant.intLargeur - 4, 11 + fltAnim / 4, 4, 4); // bras droit
            objC2D.restore();
        }
    }
}

// Pour déplacer les gardes
var intDelais = 0;
var intAnciennePosX = 0;
var intAnciennePosY = 0;
var intCompte = 0
function deplacerGardes() {
    for (var i = 0; i < tabGardes.length; i++) {
        intDelais++;
        if (intDelais % 31 == 0) {

            var objGardeCourant = tabGardes[i];
            var fltXDiff = objRunner.intX - objGardeCourant.intX;
            var fltYDiff = objRunner.intY - objGardeCourant.intY;
            var intDeplacementAleat = Math.floor(Math.random() * 7) + 1;

            // Si le garde est dans l'échelle
            if (objGardeCourant.binDansEchelle == true) {
                if (fltYDiff > 0) {
                    if (fltXDiff > 0) {
                        objGardeCourant.intDirectionX = 0;
                        objGardeCourant.intDirectionY = 1;
                        if (intDeplacementAleat != 3 && intDeplacementAleat != 4) {
                            objGardeCourant.intDirectionX = 1;
                        }
                    }
                    else if (fltXDiff < 0) {
                        objGardeCourant.intDirectionX = 0;
                        objGardeCourant.intDirectionY = 1;
                        if (intDeplacementAleat != 3 && intDeplacementAleat != 4) {
                            objGardeCourant.intDirectionX = -1;
                        }
                    }
                }
                else if (fltYDiff < 0) {
                    if (fltXDiff > 0) {
                        objGardeCourant.intDirectionX = 0;
                        objGardeCourant.intDirectionY = -1;
                        if (intDeplacementAleat != 3 && intDeplacementAleat != 4) {
                            objGardeCourant.intDirectionX = 1;
                        }
                    }
                    else if (fltXDiff < 0) {
                        objGardeCourant.intDirectionX = 0;
                        objGardeCourant.intDirectionY = -1;
                        if (intDeplacementAleat != 3 && intDeplacementAleat != 4) {
                            objGardeCourant.intDirectionX = -1;
                        }
                    }
                }
                else {
                    if (fltXDiff > 0) {
                        objGardeCourant.intDirectionX = 1;
                        objGardeCourant.intDirectionY = 0;
                    }
                    else if (fltXDiff < 0) {
                        objGardeCourant.intDirectionX = -1;
                        objGardeCourant.intDirectionY = 0;
                    }
                }
            }

            // Si le garde est sur une corde
            else if (objGardeCourant.binSurCorde == true) {
                if (fltYDiff > 0) {
                    objGardeCourant.intDirectionY = 1;
                    objGardeCourant.intDirectionX = 0;
                }
                else {
                    if (fltXDiff > 0) {
                        objGardeCourant.intDirectionX = 1;
                        objGardeCourant.intDirectionY = 0;
                    }
                    else if (fltXDiff < 0) {
                        objGardeCourant.intDirectionX = -1;
                        objGardeCourant.intDirectionY = 0;
                    }
                }
            }

            // Si le garde marche
            else {
                if (fltXDiff > 0) {
                    objGardeCourant.intDirectionX = 1;
                    objGardeCourant.intDirectionY = 0;
                }
                else if (fltXDiff < 0) {
                    objGardeCourant.intDirectionX = -1;
                    objGardeCourant.intDirectionY = 0;
                }
                else {
                    objGardeCourant.intDirectionX = 0;
                    objGardeCourant.intDirectionY = 0
                }
            }

            // Gestion des gardes bloqués
            if (Math.round(objGardeCourant.intX) == Math.round(intAnciennePosX) && Math.round(objGardeCourant.intY) == Math.round(intAnciennePosY)) {
                objGardeCourant.binBloque = true;
            }
            if (objGardeCourant.binBloque == true) {
                intCompte++;
                if (intDeplacementAleat != 5) {
                    objGardeCourant.intDirectionX = objGardeCourant.intDirectionX * -1;
                    objGardeCourant.intDirectionY = objGardeCourant.intDirectionY * -1;
                }
            }
            else {
                // Gestion mouvements aléatoires
                if (intDeplacementAleat == 1) {
                    objGardeCourant.intDirectionX = objGardeCourant.intDirectionX * -1;
                }
            }
            if (intCompte == 5) {
                intCompte = 0;
                objGardeCourant.binBloque = false;
            }
            intAnciennePosX = objGardeCourant.intX;
            intAnciennePosY = objGardeCourant.intY;
        }
    }
}

// vérifie si le garde peut collecter un lingot et pour collecter un lingot
function collectLingotGarde() {
    for (var i = 0; i < tabGardes.length; i++) {
        var objGarde = tabGardes[i];
        if (objGarde.binLingot == false) {
            if (tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] == 3) {
                tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] = 0;
                objGarde.binLingot = true;
            }
            if (tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 3) {
                tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] = 0;
                objGarde.binLingot = true;

            }
        }
    }
}

// echapper le lingot
function dropLingot() {
    for (var i = 0; i < tabGardes.length; i++) {
        var objGarde = tabGardes[i];
        if (tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] == 8) {
            initGardeTrou(Math.floor(objGarde.intY / 30), Math.floor(objGarde.intX / 30));
            objGarde.intDirectionX = 0;
            tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] = 9;
            intScoreNiveau += 75;
            intScore += 75;
            if (objGarde.binLingot == true) {
                objGarde.binLingot = false;
                tabTableau[Math.floor(objGarde.intY / 30 - objGarde.intHauteur / 30)][Math.floor(objGarde.intX / 30)] = 3;
                initLingots((Math.floor(objGarde.intY / 30 - objGarde.intHauteur / 30)), (Math.floor(objGarde.intX / 30)));
            }
        }

        if (objGarde.binLingot == true) {
            if (objGarde.intDirectionX == 1) {
                if (tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteur / 30)][Math.floor(objGarde.intX / 30 - objGarde.intLargeurTab)] == 1
                    && tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 - objGarde.intLargeurTab)] == 0) {
                    if (Math.floor(Math.random() * 2000) == 1) {
                        objGarde.binLingot = false;
                        tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 - objGarde.intLargeurTab)] = 3;
                        initLingots((Math.floor(objGarde.intY / 30)), (Math.floor(objGarde.intX / 30 - objGarde.intLargeurTab)));

                    }
                }
            } else {
                if (tabTableau[Math.floor(objGarde.intY / 30 + objGarde.intHauteur / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 1
                    && tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 0) {
                    if (Math.floor(Math.random() * 2000) == 1) {
                        objGarde.binLingot = false;
                        tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] = 3;
                        initLingots((Math.floor(objGarde.intY / 30)), (Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)));

                    }
                }
            }

        }
    }
}

//Garde mort grace a brique
function mortGarde() {
    for (var i = 0; i < tabGardes.length; i++) {
        var objGarde = tabGardes[i];
        if ((tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30)] == 1
            && tabTableau[Math.floor(objGarde.intY / 30)][Math.floor(objGarde.intX / 30 + objGarde.intLargeurTab)] == 1)) {
            intScoreNiveau += 75;
            intScore += 75;
            objGarde.intY = (3 * 30) - objGarde.intHauteur;
            tabOptionsDePosition = [1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14, 15];
            var intIndexAleatoireTab = objGarde.intX = Math.floor(Math.random() * tabOptionsDePosition.length);
            objGarde.intX = tabOptionsDePosition[intIndexAleatoireTab] * 30 + 6;
            objSons.gardedeath.play();
        }
    }


}

// initialise le trou rempli par un garde
function initGardeTrou(intY, intX) {
    var objTrou = tabObjets[intY][intX];
    objGardeTrou = new Object();
    objGardeTrou.strCouleur = 'black';
    objGardeTrou.intX = intX;
    objGardeTrou.intY = intY;
    objGardeTrou.intLargeur = 30;
    objGardeTrou.intHauteur = 30;
    objGardeTrou.objTemps = objTrou.objTemps;
    objGardeTrou.objTempsTrou = new Date();
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
    var objTempsDebutTrou = objVerifTrou.objTempsTrou;
    var objTempsMaintenant = new Date();
    var intNbSec = (objTempsMaintenant - objTempsDebut) / 1000;
    var intNbSecTrou = (objTempsMaintenant - objTempsDebutTrou) / 1000;
    
    if (intNbSec >= 8) {     
        tabTableau[intY][intX] = 1;
        initPasserelles(intY, intX);
        objSons.filling.play();
    }
    else if (intNbSecTrou >= 4){
        objGarde.intY = intY*30 - 30;
        objGarde.intX = intX*30;
        tabTableau[intY][intX] = 1;
        initPasserelles(intY, intX);
        objSons.filling.play();
    }
    else {
        dessinerGardeTrou(intY, intX);
    }
}