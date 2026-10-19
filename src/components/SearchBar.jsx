export default function SearchBar({onChange}) {

    return (
         <div className="search-bar">
        <span > 
           <i class="fa-solid fa-magnifying-glass"></i>
            </span>
        <input type="search" className="search"placeholder="Search ..." onChange={(e) => onChange(e.target.value)}/>
    </div>

    )
}