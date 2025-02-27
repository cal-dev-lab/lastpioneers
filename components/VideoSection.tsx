import YouTube from "react-youtube";
import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";

export default function VideoSection() {
  const opts = {
    height: "250",
    width: "480",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <section id="video" className="bg-white py-20">
      <div className="mx-auto container px-4">
        <ScrollArea className="w-full rounded-md border p-4 flex gap-4">
          <div className="flex gap-4 justify-between w-full">
            <YouTube videoId="B9fwNktiM4I" opts={opts} />
            <YouTube videoId="ZRbxwYdYgvQ" opts={opts} />
            <YouTube videoId="wJ9cQKDjKFo" opts={opts} />
            <YouTube videoId="b76HUq6FS38" opts={opts} />
            <YouTube videoId="KGbl8UvMa3o" opts={opts} />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <p className="text-right pt-10">Swipe for more videos</p>
      </div>
    </section>
  );
}
