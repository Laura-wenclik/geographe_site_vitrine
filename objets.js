var objets = [
	{
		"nom":"Longue-vue",
		"img": "./img/objets/longue_vue.svg",
		"type": 1,
		"rarete": 1,
		"id": 1,
		"description": "La longue-vue est un instrument optique utilisé pour voir à de grandes distances; autrefois très utilisée en navigation.",
		"bonus": "Elle te permet d'augmenter ton rayon de capture des points jusqu'à 10 mètres !",
		"howtoUse": "comment l'utiliser dans notre jeu ... ",
		"utilisation": "Utilisation unique"
	},
	{
		"nom":"Jumelles",
		"img": "./img/objets/jumelles.svg",
		"type": 1,
		"rarete": 1,
		"id": 2,
		"description": "Évolution de l'objet longue-vue, les jumelles, c'est comme deux longue-vues siamoises.",
		"bonus": "Elles ont le même pouvoir que la longue-vue mais sont plus puissantes. Le rayon est augmenté jusqu'à 50 mètres !",
		"howtoUse": "comment l'utiliser dans notre jeu ...",
		"utilisation": "Utilisation unique"
	},
	{
		"nom":"LIDAR",
		"img": "./img/objets/LIDAR.svg",
		"type": 2,
		"rarete": 3,
		"id": 3,
		"description": "Le LIDAR est une techologie laser permettant de créer des modèles 3D. Très utilisé par l'IGN et dans le monde de la géomatique.",
		"bonus": "L'objet LIDAR te permettra de modifier ton fond de carte à tes souhaits !",
		"howtoUse": "Rends toi vite dans les paramètres, et choisis ton nouveau/ tes nouveaux fonds de cartes !",
		"utilisation": "Utilisation permanente"
	},
	{
		"nom":"GNSS",
		"img": "./img/objets/GNSS.svg",
		"type": 1,
		"rarete": 5,
		"id": 4,
	  "description": "Le GNSS est un système de positionnement par satellites. C'est un ensemble de composants reposant sur une constellation de satellites artificiels permettant de fournir à un utilisateur par l’intermédiaire d'un récepteur portable de petite taille sa position 3D, sa vitesse 3D et l'heure. Cette catégorie de système de géopositionnement se caractérise par une précision métrique, sa couverture mondiale et la compacité des terminaux, mais également par sa sensibilité aux obstacles présents entre le terminal récepteur et les satellites.",
		"bonus": "Choisis un points, tu aura ainsi ses coordonnées immédiatemment et il sera intégré à ton réseau, comme si tu l'avais récupéré ! Mais attention, cet outil puissant est à usage unique.",
		"howtoUse": "comment l'utiliser dans notre jeu ...",
		"utilisation": "Utilisation unique"
	},
	{
		"nom":"Alidade",
		"img": "./img/objets/alidade.svg",
		"type": 1,
		"rarete": 2,
		"id": 5,
		"description": "Une alidade est une réglette mobile en rotation autour de l'axe vertical ou horizontal d'un instrument permettant la mesure d'angle. Cette réglette est équipée d'un système de visée qui peut être une lunette ou une pinnule de visée à chaque extrémité. Une alidade est utilisée en travaux publics et en navigation pour se repérer,ou encore en artillerie à fixer l 'axe du fût du canon.",
		"bonus": "Seul, elle n'est pas très efficace, mais accompagnée, elle peut être redoutable. Joins la avec un outil qui mesure les distances et tu aura, à partir de deux points pris, un troisième sans te déplacer !",
		"howtoUse": "comment l'utiliser dans notre jeu ...",
		"utilisation": "Utilisation unique"
	},
	{
		"nom":"Potion de savoir",
		"img": "./img/objets/potion.svg",
		"type": 3,
		"rarete": 3,
		"id": 6,
		"description": "La potion de savoir est une potion faite par notre druide, c'est en fait un thé où la science a infusé longtemps, très longtemps !",
		"bonus": "La potion te donne une réponse à une question du Quizz !",
	  "howtoUse": "comment l'utiliser dans notre jeu ...",
		"utilisation": "Utilisation unique"
	},
	{
		"nom": "Théodolite",
		"img": "./img/objets/theodolite.svg",
		"type": 1,
		"rarete": 3,
		"id": 7,
		"description": "Un théodolite est un instrument de géodésie complété d’un instrument d'optique, mesurant des angles dans les deux plans horizontaux et verticaux afin de déterminer une direction. Il est utilisé pour réaliser les mesures d’une triangulation, c'est-à-dire des angles d’un triangle. C'est un instrument essentiel en topographie, en ingénierie et en archéologie. Les géomètres en font leur principal instrument de terrain.",
		"bonus": "Évolution de l'Alidade, il est plus résistant et peut être utilisé deux fois !",
		"howtoUse": "comment l'utiliser dans notre jeu ...",
		"utilisation": "Utilisation double"
	}
	,
	{
		"nom": "Tachéomètre",
		"img": "./img/objets/tacheometre.svg",
		"type": 1,
		"rarete": 4,
		"id": 8,
		"description": "Le tachéomètre est un appareil servant à mesurer les angles horizontaux et verticaux entre deux cibles, ainsi que la distance entre ces cibles. Les mesures prises permettent de caractériser un triangle géodésique, et donc soit d'établir une carte ou un plan, soit de vérifier la cohérence entre un plan et la réalité du terrain.",
		"bonus": "Évolution du Théodolite, il a les mêmes pouvoir mais peut être utilisé seul par contre ! Il détermine un point à partir de deux autres",
		"howtoUse": "comment l'utiliser dans notre jeu ...",
		"utilisation": "Utilisation unique"
	}
	,
	{
		"nom":"Odomètre",
		"img": "./img/objets/odometre.svg",
		"type": 1,
		"rarete": 1,
		"id": 9,
		"description": "Un odomètre, ou dans un langage plus courant un compteur kilométrique, est un instrument de mesure, permettant de connaître la distance parcourue par un véhicule. Ce dispositif peut être électronique ou mécanique.",
		"bonus": "Cet objet te donne la distance, son rayon d'action est ADEFINIR ! Seul, il ne te sert à rien, mais couplé à l'Alidade ou au Théodolite, il te donnera un autre point à partir de deux autres.",
		"howtoUse": "comment l'utiliser dans notre jeu ...",
		"utilisation": "Utilisation unique"
	}
	,
	{
		"nom":"Distancemètre",
		"img": "./img/objets/odometre.svg",
		"type": 1,
		"rarete": 2,
		"id": 10,
		"description": "Le Distancemètre est un appareil qui mesure une distance entre lui et un autre point de manière précise. C'est l'évolution de l'Odomètre.",
		"bonus": "Couplé au Theodolite ou à l'Alidade, tu pourra à partir de deux points que tu as trouvé, en trouver un troisième sans te déplacer jusquu'à lui ! ",
		"howtoUse": "comment l'utiliser dans notre jeu ...",
		"utilisation": "Utilisation unique"
	}
];

