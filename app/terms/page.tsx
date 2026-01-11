import { Navigation } from "../../components/main/Navigation";
import { Footer } from "../../components/main/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Riftshot",
  description:
    "Terms of Service for Riftshot - Read our terms and conditions for using our service.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-[#FBF5DF]/50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair tracking-tight mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-black/60">
            Last updated: January 11, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-black/70 leading-relaxed">
                Welcome to Riftshot. These Terms of Service (&quot;Terms&quot;)
                govern your use of the Riftshot Chrome extension and related
                services (&quot;Service&quot;). By using our Service, you agree
                to be bound by these Terms.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                By accessing or using Riftshot, you agree to be bound by these
                Terms and our Privacy Policy. If you do not agree to these
                Terms, you may not use our Service.
              </p>
              <p className="text-base text-black/70 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will
                notify you of any material changes by posting the new Terms on
                our website. Your continued use of the Service after such
                modifications constitutes your acceptance of the updated Terms.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                2. Description of Service
              </h2>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                Riftshot is a Chrome browser extension that allows users to:
              </p>
              <ul className="space-y-2">
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Capture full-page screenshots of web pages</span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    Edit and customize screenshots with various layouts and
                    styles
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Export screenshots in multiple formats</span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Save preferences and settings to your account</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>

              <h3 className="text-lg font-semibold mb-3 mt-6">
                3.1 Account Creation
              </h3>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                To access certain features of Riftshot, you must create an
                account using Google OAuth. You are responsible for maintaining
                the confidentiality of your account credentials and for all
                activities that occur under your account.
              </p>

              <h3 className="text-lg font-semibold mb-3 mt-6">
                3.2 Account Requirements
              </h3>
              <ul className="space-y-2">
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    You must be at least 13 years old to use this Service
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    You must provide accurate and complete information
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>You may not share your account with others</span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    You must notify us immediately of any unauthorized use
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">
                3.3 Account Termination
              </h3>
              <p className="text-base text-black/70 leading-relaxed">
                You may delete your account at any time. We reserve the right to
                suspend or terminate your account if you violate these Terms or
                engage in any activity that may harm the Service or other users.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                4. Subscription and Payment
              </h2>

              <h3 className="text-lg font-semibold mb-3 mt-6">
                4.1 Paid Subscription Only
              </h3>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                Riftshot is a paid subscription service only. We do not offer a
                free plan. Features available under each subscription tier are
                described on our website and may change from time to time.
              </p>

              <h3 className="text-lg font-semibold mb-3 mt-6">
                4.2 Payment Processing
              </h3>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                All payments are processed securely through LemonSqueezy. By
                subscribing to a paid plan, you agree to LemonSqueezy&apos;s
                terms of service in addition to these Terms.
              </p>

              <h3 className="text-lg font-semibold mb-3 mt-6">4.3 Billing</h3>
              <ul className="space-y-2 mb-4">
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    Subscriptions are billed in advance on a recurring basis
                    (monthly or annually)
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    Your subscription will automatically renew unless cancelled
                    before the renewal date
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    Prices may change with 30 days&apos; notice before your next
                    billing cycle
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">
                4.4 Refund Policy
              </h3>
              <p className="text-base text-black/70 leading-relaxed">
                Refunds are only available within 7 days of your initial
                purchase. After this 7-day period, no refunds will be provided.
                To request a refund within the eligible period, please contact
                us through our Discord channel.
              </p>

              <h3 className="text-lg font-semibold mb-3 mt-6">
                4.5 Cancellation
              </h3>
              <p className="text-base text-black/70 leading-relaxed">
                You may cancel your subscription at any time. Upon cancellation,
                you will continue to have access to paid features until the end
                of your current billing period. No partial refunds will be
                provided for unused portions of your subscription.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Acceptable Use</h2>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                You agree not to use Riftshot to:
              </p>
              <ul className="space-y-2">
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Violate any applicable laws or regulations</span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    Infringe on intellectual property rights of others
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    Capture screenshots of content you do not have permission to
                    access
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Distribute malicious content or malware</span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    Attempt to reverse engineer, decompile, or hack the Service
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    Interfere with or disrupt the Service or its infrastructure
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    Resell or redistribute the Service without authorization
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                6. Intellectual Property
              </h2>

              <h3 className="text-lg font-semibold mb-3 mt-6">
                6.1 Our Intellectual Property
              </h3>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                Riftshot and its original content, features, and functionality
                are owned by Riftshot and are protected by international
                copyright, trademark, patent, trade secret, and other
                intellectual property laws.
              </p>

              <h3 className="text-lg font-semibold mb-3 mt-6">
                6.2 Your Content
              </h3>
              <p className="text-base text-black/70 leading-relaxed">
                You retain ownership of any screenshots you create using
                Riftshot. Screenshots are processed locally in your browser and
                are not uploaded to our servers unless you explicitly choose to
                do so with future features.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                7. Disclaimer of Warranties
              </h2>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
                OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT.
              </p>
              <p className="text-base text-black/70 leading-relaxed">
                We do not warrant that the Service will be uninterrupted,
                error-free, or free of viruses or other harmful components. We
                do not guarantee the accuracy, completeness, or usefulness of
                any information provided through the Service.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, RIFTSHOT SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
                DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF
                THE SERVICE.
              </p>
              <p className="text-base text-black/70 leading-relaxed">
                In no event shall our total liability exceed the amount you paid
                us in the twelve (12) months preceding the claim, or $100,
                whichever is greater.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
              <p className="text-base text-black/70 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Riftshot and
                its officers, directors, employees, and agents from any claims,
                damages, losses, liabilities, and expenses (including reasonable
                attorney&apos;s fees) arising out of or related to your use of
                the Service, your violation of these Terms, or your violation of
                any rights of another.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                10. Third-Party Services
              </h2>
              <p className="text-base text-black/70 leading-relaxed">
                Our Service integrates with third-party services including
                Supabase (authentication and data storage) and LemonSqueezy
                (payment processing). Your use of these third-party services is
                subject to their respective terms of service and privacy
                policies. We are not responsible for the practices of these
                third parties.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
              <p className="text-base text-black/70 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which Riftshot operates,
                without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                12. Dispute Resolution
              </h2>
              <p className="text-base text-black/70 leading-relaxed">
                Any disputes arising out of or relating to these Terms or the
                Service shall first be attempted to be resolved through
                good-faith negotiation. If negotiation fails, disputes shall be
                resolved through binding arbitration in accordance with
                applicable arbitration rules.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">13. Severability</h2>
              <p className="text-base text-black/70 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision shall be limited or eliminated to the
                minimum extent necessary, and the remaining provisions shall
                remain in full force and effect.
              </p>
            </div>

            {/* Section 14 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">14. Entire Agreement</h2>
              <p className="text-base text-black/70 leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the
                entire agreement between you and Riftshot regarding the Service
                and supersede all prior agreements and understandings.
              </p>
            </div>

            {/* Section 15 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">15. Contact Us</h2>
              <p className="text-base text-black/70 leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us through our official Discord channel. All inquiries,
                including support requests and refund requests, must be
                submitted via Discord.
              </p>
              <p className="text-base text-black/70 leading-relaxed mt-4">
                <strong className="text-black">Discord:</strong>{" "}
                <a
                  href="https://discord.gg/GGSrhNQnEy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline hover:text-black/70 transition-colors"
                >
                  discord.gg/GGSrhNQnEy
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
