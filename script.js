const modal = document.getElementById("modal");
const imagenAmpliada = document.getElementById("imagenAmpliada");
const textoImagen = document.getElementById("textoImagen");
const cerrar = document.getElementById("cerrar");

document.querySelectorAll(".foto img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    imagenAmpliada.src = img.src;
    textoImagen.textContent = img.alt;
  });
});

cerrar.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// Cargar más fotos
const botonCargar = document.getElementById("cargarMas");
let contador = 7;

botonCargar.addEventListener("click", () => {
  const galeria = document.querySelector(".galeria");
  for (let i = 0; i < 3; i++) {
    const div = document.createElement("div");
    div.classList.add("foto");
    const img = document.createElement("img");
    img.src = `https://picsum.photos/400/250?random=${contador++}`;
    img.alt = `Naturaleza ${contador}`;
    div.appendChild(img);
    galeria.appendChild(div);

    // Permitir clic para ampliar nuevas imágenes
    img.addEventListener("click", () => {
      modal.style.display = "block";
      imagenAmpliada.src = img.src;
      textoImagen.textContent = img.alt;
    });
  }
});


const botonFondo = document.getElementById("cambiarFondo");
const colores = ["#f0f9f4", "#fff8e7", "#e6f7ff", "#f9f0ff", "#fef6f0"];

botonFondo.addEventListener("click", () => {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});