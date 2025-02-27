import Image from "next/image";
import { Button } from "./ui/button";
import { FaSpotify } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import Link from "next/link";
import FadeInUpWrapper from "./FadeInUpWrapper";

export default function ListenSection() {
  return (
    <section className="bg-black py-40">
      <FadeInUpWrapper>
        <section className="mx-auto container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
            {/* Text */}
            <div className="flex flex-col justify-between">
              <div className="md:space-y-20">
                <p className="text-white text-xl">OUR LATEST SINGLE</p>
                <p className="text-white text-5xl md:text-7xl">
                  "COMING FOR YOU"
                </p>
              </div>
              <div className="space-y-4 mt-8 md:mt-0">
                <p className="text-white underline text-lg hidden md:block">
                  LISTEN NOW
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://music.apple.com/gb/album/coming-for-you/1798680069?i=1798680070"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="text-white">
                      <SiApplemusic />
                      <p>Apple Music</p>
                    </Button>
                  </Link>
                  <Link
                    href="https://open.spotify.com/album/0OndgAsI3wozOSw7vPWI4h?si=nArsdOC9QJST2P3x_p_eZw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="text-white">
                      <FaSpotify />
                      <p>Spotify</p>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="flex items-center justify-end">
              <Image
                alt="Coming For You album cover"
                width={600}
                height={600}
                src="https://res.cloudinary.com/djzt8qfjt/image/upload/v1740616529/COMING_FOR_YOU_ALBUM_ARTWORK_FOR_WEBSITE_v2_efatrr.avif"
              />
            </div>
          </div>
        </section>
      </FadeInUpWrapper>
    </section>
  );
}
