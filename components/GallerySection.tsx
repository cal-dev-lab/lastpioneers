import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import FadeInUpWrapper from "./FadeInUpWrapper";

export default function GallerySection() {
  const photos = [
    {
      id: 1,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534715/DSC_7808_vyzn6m_nrxczk.avif",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534716/DSC_8055_wngyuv_wuuizf.avif",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534717/galleryTwo_qxqeeg_i6h3cn.avif",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534718/DSC_8132_isrz8b_el5oiu.avif",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534720/galleryThree_k47bdw_ys5fnd.avif",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534717/DSC_7996_voenyb_f4bcx9.avif",
    },
  ];

  return (
    <section id="gallery" className="bg-white py-40">
      <FadeInUpWrapper>
        <section className="mx-auto container px-4">
          <Carousel className="container mx-auto relative w-full">
            <CarouselContent>
              {photos.map((photo) => (
                <CarouselItem key={photo.id}>
                  <Image
                    priority
                    src={photo.src}
                    width={3840}
                    height={2160}
                    layout="responsive"
                    alt="Pictures of the band, press shots and live performances."
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <p className="text-right pt-10">Swipe for more images</p>
        </section>
      </FadeInUpWrapper>
    </section>
  );
}
