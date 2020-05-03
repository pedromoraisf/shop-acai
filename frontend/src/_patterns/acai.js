/**
 * 
 * @description 👉🏽 Optei por definir o objeto Order diretamente no frontend;
 *              Minha API registra um objeto sem padrões definidos, pois contamos com a ausência de banco de dados no mesmo.
 *              Poderia realizar essa definição la na API?! Poderia, porém queria fazer de uma maneira diferente.
 *              Não recomendável fazer isso em projetos de grande porte, porém eu faço todo dia projetos de grande porte com padrões,
 *              queria fazer algo diferente apenas. 👈🏽
 * 
 */
export default {
  acai: {
    tamanho: "", 
    sabor: "", 
    personalizacoes: [
      {
        descricao: "", 
        valor: "", 
        tempoPreparo: ""
      }
    ], 
    tempoPreparo: "", 
    valorTotal: ""
  },
  tamanhoOpcoes: [
    {
      id: 1, 
      descricao: "Pequeno (300ml)", 
      valor: 10.00,
      tempoPreparo: 5
    },
    {
      id: 2, 
      descricao: "Médio (500ml)", 
      valor: 13.00,
      tempoPreparo: 7
    },
    {
      id: 3, 
      descricao: "Grande (700ml)", 
      valor: 15.00,
      tempoPreparo: 10
    }
  ],
  saborOpcoes: [
    {
      id: 1, 
      descricao: "Morango", 
      cor: "danger",
      tempoPreparo: false
    },
    {
      id: 2, 
      descricao: "Banana", 
      cor: "warn",
      tempoPreparo: false
    },
    {
      id: 3, 
      descricao: "Kiwi",
      cor: "success", 
      tempoPreparo: 5
    }
  ]
};