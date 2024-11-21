let applets = [];

fetch('seedlings.json')
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
        img.height = 180;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.style.minHeight = '200px';

        const title1 = document.createElement('h5');
        title1.classList.add('card-title');
        title1.textContent = applet.title1;

        const title2 = document.createElement('h5');
        title2.classList.add('card-title');
        title2.textContent = applet.title2;

        const text = document.createElement('p');
        text.classList.add('card-text');
        text.textContent = truncateText(applet.description, 50); 
        text.id = `description-${applet.title1}`;

        const sources = document.createElement('a');
        sources.classList.add('card-text');

        const readMoreButton = document.createElement('button');
        readMoreButton.classList.add('btn', 'btn-link');
        readMoreButton.textContent = 'Read more';
        readMoreButton.addEventListener('click', function () {
            toggleDescription(text, applet.description, readMoreButton);
        });

        cardBody.appendChild(title1);
        cardBody.appendChild(title2);
        cardBody.appendChild(text);
        cardBody.appendChild(readMoreButton);

        card.appendChild(img);
        card.appendChild(cardBody);
        appletContainer.appendChild(card);
    });
}

function truncateText(text, limit) {
    if (text.length > limit) {
        return text.substring(0, limit) + '...'; 
    }
    return text;
}

function toggleDescription(textElement, fullText, button) {
    if (button.textContent === 'Read more') {
        textElement.textContent = fullText; 
        button.textContent = 'Show less';
    } else {
        textElement.textContent = truncateText(fullText, 100); 
        button.textContent = 'Read more';
    }
}
