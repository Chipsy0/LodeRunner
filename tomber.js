//tomber
function tomber() {
    if (binFall == true) {
        objSons.falling.play();
        objRunner.intY += 1 * objRunner.intVitesse;

        if ((tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30)] != 0
            && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] != 0)
            && (tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30)] != 3
                && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] != 3)
            && (tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30)] != 5
                && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] != 5)
            && (tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30)] != 8
                && tabTableau[Math.floor(objRunner.intY / 30 + objRunner.intHauteurTab)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] != 8)) {
            binFall = false;
            objSons.falling.pause();
            objSons.currentTime = 0;
        }

        if (tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30)] == 5
            && tabTableau[Math.floor(objRunner.intY / 30)][Math.floor(objRunner.intX / 30 + objRunner.intLargeurTab)] == 5) {
            var locY = Math.floor(objRunner.intY / 30);
            if (Math.floor(objRunner.intY) == locY * 30 + 2) {
                binFall = false;
                objSons.falling.pause();
                objSons.currentTime = 0;
            }
        }
    }
}
