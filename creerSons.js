/* Pour créer les sons */

// Construire les sons
function initSons() {
    objSons = new Object();

    //Lorsque Lode Runner ramasse un lingot d’or
    var objSon = document.createElement('audio');
    objSon.setAttribute('src', 'coinpickup.mp3');
    objSon.load();
    objSons.coinpickup = objSon;

    //Lorsque Lode Runner fait une chute
    objSon = document.createElement('audio');
    objSon.setAttribute('src', 'falling.mp3');
    objSon.load();
    objSons.falling = objSon;

    //Lorsque Lode Runner creuse un trou dans la passerelle
    objSon = document.createElement('audio');
    objSon.setAttribute('src', 'digging.mp3');
    objSon.load();
    objSons.digging = objSon;

    //Lorsqu’un trou se remplit automatiquement (après 8 secondes)
    objSon = document.createElement('audio');
    objSon.setAttribute('src', 'fillingup.mp3');
    objSon.load();
    objSons.filling = objSon;

    //Lorsque Lode Runner perd une vie
    objSon = document.createElement('audio');
    objSon.setAttribute('src', 'dead.mp3');
    objSon.load();
    objSons.dead = objSon;

    //Lorsque Lode Runner perd toutes ses vies (Game over)
    objSon = document.createElement('audio');
    objSon.setAttribute('src', 'gameover.mp3');
    objSon.load();
    objSons.gameover = objSon;

    //Lorsque Lode Runner a terminé un niveau pour passer au niveau suivant
    objSon = document.createElement('audio');
    objSon.setAttribute('src', 'levelup.mp3');
    objSon.load();
    objSons.levelup = objSon;

    //Lorsqu’un garde tombe dans un trou
    objSon = document.createElement('audio');
    objSon.setAttribute('src', 'gardetomb.mp3');
    objSon.load();
    objSons.gardetomb = objSon;

    //Lorsqu’un garde meurt
    objSon = document.createElement('audio');
    objSon.setAttribute('src', 'gardedeath.mp3');
    objSon.load();
    objSons.gardedeath = objSon;
}
