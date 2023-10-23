export default function initFetchBitcoin() {
  const url = 'https://blockchain.info/ticker'

  fetch(url)
    .then(response => response.json())
    .then(response => {
      document.querySelector('.btc-preco').innerText = (1000 / response.BRL.sell).toFixed(4);
    }).catch(erro => {
      console.log(erro);
    })
}
