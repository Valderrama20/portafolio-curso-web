const proyects = [
  {
    img: "img/proyecto5.png",
    title: "Job Match",
    description: `JobMatch es una innovadora aplicación creada para resolver la dificultad común de encontrar profesionales 
    calificados para tareas del hogar. Nuestra plataforma facilita a los usuarios la búsqueda de profesionales confiables y 
    altamente capacitados para una amplia gama de servicios, desde reparaciones de electrodomésticos hasta remodelaciones. 
    Además, brinda a los profesionales la oportunidad de expandir su alcance, ofreciendo sus servicios a una base de clientes
    más amplia y mejorando su visibilidad y posibilidades de trabajo.`,
  },
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
    title: "Look House",
    description: `Colaboré en un equipo de alto rendimiento en el desarrollo de una plataforma web, utilizando 
      sprints semanales para avanzar de manera eficiente. A lo largo del proceso, presentamos progresos constantes
      al Product Owner, garantizando una comunicación efectiva y alineación con los objetivos. Aplicamos diversas 
      tecnologías y lenguajes aprendidos en el bootcamp de Henry, con el objetivo de mejorar la experiencia de los
      usuarios al momento de alquilar una vivienda, simplificando cada paso del proceso.`,
  },
  {
    img: "img/proyecto4.png",
    title: "Prueba de titulo",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsum veritatis maiores
                        praesentium eligendi adipisci consectetur libero, rerum odio iste perferendis, corrupti est
                        facere exercitationem eum suscipit totam! Fugiat, maxime?`,
  },
];

const createCard = ({ img, title, description }, index) => {
  const card = document.createElement("div");
  card.classList.add("proyect-container", "fade-in");
  card.style.animationDelay = `${index / 10}s`;
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
                            <a class="aStyle">
                                 <i class="fa-brands fa-github"></i>
                                Code
                            </a>
                            <a class="aStyle">
                                <i class="fa-solid fa-link"></i>
                                Preview
                            </a>
                        </div>
                    </div>`;
  return card;
};

(() => {
  const cardContainer = document.getElementById("cardContainer");
  proyects.forEach((proyect, index) =>
    cardContainer.appendChild(createCard(proyect, index))
  );
})();
