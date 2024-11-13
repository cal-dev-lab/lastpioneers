export default function LoadingScreen() {
    return (
        <section
            className="bg-black z-[999] h-screen w-full flex flex-col items-center justify-center"
        >
            <div className="block space-y-2 md:space-y-6">
                <p className="text-white font-hollow text-5xl md:text-6xl lg:text-9xl">THE LAST</p>
                <p className="text-white font-hollow text-5xl md:text-6xl lg:text-9xl">PIONEERS</p>
            </div>

            <p className="text-white tracking-widest">
                loading...
            </p>
        </section>
    )
}