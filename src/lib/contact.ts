/** Public inbox. Digits-only WhatsApp number includes the country code, with no + or spaces. */
export const CONTACT_EMAIL = "sms@gcect.com";
export const WHATSAPP_NUMBER = "447901000690";
export const WHATSAPP_DISPLAY = "+44 7901 000 690";
export const PHONE_NUMBER = "447901000690";
export const PHONE_DISPLAY = "+44 7901 000 690";

export function enquiryEmail(name: string, email: string, phone: string, message: string) {
  const rule = "------------------------------";
  const subject = `TAHIR | Website enquiry — ${name}`;
  const body = [
    "TAHIR",
    "Website enquiry",
    rule,
    "",
    "From",
    name,
    email,
    phone,
    "",
    "Message",
    message,
    "",
    rule,
    "Kind regards,",
    name,
    "",
    "TAHIR website",
    "Adults aged 18 and over.",
    "Tobacco use is harmful to health and is addictive.",
  ].join("\n");

  return { subject, body };
}

export function phoneHref() {
  return `tel:+${PHONE_NUMBER}`;
}

export function emailHref(subject?: string, body?: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: CONTACT_EMAIL,
  });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function whatsappHref(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
