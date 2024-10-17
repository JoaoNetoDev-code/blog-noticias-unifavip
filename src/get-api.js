const apiKey = "ZxyGI1VCMTcNNszkFMoCPVM53_5ecnpAqBuXrFCGuNhTsR5K";

async function fetchLatestNews() {
  const url = 'https://api.currentsapi.services/v1/latest-news?' +
    'language=us&' +
    `apiKey=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

// Chamar a função para fazer a requisição e logar a resposta
fetchLatestNews();
