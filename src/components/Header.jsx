import { useState } from "react"
import '../App.css';
import classes from '../styles/Header.module.css'

export default function Header({onClick}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }
   
    return (
       <nav className={classes["top-section"]}>
        <button type="button" onClick={handleMenu} className={classes["menu-btn"]}>
            <i className={`fa-solid fa-bars ${classes.bar}`}></i> 
        </button>
      {isMenuOpen && (
        <div className={classes.menu}>
            <div className={classes.category}>
                <div className={`${classes["categories-menu"]} `}>
                   <p >Categories </p>
                   <i class="fa-solid fa-chevron-right"></i>                  
                </div>
                <div className={classes["categories-menu"]}>                   
                    <p>Settings</p>
                     <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>



        // <div className="menu">
        //     <div className="top-menu">
        //    <h2>Shoply</h2>
        //    <button type="button" onClick={handleMenu}>
        //     <i className="fa-solid fa-xmark"></i>
        //    </button>
        //    </div>

        //    <div className="menu-categories">
        //     <div className="categories">           
        //     <div className="item">            
        //     <p onClick={() => onClick("")}>Categories</p>
        //     <i class="fa-solid fa-chevron-right"></i>
        //     </div>
        //       <div className="bottom-menu">
        //     <div className="item">
        //     <i className="fa-regular fa-circle-user"></i>
        //     <p>Sign in</p>
        //     </div>
        //     <div className="item">
        //     <i className="fa-solid fa-gear"></i>
        //     <p>Settings</p>
        //     </div>
        //    </div> 
        //     </div>
        //     <div className="sub-menu">
        //     <div className="item">
        //     <i className="fa-solid fa-shirt"></i>
        //     <p onClick={() => onClick("womens-dresses")}>Clothes</p>
        //     </div>
        //     <div className="item">
        //     <i className="fa-solid fa-shoe-prints"></i>
        //     <p onClick={() => onClick("womens-shoes")}>Shoes</p>
        //     </div>
        //     <div className="item">
        //     <i className="fa-solid fa-bag-shopping"></i>
        //     <p onClick={() => onClick("womens-bags")}>Bags</p>
        //     </div>
        //     <div className="item">
        //     <i className="fa-solid fa-heart"></i>
        //     <p onClick={() => onClick("beauty")}>makeup</p>
        //     </div>
        //     <div className="item">
        //     <i className="fa-solid fa-gem"></i>
        //     <p onClick={() => onClick("womens-jewellery")}> Accessories</p>
        //     </div>
        //     </div>
        //    </div>           
           

        // </div>
      )}
        <p className={classes.name}>Shoply</p>
        <i className={`fa-solid fa-bag-shopping ${classes["shopping-bag"]}`}></i>
       </nav>
    )
}