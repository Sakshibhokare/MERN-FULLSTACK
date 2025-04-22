export function VideoCard(props: any) {
    return <div className="pl-2">
        <img src={props.thumbnail}></img>
        <div className="grid grid-cols-12 ">
            <div className="col-span-1">
                <img className="rounded-full w-15 h-15 " src={props.image}></img>
            </div>

            <div className="col-span-11 pl-2">
                <div>
                    {props.title}
                </div>
                <div className="col-span-10 pl-5 text-gray-600 text-base">
                    {props.author}
                </div>
                <div className="col-span-10 pl-5 text-gray-600 text-base">
                    {props.views} | {props.timestamp}
                </div>

            </div>

        </div>
    </div>
}