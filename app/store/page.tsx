import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Store() {
  return (
    <>
      <Navigation />
      <section className="h-screen bg-black -mt-20 md:-mt-32">
        <div className="flex items-center justify-center h-screen text-white">
          <div className="mx-auto container px-4">
            <p className="text-xl mb-5">STORE</p>
            <p className="text-5xl">COMING SOON</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
