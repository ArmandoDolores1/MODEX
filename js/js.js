document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactoForm");
    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            let nombre = nombre.value.trim();
            let correo = correo.value.trim();
            let mensaje = mensaje.value.trim();

            if (!nombre || !correo || !mensaje) {
                formMsg.textContent = "⚠ Todos los campos son obligatorios";
                formMsg.style.color = "red";
            } else {
                formMsg.textContent = "✔ Mensaje enviado correctamente";
                formMsg.style.color = "green";
                form.reset();
            }
        });
    }
});

function agregarItem() {
    let valor = itemInput.value.trim();
    if (valor === "") return;
    let li = document.createElement("li");
    li.textContent = valor;
    lista.appendChild(li);
    itemInput.value = "";
}

function toggleTexto() {
    let t = document.getElementById("textoOculto");
    t.style.display = t.style.display === "none" ? "block" : "none";
}

function sumar() {
    let r = Number(n1.value) + Number(n2.value);
    resultado.textContent = "Resultado: " + r;
}

const modoBtn = document.getElementById("modo-btn");
modoBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    modoBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

let pos = 0;
setInterval(() => {
    let carrusel = document.getElementById("carrusel");
    if (carrusel) {
        pos = (pos + 1) % carrusel.children.length;
        carrusel.style.transform = `translateX(-${pos * 100}%)`;
    }
}, 2500);



function toggleTheme(){
    document.body.classList.toggle("dark-mode");
}


function agregarReseña() {
    const nombre = document.getElementById('nombre').value.trim();
    const comentario = document.getElementById('comentario').value.trim();
    const foto = document.getElementById('foto').files[0];

    if (!nombre || !comentario) {
        alert("Completa nombre y comentario.");
        return;
    }

    const contenedor = document.getElementById("listaReseñas");

    const card = document.createElement("div");
    card.classList.add("card");

    let imgHTML = "";

    if (foto) {
        const url = URL.createObjectURL(foto);
        imgHTML = `<img src="${url}" class="img-reseña">`;
    }

    card.innerHTML = `
        <h3>${nombre}</h3>
        <p>${comentario}</p>
        ${imgHTML}
    `;

    contenedor.prepend(card);

    document.getElementById('formReseñas').reset();
}
