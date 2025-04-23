import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div>
      <VideoGrid></VideoGrid>
    </div>
  );
}
