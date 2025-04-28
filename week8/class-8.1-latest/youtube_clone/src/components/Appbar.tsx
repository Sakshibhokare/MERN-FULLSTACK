import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return <div className="grid grid-cols-3 p-5" >
        <div className="text-md inline-flex items-center pb-2">
            YouTube
        </div>
        <div>
            <SearchBar></SearchBar>
        </div>
        <div className="text-md inline-flex items-center pb-2">
            sign in
        </div>
    </div>
}