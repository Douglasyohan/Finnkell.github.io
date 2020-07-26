const mathProjects = [
  {
      img: "./public/linear-logo.svg",
      imgAlt: "Linear Algebra",
      name: "Linear Algebra Manim",
      description: "Projeto consiste em um repositório de para o curso de Álgebra linear I e Álgebra linear II do curso de Matemática Aplicada e Computacional, utilizando Python e Manim para criar animações e LaTeX para escrever os textos.",
      link: "Git Repo",
      repo: "https://github.com/Finnkell/Linear-Algebra",
      icon: '<i class="fab fa-github"></i>',
  },
  {
    img: "./public/placeholder.png",
    imgAlt: "Linear Programming",
    name: "Linear Programming",
    description: "Projeto da disciplina de Programação Linear, consiste em um vídeo montado a partir da ferramenta Manimlib para a apresentação do Método de Jacobi. Desenvolvido em Python.",
    link: "Git Repo",
    repo: "https://github.com/Finnkell/Linear-programming",
    icon: '<i class="fab fa-github"></i>',
},
  {
      img: "./public/angelos.png",
      imgAlt: "Angelos Adventure",
      name: "Angelo's Adventure",
      description: "Projeto de desenvolvimento de jogos utilizando programação em Scratch. Desenvolvido pelos alunos Eric Batista e Carlos Eduardo, no projeto de extensão em robótica - DEMAT",
      link: "Scratch Game",
      repo: "https://scratch.mit.edu/projects/284143112/",
      icon: '<i class="fas fa-gamepad"></i>',
  },
];

count = 1;

mathProjects.forEach(element => {
 var html = document.getElementById("math-elements");
 
 html.insertAdjacentHTML('beforeend', `
      <div class="col-sm-3" >
          <div class="img-container">
              <img class="img-fluid rounded" src=${element.img} alt=${element.imgAlt}>
          </div>
          <h1>${element.name}</h1>
          <p>${element.description}</p>
          <a href=${element.repo} target="_blank">${element.icon} ${element.link}</a>
      </div>
  `);

  count++;
  
  if (count == 4) {
      html.insertAdjacentHTML('beforeend', '<div class="w-100"></div>');
      count = 0;
  }
});