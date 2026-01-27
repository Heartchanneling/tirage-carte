let citations = [];

fetch("citations.json")
  .then(response => response.json())
  .then(data => citations = data);

function tirerCarte() {
  if (citations.length === 0) return;

  const index = Math.floor(Math.random() * citations.length);
  document.getElementById("carte").innerText = citations[index];
}
