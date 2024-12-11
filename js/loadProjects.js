const proyects = [
  {
    img: "img/proyecto5.webp",
    title: "Job Match",
    description: `JobMatch es una innovadora aplicación creada para resolver la dificultad común de encontrar profesionales 
    calificados para tareas del hogar. Nuestra plataforma facilita a los usuarios la búsqueda de profesionales confiables y 
    altamente capacitados para una amplia gama de servicios, desde reparaciones de electrodomésticos hasta remodelaciones. 
    Además, brinda a los profesionales la oportunidad de expandir su alcance, ofreciendo sus servicios a una base de clientes
    más amplia y mejorando su visibilidad y posibilidades de trabajo.`,
    code: "https://github.com/Valderrama20/JobMatch",
  },
  {
    img: "img/proyecto1.webp",
    title: "Clon de X",
    description: `Desarrollé junto a Pedro Fede Casillas una red social funcional inspirada en X (Twitter) como
     parte de una prueba técnica. La aplicación permite registro, inicio de sesión,
      publicaciones y gestión de perfil, además de ser completamente responsive. Utilizamos tecnologías modernas 
      como React + Vite, Tailwind CSS, JavaScript y Zustand en el front-end, y NestJS, TypeScript, MongoDB y Docker
       en el back-end. Este proyecto refleja trabajo en equipo, capacidad de adaptación y desarrollo bajo presión.`,
    code: "https://github.com/Valderrama20/online-social-frontend",
  },
  {
    img: "img/proyecto2.webp",
    title: "Sports Book",
    description: `Desarrollamos una dApp para coordinar encuentros y apuestas en eventos deportivos entre equipos no
     profesionales, permitiendo crear desafíos entre equipos, definir un proveedor de locación (réferi) para validar 
     resultados y gestionar apuestas de manera segura. Al cierre de cada encuentro, los premios se distribuyen al ganador,
      al proveedor y al contrato Sportsbook. Además, se genera un NFT conmemorativo para los equipos.
      <br> <br>
      Este proyecto fue creado durante la hackathon de Think and Dev, donde tuve la oportunidad de trabajar con un equipo increíble y aprender sobre el mundo blockchain. ¡Fue mi primera hackathon, y ganamos el primer lugar! 🎉`,
    code: "https://github.com/Valderrama20/hackaton-2022-Gol",
  },
  {
    img: "img/proyecto3.webp",
    title: "Look House",
    description: `Colaboré en un equipo de alto rendimiento en el desarrollo de una plataforma web, utilizando 
      sprints semanales para avanzar de manera eficiente. A lo largo del proceso, presentamos progresos constantes
      al Product Owner, garantizando una comunicación efectiva y alineación con los objetivos. Aplicamos diversas 
      tecnologías y lenguajes aprendidos en el bootcamp de Henry, con el objetivo de mejorar la experiencia de los
      usuarios al momento de alquilar una vivienda, simplificando cada paso del proceso.`,
    code: "https://github.com/Valderrama20/Proyecto-Final-henry",
  },
  {
    img: "img/proyecto4.webp",
    title: "Neefter App",
    description: `Esta aplicación está diseñada para la comercialización de NFTs y la divulgación de eventos 
    relacionados con el ámbito Web3. Su objetivo principal es ampliar la comunidad interesada en estas tecnologías emergentes.`,
    code: "https://github.com/Valderrama20/nefter",
  },
];

// Función que crea un elemento de tarjeta (card) para mostrar información de un proyecto.
const createCard = ({ img, title, description, code }, index) => {
  // Crea un elemento <div> que será el contenedor de la tarjeta.
  const card = document.createElement("div");

  // Agrega las clases CSS al elemento para estilos y animación.
  card.classList.add("proyect-container", "fade-in");

  // Ajusta el retraso de la animación basado en el índice del proyecto.
  card.style.animationDelay = `${index / 10}s`;

  // Define el contenido HTML interno de la tarjeta.
  card.innerHTML = `
    <div class="img-container">
        <img src=${img} alt="Img de proyecto">
    </div>
    <div class="project-information">
        <h3>${title}</h3>
        <p>${description}</p>
        <div>
            <a class="aStyle" href=${code} target="_blank">
                <i class="fa-brands fa-github"></i>
                Code
            </a>
        </div>
    </div>`;

  // Devuelve el elemento de la tarjeta creado.
  return card;
};

// Función autoejecutable que inicializa el contenedor de tarjetas y agrega las tarjetas dinámicamente.
(() => {
  const cardContainer = document.getElementById("cardContainer");
  proyects.forEach(
    (proyect, index) => cardContainer.appendChild(createCard(proyect, index)) // Agrega cada tarjeta creada al contenedor.
  );
})();
