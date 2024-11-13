import SubscribeForm from "@/app/SubscribeForm";

export default function MailingListSection() {
    return (
        <section id="mailing-list" className="flex items-center justify-center h-96 w-full bg-white px-6 md:px-10">
            <div className="flex flex-col justify-center max-w-5xl text-center">
                <h2 className="text-4xl md:text-7xl">MAILING LIST</h2>
                <p className="text-xl mb-4">Subscribe to our mailing list to get the latest news, updates, and exclusive content.</p>
                <SubscribeForm />
            </div>
        </section>
    )
}