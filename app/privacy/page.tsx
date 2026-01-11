import { Navigation } from "../../components/main/Navigation";
import { Footer } from "../../components/main/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Riftshot",
  description:
    "Privacy Policy for Riftshot - Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-[#FBF5DF]/50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair tracking-tight mb-6">
            Privacy Policy
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
                At Riftshot, we are committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our Chrome extension and
                related services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                1. Information We Collect
              </h2>

              <h3 className="text-lg font-semibold mb-3 mt-6">
                1.1 Account Information
              </h3>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                When you create an account through Google OAuth via Supabase, we
                collect:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Email address</span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    Name and profile picture (from your Google account)
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Account creation and login timestamps</span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">
                1.2 Usage Data
              </h3>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                We collect information about how you use Riftshot, including:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Screenshot editing settings and preferences</span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Layout and style configurations</span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Export history and format preferences</span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Feature usage statistics</span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">
                1.3 Payment Information
              </h3>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                When you subscribe to our paid plans, payment processing is
                handled by LemonSqueezy. We receive:
              </p>
              <ul className="space-y-2">
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Subscription status and plan type</span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Payment transaction IDs</span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Billing cycle information</span>
                </li>
              </ul>
              <p className="text-base text-black/70 leading-relaxed mt-4">
                We do not store your credit card numbers or banking information.
                All payment data is securely processed and stored by
                LemonSqueezy in accordance with PCI-DSS standards.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-2">
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Provide, maintain, and improve our services</span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    Process your transactions and manage your subscription
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    Save your preferences and settings for a personalized
                    experience
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Send you important updates about our service</span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    Respond to your inquiries and provide customer support
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>Analyze usage patterns to improve user experience</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                3. Data Storage and Security
              </h2>

              <h3 className="text-lg font-semibold mb-3 mt-6">
                3.1 Where We Store Your Data
              </h3>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                Your data is stored using the following services:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    <strong>Supabase:</strong> Account information,
                    authentication data, and user preferences
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    <strong>LemonSqueezy:</strong> Payment and subscription
                    information
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    <strong>Local Storage:</strong> Screenshots are processed
                    locally in your browser and are not uploaded to our servers
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">
                3.2 Security Measures
              </h3>
              <p className="text-base text-black/70 leading-relaxed">
                We implement industry-standard security measures including
                encryption in transit (TLS/SSL), secure authentication
                protocols, and regular security audits. However, no method of
                transmission over the Internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                4. Third-Party Services
              </h2>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                We work with trusted third-party service providers:
              </p>
              <ul className="space-y-4">
                <li className="text-base text-black/70">
                  <strong className="text-black">Supabase</strong>
                  <p className="mt-1">
                    Provides authentication and database services. View their
                    privacy policy at{" "}
                    <a
                      href="https://supabase.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline hover:no-underline"
                    >
                      supabase.com/privacy
                    </a>
                  </p>
                </li>
                <li className="text-base text-black/70">
                  <strong className="text-black">LemonSqueezy</strong>
                  <p className="mt-1">
                    Handles payment processing and subscription management. View
                    their privacy policy at{" "}
                    <a
                      href="https://www.lemonsqueezy.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline hover:no-underline"
                    >
                      lemonsqueezy.com/privacy
                    </a>
                  </p>
                </li>
                <li className="text-base text-black/70">
                  <strong className="text-black">Google OAuth</strong>
                  <p className="mt-1">
                    Used for authentication. View Google&apos;s privacy policy
                    at{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline hover:no-underline"
                    >
                      policies.google.com/privacy
                    </a>
                  </p>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-base text-black/70 leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="space-y-2">
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    <strong>Access:</strong> Request a copy of your personal
                    data
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    <strong>Correction:</strong> Request correction of
                    inaccurate data
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    <strong>Deletion:</strong> Request deletion of your account
                    and associated data
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    <strong>Export:</strong> Request a portable copy of your
                    data
                  </span>
                </li>
                <li className="text-base text-black/70 flex gap-3">
                  <span className="text-black/40">•</span>
                  <span>
                    <strong>Opt-out:</strong> Unsubscribe from marketing
                    communications
                  </span>
                </li>
              </ul>
              <p className="text-base text-black/70 leading-relaxed mt-4">
                To exercise any of these rights, please make use of our Discord
                channel.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
              <p className="text-base text-black/70 leading-relaxed">
                We retain your personal data for as long as your account is
                active or as needed to provide you services. If you delete your
                account, we will delete your personal data within 30 days,
                except where we are required to retain it for legal or
                regulatory purposes.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                7. Cookies and Tracking
              </h2>
              <p className="text-base text-black/70 leading-relaxed">
                Our Chrome extension does not use cookies. Our website may use
                essential cookies for authentication and session management. We
                do not use third-party tracking or advertising cookies.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-base text-black/70 leading-relaxed">
                Riftshot is not intended for children under 13 years of age. We
                do not knowingly collect personal information from children
                under 13. If you believe we have collected information from a
                child under 13, please contact us immediately.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                9. Changes to This Policy
              </h2>
              <p className="text-base text-black/70 leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date. We
                encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-base text-black/70 leading-relaxed">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us through our official Discord
                channel:
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
