import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function GallerySection() {
  const photos = [
    {
      id: 1,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1742566038/lights_udaeft.jpg",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1742566039/band-photo-with-crowd_xrlcxr.jpg",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1742566038/crowd-silhouette_r7xjbh.jpg",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1742566038/drums-pov_gkvnbv.jpg",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1742566039/crowd_gc3awz.jpg",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1742566038/crowd-2_aqh1gh.jpg",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534715/DSC_7808_vyzn6m_nrxczk.avif",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534716/DSC_8055_wngyuv_wuuizf.avif",
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534717/galleryTwo_qxqeeg_i6h3cn.avif",
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534718/DSC_8132_isrz8b_el5oiu.avif",
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534720/galleryThree_k47bdw_ys5fnd.avif",
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534717/DSC_7996_voenyb_f4bcx9.avif",
    },
  ];

  return (
    <section id="gallery" className="bg-white py-40">
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
                  alt="Pictures of the band, press shots and live performances."
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <p className="text-right pt-10">Swipe for more images</p>
      </section>
    </section>
  );
}
