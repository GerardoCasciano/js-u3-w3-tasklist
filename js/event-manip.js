const myform = document.getElementById("tasklist");
myform.addEventListener("submit", (e) => {
  e, preventDefoult();

  const carnetaskinput = document.getElementById("carne");
  const pescetaskinput = document.getElementById("pesce");
  const formaggitaskinput = document.getElementById("formaggi");
  const bevandetaskinput = document.getElementById("bevande");

  const myinput = {
    carne: carnetaskinput.value,
    pesce: pescetaskinput.value,
    formaggi: formaggitaskinput.value,
    bevande: bevandetaskinput.value,
  };
  const card = document.createElement("div");
  card.classList.add("listcreated");
  card.innerHTML = `
  <p> ${myinput.carnetaskinput} ${myinput.pescetaskinput} </p>
  <p> ${myinput.formaggitaskinput} ${myinput.bevandetaskinput} </p>
  <button>Elimina</button>
  `;
  const container = document.getElementById("listcreated");
  container.appendChild(card);

  myform.reset();
});