for (var i = 0; i < objets.length; i++) {
  div1=document.createElement('div');
  div1.setAttribute("class", "w3-col l3 m5 w3-margin-bottom");


  div2=document.createElement('div');
  div2.setAttribute("class","w3-card-4 w3-white");
  div2.setAttribute("style", "height:600px; min-height:400px;");

  img=document.createElement('img');
  img.src=objets[i]["img"];
	img.setAttribute("class","w3-bottombar w3-border-light-grey")
  img.setAttribute("alt",objets[i]["nom"]);
  img.setAttribute("style","width:100%;padding: 8px 16px 0px 16px;");

  div3=document.createElement('div');
  div3.setAttribute("class", "w3-container w3-center");

  h3=document.createElement('h3');
  h3.innerHTML = objets[i]["nom"];

	div4=document.createElement('div');
	div4.setAttribute("class","w3-dropdown-hover");

	p1=document.createElement('p');
	p1.innerHTML=objets[i]["bonus"];

  button=document.createElement('button');
	button.setAttribute("class","w3-button w3-left-align w3-black");
  button.innerHTML = "description";

	div5=document.createElement('div');
	div5.setAttribute("class","w3-dropdown-content w3-black");

	p2=document.createElement('p');
	p2.innerHTML=objets[i]["description"];

	div5.appendChild(p2);

	div4.appendChild(button);
	div4.appendChild(div5);

  div3.appendChild(h3);
  div3.appendChild(div4);
	div3.appendChild(p1);


  div2.appendChild(img);
  div2.appendChild(div3);

  div1.appendChild(div2);

  document.getElementById("objets").appendChild(div1);
}
