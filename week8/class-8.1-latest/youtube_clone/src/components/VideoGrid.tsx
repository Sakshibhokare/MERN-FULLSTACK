import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "how to learn coding in 30 days",
    image: "thumbnail.jpg",
    thumbnail: "thumbnail.jpg",
    author: "Sakshee",
    views: "100k",
    timestamp: "2 days ago",
},
{
    title: "how to learn coding in 30 days",
    image: "thumbnail.jpg",
    thumbnail: "thumbnail.jpg",
    author: "Sakshee",
    views: "100k",
    timestamp: "2 days ago",
},
{
    title: "how to learn coding in 30 days",
    image: "thumbnail.jpg",
    thumbnail: "thumbnail.jpg",
    author: "Sakshee",
    views: "100k",
    timestamp: "2 days ago",
},
{
    title: "how to learn coding in 30 days",
    image: "thumbnail.jpg",
    thumbnail: "thumbnail.jpg",
    author: "Sakshee",
    views: "100k",
    timestamp: "2 days ago",
},
{
    title: "how to learn coding in 30 days",
    image: "thumbnail.jpg",
    thumbnail: "thumbnail.jpg",
    author: "Sakshee",
    views: "100k",
    timestamp: "2 days ago",
},
{
    title: "how to learn coding in 30 days",
    image: "thumbnail.jpg",
    thumbnail: "thumbnail.jpg",
    author: "Sakshee",
    views: "100k",
    timestamp: "2 days ago",
},
{
    title: "how to learn coding in 30 days",
    image: "thumbnail.jpg",
    thumbnail: "thumbnail.jpg",
    author: "Sakshee",
    views: "100k",
    timestamp: "2 days ago",
},
{
    title: "how to learn coding in 30 days",
    image: "thumbnail.jpg",
    thumbnail: "thumbnail.jpg",
    author: "Sakshee",
    views: "100k",
    timestamp: "2 days ago",
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
                title={video.title}
                image={video.image}
                thumbnail={video.thumbnail}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
            ></VideoCard>
        </div>)}
    </div>
}