/* Toutes les fonctions qui servent à écrire ou gérer le texte (ex: titre, chrono, nb de Vies, game over, etc.) */

// Pour inscrire le titre
function dessinerTitre() {
    objC2D.save();
    objC2D.fillStyle = "#46753e";
    objC2D.font = '30px Impact';
    objC2D.textAlign = 'center';
    objC2D.fillText("Lode Runner", objCanvas.width / 2, 26);
    objC2D.fillText("par Caroline Chagnon et Razvan Pruteanu", objCanvas.width / 2, objCanvas.height - 4);
    objC2D.restore();
}

// Pour incrire les données
function dessinerDonnees() {
    objC2D.save();
    objC2D.fillStyle = "#ffd900";
    objC2D.font = '35px Impact';
    objC2D.textAlign = 'left';
    objC2D.fillText("Score: " + intScore.toString().padStart(7, '0'), 60, objCanvas.height - 60);
    objC2D.fillText("Temps: " + intMinutes.toString().padStart(2, '0') + ':' + intSecondes.toString().padStart(2, '0'), 330, objCanvas.height - 60);
    objC2D.fillText("Niveau: " + intNiveau, 570, objCanvas.height - 60);
    objC2D.fillText("Vies: " + intNbVies, 740, objCanvas.height - 60);
    objC2D.restore();
}

// Pour debuter le chrono
function debutChrono() {
    objDateDebut = new Date();
    binCommence = true;
    intMillisecondesTot = 0;
}

// Pour mettre à jour le temps du chrono
function updateChrono() {
    var objDateMaintenant = new Date();
    var intMilEcoulees = objDateMaintenant - objDateDebut;
    objDateDebut = objDateMaintenant;

    intMillisecondesTot += intMilEcoulees;
    intMinutes = Math.floor(intMillisecondesTot / 1000 / 60);
    intSecondes = Math.floor(intMillisecondesTot / 1000) - intMinutes * 60;
}


// Pour afficher le texte game over et jouer le son
var fltRotation = 0;
function dessinerGameOver() {
    if (fltRotation < 6*Math.PI) {
        fltRotation += 1.5*Math.PI/360;
    }
    objC2D.save();
    objC2D.translate(objCanvas.width/2,objCanvas.height/2);
    objC2D.rotate(fltRotation);
    objC2D.fillStyle = "red";
    objC2D.lineWidth = 7;
    objC2D.font = '140px Impact';
    objC2D.textAlign = 'center';
    objC2D.fillText("GAME OVER", 0, 70);
    objC2D.strokeText("GAME OVER", 0, 70);
    objC2D.restore();
}