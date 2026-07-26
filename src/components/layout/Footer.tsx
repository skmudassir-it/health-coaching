import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartPulse,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FOOTER_LINKS = {
  services: [
    { href: "/services/nutrition-coaching", label: "Nutrition Coaching" },
    { href: "/services/fitness-training", label: "Fitness Training" },
    { href: "/services/stress-management", label: "Stress Management" },
    { href: "/services/sleep-optimization", label: "Sleep Optimization" },
    { href: "/services/weight-management", label: "Weight Management" },
    { href: "/services/holistic-wellness", label: "Holistic Wellness" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Success Stories" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
};

const SOCIAL_LINKS = [
  {
    href: "https://instagram.com",
    icon: faInstagram,
    label: "Instagram",
  },
  {
    href: "https://facebook.com",
    icon: faFacebook,
    label: "Facebook",
  },
  {
    href: "https://linkedin.com",
    icon: faLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://x.com",
    icon: faXTwitter,
    label: "X",
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="mb-4 flex items-center gap-2 text-lg font-bold"
              style={{ color: "oklch(0.52 0.18 155)" }}
            >
              <FontAwesomeIcon
                icon={faHeartPulse}
                className="size-6"
                style={{ color: "oklch(0.52 0.18 155)" }}
              />
              <span>VitalEdge</span>
            </Link>
            <p className="mb-4 text-sm text-muted-foreground">
              Transform your health with personalized coaching, nutrition
              guidance, and wellness programs designed for lasting results.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mt-0.5 size-4 shrink-0"
                  style={{ color: "oklch(0.52 0.18 155)" }}
                />
                <span>
                  123 Wellness Way, Suite 200
                  <br />
                  Austin, TX 78701
                </span>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="size-4 shrink-0"
                    style={{ color: "oklch(0.52 0.18 155)" }}
                  />
                  <span>(555) 123-4567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@vitaledge.co"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="size-4 shrink-0"
                    style={{ color: "oklch(0.52 0.18 155)" }}
                  />
                  <span>hello@vitaledge.co</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} VitalEdge Health Coaching. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
