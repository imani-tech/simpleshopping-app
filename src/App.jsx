import { useState, useEffect } from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Categories from './components/Categories'
// import products from "./data/products";
import ProductCard from './components/ProductCard';
import SalesBanner from './components/SaleBanner';

function App() {
const [selectedCategory, setSelectedCategory] = useState("")  
const [userSearch, setUserSearch]= useState(""); 
const [apiProducts, setApiProducts] = useState([]);
const [popularProducts, setPopularProducts] = useState([])
const [allProducts, setAllProducts] = useState([]);
// let popular = apiProducts.slice(0, 5) 
const filteredProducts = selectedCategory === "" && userSearch === ""? popularProducts : selectedCategory === "" && userSearch !== "" ? allProducts : apiProducts;
const searchResults = filteredProducts.filter((product) => product.description.toLowerCase().includes(userSearch.trim().toLowerCase()))
const categoryApiUrls = {
  "womens-dresses":"https://dummyjson.com/products/category/womens-dresses",
  "womens-shoes": "https://dummyjson.com/products/category/womens-shoes",
  "womens-bags":	"https://dummyjson.com/products/category/womens-bags",
  "beauty" :	"https://dummyjson.com/products/category/beauty",
  "womens-jewellery":	"https://dummyjson.com/products/category/womens-jewellery"
}
 async function handleSelectedCategorie(category){
  setSelectedCategory(category)
  const url = categoryApiUrls[category];
  try {
        const response = await fetch(url)
        if(!response.ok){
          throw new Error("couldn't locate products based on seleced category")
        }
        const productData = await response.json()
        setApiProducts(productData.products);
  } catch (error) {
         console.error(error)
  }
}
const handleUserSearchResult = (text) => {
  setUserSearch(text)
}
const isHomeView = selectedCategory === "" && userSearch === ""; 
const displaySearch = userSearch !== "" && selectedCategory === "";

useEffect(() => {
  async function fetchPopularProductApi() {
    try {
      const urls = [
        "https://dummyjson.com/products/category/womens-bags",
        "https://dummyjson.com/products/category/womens-shoes",
        "https://dummyjson.com/products/category/beauty",
        "https://dummyjson.com/products/category/womens-jewellery",
        "https://dummyjson.com/products/category/womens-dresses"
      ]
        const responses = await Promise.all(
          urls.map(async (url) => {
            const response = await fetch(url)
          
            if(!response.ok){
          throw new Error("Cannot fetch resource")
        }
          return  response.json()
          })
        );
        const mixproducts = responses.map((categoryData) => {
          return categoryData.products[0]
        })    
       const everyProduct = responses.flatMap((items) => items.products)       
        setPopularProducts(mixproducts)
        setAllProducts(everyProduct)
    } catch (error) {
      console.log(error)
    }
  }
  fetchPopularProductApi()
}, [])
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
    <div className='products-grid'>{   
   (isHomeView ? popularProducts : searchResults).map((product) => {    
     return <ProductCard  productObj= {product} key={product.id}/>      
    })
    }
    </div>    
  
  </section>)
   
}

export default App
