import Link from "next/link";
import { Button } from "./ui/button";

export default function ShopNowBanner() {
  return (
    <section className="h-20 bg-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <p>NEW MERCH AVAILABLE NOW</p>
          <Link href="/store">
            <Button>SHOP NOW &rarr;</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
