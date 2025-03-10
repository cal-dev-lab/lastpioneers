import Link from "next/link";
import { VelocityScroll } from "./magicui/scroll-based-velocity";

export default function ScrollText() {
  return (
    <div className="pt-20 relative flex text-white w-full flex-col items-center justify-center overflow-hidden bg-black">
      <Link href="/store">
        <VelocityScroll>
          STORE IS NOW OPEN - CLICK HERE TO VISIT -{" "}
        </VelocityScroll>
      </Link>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4"></div>
    </div>
  );
}
