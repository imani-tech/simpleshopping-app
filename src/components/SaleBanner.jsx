import Image from '/images/Bags/Lavender-handbag.png';
export default function SalesBanner(){
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