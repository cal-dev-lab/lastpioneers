import SubscribeForm from "@/app/SubscribeForm";

export default function MailingListSection() {
  return (
    <section id="mailing-list" className="bg-black py-40">
      <div className="mx-auto container px-4">
        <div>
          <p className="text-4xl text-white md:text-5xl">MAILING LIST</p>
          <p className="text-xl text-white mb-10">
            Subscribe to our mailing list to get the latest news, updates, and
            exclusive content.
          </p>
        </div>
        <SubscribeForm />
      </div>
    </section>
  );
}
