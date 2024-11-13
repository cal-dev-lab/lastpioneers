import TypingAnimation from "@/components/ui/typing-animation";

export default function LoadingScreen() {
    return (
        <section
            className="bg-black z-[999] h-screen w-full flex flex-col items-center justify-center"
        >
            <div className="block space-y-2 md:space-y-6">
                <h1 className="text-white font-hollow text-5xl md:text-6xl lg:text-9xl">THE LAST</h1>
                <h1 className="text-white font-hollow text-5xl md:text-6xl lg:text-9xl">PIONEERS</h1>
            </div>

            <TypingAnimation
                className="text-white text-xl tracking-widest"
                text="loading..."
            />
        </section>
    )
}