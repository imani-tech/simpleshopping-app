export default function Categories({onClick}){
    return (
        <>
        <h4>Categories</h4>
     <section className="categories">  
        <div className="items">
            <i className="fa-solid fa-sliders"></i>
            <p onClick={() => onClick("")}>All</p>
        </div>   

        <div className="items">
            <i className="fa-solid fa-shirt"></i>
            <p onClick={() => onClick("clothes")}>clothes</p>
        </div>
        <div className="items">
            <i className="fa-solid fa-shoe-prints"></i>
            <p onClick={() => onClick("shoes")}>shoes</p>
        </div>
        <div className="items">
            <i className="fa-solid fa-bag-shopping"></i>
            <p onClick={() => onClick("bags")}>Bags</p>
        </div>
        <div className="items">
            <i className="fa-solid fa-heart"></i>
            <p onClick={() => onClick("makeup-Products")}>Makeup</p>
        </div>

        <div className="items">
            <i className="fa-solid fa-gem"></i>
            <p onClick={() => onClick("accessories")}>Accessories</p>
        </div>
    </section>
    </>
    )
}