export default function LoadingScreen() {
    return (
        <section
            className="bg-black z-[999] h-screen w-full flex flex-col items-center justify-center"
        >
            <div className="hidden md:block">
                <p className="text-white font-hollow md:text-6xl lg:text-9xl">THE LAST PIONEERS</p>
            </div>
            <div className="block space-y-2 md:hidden">
                <p className="text-white font-hollow text-6xl">THE LAST</p>
                <p className="text-white font-hollow text-6xl">PIONEERS</p>
            </div>

            <p className="text-white tracking-widest">
                loading...
            </p>
        </section>
    )
}