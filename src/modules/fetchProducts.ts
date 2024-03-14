import { displayError } from "./displayError.js";

export type Products = {
    images: string;
    title: string;
    description: string;
    rating: number;
    stock: number;
    category: string;
}

export async function getProducts(inputValue: string): Promise<Products[]> {
    try {
        const url = `https://dummyjson.com/products/search?q=${inputValue}`;
    
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
    
        const productsData = await response.json();
        const products = productsData.products || []; 
    
        if(products.length === 0){
            const h1El = document.createElement('h1');
            h1El.innerText = `No results found. Check if your spelling is correct and try again!`;
            document.body.append(h1El);
           
            return [];
        }

        else return products as Products[];
         
    } catch (error) {
        displayError(error);
        
        return []; 
    }
}
