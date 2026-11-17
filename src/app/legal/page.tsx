import { NoticePage, noticeMetadata } from "@/components/notice-page";

const TEXT =
  "TAHIR is a tobacco range for adults. Tobacco products are for adults only (18+).";

export const metadata = noticeMetadata("Legal Notice", TEXT);

export default function LegalNoticePage() {
  return (
    <NoticePage
      eyebrow="Legal"
      title="Legal Notice"
      text={TEXT}
      paragraphs={[
        "Tobacco use is harmful to health and is addictive. This website is intended for adults aged 18 and over.",
      ]}
    />
  );
}
