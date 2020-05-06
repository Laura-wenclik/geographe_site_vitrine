<!DOCTYPE html>
<html>
<title>classement</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel="stylesheet" href="accueil.css">
<script src='https://kit.fontawesome.com/a076d05399.js'></script>

<style>
body {font-family: "Raleway", sans-serif}
h1,h2,h3,h4,h5,h6{font-family: 'Josefin Sans', sans-serif}
body, html {
  height: 100%;
  line-height: 1.8;
  background-image: url("img/fond.png");
  background-repeat: no-repeat;
  background-size: cover;
}




</style>
  <body>

    <!-- Navbar (sit on top) -->
    <div class="top">
      <div class="w3-bar w3-sand w3-card" id="myNavbar">
        <a href="accueil.html" class="w3-bar-item w3-button w3-wide w3-hover-amber">GEOGRAPHE</a>
        <!-- Right-sided navbar links -->
        <div class="w3-right w3-hide-small">
          <a href="http://www.ign.fr" class="w3-bar-item w3-button w3-hover-amber"><i class="fas fa-home"></i> CONCERNANT L'IGN</a>
          <a href="classement.php" class="w3-bar-item w3-button w3-hover-amber"><i class="fas fa-scroll"></i> CLASSEMENT</a>
          <a href="items.html" class="w3-bar-item w3-button w3-hover-amber"><i class="far fa-gem"></i> ITEMS</a>
          <a href="telechargement.html" class="w3-bar-item w3-button w3-hover-amber"><i class="fas fa-download"></i> TELECHARGER</a>
          <a href="#contact" class="w3-bar-item w3-button w3-hover-amber"><i class="fa fa-user-circle"></i> CONNEXION</a>
        </div>
        <!-- Hide right-floated links on small screens and replace them with a menu icon -->

          <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>

    <!-- Sidebar on small screens when clicking the menu icon -->
    <nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style="display:none" id="mySidebar">
    <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-large w3-padding-16">X</a>
    <a href="http://www.ign.fr" onclick="w3_close()" class="w3-bar-item w3-button"> CONCERNANT L'IGN</a>
    <a href="classement.php" onclick="w3_close()" class="w3-bar-item w3-button"> CLASSEMENT</a>
    <a href="items.html" class="w3-bar-item w3-button w3-hover-amber"> ITEMS</a>
    <a href="telechargement.html" onclick="w3_close()" class="w3-bar-item w3-button"> TELECHARGER</a>
    <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button"> CONNEXION</a>
  </nav>

    <!-- Ranking Section -->

    <div class="w3-light-grey w3-round-xlarge w3-hide-small" style="padding:64px 32px; margin: 100px;">
      <h1 class="w3-center w3-xxxlarge">Les 25 meilleurs membres de la Guilde</h1>
      <div class="w3-card  w3-responsive">
        <table class="w3-table-all w3-hoverable w3-card-4 w3-center w3-xlarge" style="width:100%" >
          <thead>
            <tr class="w3-brown">
              <th>Rang</th>
              <th>Pseudo</th>
              <th>Score</th>
            </tr>
          </thead>
          <?php

          $link = mysqli_connect('localhost', 'root', 'root', 'geographe_players');

          if (!$link) {
            die('Erreur de connexion');
          }

          /*REQUETE SQL*/
          $requete = "SELECT rang, pseudo, score FROM players ORDER BY score desc limit 25";
          if ($result = mysqli_query($link, $requete)){
            while ($ligne = mysqli_fetch_row($result)){
              $tab[] = $ligne;
            }
          }
          else{
            echo "Erreur de requête de base de données.";
          }

          /*TABLES*/
          echo "<tr>";
          foreach ($tab as $elem) {
            echo "<td><img src='img/".$elem[0].".png'></td>";
            echo "<td>".$elem[1]."</td>";
            echo "<td>".$elem[2]."</td>";

          echo "</tr>";
          }
          ?>

        </table>
      </div>
    </div>

    <div class="w3-light-grey w3-round-xlarge w3-hide-medium w3-hide-large" style="padding:16px 8px; margin: 10px;">
      <h1 class="w3-center w3-xxxlarge">Les 25 meilleurs membres de la Guilde</h1>
      <div class="w3-card  w3-responsive">
        <table class="w3-table-all w3-hoverable w3-card-4 w3-center w3-xlarge" style="width:100%" >
          <thead>
            <tr class="w3-dark-grey">
              <th>Rang</th>
              <th>Pseudo</th>
              <th>Score</th>
            </tr>
          </thead>
          <?php

          $link = mysqli_connect('localhost', 'root', 'root', 'geographe_players');

          if (!$link) {
            die('Erreur de connexion');
          }

          /*REQUETE SQL*/
          $requete = "SELECT rang, pseudo, score FROM players ORDER BY score desc limit 25";
          if ($result = mysqli_query($link, $requete)){
            while ($ligne = mysqli_fetch_row($result)){
              $tab_2[] = $ligne;
            }
          }
          else{
            echo "Erreur de requête de base de données.";
          }

          /*TABLES*/
          echo "<tr>";
          foreach ($tab_2 as $elem) {
            echo "<td><img src='img/".$elem[0].".png'></td>";
            echo "<td>".$elem[1]."</td>";
            echo "<td>".$elem[2]."</td>";

          echo "</tr>";
          }
          ?>

        </table>
      </div>
    </div>




<!-- Footer -->
<footer class="w3-center w3-dark-gray w3-padding-64">
  <a href="#myNavbar" class="w3-button w3-sand w3-hover-amber"><i class="fa fa-arrow-up w3-margin-right"></i>Haut de page</a>

  <p class="w3-text-sand">Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-amber">w3.css</a></p>
</footer>

<script>
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}
</script>

</body>
</html>
