import { NoticePage, noticeMetadata } from "@/components/notice-page";

const TEXT =
  "Tobacco use is harmful to health and is addictive. There is no safe level of tobacco use.";

export const metadata = noticeMetadata("Health Information", TEXT);

export default function HealthPage() {
  return (
    <NoticePage
      eyebrow="Compliance"
      title="Health Information"
      text={TEXT}
      paragraphs={[
        "Tobacco use can cause serious illness, including cancer, heart disease, and lung disease. It harms nearly every organ in the body.",
        "This website does not give medical advice. If you want to stop using tobacco, speak with a health professional.",
      ]}
    />
  );
}
