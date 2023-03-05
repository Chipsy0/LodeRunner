//si Lode runner meurt grace à une brique
function mortBrique() {
        objRunner.intY -= 1 * objRunner.intVitesse;
        if (Math.floor(objRunner.intY / 30) == 0) {
            intNbVies--;
            binMort = false;
            binCommence = false;
            if (intNbVies != 0){
                debutChrono();
                intScore -= intScoreNiveau;
                intScoreNiveau = 0
                initRunner();
                initTableau();
                intnbLingot = 0;
            }
        }
}
