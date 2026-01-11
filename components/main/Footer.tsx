import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#FBF5DF]/50 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Links */}
        <div className="border-t border-black/20 pt-16 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Product */}
            <div>
              <h4 className="text-xs font-medium text-black/40 mb-4 uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-black/70 hover:text-black transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-black/70 hover:text-black transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-black/70 hover:text-black transition-colors"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xs font-medium text-black/40 mb-4 uppercase tracking-wider">
                Social
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://x.com/jayychoii_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black/70 hover:text-black transition-colors"
                  >
                    Twitter
                  </a>
                </li>

                <li>
                  <a
                    href="https://discord.gg/GGSrhNQnEy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black/70 hover:text-black transition-colors"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-medium text-black/40 mb-4 uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/privacy"
                    className="text-sm text-black/70 hover:text-black transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-sm text-black/70 hover:text-black transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-medium text-black/40 mb-4 uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://discord.gg/GGSrhNQnEy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black/70 hover:text-black transition-colors"
                  >
                    Support (Discord)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Large Logo */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          {/* Large Logo Text */}
          <div className="text-[80px] md:text-[120px] font-bold leading-none text-black tracking-tighter">
            RIFTSHOT
          </div>

          {/* Bottom Links & Copyright */}
          <div className="flex flex-col items-start md:items-end gap-4 pb-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Riftshot Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <p className="text-xs text-black/40">
              © 2026 Riftshot. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
