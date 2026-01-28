function tirerCarte() {
  if (citations.length === 0) return;

  const index = Math.floor(Math.random() * citations.length);
  let texte = citations[index];

  // Mise en forme du titre
  texte = texte.replace(
    "Etre Tout Simplement",
    '<span class="titre-signature">Etre Tout Simplement</span>'
  );

  const contenu = document.getElementById("contenu-citation");

  // Injection du texte uniquement (on ne touche pas au copyright)
  contenu.innerHTML = texte;

  // Ajustement intelligent de la taille de police
  const longueur = texte.replace(/<[^>]*>/g, "").length; // sans HTML

  if (longueur > 350) {
    contenu.style.fontSize = "1rem";
  } else if (longueur > 250) {
    contenu.style.fontSize = "1.05rem";
  } else {
    contenu.style.fontSize = "1.15rem";
  }
}
