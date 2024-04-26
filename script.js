const products = [
  { name: 'Soufflé Escalope', price: '550 DA', image: './products/item1.png', description: 'Soufflé Escalope سوفلي اسكالوب' },
  { name: 'Soufflé Viande', price: '550 DA', image: './products/item1.png', description: 'Soufflé Viande سوفلي لحم' },
  { name: 'Soufflé Kebda', price: '600 DA', image: './products/item1.png', description: 'Soufflé Foie (Kebda) سوفلي كبدة' },
  { name: 'Tacos Escalope', price: '450 DA', image: './products/item2.png', description: 'Tacos Escalope طاكوس اسكالوب' },
  { name: 'Tacos Viande', price: '450 DA', image: './products/item2.png', description: 'Tacos Viande طاكوس لحم' },
  { name: 'Tacos Kebda', price: '450 DA', image: './products/item2.png', description: 'Tacos Foie (Kebda) طاكوس كبدة' },
  { name: 'Tacos au foure Escalope', price: '500 DA', image: './products/item3.png', description: 'Tacos Escalope طاكوس اسكالوب' },
  { name: 'Tacos au foure Viande', price: '500 DA', image: './products/item3.png', description: 'Tacos Viande طاكوس لحم' },
  { name: 'Tacos au foure Kebda', price: '500 DA', image: './products/item3.png', description: 'Tacos Foie (Kebda) طاكوس كبدة' },
  { name: 'Melfouf Escalope', price: '300 DA', image: './products/item4.png', description: 'Melfouf Escalope ملفوف اسكالوب' },
  { name: 'Melfouf Viande', price: '300 DA', image: './products/item4.png', description: 'Melfouf Viande ملفوف لحم' },
  { name: 'Melfouf Kebda', price: '300 DA', image: './products/item4.png', description: 'Melfouf Foie (Kebda) ملفوف كبدة' },
  { name: 'Panini Escalope', price: '250 DA', image: './products/item5.png', description: 'Panini Escalope بانيني اسكالوب' },
  { name: 'Panini Viande', price: '250 DA', image: './products/item5.png', description: 'Panini Viande بانيني لحم' },
  { name: 'Panini Kebda', price: '250 DA', image: './products/item5.png', description: 'Panini Foie (Kebda) بانيني كبدة' },
  { name: 'Chapati Escalope', price: '250 DA', image: './products/item6.png', description: 'Chapati Escalope شباتي اسكالوب' },
  { name: 'Chapati Viande', price: '250 DA', image: './products/item6.png', description: 'Chapati Viande شباتي لحم' },
  { name: 'Chapati Kebda', price: '300 DA', image: './products/item6.png', description: 'Chapati Foie (Kebda) شباتي كبدة' },
];

let totalPrice = 0;

const carousel = document.getElementById('carousel');
const overlay = document.getElementById('overlay');
const cartIcon = document.getElementById('cart-icon');
const cartItems = document.getElementById('cart-items');
const cartWindow = document.getElementById('cart-window');
const cartItemsContainer = document.getElementById('cart-items-container');

fullNameInput.addEventListener('input', validateForm);
numberInput.addEventListener('input', validateForm);

cartIcon.addEventListener('click', () => {
  cartWindow.classList.toggle('show');
});

window.addEventListener('click', (event) => {
  if (!cartWindow.contains(event.target) && event.target !== cartIcon) {
    cartWindow.classList.remove('show');
  }
});

function createCard(product) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.productId = product.name;

  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.name;

  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = product.name;

  const price = document.createElement('div');
  price.classList.add('price');
  price.textContent = product.price;

  const frame = document.createElement('button');
  frame.classList.add('frame');
  frame.addEventListener('click', (event) => {
    event.stopPropagation();
    addToCart(product);
  });

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(frame);

  return card;
}

function addToCart(product) {
  const cartItemWrapper = document.createElement('div');
  cartItemWrapper.classList.add('cart-item-wrapper');

  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.style.width = '100%';

  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.name;

  const name = document.createElement('div');
  name.textContent = product.name;
  name.style.fontWeight = 'bold';
  name.style.fontSize = '12px';

  const price = document.createElement('div');
  price.textContent = product.price;
  price.style.fontWeight = 'bold';
  price.style.color = '#009620';
  price.style.fontSize = '12px';
  price.style.marginLeft = '10px';

  const titleInput = document.getElementById('titleInput');
  titleInput.value += product.name + ', ';

  const priceInput = document.getElementById('priceInput');
  priceInput.value += product.price + ', ';

  const removeIcon = document.createElement('img');
  removeIcon.src = './icons/delete.png';
  removeIcon.alt = 'Remove';
  removeIcon.classList.add('remove');
  removeIcon.addEventListener('click', () => {
    removeCartItem(cartItem, product.price); // Pass the price to removeCartItem
  });

  cartItem.appendChild(img);
  cartItem.appendChild(name);
  cartItem.appendChild(price);
  cartItem.appendChild(removeIcon);

  cartItemsContainer.appendChild(cartItem);

  // Update total price
  totalPrice += parseFloat(product.price.replace(' DA', '')); // Remove ' DA' and convert to number
  updateCartIcon();
}

