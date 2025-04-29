console.log("JavaScript carregado!")
//Dados da classificação atual do campeonato de pilotos
const classificacaoPilotos = [
    { posicao: 1, piloto: "Oscar Piastri", equipe: "McLaren", pontos: 99 },
    { posicao: 2, piloto: "Lando Norris", equipe: "McLaren", pontos: 89 },
    { posicao: 3, piloto: "Max Verstappen", equipe: "Red Bull Racing", pontos: 87 },
    { posicao: 4, piloto: "George Russel", equipe: "Mercedes-AMG Petronas", pontos: 73 },
    { posicao: 5, piloto: "Charles Leclerc", equipe: "Ferrari", pontos: 47 },
    { posicao: 6, piloto: "Andrea Kimi Antonelli", equipe: "Mercedes-AMG Petronas", pontos: 38 },
    { posicao: 7, piloto: "Lewis Hamilton", equipe: "Ferrari", pontos: 31 },
    { posicao: 8, piloto: "Alexander Albon", equipe: "Williams", pontos: 20 },
    { posicao: 9, piloto: "Esteban Ocon", equipe: "Haas", pontos: 14 },
    { posicao: 10, piloto: "Lance Stroll", equipe: "Aston Martin Aramco-Mercedes", pontos: 10 },
    { posicao: 11, piloto: "Pierre Gasly", equipe: "Alpine", pontos: 6 },
    { posicao: 12, piloto: "Nico Hulkenberg", equipe: "Sauber", pontos: 6},
    { posicao: 13, piloto: "Oliver Bearman", equipe: "Haas", pontos: 6 },
    { posicao: 14, piloto: "Isack Hadjar", equipe: "Racing Bulls", pontos: 5 },
    { posicao: 15, piloto: "Carlos Sainz", equipe: "Williams", pontos: 5 },
    { posicao: 16, piloto: "Yuki Tsunoda", equipe: "Red Bull Racing", pontos: 5 },
    { posicao: 17, piloto: "Fernando Alonso", equipe: "Aston Martin Aramco-Mercedes", pontos: 0 },
    { posicao: 18, piloto: "Liam Lawson", equipe: "Racing Bulls", pontos: 0 },
    { posicao: 19, piloto: "Jack Doohan", equipe: "Alpine", pontos: 0 },
    { posicao: 20, piloto: "Gabriel Bortoletto", equipe: "Sauber", pontos: 0 }
];


//Dados da classificação atual do campeonato de construtores
const classificacaoConstrutores = [
    { posicao: 1, equipe: "Mclaren", pontos: 188 },
    { posicao: 2, equipe: "Mercedes-AMG Petronas", pontos: 111 },
    { posicao: 3, equipe: "Red Bull", pontos: 89 },
    { posicao: 4, equipe: "Ferrari", pontos: 78 },
    { posicao: 5, equipe: "Williams", pontos: 25 },
    { posicao: 6, equipe: "Haas", pontos: 20 },
    { posicao: 7, equipe: "Aston Martin Aramco-Mercedes", pontos: 10 },
    { posicao: 8, equipe: "Racing Bulls", pontos: 8 },
    { posicao: 9, equipe: "Alpine", pontos: 6 },
    { posicao: 10, equipe: "Sauber", pontos: 6 }
];


