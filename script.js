document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('productContainer');

    // Array of products with details
    const products = [
        { title: 'Dog Food', image: './image/food1.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food2.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food3.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food4.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food5.jpg', description: 'Brunos Wild Essentials Dry Dog Food - Mother & Puppy Starter .' },
        { title: 'Dog Food', image: './image/food6.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food7.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food8.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food9.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food10.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food11.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food12.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food13.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food14.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food15.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food16.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food17.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food18.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food19.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food20.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food21.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food22.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food23.jpg', description: 'Premium dog food for a healthy pup.' },
        { title: 'Dog Food', image: './image/food24.jpg', description: 'Premium dog food for a healthy pup.' },

    ];

    // Function to create a product card
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';

        const image = document.createElement('img');
        image.src = product.image;
        image.className = 'card-img-top';
        image.alt = 'Product Image';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = product.title;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = product.description;

        const buyButton = document.createElement('a');
        buyButton.href = '#';
        buyButton.className = 'btn btn-primary';
        buyButton.textContent = 'Buy Now';

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(buyButton);

        card.appendChild(image);
        card.appendChild(cardBody);

        return card;
    }

    // Function to display product cards
    function displayProductCards() {
        products.forEach(product => {
            const productCard = createProductCard(product);
            productContainer.appendChild(productCard);
        });
    }

    // Call the displayProductCards function when the DOM is fully loaded
    displayProductCards();
});