function removeCartItem(item, itemPrice) {
  item.remove();
  // Deduct the price of the removed item from the total price
  totalPrice -= parseFloat(itemPrice.replace(' DA', '')); // Remove ' DA' and convert to number
  updateCartIcon();
}

function updateCartIcon() {
  cartItems.textContent = cartItemsContainer.children.length;
  // Update the displayed total price
  document.getElementById('total-price').textContent = totalPrice.toFixed(2) + ' DA'; // Display total price with 2 decimal places
  cartWindow.classList.add('show');
}

function createCardContainer() {
  const container = document.createElement('div');
  container.classList.add('card-container');
  return container;
}

const productGroups = products.reduce((acc, product) => {
  const groupIndex = Math.floor(acc.length / 3);
  if (!acc[groupIndex]) {
      acc[groupIndex] = [];
  }
  acc[groupIndex].push(product);
  return acc;
}, []);

productGroups.forEach(group => {
  const cardContainer = createCardContainer();
  group.forEach(product => {
      const card = createCard(product);
      cardContainer.appendChild(card);
  });
  carousel.appendChild(cardContainer);
});

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('myModal');
  const modalContent = document.querySelector('.modal-content');
  const span = document.getElementsByClassName('close')[0];

  function openModal(productName) {
  const product = products.find(product => product.name === productName);
  if (product) {
    const modalImage = document.getElementById('modal-image');
    modalImage.src = product.image;
    modalImage.alt = product.name;

    const modalTitle = document.getElementById('modal-title');
    modalTitle.textContent = product.name;

    const modalPrice = document.getElementById('modal-price');
    modalPrice.textContent = product.price + '';

    const modalDescription = document.getElementById('modal-description');
    modalDescription.textContent = product.description;
    modalDescription.style.paddingBottom = '40px';

    modal.style.display = 'block';
  } else {
    console.error(`Product with name "${productName}" not found.`);
  }
}


  function closeModal() {
    modal.style.display = 'none';
  }

  span.onclick = closeModal;

  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };

  updateCartIcon();

  const searchInput = document.getElementById('search');
  const clearButton = document.querySelector('.clear-button');

  clearButton.addEventListener('click', function (event) {
    searchInput.value = '';
    handleSearch();
  });

  searchInput.addEventListener('input', handleSearch);

  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(searchTerm));
    renderProducts(filteredProducts);
  }

  function renderProducts(products) {
    carousel.innerHTML = '';

    if (products.length === 0) {
      const noResultContainer = document.createElement('div');
      noResultContainer.classList.add('no-result-container');

      const noResultText = document.createElement('p');
      noResultText.textContent = 'لم يتم العثور على نتائج';
      noResultText.classList.add('no-result-text');
      noResultContainer.appendChild(noResultText);

      const noResultImage = document.createElement('img');
      noResultImage.src = './icons/noproduct.png';
      noResultImage.alt = 'No results found image';
      noResultImage.classList.add('no-result-image');
      noResultContainer.appendChild(noResultImage);

      carousel.appendChild(noResultContainer);
    } else {
      products.forEach(product => {
        const card = createCard(product);
        carousel.appendChild(card);
      });
    }
  }

  // Add event listeners for cards
  carousel.addEventListener('click', function (event) {
    const card = event.target.closest('.card');
    if (card) {
      const productName = card.dataset.productId;
      openModal(productName);
    }
  });
});

const searchInput = document.getElementById('search');
const clearButton = document.querySelector('.clear-button');

clearButton.addEventListener('click', function(event) {
  searchInput.value = '';
  handleSearch();
});


searchInput.addEventListener('input', handleSearch);

function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);
}


function renderProducts(products) {
    carousel.innerHTML = '';

    if (products.length === 0) {
        const noResultContainer = document.createElement('div');
        noResultContainer.classList.add('no-result-container');

        const noResultText = document.createElement('p');
        noResultText.textContent = 'لم يتم العثور على نتائج';
        noResultText.classList.add('no-result-text');
        noResultContainer.appendChild(noResultText);

        const noResultImage = document.createElement('img');
        noResultImage.src = './icons/noproduct.png'; 
        noResultImage.alt = 'No results found image';
        noResultImage.classList.add('no-result-image');
        noResultContainer.appendChild(noResultImage);

        carousel.appendChild(noResultContainer);
    } else {
        products.forEach(product => {
            const card = createCard(product);
            carousel.appendChild(card);
        });
    }
}


  function validateForm() {
    if (fullNameInput.value.trim() !== '' && numberInput.value.trim() !== '' && productOptions.value.trim() !== '') {
        sendButton.disabled = true;
        sendButton.style.opacity = 1;
    }
  }

  const images = document.querySelectorAll('.image');

  window.onload = function() {
    images.forEach(image => {
      const randomTop = Math.floor(Math.random() * (window.innerHeight - image.offsetHeight));
      const randomLeft = Math.floor(Math.random() * (window.innerWidth - image.offsetWidth));
      image.style.top = `${randomTop}px`;
      image.style.left = `${randomLeft}px`;
    });
  };
  
