import { Products} from "./fetchProducts.js"

export function displayProducts(products: Products[]): void {
    const productsContainer = document.querySelector('#productsContainer') as HTMLDivElement;
    productsContainer.innerHTML = '';

    products.forEach(product => {
        createProductCards(product, productsContainer);
    });
}

function createProductCards({ images, title, description, rating, stock, category }: Products, container: HTMLDivElement): void {
    const h1El = document.querySelector('h1') as HTMLHeadingElement;

    if (document.body.contains(h1El)) {
    h1El.remove();
}
    const productCard = document.createElement('div');
    const headingDiv = document.createElement('div');
    const productInfoDiv = document.createElement('div');

    const titleEl = document.createElement('h2');
    const descriptionEl = document.createElement('h3');
    const ratingEl = document.createElement('p');
    const stockEl = document.createElement('p');
    const categoryEl = document.createElement('p');
    const buyButton = document.createElement('button');

    productCard.classList.add('productCard');
    headingDiv.classList.add('headingDiv');
    productInfoDiv.classList.add('productInfoDiv');

    stockEl.classList.add('stockEl');
    categoryEl.classList.add('categoryEl');
   
    if(images.length > 0){
        const imgEl = document.createElement('img');
        imgEl.src = images[0].trim();
        productCard.appendChild(imgEl);
    }

    titleEl.innerText = title;
    descriptionEl.innerText = description;
    categoryEl.innerText = `Category: ${category}`;
    ratingEl.innerHTML = `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>  ${rating.toString()}`;


    if (stock < 10) {
        stockEl.innerText = `Stock: Almost sold out. Only ${stock} left.`.toString();
        stockEl.classList.add('stockElChangeColor');
    } 
    else stockEl.innerText = `Stock: ${stock}`.toString();
    
    buyButton.innerText = 'Buy';
    buyButton.innerHTML = '<span><i class="fi fi-rr-shopping-cart-add buyIcon"></i> Buy </span>';

    headingDiv.append(titleEl, ratingEl);
    productInfoDiv.append(stockEl, categoryEl, buyButton);
    productCard.append(headingDiv, descriptionEl, productInfoDiv);
    container.appendChild(productCard);
}

