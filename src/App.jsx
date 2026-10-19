import { useState } from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Categories from './components/Categories'
import products from "./data/products";
import ProductCard from './components/ProductCard';


function App() {
const [selectedCategory, setSelectedCategory] = useState("")  
const [userSearch, setUserSearch]= useState("") 
let popular = products.slice(0, 5) 

const filteredProducts = selectedCategory === "" ? popular : products.filter((categoryProducts) => {  
  return categoryProducts.category === selectedCategory
});
 
const handleSelectedCategorie = (category) => {
  setSelectedCategory(category)
}


  return ( 
  <>  
    <Header />
    < SearchBar />
    <Categories onClick={handleSelectedCategorie} />
    <div>{   
   
    filteredProducts.map((product) => {
     
     return <ProductCard  productObj= {product} key={product.id}/>      
    })
    }
    </div>    
  
  </>)
   
}

export default App
