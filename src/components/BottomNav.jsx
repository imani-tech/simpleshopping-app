export default function BottomNav({ onActiveTab}){
    return (
        <>
            <nav className="bottom-nav">
                <button className="home" onClick={() => onActiveTab('home')}>
                    <i className="fa-solid fa-house"></i>
                    <p>Home</p>                    
                </button>
                <button className="category-nav" onClick={() => onActiveTab('categories')}>
                    <i className="fa-solid fa-table-cells-large"></i>
                    <p>Categories</p>
                </button>
                <button className="fav" onClick={() => onActiveTab('favorites')}>
                    <i className="fa-solid fa-heart"></i>
                    <p>Favorites</p>
                </button>
                <button className="profile" onClick={() => onActiveTab('profile')}>
                    <i className="fa-solid fa-user"></i>
                    <p>Profile</p>
                </button>
            </nav>
        </>
    )
}