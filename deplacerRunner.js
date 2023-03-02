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