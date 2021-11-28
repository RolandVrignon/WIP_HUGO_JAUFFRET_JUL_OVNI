var acc = document.getElementsByClassName("accordion");
var i;


// Pour chaque accordéons
for (i = 0; i < acc.length; i++) {

  let elem = acc[i].getElementsByClassName("trigger")[0]
  let lyric = acc[i].parentElement

  // On créee une fonction pour que au clic l'accordéon s'aggrandit : Cela revient à dire : "Si je clique sur ce boutton qu'est ce qui se passe ?"
  elem.addEventListener("click", function() {

    // Si il etait actif alors il devient inactif et inversement
    elem.parentElement.classList.toggle("active");

    
    var panel = elem.parentElement.nextElementSibling;
    var button = elem

    // Fonction pour établir la largeur des bandes sur les cotés dans le panel
    var a = elem.parentElement;
    var els = [];
    while (a) {
        els.unshift(a);
        a = a.parentNode;
    }

    let bands = panel.getElementsByClassName("band")

    if(els.length===6){
      let h 
      for (let h = 0; h < 2; h++) {
        bands[h].style.width = "50px"
      }
    } else if (els.length===7){
      let h 
      for (let h = 0; h < 2; h++) {
        bands[h].style.width = "100px"
      }
    } else if(els.length===8){
      let h 
      for (let h = 0; h < 2; h++) {
        bands[h].style.width = "150px"
      }
    }

    
    // Fonction pour cacher les bouttons "+" des sous-accordeons 
    if (panel.style.display === "flex") {
      panel.style.display = "none";
      button.style.display = "block"
    } else {
      panel.style.display = "flex";
      if (!panel.classList.contains("first")){
        button.style.display = "none"
      }
    }

    //Fonction pour rétablir le panel d'origine quand on re clique sur le mot. Sans ça, quand on déploie entierement un panel et qu'on le referme, la fois d'après en un clic tout seras ouvert.
    if(lyric.classList.contains("lyric") && !elem.parentElement.classList.contains("active")){
        let accordions = lyric.getElementsByClassName("accordion")
        let panels = lyric.getElementsByClassName("panel")
        let buttons = lyric.getElementsByClassName("trigger")
        let j
        for (let j = 0; j < accordions.length; j++) {
          accordions[j].classList.remove("active")
          panels[j].style.display = "none"
          buttons[j].style.display = "flex"
        }
      }
    });
}