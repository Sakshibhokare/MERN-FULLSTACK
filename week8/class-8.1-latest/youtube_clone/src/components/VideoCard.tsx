export function VideoCard() {
    return <div>
        <img src="/thumbnail.jpg"></img>
        <div className="grid grid-cols-12 bg-red-50">
            <div className="grid-span-2">
                <img src="/thumbnail.jpg"></img>
            </div>
            <div className="grid-span-10">
                Title: demo title
            </div>
        </div>
    </div>
}