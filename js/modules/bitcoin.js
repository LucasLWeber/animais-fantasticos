export default function fetchBitcoin(url, target) { 
  fetch(url)
    .then(response => response.json())
    .then(response => {
      document.querySelector(target).innerText = (1000 / response.BRL.sell).toFixed(4);
    }).catch(erro => {
      console.log(erro);
    })
}
