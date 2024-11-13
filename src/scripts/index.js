import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '/src/scripts/hero.js';
import '/src/scripts/listResto.js';

function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

document.querySelector(".menu-button").addEventListener("click", showSidebar);
document.querySelector(".hide").addEventListener("click", hideSidebar);

async function jsonResto() {
    try {
        const response = await fetch('https://restaurant-api.dicoding.dev/list');
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }

        const resto = await response.json();

        const restoContainer = document.getElementById('resto-item');
        resto.restaurants.forEach(restaurant => {
            const restoDiv = document.createElement('div');
            restoDiv.className = 'restaurant';

            const restoImage = document.createElement('img');
            restoImage.src = `https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`;
            restoImage.alt = restaurant.name;
            restoDiv.appendChild(restoImage);

            const restName = document.createElement('a');
            restName.href = `https://restaurant-api.dicoding.dev/detail/${restaurant.pictureId}`;

            const restoName = document.createElement('h1');
            restoName.className = 'restoNames';
            restoName.textContent = restaurant.name;
            restoDiv.appendChild(restoName);

            const rating_Star = Math.round(restaurant.rating);
            for (let i = 0; i < 5; i++) {
                const ratingStar = document.createElement('i');
                ratingStar.className = 'fa fa-star';
                ratingStar.style.color = (i < rating_Star) ? 'gold' : 'lightgray';
                restoDiv.appendChild(ratingStar);
            }

            const restoRating = document.createElement('span');
            restoRating.className = 'restoRating';
            restoRating.textContent = restaurant.rating;
            restoDiv.appendChild(restoRating);

            const restoCity = document.createElement('p');
            restoCity.className = 'restoCity';
            restoCity.textContent = restaurant.city;
            restoDiv.appendChild(restoCity);

            const restoDescript = document.createElement('p');
            restoDescript.className = 'restoDescript';
            restoDescript.textContent = restaurant.description;
            restoDiv.appendChild(restoDescript);

            restoContainer.appendChild(restoDiv);
        });
    } catch (error) {
        console.error('Error fetching data', error);
    }
}

jsonResto();
