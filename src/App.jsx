import { useState } from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Categories from './components/Categories'
import products from "./data/products";
import ProductCard from './components/ProductCard';


function App() {
const [selectedCategory, setSelectedCategory] = useState("")  
const [userSearch, setUserSearch]= useState(""); 
let popular = products.slice(0, 5) 

const filteredProducts = selectedCategory === "" && userSearch === "" ? popular : selectedCategory === "" ? products : products.filter((categoryProducts) => {  
  return categoryProducts.category === selectedCategory
});
 const searchResults = filteredProducts.filter((product) => product.description.toLowerCase().includes(userSearch.trim().toLowerCase()))
const handleSelectedCategorie = (category) => {
  setSelectedCategory(category)
}
const handleUserSearchResult = (text) => {
  setUserSearch(text)
}

  return ( 
  <>  
    <Header />
    <SearchBar onChange={handleUserSearchResult} />
    <Categories onClick={handleSelectedCategorie} />
    <div>{   
   
    searchResults.map((product) => {
     
     return <ProductCard  productObj= {product} key={product.id}/>      
    })
    }
    </div>    
  
  </>)
   
}

export default App
