export default (param) => {
  
  param = param.split(".");
  return param.length === 1 ? `R$ <span class="price-more">${param[0]}</span>,00` : `R$ <span class="price-more">${param[0]}</span>,${param[1]}`
    
};