import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/Appbar";
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div>
      <AppBar></AppBar>
      <VideoGrid></VideoGrid>
    </div>
  );
}
