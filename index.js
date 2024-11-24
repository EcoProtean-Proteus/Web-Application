let applets = [];

fetch('index.json')
  .then(response => response.json())
  .then(data => {
    applets = data; 
    renderApplets(applets); 
  })
  .catch(error => console.error('Error fetching JSON:', error));


  function renderApplets(applets) {
    const appletContainer = document.getElementById('appletContainer');
    appletContainer.innerHTML = '';
  
    applets.forEach(applet => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const img = document.createElement('img');
      img.src = applet.imageUrl;
      img.classList.add('card-img-top');
      img.height = 200;
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      cardBody.style.minHeight = '200px';
  
      const title1 = document.createElement('h5');
      title1.classList.add('card-title');
      title1.textContent = applet.title1;
      title1.style.color = 'black';
  
      const title2 = document.createElement('h5');
      title2.classList.add('card-title');
      title2.textContent = applet.title2;
      title2.style.color = 'black';
      title2.style.marginBottom = '20px';
  
      const text = document.createElement('p');
      text.classList.add('card-text');
      text.textContent = applet.description;
  
      const button = document.createElement('a');
      button.classList.add('btn');
      button.href = applet.link;
      button.textContent = 'More';
  
      // Add button styling (will be adjusted in CSS for hover/active effect)
      button.style.backgroundColor = '#29716f';  // Set the base color (blue-green)
      
      cardBody.appendChild(title1);
      cardBody.appendChild(title2);
      cardBody.appendChild(text);
      cardBody.appendChild(button);
      card.appendChild(img);
      card.appendChild(cardBody);
      appletContainer.appendChild(card);
    });
  }
  
 

    
document.getElementById('searchButton').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredApplets = applets.filter(applet =>
      applet.title1.toLowerCase().includes(searchInput) ||
      applet.title2.toLowerCase().includes(searchInput)
    );


    

  renderApplets(filteredApplets);
});


document.getElementById('searchInput').addEventListener('input', function () {
  if (!this.value) {
    renderApplets(applets); 
  }
});