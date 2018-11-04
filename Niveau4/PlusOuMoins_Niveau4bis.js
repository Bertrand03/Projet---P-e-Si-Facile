const bloc2 = document.querySelector('.bloc2');
const devinezUnNombre = document.querySelector('.devinezUnNombre');
const form = document.getElementById('form');
const bloc2a = document.querySelector('.bloc2a');
const bloc2b = document.querySelector('.bloc2b');
const label = document.getElementById('label');
const label2 = document.getElementById('label2');
const bloc2c = document.querySelector('.bloc2c');
const bloc2d = document.querySelector('.bloc2d');
const boutonValider = document.querySelector('.boutonValider');

const tentatives = document.querySelector('.tentatives');
const provocation = document.querySelector('.provocation');
const gagne = document.querySelector('.gagne');
const couleurLettre = document.querySelector('.couleurLettre');
const lettre = document.querySelector('.lettre');
const nombre = document.querySelector('.nombre');
const couleurNombre = document.querySelector('.couleurNombre');

const reponsesLettre1 = document.querySelector('.reponsesLettre1');
const reponsesLettre2 = document.querySelector('.reponsesLettre2');
const reponsesLettre3 = document.querySelector('.reponsesLettre3');
const reponsesLettre4 = document.querySelector('.reponsesLettre4');
const reponsesNombre1 = document.querySelector('.reponsesNombre1');
const reponsesNombre2 = document.querySelector('.reponsesNombre2');
const reponsesNombre3 = document.querySelector('.reponsesNombre3');
const reponsesNombre4 = document.querySelector('.reponsesNombre4');


const blocDeQuatre= document.querySelector('.blocDeQuatre');
const reponsesLettre = document.querySelector('.reponsesLettre');
const reponsesNombre = document.querySelector('.reponsesNombre');



let valeurCouleurLettre = document.createElement('div');
blocDeQuatre.appendChild(valeurCouleurLettre);
let retourValeurLettre = document.createElement('p');
lettre.appendChild(retourValeurLettre);
let retourValeurNombre = document.createElement('p');
nombre.appendChild(retourValeurNombre);
let valeurCouleurNombre = document.createElement('div');
blocDeQuatre.appendChild(valeurCouleurNombre);


