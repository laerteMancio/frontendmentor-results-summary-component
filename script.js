fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro ao carregar o arquivo JSON");
    }
    return response.json();
  })
  .then((data) => {
    const categorias = document.getElementsByClassName("categoria");
    const pontuacao = document.getElementsByClassName("pontuacao-resultado");
    const icone = document.getElementsByClassName("img-sumario");

    const resultado = document.getElementsByClassName("valor-pontuacao");
    
    let calc = 0

    for (let i = 0; i < categorias.length; i++) {
      const categoriaData = data[i];

      icone[i].src = categoriaData.icon;
      categorias[i].innerHTML = categoriaData.category;
      pontuacao[i].innerHTML = categoriaData.score + " / 100";

      calc += categoriaData.score 
    }

    resultado[0].innerHTML = Math.round(calc / categorias.length)
    
  })
  .catch((error) => {
    console.error("Erro:", error);
  });
