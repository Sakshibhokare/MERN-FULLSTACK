import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div>
      <VideoCard
        title={"how to learn coding in 30 days"}
        image={"thumbnail.jpg"}
        thumbnail={"thumbnail.jpg"}
        author={"Saksheee"}
        views={"100k"}
        timestamp={"2 days ago"}></VideoCard>
    </div>
  );
}
