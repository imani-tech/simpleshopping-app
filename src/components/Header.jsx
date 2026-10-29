import { useState } from "react"
import '../App.css';


export default function Header({onClick}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }
   
    return (
       <nav className="top-section">
        <button type="button" onClick={handleMenu} className="menu-btn">
            <i className="fa-solid fa-bars"></i> 
        </button>
      {isMenuOpen && (
        <div className="menu">
            <div className="top-menu">
           <h2>Shoply</h2>
           <button type="button" onClick={handleMenu}>
            <i className="fa-solid fa-xmark"></i>
           </button>
           </div>
           <div className="menu-categories">
            <div className="item">
            <i className="fa-solid fa-sliders"></i>
            <p onClick={() => onClick("")}>All Categories</p>
            </div>
            <div className="item">
            <i className="fa-solid fa-shirt"></i>
            <p onClick={() => onClick("womens-dresses")}>Clothes</p>
            </div>
            <div className="item">
            <i className="fa-solid fa-shoe-prints"></i>
            <p onClick={() => onClick("womens-shoes")}>Shoes</p>
            </div>
            <div className="item">
            <i className="fa-solid fa-bag-shopping"></i>
            <p onClick={() => onClick("womens-bags")}>Bags</p>
            </div>
            <div className="item">
            <i className="fa-solid fa-heart"></i>
            <p onClick={() => onClick("beauty")}>makeup</p>
            </div>
            <div className="item">
            <i className="fa-solid fa-gem"></i>
            <p onClick={() => onClick("womens-jewellery")}> Accessories</p>
            </div>
           </div>           
           <div className="bottom-menu">
            <div className="item">
            <i className="fa-regular fa-circle-user"></i>
            <p>Sign in</p>
            </div>
            <div className="item">
            <i className="fa-solid fa-gear"></i>
            <p>Settings</p>
            </div>
           </div>          
        </div>
      )}
        <p className="name">Shoply</p>
        <i className="fa-solid fa-bag-shopping"></i>
       </nav>
    )
}