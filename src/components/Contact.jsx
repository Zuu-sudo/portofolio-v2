import React from "react";
import { contactLinks } from "../data/contactLinks";

export default function Contact({ t }) {
  return (
    <section id="contact" className="section bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">{t.contact.label}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="text-text-muted max-w-xl mx-auto mt-4">
            {t.contact.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={link.label}
            >
              <span
                className="text-xl"
                dangerouslySetInnerHTML={{ __html: link.icon }}
              />
            </a>
          ))}
        </div>

        <div className="max-w-md mx-auto text-center">
          <p className="text-text-muted">{t.footer.copyright}</p>
        </div>
      </div>
    </section>
  );
}
