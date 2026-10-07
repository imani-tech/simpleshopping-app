
export default function ProductCard({productObj}){
    return (
        <>
            <button type="button"><i className="fa-regular fa-heart"></i></button>
            <p>{productObj.description}</p>
            <p>${productObj.price}</p>
            <p><span><i className="fa-solid fa-star"></i></span> {productObj.rating}</p>
        </>
    )
}