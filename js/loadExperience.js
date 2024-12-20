const experiences = [
  {
    role: "Full-stack Developer",
    company: "TPEOficial",
    period: "Ago. 2024 / Actualidad",
    description:
      "Desarrollo de aplicaciones completas, trabajando en el diseño, implementación y mantenimiento de sistemas. Innovación en funcionalidades y resolución de problemas.",
  },
  {
    role: "Full-stack Developer",
    company: "Freelancer",
    period: "Feb. 2024 / Actualidad",
    description:
      "Proyectos personalizados para clientes, abarcando desde el desarrollo de aplicaciones web hasta la integración de tecnologías modernas según las necesidades específicas.",
  },
  {
    role: "Front-end Developer",
    company: "Neefter",
    period: "Feb. 2023 / Mar. 2023",
    description:
      "Especialización en interfaces de usuario. Implementación de diseños atractivos y funcionales, garantizando una experiencia fluida.",
  },
  {
    role: "Full-stack Developer",
    company: "Henry",
    period: "Ago. 2022 / Sept. 2022",
    description:
      "Participación en proyectos web integrales, abordando tanto el front-end como el back-end, con un enfoque en la creación de soluciones escalables y de alto rendimiento, garantizando estándares de calidad en el desarrollo.",
  },
];

// Función que crea un elemento de tarjeta (card) para mostrar información de un proyecto.
const createCard = ({ role, company, period, description }, index) => {
  // Crea un elemento <div> que será el contenedor de la tarjeta.
  const card = document.createElement("div");

  // Agrega las clases CSS al elemento para estilos y animación.
  card.classList.add("experience-card", "fade-in");

  // Ajusta el retraso de la animación basado en el índice del proyecto.
  card.style.animationDelay = `${index / 10}s`;

  // Define el contenido HTML interno de la tarjeta.
  card.innerHTML = `
                <div class="line">
                </div>
                <div class="info-card">
                    <h2>
                        ${role}
                    </h2>
                    <p>${company}</p>
                    <span>${period}</span>
                </div>
                <div class="description-card">
                    <p>
                    ${description}
                    </p>
                </div>
            `;

  // Devuelve el elemento de la tarjeta creado.
  return card;
};

// Función autoejecutable que inicializa el contenedor de tarjetas y agrega las tarjetas dinámicamente.
(() => {
  const cardContainer = document.getElementById("cardContainer");
  experiences.forEach(
    (proyect, index) => cardContainer.appendChild(createCard(proyect, index)) // Agrega cada tarjeta creada al contenedor.
  );
})();
