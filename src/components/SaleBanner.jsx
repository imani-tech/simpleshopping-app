import Image from '/images/Bags/Lavender-handbag.png';
import ShoeImg from '/images/Shoes/black boots.png'
import beautyImg from '/images/Makeup_Products/Peach Glow Beauty Collection.png'
import assImg from '/images/Accessories/Cuff Ring.png'
import dressImg from '/images/Clothes/min-dress.png'
import { useState, useEffect } from 'react';

const bannaArry = [{
    eyebrow: "Summer Sale",
    title: "Up to 30% off",
    subtitle: "On selected items",
    category: "womens-bags",
    background: "#efe4fd",
    img: Image,
    buttonColor: "#7754d1"
}, {
    eyebrow: "Step Into Style",
    title: "Walk in Confidence",
    subtitle: "Find your perfect pair",
    category: "womens-shoes",
    background: "#fce4ec",
    img: ShoeImg,
    buttonColor: "#c45b83"
},{
    eyebrow: "Your Beauty Era",
    title: "Glow Your Way",
    subtitle: "Beauty picks you'll love",
    category: "beauty",
    background: "#fbe8dc",
    img: beautyImg,
    buttonColor: "#c77752"
},{
    eyebrow: "The Finishing Touch",
    title: "Little Details, Big Style",
    subtitle: "Complete your look",
    category: "womens-jewellery",
    background: "#e4edf9",
    img: assImg,
    buttonColor: "#5279b8"
},{
    eyebrow: "New Season",
    title: "Your Style, Your Rules",
    subtitle: "Discover your next favorite",
    category: "womens-dresses",
    background: "#e4f1e7",
    img: dressImg,
    buttonColor: "#548464"
}];

export default function SalesBanner({ onClick }){
    const [currentIndex, setCurrentIndex] = useState(0);

const currentBanner = bannaArry[currentIndex];
useEffect(() => {
 const interval =   setInterval(() => {
        setCurrentIndex((prevCount) => (prevCount + 1) % bannaArry.length)

    }, 3000)
    return () => clearInterval(interval)
}, [])
    return (
        <>
        
          <div className="main-card" style={{backgroundColor: currentBanner.background}}>
            <div className="text">
            <p className="first-text">{currentBanner.eyebrow}</p>
            <h3>{currentBanner.title}</h3>
            <p className="second-text">{currentBanner.subtitle}</p>
            <button className="btn" type="button" style={{backgroundColor: currentBanner.buttonColor}} onClick={() => onClick(currentBanner.category)}>Shop now</button>
            </div>
            <div>
            <img  src={currentBanner.img} alt="bag" width="150"  className="image"/>            
        </div>
        <div className="buttons">
        {bannaArry.map((bannar, index) => {
        return  <button type='button' onClick={() => setCurrentIndex(index)} key={index} className={index === currentIndex ? "active-dot" : "dot"} ></button>
            })}
         </div>   
       </div>


               </>
    )
}