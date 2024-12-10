
fetch('header/navbar.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar navbar.html: ' + response.statusText);
    }
    return response.text();
  })
  .then(html => {
    document.getElementById('navbar').innerHTML = html;

    const navbarCSS = document.createElement('link');
    navbarCSS.rel = 'stylesheet';
    navbarCSS.href = 'css/navbar.css';
    document.head.appendChild(navbarCSS);
  })
  .catch(error => {
    console.error('Erro ao carregar a navbar:', error);
  });

// Carregar Footer
fetch('footer/footer.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar footer.html: ' + response.statusText);
    }
    return response.text();
  })
  .then(html => {
    document.getElementById('footer').innerHTML = html;

    const footerCSS = document.createElement('link');
    footerCSS.rel = 'stylesheet';
    footerCSS.href = 'css/footer.css';
    document.head.appendChild(footerCSS);
  })
  .catch(error => {
    console.error('Erro ao carregar o footer:', error);
  });