form.addEventListener('submit', function maFonction(event){
	event.stopPropagation();
	event.preventDefault();

								// let valeurReponsesLettre1 = document.createElement('div');
								// reponsesLettre.appendChild(valeurReponsesLettre1);
								// let valeurReponsesLettre2 = document.createElement('div');
								// reponsesLettre.appendChild(valeurReponsesLettre2);
								// let valeurReponsesLettre3 = document.createElement('div');
								// reponsesLettre.appendChild(valeurReponsesLettre3);
								// let valeurReponsesLettre4 = document.createElement('div');
								// reponsesLettre.appendChild(valeurReponsesLettre4);

								// let valeurReponsesNombre1 = document.createElement('div');
								// reponsesNombre.appendChild(valeurReponsesNombre1);
								// let valeurReponsesNombre2 = document.createElement('div');
								// reponsesNombre.appendChild(valeurReponsesNombre2);
								// let valeurReponsesNombre3 = document.createElement('div');
								// reponsesNombre.appendChild(valeurReponsesNombre3);
								// let valeurReponsesNombre4 = document.createElement('div');
								// reponsesNombre.appendChild(valeurReponsesNombre4);


var tableauNombre = new Array(3);
tableauNombre[0]="1";
tableauNombre[1]="2";
tableauNombre[2]="3";

var tableauAlphabet = new Array(3);
tableauAlphabet[0]="a";
tableauAlphabet[1]="b";
tableauAlphabet[2]="c";

let indiceNombreAleatoire = Math.floor(Math.random() * 3);
let indiceLettreAlphabet = Math.floor(Math.random() * 3);

let nombreAleatoire = tableauNombre[indiceNombreAleatoire];
let lettreAleatoire = tableauAlphabet[indiceLettreAlphabet];

let valeurNombre;
let valeurLettre;
let retourValeurNb;
let retourValeurL;
let nbtentatives = 0;

console.log("indice correspondant au nombre aléatoire : " + indiceNombreAleatoire);
console.log("indice correspondant à la lettre aléatoire : " + indiceLettreAlphabet);

console.log('nombre aléatoire généré : ' + nombreAleatoire);
console.log('lettre aléatoire générée : ' + lettreAleatoire);


valeurNombre = label.value;
valeurLettre = label2.value;

console.log('valeur Lettre (label.value) vaut : ' + valeurLettre);
console.log('valeur Nombre (label2.value) vaut : ' + valeurNombre);

let indiceTest = 0;
let indiceValeur = 0;

let indiceLettreJoueur = (tableauAlphabet.indexOf(valeurLettre)); //recupere l'indexe de la saisieJoueur.

console.log('indiceTest : ' + indiceTest);
console.log('indiceValeur : ' + indiceValeur);
console.log('indiceLettreJoueur vaut : ' + indiceLettreJoueur);


while (((valeurNombre != nombreAleatoire) || (valeurLettre != lettreAleatoire)) && nbtentatives < 10) {
	if (valeurNombre < nombreAleatoire) {
		retourValeurNb = "Nombre trop petit. C'est plus!";
	} 
		else if (valeurNombre > nombreAleatoire){
		retourValeurNb = "Nombre trop grand. C'est moins!";
		}
		retourValeurNombre.innerHTML = retourValeurNb;
	
			if (valeurLettre != lettreAleatoire){ 
				for (indiceLettreJoueur = 0; indiceLettreJoueur <= tableauAlphabet.length; indiceLettreJoueur++){
						console.log('indiceLettreJoueur : ' + indiceLettreJoueur);
						console.log('indiceLettreAlphabet : ' + indiceLettreAlphabet);
					if(indiceLettreJoueur != indiceLettreAlphabet){
						if(indiceLettreJoueur < indiceLettreAlphabet){
							retourValeurL = "La lettre se situe après dans l'alphabet";
						}
							else if( indiceLettreJoueur > indiceLettreAlphabet){
							retourValeurL = "La lettre se situe avant dans l'alphabet";
							}
					}
				}
								console.log('indiceLettreJoueur (comparaison): ' + indiceLettreJoueur);
								console.log('indiceLettreAlphabet (comparaison): ' + indiceLettreAlphabet);

					if (indiceLettreJoueur == indiceLettreAlphabet) {
						retourValeurL = 'Bravo vous avez trouvé la lettre';  //METTRE UN DO WHILE ICI? POUR EVITER LE RAPPEL DE LA LETTRE JUSTE QUAND NOMBRE FAUX?
					}
					if(valeurNombre == nombreAleatoire){
						retourValeurNb = 'Bravo vous avez trouvé le nombre';
					}
			}


	retourValeurLettre.innerHTML = retourValeurL;


	if(valeurNombre != nombreAleatoire){
		valeurNombre.innerHTML = valeurNombre;
	}
	if(valeurLettre != lettreAleatoire){
		valeurLettre.innerHTML = valeurLettre;
	}
	
	nbtentatives++;
	valeurNombre = label.value;
	valeurLettre = label2.value;
}

});
// //Pour masquer la division : document.getElementById(messageGagné).style.display = none;

// ///Pour afficher la division : document.getElementById(messageGagné).style.display = block;

// // function AfficherCacher(texte) 
// // 		{
// // 			var test = document.getElementById(texte).style.display;
// // 			if (test == "block") 
// // 			{
// // 				document.getElementById(texte).style.display = "none";
// // 			}
// // 			else 
// // 			{
// // 				document.getElementById(texte).style.display = "block";
// // 			}
// // 		}


// // function masquerDiv(masquer) // c'est l'id du div
// // {

// //   if (document.getElementById(masquer).style.display == 'none') {
// //        document.getElementById(masquer).style.display = 'block';
// //   }
// //   else {
// //        document.getElementById(masquer).style.display = 'none';
// //   }
// // }
