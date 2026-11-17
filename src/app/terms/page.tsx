import { NoticePage, noticeMetadata } from "@/components/notice-page";

const TEXT = "This website is for adults aged 18 and over.";

export const metadata = noticeMetadata("Terms of Use", TEXT);

export default function TermsPage() {
  return (
    <NoticePage
      eyebrow="Legal"
      title="Terms of Use"
      text={TEXT}
      paragraphs={[
        "The pages here describe the TAHIR range. They are not an offer to sell tobacco where that is not permitted.",
        "You may not copy the TAHIR name or mark without permission.",
      ]}
    />
  );
}
