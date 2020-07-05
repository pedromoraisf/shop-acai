export default (param) => {
  switch (param) {
    case 1:
      return {
        descricao: "Granola", 
        valor: "",
        tempoPreparo: ""
      };

    case 2:
      return {
        descricao: "Paçoca", 
        valor: 3.00,
        tempoPreparo: 3
      };

    case 3:
      return {
        descricao: "Leite ninho", 
        valor: 3.00,
        tempoPreparo: ""
      };

    default:
      return {
        descricao: "Indefinido", 
        valor: false,
        tempoPreparo: false
      };
  }
};