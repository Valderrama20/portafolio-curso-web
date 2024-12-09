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

const createCard = ({ img, title, bg }, index) => {
  const card = document.createElement("li");
  card.classList.add("fade-in");
  card.style.animationDelay = `${index / 10}s`;
  card.innerHTML = `
                       <img src=${img} alt=${title} class=${
    bg ? "bgWhite" : ""
  }>
                       <h4>${title}</h4>
                    `;
  return card;
};

(() => {
  const cardContainer = document.getElementById("technologies-list");
  technologies.forEach((proyect, index) =>
    cardContainer.appendChild(createCard(proyect, index))
  );
})();
