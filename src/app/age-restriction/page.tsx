import { NoticePage, noticeMetadata } from "@/components/notice-page";

const TEXT = "TAHIR is for adults aged 18 and over.";

export const metadata = noticeMetadata("Age Restriction", TEXT);

export default function AgeRestrictionPage() {
  return (
    <NoticePage
      eyebrow="Compliance"
      title="Age Restriction"
      text={TEXT}
      paragraphs={[
        "You must confirm that you are 18 or older before entering this website. That confirmation is stored in your browser on this device.",
        "Do not share this website with anyone under 18.",
      ]}
    />
  );
}
