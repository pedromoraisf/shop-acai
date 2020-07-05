export default (param, priceMore = false) => {
  
  if (!param.length) return "R$ 0,00";
  
  param = param.split(".");
  if (priceMore) {
    return param.length === 1 ? `R$ <span>${param[0]}</span>,00` : `R$ <span>${param[0]}</span>,${param[1]}`
  } else {
    return param.length === 1 ? `R$ <span class="price-more">${param[0]}</span>,00` : `R$ <span class="price-more">${param[0]}</span>,${param[1]}`
  }
    
};