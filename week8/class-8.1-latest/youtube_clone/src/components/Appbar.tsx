import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return <div className="grid grid-cols-3 p-5" >
        <div>
            YouTube
        </div>
        <div>
            <SearchBar></SearchBar>
        </div>
        <div>
            sign in
        </div>
    </div>
}