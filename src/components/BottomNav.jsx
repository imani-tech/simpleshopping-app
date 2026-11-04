export default function BottomNav(){
    return (
        <>
            <nav className="bottom-nav">
                <button className="home">
                    <i className="fa-solid fa-house"></i>
                    <p>Home</p>                    
                </button>
                <button className="category-nav">
                    <i className="fa-solid fa-table-cells-large"></i>
                    <p>Categories</p>
                </button>
                <button className="fav">
                    <i className="fa-solid fa-heart"></i>
                    <p>Favorites</p>
                </button>
                <button className="profile">
                    <i className="fa-solid fa-user"></i>
                    <p>Profile</p>
                </button>
            </nav>
        </>
    )
}