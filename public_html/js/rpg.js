var map = new Map("premiere");

var joueur = new Personnage("soldat.png", 7, 14, DIRECTION.HAUT);
var joueur2 = new Personnage("exemple.png", 2, 2, DIRECTION.BAS);
var monstro = new Personnage("squelette.png", 5, 12, DIRECTION.DROITE);
var npc = new Personnage()

map.addPersonnage(joueur);
//map.addpnj(npc);
map.addMonstre(monstro);

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = map.getLargeur() * 32;
    canvas.height = map.getHauteur() * 32;

    setInterval(function() {
        map.dessinerMap(ctx);
    }, 40);

    // Gestion du clavier
    window.onkeydown = function(event) {
        // On récupère le code de la touche
        var e = event || window.event;
        var key = e.which || e.keyCode;

        switch (key) {
            case 38 :
            case 122 :
            case 119 :
            case 90 :
            case 87 : // Flèche haut, z, w, Z, W
                joueur.deplacer(DIRECTION.HAUT, map);
                break;
            case 40 :
            case 115 :
            case 83 : // Flèche bas, s, S
                joueur.deplacer(DIRECTION.BAS, map);
                break;
            case 37 :
            case 113 :
            case 97 :
            case 81 :
            case 65 : // Flèche gauche, q, a, Q, A
                joueur.deplacer(DIRECTION.GAUCHE, map);
                break;
            case 39 :
            case 100 :
            case 68 : // Flèche droite, d, D
                joueur.deplacer(DIRECTION.DROITE, map);
                break;
            case 16 :
                map.addPersonnage(joueur2);
                break;
            default :
                //alert(key);
                // Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
                return true;
        }
        console.log(joueur.direction)
        EstDevant(joueur, monstro,event);
        return false;
    }


    function EstDevant(joueur, pnj, event) {
        
        var e = event || window.event;
        var key = e.which || e.keyCode;
        
        //pnj regarde en bas -> direction == 0
        if (pnj.direction === 0){
            //meme ligne
            if (joueur.x===pnj.x){
                //en face
                if (joueur.y===(pnj.y+1)&&key===13){
                    //dialogue
                }
            }
        }
        //pnj regarde a gauche -> direction == 1
        if (pnj.direction === 1){
            //meme ligne
            if (joueur.y===pnj.y){
                //en face
                if (joueur.x===(pnj.x-1)&&key===13){
                    //dialogue
                }
            }
        }
        //pnj regarde a droite -> direction == 2
        if (pnj.direction === 2){
            //meme ligne
            if (joueur.y===pnj.y){
                //en face
                if (joueur.x===(pnj.x+1)&&key===13){
                    //dialogue
                }
            }
        }
        //pnj regarde a droite -> direction == 3
        if (pnj.direction === 3){
            //meme ligne
            if (joueur.x===pnj.x){
                //en face
                if (joueur.y===(pnj.y-1)&&key===13){
                    //dialogue
                }
            }
        }
        //pnj regarde a gauche -> direction == 1
        //pnj regarde a droite -> direction == 2
        //pnj regarde en bas -> direction == 3
    }

}
