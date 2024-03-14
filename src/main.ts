import { getProducts, Products} from "./modules/fetchProducts.js";
import { displayProducts } from "./modules/displayProducts.js";

const formEl = document.querySelector('form') as HTMLFormElement;

formEl.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    const inputValue = document.getElementById('searchInput') as HTMLInputElement;
    const value = inputValue.value;

    getProducts(value)
    .then((products: Products[]) => {
        displayProducts(products);
    })
    
    formEl.reset();
}) 




