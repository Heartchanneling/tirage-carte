function tirerCarte() {
  if (citations.length === 0) return;

  const index = Math.floor(Math.random() * citations.length);
  let texte = citations[index];

  // Coloration des signatures
  texte = texte.replace("Etre Tout Simplement", '<span class="titre-signature">Etre Tout Simplement</span>');

  const carte = document.getElementById("carte");
  carte.innerHTML = texte;

  // Ajuste la taille de la police si le texte est long
  if (texte.length > 350) {
    carte.style.fontSize = "1rem";
  } else if (texte.length > 250) {
    carte.style.fontSize = "1.05rem";
  } else {
    carte.style.fontSize = "1.15rem";
  }
}
