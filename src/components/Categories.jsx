export default function Categories({onClick}){
    return (
        <>
        <div className="header-category">
        <h3>Categories</h3>
        <h5>view all</h5>    
        </div>    
     <section className="categories">         

        <div className="category">
            <i className="fa-solid fa-shirt"></i>
            <p onClick={() => onClick("womens-dresses")}>clothes</p>
        </div>
        <div className="category">
            <i className="fa-solid fa-shoe-prints"></i>
            <p onClick={() => onClick("womens-shoes")}>shoes</p>
        </div>
        <div className="category">
            <i className="fa-solid fa-bag-shopping"></i>
            <p onClick={() => onClick("womens-bags")}>Bags</p>
        </div>
        <div className="category">
            <i className="fa-solid fa-heart"></i>
            <p onClick={() => onClick("beauty")}>Beauty</p>
        </div>

        <div className="category">
            <i className="fa-solid fa-gem"></i>
            <p onClick={() => onClick("womens-jewellery")}>Accessories</p>
        </div>
    </section>
    </>
    )
}