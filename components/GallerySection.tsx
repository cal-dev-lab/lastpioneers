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
        { id: 1, src: "https://res.cloudinary.com/djzt8qfjt/image/upload/q_auto,f_auto/v1731516590/DSC_7808_vyzn6m.jpg"},
        { id: 2, src: "https://res.cloudinary.com/djzt8qfjt/image/upload/q_auto,f_auto/v1731516371/DSC_8055_wngyuv.jpg" },
        { id: 3, src: "https://res.cloudinary.com/djzt8qfjt/image/upload/q_auto,f_auto/v1731465600/galleryTwo_qxqeeg.png" },
        { id: 4, src: "https://res.cloudinary.com/djzt8qfjt/image/upload/q_auto,f_auto/v1731516476/DSC_8132_isrz8b.jpg" },
        { id: 5, src: "https://res.cloudinary.com/djzt8qfjt/image/upload/q_auto,f_auto/v1731465602/galleryThree_k47bdw.png" },
        { id: 6, src: "https://res.cloudinary.com/djzt8qfjt/image/upload/q_auto,f_auto/v1731516471/DSC_7996_voenyb.jpg" },
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





{/* <Carousel className="flex max-w-xs md:max-w-xl lg:max-w-5xl xl:max-w-7xl mx-auto">
                <CarouselContent className=" mx-auto">
                    {
                        photos.map((photo, index) => (
                            <CarouselItem key={index}>
                                <Image src={photo.src} width={1920} height={1080}  alt="listen section" className="w-full lg:w-[70%] mx-auto" />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel> */}


// <>
//             <div className="w-full bg-black px-6 md:px-10">
//                 <div className="pt-20 md:pt-52">
//                     <h2 className="text-white text-7xl">GALLERY</h2>
//                     <p className="text-white">discover the story, sound, and soul of the band.</p>
//                 </div>
                // <Carousel className="md:-mt-52 flex max-w-xs md:max-w-xl lg:max-w-5xl xl:max-w-7xl items-center justify-center shrink mx-auto">
                //     <CarouselContent className="flex items-center justify-center mx-auto">
                //         {
                //             photos.map((photo, index) => (
                //                 <CarouselItem key={index}>
                //                     <Image src={photo.src}  alt="listen section"className="w-full lg:w-[30%] mx-auto" />
                //                 </CarouselItem>
                //             ))
                //         }
                //     </CarouselContent>
                //     <CarouselPrevious />
                //     <CarouselNext />
                // </Carousel>
//             </div>
//         </>