const proyects = [
  {
    img: "img/proyecto1.png",
    title: "Prueba de titulo",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsum veritatis maiores
                        praesentium eligendi adipisci consectetur libero, rerum odio iste perferendis, corrupti est
                        facere exercitationem eum suscipit totam! Fugiat, maxime?`,
  },
  {
    img: "img/proyecto2.png",
    title: "Prueba de titulo",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsum veritatis maiores
                        praesentium eligendi adipisci consectetur libero, rerum odio iste perferendis, corrupti est
                        facere exercitationem eum suscipit totam! Fugiat, maxime?`,
  },
  {
    img: "img/proyecto3.png",
    title: "Prueba de titulo",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsum veritatis maiores
                        praesentium eligendi adipisci consectetur libero, rerum odio iste perferendis, corrupti est
                        facere exercitationem eum suscipit totam! Fugiat, maxime?`,
  },
  {
    img: "img/proyecto4.png",
    title: "Prueba de titulo",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsum veritatis maiores
                        praesentium eligendi adipisci consectetur libero, rerum odio iste perferendis, corrupti est
                        facere exercitationem eum suscipit totam! Fugiat, maxime?`,
  },
];

const createCard = ({ img, title, description }) => {
  const card = document.createElement("div");
  card.classList.add("proyect-container");
  card.innerHTML = `<div class="img-container">
                        <img src=${img} alt="Img de proyecto">
                    </div>
                    <div class="project-information">
                        <h3>${title}</h3>
                        <div>
                            <button class="tag">Next.js</button>
                        </div>
                        <p> ${description} </p>
                        <div>
                            <button class="buttonStyle">
                                 <i class="fa-brands fa-github"></i>
                                Code
                            </button>
                            <button class="buttonStyle">
                                <i class="fa-solid fa-link"></i>
                                Preview
                            </button>
                        </div>
                    </div>`;
  return card;
};

(() => {
  const cardContainer = document.getElementById("cardContainer");
  proyects.forEach((proyect) => cardContainer.appendChild(createCard(proyect)));
})();
