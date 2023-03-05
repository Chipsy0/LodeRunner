/* Pour créer les sons */

// Construire les sons
function initSons() {
    objSons = new Object();

    var objSon = document.createElement('audio');
    objSon.setAttribute('src', 'coinpickup.mp3');
    objSon.load();
    objSons.coinpickup = objSon;

    objSon = document.createElement('audio');
    objSon.setAttribute('src', 'falling.mp3');
    objSon.load();
    objSons.falling = objSon;

    objSon = document.createElement('audio');
    objSon.setAttribute('src', 'digging.mp3');
    objSon.load();
    objSons.digging = objSon;

    objSon = document.createElement('audio');
    objSon.setAttribute('src', 'fillingup.mp3');
    objSon.load();
    objSons.filling = objSon;

    objSon = document.createElement('audio');
    objSon.setAttribute('src', 'dead.mp3');
    objSon.load();
    objSons.dead = objSon;

    objSon = document.createElement('audio');
    objSon.setAttribute('src', 'gameover.mp3');
    objSon.load();
    objSons.gameover = objSon;
}
