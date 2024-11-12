import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
    import Image from "next/image";

    import photoOne from "@/public/images/galleryOne.png";
    import photoTwo from "@/public/images/galleryTwo.png";
    import photoThree from "@/public/images/galleryThree.png";
    import photoFour from "@/public/images/galleryFour.png";
    import photoFive from "@/public/images/galleryFive.png";

export default function GallerySection() {
    const photos = [
        { id: 1, src: photoOne },
        { id: 2, src: photoTwo },
        { id: 3, src: photoThree },
        { id: 4, src: photoFour },
        { id: 5, src: photoFive }
    ]

    return (
        <>
            <div className="w-full bg-black px-6 md:px-10 py-20">
                <div className="pt-20">
                    <h2 className="text-white text-7xl">GALLERY</h2>
                    <p className="text-white">discover the story, sound, and soul of the band.</p>
                </div>
                <Carousel className="flex max-w-xs md:max-w-xl lg:max-w-5xl xl:max-w-7xl items-center justify-center shrink mx-auto">
                    <CarouselContent className="flex items-center justify-center mx-auto">
                        {
                            photos.map((photo, index) => (
                                <CarouselItem key={index}>
                                    <Image src={photo.src}  alt="listen section"className="w-full lg:w-[60%] mx-auto" />
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    )
}