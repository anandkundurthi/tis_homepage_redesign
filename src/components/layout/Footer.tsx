import { SchoolLogo } from "@/components/ui/SchoolLogo";
import { footerGroups, socialLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="on-brand bg-brand text-ink">
      <div className="wrap grid gap-12 py-16 lg:grid-cols-[1.2fr_2fr] lg:py-20">
        <div>
          <SchoolLogo variant="footer" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
            A co-educational CBSE boarding and day school on Chakrata Road,
            Dehradun, Uttarakhand.
          </p>
          <ul aria-label="Social media" className="mt-8 flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center border border-line px-3.5 text-xs font-semibold tracking-wide transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3"
        >
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emphasis">
                {group.title}
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {group.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="link-underline inline-block py-0.5"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © Tulas International School. All school names, text and imagery
            belong to TIS.
          </p>
        </div>
      </div>
    </footer>
  );
}
