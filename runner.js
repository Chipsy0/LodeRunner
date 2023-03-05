/* Toutes les fonctions en lien avec le runner */

// Pour construire le runner
function initRunner() {
    objRunner = new Object();
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

// Pour dessiner le runner (+animations)
function dessinerRunner() {
    objC2D.save();
    intPosX = objRunner.intX;
    intPosY = objRunner.intY;
    if (fltAnim > 3) {
        binInverseAnim = true;
    }
    if (fltAnim < -3) {
        binInverseAnim = false;
    }
    if (binInverseAnim == false) {
        fltAnim += 0.2;
    }
    else {
        fltAnim -= 0.2;
    }
    if (binFall == true) {
        objC2D.translate(intPosX, intPosY);
        objC2D.fillStyle = 'white';
        objC2D.fillRect(objRunner.intLargeur / 2 - 1.5, 6, 3, 2); // cou
        objC2D.fillRect(objRunner.intLargeur / 2 - 3, 0, 6, 6); // tête
        objC2D.fillRect(objRunner.intLargeur / 2 - 3, 8, 6, 9); // corps
        objC2D.fillStyle = '#FF1A1A';
        objC2D.fillRect(objRunner.intLargeur / 2 - 3, 0, 6, 3); // casquette
        objC2D.fillRect(objRunner.intLargeur / 2 - 5, 3 / 2, 6, 2); // casquette
        objC2D.fillRect(5, 17 + fltAnim / 2, 4, 4); // jambe gauche
        objC2D.fillRect(2, 21 + fltAnim / 2, 4, 4); // jambe gauche
        objC2D.fillRect(objRunner.intLargeur - 9, 17 - fltAnim / 2, 4, 4); // jambe droite
        objC2D.fillRect(objRunner.intLargeur - 6, 21 - fltAnim / 2, 4, 4); // jambe droite
        objC2D.fillRect(objRunner.intLargeur / 2 - 6, 8, 4, 4); // bras gauche
        objC2D.fillRect(objRunner.intLargeur / 2 - 9 + fltAnim / 2, 7 - fltAnim / 2, 4, 4); // bras gauche
        objC2D.fillRect(objRunner.intLargeur / 2 + 2, 8, 4, 4); // bras droit
        objC2D.fillRect(objRunner.intLargeur / 2 + 5 + fltAnim / 2, 7 + fltAnim / 2, 4, 4); // bras droit
        objC2D.restore();
    }
    else if (binSurCorde == true) {
        if (binMouvementRight == true) {
            objC2D.translate(intPosX, intPosY);
            objC2D.fillStyle = '#C91515';

            objC2D.fillRect(objRunner.intLargeur / 2 - 1, 6, 4, 4); // bras droit
            objC2D.fillRect(objRunner.intLargeur - 9 - fltAnim, 3, 4, 4); // bras droit

            objC2D.fillRect(3, 20 - 1 / 2 + fltAnim / 6, 4, 4); // jambe gauche
            objC2D.fillRect(2 - fltAnim / 3, 23 + fltAnim / 6, 4, 4); // jambe gauche
            objC2D.fillStyle = 'white';
            objC2D.fillRect(objRunner.intLargeur / 2 - 4.5, 6, 3, 4); // cou
            objC2D.fillRect(objRunner.intLargeur / 2 - 6, 8 + fltAnim / 6, 6, 12); // corps
            objC2D.fillRect(objRunner.intLargeur / 2 - 6, 1 / 2 + fltAnim / 6, 6, 6); // tête
            objC2D.fillStyle = '#FF1A1A';
            objC2D.fillRect(objRunner.intLargeur / 2 - 6, 1 / 2 + fltAnim / 6, 6, 3); // casquette
            objC2D.fillRect(objRunner.intLargeur / 2 - 2, 3 / 2 + fltAnim / 6, 6, 2); // casquette
            objC2D.fillRect(objRunner.intLargeur / 2 - 6, 6, 4, 4); // bras gauche
            objC2D.fillRect(1 + fltAnim, 3, 4, 4); // bras gauche

            objC2D.fillRect(7, 20 - 1 / 2 + fltAnim / 6, 4, 4); // jambe droite
            objC2D.fillRect(6 + fltAnim / 3, 23 + fltAnim / 6, 4, 4); // jambe droite
            objC2D.fillStyle = 'black';
            objC2D.restore();
        }
        else if (binMouvementLeft == true) {
            objC2D.translate(intPosX, intPosY);
            objC2D.fillStyle = '#C91515';

            objC2D.fillRect(objRunner.intLargeur / 2 - 4, 6, 4, 4); // bras gauche
            objC2D.fillRect(5 + fltAnim, 3, 4, 4); // bras gauche
            objC2D.fillRect(objRunner.intLargeur - 7, 20 - 1 / 2 + fltAnim / 6, 4, 4); // jambe droite
            objC2D.fillRect(objRunner.intLargeur - 6 + fltAnim / 3, 23 + fltAnim / 6, 4, 4); // jambe droite

            objC2D.fillStyle = 'white';
            objC2D.fillRect(objRunner.intLargeur / 2 + 0.5, 6, 3, 2); // cou
            objC2D.fillRect(objRunner.intLargeur / 2 - 1, 8 + fltAnim / 6, 6, 12); // corps
            objC2D.fillRect(objRunner.intLargeur / 2 - 1, 1 / 2 + fltAnim / 6, 6, 6); // tête
            objC2D.fillStyle = '#FF1A1A';
            objC2D.fillRect(objRunner.intLargeur / 2 - 1, 1 / 2 + fltAnim / 6, 6, 3); // casquette
            objC2D.fillRect(objRunner.intLargeur / 2 - 5, 3 / 2 + fltAnim / 6, 6, 2); // casquette
            objC2D.fillRect(objRunner.intLargeur / 2 + 2, 6, 4, 4); // bras droit
            objC2D.fillRect(objRunner.intLargeur - 7 - fltAnim, 3, 4, 4); // bras droit

            objC2D.fillRect(7, 20 - 1 / 2 + fltAnim / 6, 4, 4); // jambe gauche
            objC2D.fillRect(8 - fltAnim / 3, 23 + fltAnim / 6, 4, 4); // jambe gauche
            objC2D.fillStyle = 'black';
            objC2D.restore();
        }
        else {
            objC2D.translate(intPosX, intPosY);
            objC2D.fillStyle = 'white';
            objC2D.fillRect(objRunner.intLargeur / 2 - 1.5, 5, 3, 4); // cou
            objC2D.fillRect(objRunner.intLargeur / 2 - 3, 1, 6, 5); // tête
            objC2D.fillRect(objRunner.intLargeur / 2 - 3, 8, 6, 12); // corps
            objC2D.fillStyle = '#FF1A1A';
            objC2D.fillRect(objRunner.intLargeur / 2 - 3, 0, 6, 3); // casquette
            objC2D.fillRect(objRunner.intLargeur / 2 - 5, 3 / 2, 6, 2); // casquette
            objC2D.fillRect(3, 19 + fltAnim / 4, 4, 4); // jambe gauche
            objC2D.fillRect(0, 23 + fltAnim / 4, 4, 4); // jambe gauche
            objC2D.fillRect(objRunner.intLargeur - 7, 19 - fltAnim / 8, 4, 4); // jambe droite
            objC2D.fillRect(objRunner.intLargeur - 4, 23 - fltAnim / 8, 4, 4); // jambe droite
            objC2D.fillRect(objRunner.intLargeur / 2 - 6, 8, 4, 4); // bras gauche
            objC2D.fillRect(0, 4, 4, 4); // bras gauche
            objC2D.fillRect(objRunner.intLargeur / 2 + 2, 8, 4, 4); // bras droit
            objC2D.fillRect(objRunner.intLargeur - 4, 4, 4, 4); // bras droit
            objC2D.restore();
        }
    }
    else if (binDansEchelle == true) {
        objC2D.translate(intPosX, intPosY);
        objC2D.fillStyle = 'white';
        objC2D.fillRect(objRunner.intLargeur / 2 - 1.5, 6, 3, 2); // cou
        objC2D.fillRect(objRunner.intLargeur / 2 - 3, 0, 6, 6); // tête
        objC2D.fillRect(objRunner.intLargeur / 2 - 3, 8, 6, 13); // corps
        objC2D.fillStyle = '#FF1A1A';
        objC2D.fillRect(objRunner.intLargeur / 2 - 3, 0, 6, 3); // casquette
        objC2D.fillRect(4 - fltAnim / 3, 17 + fltAnim / 2, 4, 4); // jambe gauche
        objC2D.fillRect(1 - fltAnim / 3, 21 + fltAnim / 2, 4, 4); // jambe gauche
        objC2D.fillRect(objRunner.intLargeur - 8 - fltAnim / 3, 17 - fltAnim / 2, 4, 4); // jambe droite
        objC2D.fillRect(objRunner.intLargeur - 5 - fltAnim / 3, 21 - fltAnim / 2, 4, 4); // jambe droite
        objC2D.fillRect(objRunner.intLargeur / 2 - 6, 8, 4, 4); // bras gauche
        objC2D.fillRect(0, 7 - fltAnim, 4, 4); // bras gauche
        objC2D.fillRect(objRunner.intLargeur / 2 + 2, 8, 4, 4); // bras droit
        objC2D.fillRect(objRunner.intLargeur - 4, 7 + fltAnim, 4, 4); // bras droit
        objC2D.restore();
    }
    else if (binMouvementLeft == true) {
        objC2D.translate(intPosX, intPosY);
        objC2D.fillStyle = '#C91515';

        objC2D.fillRect(objRunner.intLargeur / 2 - 1 - fltAnim, 8 - 3 / 4 - fltAnim / 4, 4, 4); // bras gauche
        objC2D.fillRect(objRunner.intLargeur / 2 - 1 - 2.5 * fltAnim, 12 - fltAnim / 2, 4, 4); // bras gauche

        objC2D.fillRect(objRunner.intLargeur / 2 + fltAnim, 18 - fltAnim / 3, 4, 6); // jambe gauche
        objC2D.fillRect(objRunner.intLargeur / 2 + 2 * fltAnim, 24 - 2 - 2 * fltAnim / 3, 4, 4); // jambe gauche
        objC2D.fillStyle = 'white';
        objC2D.fillRect(objRunner.intLargeur / 2 + 0.5, 6, 3, 2); // cou
        objC2D.fillRect(objRunner.intLargeur / 2 - 1, 8 + fltAnim / 6, 6, 12); // corps
        objC2D.fillRect(objRunner.intLargeur / 2 - 1, 1 / 2 + fltAnim / 6, 6, 6); // tête
        objC2D.fillStyle = '#FF1A1A';
        objC2D.fillRect(objRunner.intLargeur / 2 - 1, 1 / 2 + fltAnim / 6, 6, 3); // casquette
        objC2D.fillRect(objRunner.intLargeur / 2 - 5, 3 / 2 + fltAnim / 6, 6, 2); // casquette
        objC2D.fillRect(objRunner.intLargeur / 2 - 1 + fltAnim, 8 + 3 / 4 + fltAnim / 4, 4, 4); // bras droit
        objC2D.fillRect(objRunner.intLargeur / 2 - 1 + 2.5 * fltAnim, 12 + fltAnim / 2, 4, 4); // bras droit

        objC2D.fillRect(objRunner.intLargeur / 2 - fltAnim, 18 - fltAnim / 3, 4, 6); // jambe droite
        objC2D.fillRect(objRunner.intLargeur / 2 - 2 * fltAnim, 24 - 2 - 2 * fltAnim / 3, 4, 4); // jambe droite
        objC2D.fillStyle = 'black';
        objC2D.restore();
    }
    else if (binMouvementRight == true) {
        objC2D.translate(intPosX, intPosY);
        objC2D.fillStyle = '#C91515';

        objC2D.fillRect(objRunner.intLargeur / 2 - 5 + fltAnim, 8 + 3 / 4 + fltAnim / 4, 4, 4); // bras droit
        objC2D.fillRect(objRunner.intLargeur / 2 - 5 + 2.5 * fltAnim, 12 + fltAnim / 2, 4, 4); // bras droit

        objC2D.fillRect(objRunner.intLargeur / 2 - 4 - fltAnim, 18 - fltAnim / 3, 4, 6); // jambe droite
        objC2D.fillRect(objRunner.intLargeur / 2 - 4 - 2 * fltAnim, 24 - 2 - 2 * fltAnim / 3, 4, 4); // jambe droite
        objC2D.fillStyle = 'white';
        objC2D.fillRect(objRunner.intLargeur / 2 - 4.5, 6, 3, 4); // cou
        objC2D.fillRect(objRunner.intLargeur / 2 - 6, 8 + fltAnim / 6, 6, 12); // corps
        objC2D.fillRect(objRunner.intLargeur / 2 - 6, 1 / 2 + fltAnim / 6, 6, 6); // tête
        objC2D.fillStyle = '#FF1A1A';
        objC2D.fillRect(objRunner.intLargeur / 2 - 6, 1 / 2 + fltAnim / 6, 6, 3); // casquette
        objC2D.fillRect(objRunner.intLargeur / 2 - 2, 3 / 2 + fltAnim / 6, 6, 2); // casquette
        objC2D.fillRect(objRunner.intLargeur / 2 - 5 - fltAnim, 8 + 3 / 4 - fltAnim / 4, 4, 4); // bras gauche
        objC2D.fillRect(objRunner.intLargeur / 2 - 5 - 2.5 * fltAnim, 12 - fltAnim / 2, 4, 4); // bras gauche
        objC2D.fillRect(objRunner.intLargeur / 2 - 6 + fltAnim, 18 - fltAnim / 3, 4, 6); // jambe gauche
        objC2D.fillRect(objRunner.intLargeur / 2 - 6 + 2 * fltAnim, 24 - 2 - 2 * fltAnim / 3, 4, 4); // jambe gauche


        objC2D.fillStyle = 'black';
        objC2D.restore();
    }
    else {
        objC2D.translate(intPosX, intPosY);
        objC2D.fillStyle = 'white';
        objC2D.fillRect(objRunner.intLargeur / 2 - 1.5, 6 + fltAnim / 6, 3, 4); // cou
        objC2D.fillRect(objRunner.intLargeur / 2 - 3, 8 + 1 / 2 + fltAnim / 6, 6, 13); // corps
        objC2D.fillRect(objRunner.intLargeur / 2 - 3, 0 + 1 / 2 + fltAnim / 6, 6, 6); // tête
        objC2D.fillStyle = '#FF1A1A';
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

// Pour déplacer le Runner
function deplacerRunner() {

    switch (event.keyCode) {
        case 39: // Flèche-à-droite      
            binEnMouvementX = true;
            binMouvementRight = true;
            objRunner.intDirectionX = 1;
            if (binCommence == false)
                debutChrono();
            break;

        case 37: // Flèche-à-gauche
            binEnMouvementX = true;
            binMouvementLeft = true;
            objRunner.intDirectionX = -1;
            if (binCommence == false)
                debutChrono();
            break;

        case 38: // Flèche-en-haut                    
            binMouvementDOWN = false;
            binMouvementUP = true;
            objRunner.intDirectionY = 1;
            if (binCommence == false)
                debutChrono();
            break;

        case 40: // Flèche-en-bas
            binMouvementDOWN = true;
            binMouvementUP = false;
            objRunner.intDirectionY = 1;
            if (binCommence == false)
                debutChrono();
            break;
    }
}