//Populando a tabela de pilotos
function popularTabelaPilotos(){
    console.log("Popular tabela pilotos");
    const tabela = document.getElementById("corpo-tabela-pilotos");
    tabela.innerHTML = "";
    classificacaoPilotos.forEach((piloto) =>
    {
        const linha = document.createElement("tr");
        linha.innerHTML = `<td>${piloto.posicao}</td>
        <td>${piloto.piloto}</td>
        <td>${piloto.equipe}</td>
        <td>${piloto.pontos}</td>
        `;
        console.log("Linha criada", linha);
        tabela.appendChild(linha);


    });


}
function popularTabelaConstrutores(){
    console.log("popular tabela de construtores");
    const tabela = document.getElementById("corpo-tabela-construtores");
    tabela.innerHTML = "";
    classificacaoConstrutores.forEach((equipe) =>{
    const linha = document.createElement("tr");
    linha.innerHTML = `<td>${equipe.posicao}</td
     linha.innerHTML = <td>${equipe.equipe}</td
      linha.innerHTML = <td>${equipe.pontos}</td
    
    `;
    console.log("Linha criada:", linha);
    tabela.appendChild(linha);
    });
  }

  //Adicionando opção para selecionar os pilotos
  const pilotos = classificacaoPilotos.map(piloto => piloto.piloto);
  const selectVencedor = document.getElementById("piloto-vencedor");
  const selectSegundoLugar = document.getElementById("segundo-lugar");
  const selectTerceiroLugar = document.getElementById("terceiro-lugar");
  const selectQuartoLugar = document.getElementById("quarto-lugar");
  const selectQuintoLugar = document.getElementById("quinto-lugar");
  const selectSextoLugar = document.getElementById("sexto-lugar");
  const selectSetimoLugar = document.getElementById("setimo-lugar");
  const selectOitavoLugar = document.getElementById("oitavo-lugar");
  const selectNonoLugar = document.getElementById("mono-lugar");
  const selectDecimoLugar = document.getElementById("decimo-lugar");
  const select11Lugar = document.getElementById("decimoPrimeiro-lugar");
  const select12Lugar = document.getElementById("decimoSegundo-lugar");
  const select13Lugar = document.getElementById("decimoTerceiro-lugar");
  const select14Lugar = document.getElementById("decimoQuarto-lugar");
  const select15Lugar = document.getElementById("decimoQuinto-lugar");
  const select16Lugar = document.getElementById("decimoSexto-lugar");
  const select17Lugar = document.getElementById("decimoSetimo-lugar");
  const select18Lugar = document.getElementById("decimoOitavo-lugar");
  const select19Lugar = document.getElementById("decimoNono-lugar");
  const select20Lugar = document.getElementById("vigesimo-lugar");

  pilotos.forEach(piloto=> {
    const option = document.createElement("option");
    option.value = piloto;
    option.text = piloto;

    selectVencedor.appendChild(option.cloneNode(true));
    selectSegundoLugar.appendChild(option.cloneNode(true));
    selectTerceiroLugar.appendChild(option.cloneNode(true));
    selectQuartoLugar.appendChild(option.cloneNode(true));
    selectQuintoLugar.appendChild(option.cloneNode(true));
    selectSextoLugar.appendChild(option.cloneNode(true));
    selectSetimoLugar.appendChild(option.cloneNode(true));
    selectOitavoLugar.appendChild(option.cloneNode(true));
    selectNonoLugar.appendChild(option.cloneNode(true));
    selectDecimoLugar.appendChild(option.cloneNode(true));
    select11Lugar.appendChild(option.cloneNode(true));
    select12Lugar.appendChild(option.cloneNode(true));
    select13Lugar.appendChild(option.cloneNode(true));
    select14Lugar.appendChild(option.cloneNode(true));
    select15Lugar.appendChild(option.cloneNode(true));
    select16Lugar.appendChild(option.cloneNode(true));
    select17Lugar.appendChild(option.cloneNode(true));
    select18Lugar.appendChild(option.cloneNode(true));
    select19Lugar.appendChild(option.classList(true));
    select20Lugar.appendChild(option.cloneNode(true));
    console.log("opções de seleçãp ativadas");
  });

  //Simulando os resultados. APAGAR A PARTIR DAQUI DEPOIS
  document.getElementById("botao-simular").addEventListener("click", (e) =>{
    e.preventDefault();
    const vencedor = selectVencedor.value;
    const segundoLugar = selectSegundoLugar.value;
    const terceiroLugar = selectTerceiroLugar.value;
    const quartoLugar = selectQuartoLugar.value;
    const quintoLugar = selectQuintoLugar.value;
    const sextoLugar = selectSextoLugar.value;
    const setimoLugar = selectSetimoLugar.value;
    const oitavoLugar = selectOitavoLugar.value;
    const nonoLugar = selectNonoLugar.value;
    const decimoLugar = selectDecimoLugar.value;
    const dec1Lugar = select11Lugar.value;
    const dec2Lugar = select12Lugar.value;
    const dec3Lugar = select13Lugar.value;
    const dec4Lugar = select14Lugar.value;
    const dec5Lugar = select15Lugar.value;
    const dec6Lugar = select16Lugar.value;
    const dec7Lugar = select17Lugar.value;
    const dec8Lugar = select18Lugar.value;
    const dec9Lugar = select19Lugar.value;
    const ultimoLugar = select20Lugar.value;

    const resultado = `Vencedor: ${vencedor}, 
    Segundo lugar: ${segundoLugar}, 
    Terceiro lugar: ${terceiroLugar},
    Quarto lugar: ${quartoLugar},
    Quinto lugar: ${quintoLugar},
    Sexto lugar: ${sextoLugar},
    Sétimo lugar: ${setimoLugar},
    Oitavo lugar: ${oitavoLugar},
    Nono lugar: ${nonoLugar},
    Décimo lugar: ${decimoLugar},
    Décimo primeiro lugar: ${dec1Lugar},
    Décimo segundo lugar: ${dec2Lugar},
    Décimo terceiro lugar: ${dec3Lugar},
    Décimo quarto lugar: ${dec4Lugar},
    Décimo quinto lugar: ${dec5Lugar},
    Décimo sexto lugar: ${dec6Lugar},
    Décimo sétimo lugar: ${dec7Lugar},
    Décimo oitavo lugar: ${dec8Lugar},
    Décimo nono lugar: ${dec9Lugar},
    Vigésimo lugar: ${ultimoLugar},
    `;

    document.getElementById("resultado-simulacao").innerText = resultado;
    console.log("Evento de clique adicionado ao botão");

  });

  //Chamando as funções para popular as tabelas
  popularTabelaPilotos();
  popularTabelaConstrutores();
  console.log("Tabelas populadas!");
  
    
