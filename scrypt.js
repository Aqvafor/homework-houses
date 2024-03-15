const houses = [
    {
        imageUrl: './img/AtamanHouse.png',
        name: 'Атаман',
        area: '250 кв.м',
        dimensions: '5x6 м',
        constructionTime: '186 дней',
        rooms: '7',
        houseType: 'Одноэтажный',
        price: '1 780 000',
    features: ["С мансардой", "С гаражом", "С панорамными окнами", "Двухэтажный"]
    },
    {
        imageUrl: './img/AtamanHouse.png',
        name: 'Гетьман',
        area: '200 кв.м',
        dimensions: '7x9 м',
        constructionTime: '221 дней',
        rooms: '5',
        houseType: 'Одноэтажный',
        price: '2 000 000',
    features: ["С мансардой", "Одноэтажный"]
    },
    {
        imageUrl: './img/AtamanHouse.png',
        name: 'Хорунжий',
        area: '100 кв.м',
        dimensions: '7x9 м',
        constructionTime: '116 дней',
        rooms: '3',
        houseType: 'С мансардой',
        price: '1 780 000',
    features: ["С гаражом", "Трехэтажные"]
    },
    {
        imageUrl: './img/AtamanHouse.png',
        name: 'Кошевой',
        area: '99 кв.м',
        dimensions: '7x4 м',
        constructionTime: '36 дней',
        rooms: '5',
        houseType: 'С цокольным этажом',
        price: '1 780 000',
    features: ["С панорамными окнами", "Двухэтажный"]
    },
    {
        imageUrl: './img/AtamanHouse.png',
        name: 'Есаул',
        area: '130 кв.м',
        dimensions: '8x9 м',
        constructionTime: '90 дней',
        rooms: '10',
        houseType: 'С гаражом',
        price: '1 780 000',
    features: ["С мансардой", "С гаражом", "Одноэтажный"]
    },
    {
        imageUrl: './img/AtamanHouse.png',
        name: 'Урядник',
        area: '128 кв.м',
        dimensions: '5x9 м',
        constructionTime: '40 дней',
        rooms: '9',
        houseType: 'Трехэтажные',
        price: '1 780 000',
    features: ["С мансардой", "С гаражом", "С цокольным этажом"]
    }
];



function displayHouses(filteredHouses) {
    const container = document.querySelector('.popular__types');
    container.innerHTML = ''; 
    filteredHouses.forEach(house => {
      const houseCard = `
        <article class="popular__types__card d-ib">
          <div class="popular__types__card-img">
            <img src="${house.imageUrl}" alt="${house.name}" />
          </div>
          <h3 class="popular__types__card__name ml-32">“${house.name}”</h3>
          <div class="popular__types__card__first-row">
            <p class="popular__types__card__text ml-32">Площадь: <span>${house.area} </span></p>
            <p class="popular__types__card__text-fisrt-second-text">Срок стройки: <span>${house.constructionTime}</span></p>
          </div>
          <div class="popular__types__card__second-row">
            <p class="popular__types__card__text ml-32">Размеры: <span>${house.dimensions}</span></p>
            <p class="popular__types__card__text__second-second">Комнат: <span>${house.rooms}</span></p>
          </div>
          <div>
            <div class="popular__types__card__third-row">
              <p class="popular__types__card__text__three ml-45">Тип дома:</p><p class="popular__types__card__text-dark">${house.houseType}</p>
            </div>
            <p class="popular__types__card__text__for mt-10 ml-45">Стоимость: <span class="popular__types__card__text-dark-2 ">от</span>
            <mark class="popular__types__card__price">${house.price} руб</mark></p>
            <div class="popular__types__card__btn-info">
              <button class="popular__types__card__btn ml-32 mt-10">смотреть проекты</button>
              <p class="popular__types__card__info">Индивидуальная<br>планировка дома</p>
            </div>
          </div>
        </article>
      `;
      container.innerHTML += houseCard;
    });
  }
  

  displayHouses(houses);
  
  function filterHouses(features) {
    const featuresArray = features.split(', ').map(feature => feature.trim()); 

    const filteredHouses = houses.filter(house => 
      featuresArray.every(feature => house.features.includes(feature)) 
    );
    displayHouses(filteredHouses);
  }
  

  document.querySelectorAll('.popular__a').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault(); 
      const feature = this.textContent.trim();
      filterHouses(feature);
      updateActiveFilter(button);
    });
  });

function updateActiveFilter(selectedButton) {
  document.querySelectorAll('.popular__a').forEach(button => {
    button.classList.remove('popular__a-select');
  });
  selectedButton.classList.add('popular__a-select');
}