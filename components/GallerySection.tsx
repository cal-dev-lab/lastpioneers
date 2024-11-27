import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

export default function GallerySection() {
    const photos = [
        { id: 1, src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534715/DSC_7808_vyzn6m_nrxczk.avif"},
        { id: 2, src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534716/DSC_8055_wngyuv_wuuizf.avif" },
        { id: 3, src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534717/galleryTwo_qxqeeg_i6h3cn.avif" },
        { id: 4, src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534718/DSC_8132_isrz8b_el5oiu.avif" },
        { id: 5, src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534720/galleryThree_k47bdw_ys5fnd.avif" },
        { id: 6, src: "https://res.cloudinary.com/djzt8qfjt/image/upload/v1731534717/DSC_7996_voenyb_f4bcx9.avif" },
    ]

    return (
        <section id="gallery" className="w-full bg-black px-6 md:px-10 py-20 flex flex-col space-y-10">
            <div>
                <h1 className="text-white text-4xl md:text-7xl">GALLERY</h1>
            </div>

            <Carousel className="mx-auto w-[80%] lg:max-w-7xl">
                <CarouselContent>
                    {
                        photos.map((photo) => (
                            <CarouselItem key={photo.id}>
                                <Image src={photo.src} width={1280} height={720}  alt="Pictures of the band, press shots and live performances." />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}
