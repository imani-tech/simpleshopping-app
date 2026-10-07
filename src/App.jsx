
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Categories from './components/Categories'
import products from "./data/products";
import ProductCard from './components/ProductCard';

function App() {

  return ( 
  <>  
    <Header />
    < SearchBar />
    <Categories />
    <div>{products.map((product) => {
     return <ProductCard  productObj= {product} key={product.id}/>      
    })}
    </div>    
  </>)
   
}

export default App
