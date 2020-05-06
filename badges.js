var badges = [
  {
    "nom" :"Clerc",
    "img" :"./img/badges/abbaye.svg",
    "type" :1,
    "id" :1,
    "description" :"Collecter plus de 5 points situés sur un édifice religieux"


  },
  {
   "nom" :"Alpiniste",
   "img" :"./img/badges/alpiniste.svg",
   "type" :2,
   "id" :2,
   "description" :"Collecter un point à plus de 3000 m d'altitude"

 },
 {
   "nom" :"Joyeux Anniversaire",
   "img" :"./img/badges/anniversaire.svg",
   "type" :1,
   "id" :3,
   "description" :"Collecter un point le jour de son anniversaire"
  },
  {
   "nom" :"Premier des Premiers",
   "img" :"./img/badges/année.svg",
   "type" :1,
   "id" :4,
   "description" :"Collecter un point le 1er Janvier"
 },
{
  "nom" :"Archéologue",
  "img" :"./img/badges/archeologue.svg",
  "type" :2,
  "id" :5,
  "description" :"Collecter un point non vu depuis 1930 "
},
{
   "nom" :"Blagueur",
   "img" :"./img/badges/avril.svg",
   "type" :1,
   "id" :6,
   "description" :"Collecter un point le 1er Avril"
 },
 {
    "nom" :"Castor",
    "img" :"./img/badges/barrage.svg",
    "type" :1,
    "id" :7,
    "description" :"Collecter un point sur un barrage"
  },
  {
     "nom" :"Baroudeur",
     "img" :"./img/badges/baroudeur.svg",
     "type" :2,
     "id" :8,
     "description" :"Collecter un point dans plus de 20 départements"
    },
   {
      "nom" :"Joyeux Noël",
      "img" :"./img/badges/noel.svg",
      "type" :1,
      "id" :9,
      "description" :"Collecter un point le jour de Noël"
    },
    {
       "nom" :"Collectionneure",
       "img" :"./img/badges/collectionneur.svg",
       "type" :2,
       "id" :10,
       "description" :"Collecter de 10 Bourdaloue"
     },
     {
        "nom" :"Druide",
        "img" :"./img/badges/druide.svg",
        "type" :1,
        "id" :11,
        "description" :"Collecter une borne sur un dolmen ou une cairn"
      },
      {
         "nom" :"Compléteur",
         "img" :"./img/badges/completeur.svg",
         "type" :2,
         "id" :12,
         "description" :"Collecter tous les points d'un triplet (plus de 5)"
       }
       ,
       {
          "nom" :"Croque-mort",
          "img" :"./img/badges/croquemort.svg",
          "type" :1,
          "id" :13,
          "description" :"Collecter plus de 10 points sur un cimetière"
  }
        ,
        {
           "nom" :"Facteur",
           "img" :"./img/badges/facteur.svg",
           "type" :1,
           "id" :14,
           "description" :"Collecter un point sur une poste"
         }
         ,
         {
            "nom" :"Nécromant",
            "img" :"./img/badges/necromant.svg",
            "type" :2,
            "id" :15,
            "description" :"Collecter un point présumé disparu"
          }
          ,
          {
             "nom" :"Sous-Marinier",
             "img" :"./img/badges/sousmarin.svg",
             "type" :2,
             "id" :16,
             "description" :"Collecter un point en dessous du niveau de la mer"
           }
           ,
           {
              "nom" :"Routier",
              "img" :"./img/badges/routier.svg",
              "type" :1,
              "id" :17,
              "description" :"Collecter plus de 10 bornes kilométriques"
            }
            ,
            {
               "nom" :"Photographe",
               "img" :"./img/badges/photographe.svg",
               "type" :2,
               "id" :18,
               "description" :"Prendre une photo d'un point n'en ayant pas encore dans la BD"
             }
             ,
             {
                "nom" :"Envoyé Spécial",
                "img" :"./img/badges/reporter.svg",
                "type" :2,
                "id" :19,
                "description" :"Prendre 10 photos de point n'en ayant pas encore dans la BD"
              }

];


for (var i = 0; i < badges.length; i++) {
  div1=document.createElement('div');
  div1.setAttribute("class", "w3-col l3 m5 w3-margin-bottom");


  div2=document.createElement('div');
  div2.setAttribute("class","w3-card-4 w3-white");
  div2.setAttribute("style", "height:480px; min-height:400px;");

  img=document.createElement('img');
  img.src=badges[i]["img"];
  img.setAttribute("alt",badges[i]["nom"]);
  img.setAttribute("style","width:100%;padding: 8px 16px;");

  div3=document.createElement('div');
  div3.setAttribute("class", "w3-container w3-center");

  h3=document.createElement('h3');
  h3.innerHTML = badges[i]["nom"];

  p=document.createElement('p');
  p.innerHTML = badges[i]["description"];


  div3.appendChild(h3);
  div3.appendChild(p);

  div2.appendChild(img);
  div2.appendChild(div3);

  div1.appendChild(div2);

  document.getElementById("badges").appendChild(div1);



}
