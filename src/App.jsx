import { useState } from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Categories from './components/Categories'
import products from "./data/products";
import ProductCard from './components/ProductCard';
import SalesBanner from './components/SaleBanner';

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
const isHomeView = selectedCategory === "" && userSearch === ""; 
const displaySearch = userSearch !== "" && selectedCategory === ""
  return ( 
  <section className="whole-page">  
    <Header onClick={handleSelectedCategorie}/>
    <SearchBar onChange={handleUserSearchResult} />
    {isHomeView && <SalesBanner /> }       
    {isHomeView &&  <Categories onClick={handleSelectedCategorie} /> }  
    {!isHomeView && (
      <div className="category-view-header">
      <button onClick={() => {
        handleSelectedCategorie("");
        handleUserSearchResult("")
        }}>
      <i className="fa-solid fa-arrow-left"></i>
      </button>
      <h3>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h3>
      </div>
    )} 
    {displaySearch &&(
      <h4>Search results..</h4>
    )}
    <div >{   
   
    searchResults.map((product) => {
     
     return <ProductCard  productObj= {product} key={product.id}/>      
    })
    }
    </div>    
  
  </section>)
   
}

export default App
