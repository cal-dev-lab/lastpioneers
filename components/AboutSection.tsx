import TextReveal from "@/components/ui/text-reveal";

export default function AboutSection() {
  return (
    <section id="about">
      <TextReveal
        className="dark !text-white fill-white bg-black"
        text="The Last Pioneers are an indie alternative band from Wolverhampton. Their sound is a unique blend of classic indie riffs with alternative rock rhythm. The band pride themselves on delivering energetic and engaging live performances."
      />
    </section>
  );
}
