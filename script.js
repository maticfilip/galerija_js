const slike = document.getElementById("slike");
const prikaz = document.getElementById("prikaz");
const obrisiSve = document.querySelector(".remove-btn");
const obrisiJednu = document.querySelector(".remove-picture");

if (slike) {
  slike.addEventListener("change", (e) => {
    if (window.File && window.FileReader && window.FileList) {
      const slike = e.target.files;

      for (let i = 0; i < slike.length; i++) {
        const citac = new FileReader();
        citac.addEventListener("load", function (event) {
          const slikaInfo = event.target;
          const div_slike = document.createElement("li");
          div_slike.innerHTML = `
                    <img class="slika ${[i + 1]}" src="${slikaInfo.result}"/>
                    <p class="tekst" contenteditable="true">Slika broj ${[
                      i + 1,
                    ]} (promijeni na klik)</p>
                    <button class="remove-picture ${[
                      i + 1,
                    ]}" onclick="return this.parentNode.remove();">Obriši</button>
                    `;
          prikaz.appendChild(div_slike);
        });
        citac.readAsDataURL(slike[i]);
      }
    } else {
      alert("Ovaj projekt koristi FILE API, koji vaš browser ne podržava");
    }
  });
}

if (obrisiSve) {
  obrisiSve.addEventListener("click", () => {
    prikaz.innerHTML = "";
  });
}
