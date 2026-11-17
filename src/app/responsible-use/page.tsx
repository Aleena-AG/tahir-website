import { NoticePage, noticeMetadata } from "@/components/notice-page";

const TEXT = "Tobacco products are for adults only. Keep them away from children.";

export const metadata = noticeMetadata("Responsible Use", TEXT);

export default function ResponsibleUsePage() {
  return (
    <NoticePage
      eyebrow="Compliance"
      title="Responsible Use"
      text={TEXT}
      paragraphs={[
        "Do not use tobacco if you are pregnant. Do not use tobacco around children.",
        "Tobacco use is harmful to health and is addictive. If you want to stop, speak with a health professional.",
      ]}
    />
  );
}
