import { Button } from "./ui/button";
import Link from "next/link";

export default function TourSection() {
  return (
    <section className="bg-white py-40">
      <section className="mx-auto container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 items-start">
          {/* TITLE */}
          <div className="lg:col-span-2">
            <p className="text-2xl mb-20 lg:mb-0">TOUR</p>
          </div>
          {/* DATES */}
          <div className="col-span-3 space-y-10">
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-4">
                <p className="text-2xl">19.04.2025</p>
                <div className="col-span-2">
                  <p className="text-2xl">FEEL THE NOISE</p>
                  <p className="">WOLVERHAMPTON, UK</p>
                </div>
                <Link
                  href="https://feelthenoisefestival.seetickets.com/event/feel-the-noise-festival/various-venues-wolverhampton-city-centre/3250715"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="py-8 mt-4 lg:mt-0 w-full">
                    <p className="text-xl">BUY TICKETS</p>
                  </Button>
                </Link>
              </div>
            </div>
            <hr className="border-black" />
          </div>
        </div>
        <Link href="/tour">
          <p className="flex justify-end mt-20">ALL DATES &rarr;</p>
        </Link>
      </section>
    </section>
  );
}
