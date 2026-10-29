import Image from '/images/Bags/Lavender-handbag.png';
import ShoeImg from '/images/Shoes/black boots.png'
import beautyImg from '/images/Makeup_Products/Kj Cosmetic.jpeg'
import assImg from '/images/Accessories/Cuff Ring.png'
import dressImg from '/images/Clothes/min-dress.png'


export default function SalesBanner(){
const bannaArry = [{
    eyebrow: "Summer Sale",
    title: "Up to 30% off",
    subtitle: "On selected items",
    category: "womens-bags",
    background: "#efe4fd",
    img: Image 
}, {
    eyebrow: "Step Into Style",
    title: "Walk in Confidence",
    subtitle: "Find your perfect pair",
    category: "womens-shoes",
    background: "#fce4ec",
    img: ShoeImg
},{
    eyebrow: "Your Beauty Era",
    title: "Glow Your Way",
    subtitle: "Beauty picks you'll love",
    category: "beauty",
    background: "#fbe8dc",
    img: beautyImg,
},{
    eyebrow: "The Finishing Touch",
    title: "Little Details, Big Style",
    subtitle: "Complete your look",
    category: "womens-jewellery",
    background: "#e4edf9",
    img: assImg
},{
    eyebrow: "New Season",
    title: "Your Style, Your Rules",
    subtitle: "Discover your next favorite",
    category: "womens-dresses",
    background: "#e4f1e7",
    img: dressImg
}]

    return (
        <>
        
          <div className="main-card">
            <div className="text">
            <p className="first-text">Summer sale</p>
            <h3 >Up to 30% off</h3>
            <p className="second-text">On selected items</p>
            <button className="btn" type="button">Shop now</button>
            </div>
            <div>
            <img  src={Image} alt="bag" width="150"  className="image" />
        </div>
       </div>


               </>
    )
}