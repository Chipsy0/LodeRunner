//si Lode runner mort grace à un brique
function briquedeath() {
    if (binMort == true) {
        objRunner.intY -= 1 * objRunner.intVitesse;
        if (Math.floor(objRunner.intY / 30) == 0) {
            intNbVies--;
            binMort = false;
            initRunner();
            initTableau();
            intnbLingot = 0;
            debutChrono();
            binCommence = false;
            intScore -= intScoreNiveau;
            intScoreNiveau = 0;

        }
    }
}
