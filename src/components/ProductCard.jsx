
export default function ProductCard({productObj}){
    return (
        <section >
          
            <div className="popular-products">
<div className="products-wrapper">
              <div className="button-image"> 
            <button type="button" className="favoriets">
                <i className="fa-regular fa-heart"></i>
                </button>
                <div className="images-container">
            <img src={productObj.thumbnail} alt={productObj.description} className="image-productCard"/>
</div>
</div>
 </div>
 <div className="product-info-wrapper">
            <p className="description">{productObj.title}</p>
            <div className="pr-wrapper">
            <p className="price">${productObj.price}</p>
            <p className="rate"><span><i className="fa-solid fa-star">
                </i></span> {productObj.rating}
                </p>
                </div>
                </div>
            </div>    
        </section>
    )
}