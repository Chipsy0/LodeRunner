/* Toutes les fonctions en lien avec la gestion du tableau */

function initTableau() {
    /*0 rien, 1 passerelles, 2 échelles, 3 lingots, 
    4 sol, 5 cordes,  6 murs, 7 interface (noir), 8 trou, 9 garde tombe*/

    tabTableau = new Array();
    tabTableau.push([6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]);
    tabTableau.push([6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6]);
    tabTableau.push([6, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6]);
    tabTableau.push([6, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6]);
    tabTableau.push([6, 0, 0, 0, 0, 0, 0, 0, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 6]);
    tabTableau.push([6, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 6]);
    tabTableau.push([6, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 6]);
    tabTableau.push([6, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 6]);
    tabTableau.push([6, 1, 1, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 6]);
    tabTableau.push([6, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 6]);
    tabTableau.push([6, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 6]);
    tabTableau.push([6, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 6]);
    tabTableau.push([6, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 6]);
    tabTableau.push([6, 0, 0, 0, 0, 0, 0, 3, 0, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 0, 0, 0, 3, 0, 0, 0, 6]);
    tabTableau.push([6, 0, 0, 0, 0, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 6]);
    tabTableau.push([6, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6]);
    tabTableau.push([6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6]);
    tabTableau.push([6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6]);
    tabTableau.push([6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6]);
    tabTableau.push([6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6]);
    tabTableau.push([6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6]);
    tabTableau.push([6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]);
    initialiseObjects();
}

function initialiseObjects() {
    for (var i = 0; i < tabTableau.length; i++) {
        for (var j = 0; j < tabTableau[i].length; j++) {
            switch (tabTableau[i][j]) {
                case 1:
                    initPasserelles(i, j);
                    break;

                case 2:
                    initEchelles(i, j);
                    break;

                case 3:
                    initLingots(i, j);
                    break;

                case 4:
                    initSol(i, j);
                    break;

                case 5:
                    initCorde(i, j);
                    break;

                case 6:
                    initMurs(i, j);
                    break;

                case 7:
                    initPanneau(i, j);
                    break;

                case 8:
                    initTrou(i, j);
                    break;

                case 9:
                    initGardeTrou(i, j)
                    break;
            }
        }
    }
}

// Pour dessiner le tableau
function dessiner() {
    for (var i = 0; i < tabTableau.length; i++) {
        for (var j = 0; j < tabTableau[i].length; j++) {
            switch (tabTableau[i][j]) {
                case 1:
                    dessinerPasserelles(i, j);
                    break;

                case 2:
                    dessinerEchelles(i, j);
                    break;

                case 3:
                    dessinerLingots(i, j);
                    break;

                case 4:
                    dessinerSol(i, j);
                    break;

                case 5:
                    dessinerCordes(i, j);
                    break;

                case 6:
                    dessinerMurs(i, j);
                    break;

                case 7:
                    dessinerPanneau(i, j);
                    break;
                case 8:
                    verifDureeTrou(i, j);
                    break;
                case 9:
                    dessinerGardeTrou(i, j)
                    break;
            }
        }
    }
    dessinerTitre();
    dessinerDonnees();
    dessinerRunner();
    dessinerGardes();
    if (binGameOver == true){
        dessinerGameOver();
    }
}