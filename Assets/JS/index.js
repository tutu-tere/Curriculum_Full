//Boton tema claro/oscuro

document.getElementById("themeToggle").addEventListener("click", function() {
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-white");

  // Cambiar icono
  const icon = document.getElementById("themeIcon");
  if (document.body.classList.contains("bg-dark")) {
    icon.classList.remove("bi-moon-fill");
    icon.classList.add("bi-sun-fill");
  } else {
    icon.classList.remove("bi-sun-fill");
    icon.classList.add("bi-moon-fill");
  }
});

//Efecto al desplazarse entre secciones
  
$(window).on("scroll", function() {
    $("section.seccion").each(function() {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
        $(this).addClass("visible");
      }
    });
  });


// validacion de formulario

const form = document.getElementById("contactForm");

form.addEventListener("input", (event) => {
  if (event.target.checkValidity()) {
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    alert("¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.");
    form.reset();
    [...form.elements].forEach(el => el.classList.remove("is-valid", "is-invalid"));
  } else {
    alert("Por favor completa correctamente todos los campos.");
  }
});