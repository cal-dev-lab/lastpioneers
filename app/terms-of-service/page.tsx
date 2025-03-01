import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function TermsOfService() {
  return (
    <section className="bg-black h-screen relative w-full">
      <Navigation />
      <section className="bg-black py-40">
        <section className="mx-auto container px-4 text-white flex flex-col space-y-4">
          <div>
            <p className="text-2xl font-bold text-white">TERMS OF SERVICE</p>
            <p>Last Updated: 01/03/2025</p>
          </div>
          <p>
            By accessing or using our website ("Site"), you agree to comply with
            and be bound by the following Terms of Service ("Terms"). If you do
            not agree with these Terms, please do not use our Site.
          </p>
          <p className="text-xl uppercase">1. General Use</p>
          <p>
            The Last Pioneers provides an online platform for users to browse
            and purchase products. Your use of the Site is subject to these
            Terms, as well as any applicable laws and regulations.
          </p>
          <p className="text-xl uppercase">2. Transactions and Payments</p>
          <p>
            All transactions, payments, and order processing on The Last
            Pioneers are managed by Shopify. By making a purchase on our Site,
            you agree to Shopify’s Terms of Service and Payment Policies. The
            Last Pioneers does not process, store, or have access to your
            payment information. Shopify is responsible for handling payment
            security, refunds, chargebacks, and any financial disputes.
          </p>
          <p className="text-xl uppercase">3. Shipping and Fulfillment</p>
          <p>
            While we strive to ensure timely delivery, shipping times and
            fulfillment are subject to third-party providers, including Shopify
            and partnered carriers. Any delays or issues related to shipping
            should be addressed with the respective carrier.
          </p>
          <p className="text-xl uppercase">4. Returns and Refunds</p>
          <p>
            Our refund and return policies are subject to Shopify’s payment
            processing terms. If you experience an issue with a purchase, please
            follow the return policy outlined on our Site. Shopify manages
            refunds and chargebacks in accordance with its policies.
          </p>
          <p className="text-xl uppercase">5. User Conduct</p>
          <p>
            By using our Site, you agree not to: Use the Site for any unlawful
            or fraudulent purposes. Disrupt or interfere with the security or
            functionality of the Site. Misrepresent information or attempt to
            gain unauthorized access to accounts.
          </p>
          <p className="text-xl uppercase">6. Limitation of Liability</p>
          <p>
            The Last Pioneers is not liable for any direct, indirect,
            incidental, or consequential damages arising from your use of the
            Site, including but not limited to issues related to transactions,
            payments, or shipping delays. Shopify handles all financial
            transactions and is responsible for the security of those
            transactions.
          </p>
          <p className="text-xl uppercase">7. Changes to Terms</p>
          <p>
            We reserve the right to modify these Terms at any time. Any updates
            will be posted on this page with a revised "Last Updated" date. Your
            continued use of the Site after changes are made constitutes
            acceptance of the new Terms.
          </p>
          <p className="text-xl uppercase">8. Contact Information</p>
          <p>
            For any questions or concerns about these Terms, please contact us
            at [Insert Contact Email]. By using The Last Pioneers, you
            acknowledge that Shopify is responsible for transaction processing
            and agree to abide by these Terms.
          </p>
        </section>
      </section>
      <Footer />
    </section>
  );
}
