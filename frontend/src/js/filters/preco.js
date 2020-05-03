export default (param) => {
  
  param = param.split(".");
  return `R$ <span class="price-more">${param[0]}</span>,${param[1]}`
    
};