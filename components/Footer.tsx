import Link from "next/link";

export default function Footer() {
  return (
    <section className="w-full h-32 md:h-20 bg-black py-20">
      <div className="mx-auto container px-4 md:flex items-center justify-between">
        <div className="text-white text-xl md:text-3xl flex items-center gap-4">
          <h3>THE LAST PIONEERS</h3>
          <p className="text-sm">Copyright © 2025 All rights reserved.</p>
        </div>
        <div className="flex items-center md:justify-end gap-4 mt-4 md:mt-0">
          <Link href="/">
            <p className="text-white">HOME</p>
          </Link>
          <Link href="/store">
            <p className="text-white">STORE</p>
          </Link>
          <Link href="/tour">
            <p className="text-white">TOUR</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
