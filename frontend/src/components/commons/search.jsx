import search from "../../assets/search.svg"

const Search = () => {
    return (
        <>
            <div className="search w-full">
                <div className="flex justify-center items-center w-full bg-stone-800" style={{marginLeft: "4px", marginRight: "4px"}}>
                    <div className="input flex" style={{margin: "4px"}}>
                        <input type="text" className="border-2 border-green-500 rounded" placeholder="Search" />
                    </div>
                    <div className="searh_button w-10 flex items-center justify-center h-7 rounded bg-blue-300 cursor-pointer hover:bg-blue-500">
                        <button className="cursor-pointer">
                            <img className="w-6" src={search} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;