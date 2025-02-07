import search from "../../assets/search.svg"


const Search = () => {
    return (
        <>
            <div className="search w-fit">
                <div className="flex justify-center items-center" style={{marginLeft: "4px", marginRight: "4px"}}>
                    <div className="input flex" style={{margin: "4px"}}>
                        <input type="text" className="border-2 border-green-500 rounded" placeholder="Search" />

                    </div>
                    <div className="searh_button">
                        <button>
                            <img src={search} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;