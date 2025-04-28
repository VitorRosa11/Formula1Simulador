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
    const tabela = getElementById("corpo-tabela-construtores");
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

    popularTabelaPilotos();
    popularTabelaConstrutores();
    console.log("Tabelas populadas!");

