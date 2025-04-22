import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div>
      <VideoCard></VideoCard>
    </div>
  );
}
