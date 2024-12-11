const technologies = [
  { img: "img/HTML-logo.svg", title: "HTML" },
  { img: "img/CSS-logo.svg", title: "CSS" },
  { img: "img/js-logo.svg", title: "JavaScript" },
  { img: "img/ts-logo.svg", title: "TypeScript" },
  { img: "img/react-logo.svg", title: "React" },
  { img: "img/nextjs-logo.svg", title: "Nextjs", bg: true },
  { img: "img/redux-logo.svg", title: "Redux" },
  { img: "img/tailwind-logo.svg", title: "Tailwind CSS" },
  { img: "img/chakraUi-logo.svg", title: "Chakra UI" },
  { img: "img/git-logo.svg", title: "Git" },
  { img: "img/gitHub-logo.svg", title: "GitHub", bg: true },
  { img: "img/node-logo.svg", title: "Node.js" },
  { img: "img/SQL-logo.svg", title: "SQL" },
  { img: "img/mongoDb-logo.svg", title: "MongoDB" },
  { img: "img/firebase-logo.svg", title: "Firebase" },
  { img: "img/redis-logo.svg", title: "Redis" },
  { img: "img/prisma-logo.svg", title: "Prisma", bg: true },
  { img: "img/sequelize-logo.svg", title: "Sequelize" },
];

// Función que crea un elemento de tarjeta (li) para mostrar información de un proyecto.
const createCard = ({ img, title, bg }, index) => {
  // Crea un elemento <div> que será el contenedor de la tarjeta.
  const card = document.createElement("li");

  // Agrega las clases CSS al elemento para estilos y animación.
  card.classList.add("fade-in");

  // Ajusta el retraso de la animación basado en el índice del proyecto.
  card.style.animationDelay = `${index / 10}s`;

  // Define el contenido HTML interno de la tarjeta.
  card.innerHTML = `
                  <img src=${img} alt=${title} class=${bg ? "bgWhite" : ""}>
                  <h4>${title}</h4>
                    `;
  // Devuelve el elemento de la tarjeta creado.
  return card;
};

// Función autoejecutable que inicializa el contenedor de tarjetas y agrega las tarjetas dinámicamente.
(() => {
  const cardContainer = document.getElementById("technologies-list");
  technologies.forEach(
    (proyect, index) => cardContainer.appendChild(createCard(proyect, index)) // Agrega cada tarjeta creada al contenedor.
  );
})();
