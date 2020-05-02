export default (param) => {
  switch (param) {
    case 1:
      return "Pequeno (300ml)";

    case 2:
      return "Médio (500ml)";

    case 3:
      return "Grande (700ml)";

    default: 
      return "Indefinido";
  }
};