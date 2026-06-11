function mostrar(id, btn) {
  document.querySelectorAll(".seccion").forEach(s => {
    s.classList.remove("activa");
  });

  document.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.remove("activo");
  });

  document.getElementById(id).classList.add("activa");

  if (btn) btn.classList.add("activo");
}

function irACalificaciones() {
  const tabCalif = document.querySelector(".tab-btn:nth-child(2)");
  mostrar("calificaciones", tabCalif);
}