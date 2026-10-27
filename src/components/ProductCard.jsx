
export default function ProductCard({productObj}){
    return (
        <section >
           {/* <div className="header-category">
            <h3>Popular products</h3>
            <h5>View all</h5>
            </div>  */}
            <div className="popular-products">
            <button type="button" className="favoriets">
                <i className="fa-regular fa-heart"></i>
                </button>
            <img src={productObj.thumbnail} alt={productObj.description} className="image"/>
            <p className="description">{productObj.title}</p>
            <p className="price">${productObj.price}</p>
            <p ><span><i className="fa-solid fa-star">
                </i></span> {productObj.rating}
                </p>
            </div>    
        </section>
    )
}