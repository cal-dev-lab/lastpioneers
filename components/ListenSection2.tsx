import Image from "next/image";
import { FaSpotify } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import Link from "next/link";

export default function ListenSection2() {
  return (
    <section className="bg-black py-40">
      <section className="mx-auto container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
          {/* Image */}
          <div className="">
            <Image
              alt="Square One album cover"
              width={600}
              height={600}
              src="https://res.cloudinary.com/djzt8qfjt/image/upload/v1740650709/Square_one_Website_v1_mjkibl.avif"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-between">
            <div className="md:space-y-20">
              <p className="text-white text-xl">DEBUT EP</p>
              <p className="text-white text-5xl md:text-7xl">SQUARE ONE</p>
            </div>
            <div className="space-y-4 mt-8 md:mt-0">
              <p className="text-white underline text-lg">
                OUT 28TH MAY, PRE-ORDER NOW
              </p>
              {/* <div className="flex items-center gap-4">
                  <Link href="">
                    <Button className="text-white">
                      <SiApplemusic />
                      <p>Apple Music</p>
                    </Button>
                  </Link>
                  <Link href="">
                    <Button className="text-white">
                      <FaSpotify />
                      <p>Spotify</p>
                    </Button>
                  </Link>
                </div> */}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
