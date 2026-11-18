import { NoticePage, noticeMetadata } from "@/components/notice-page";

const TEXT = "This website does not sell tobacco and does not ask you to create an account.";

export const metadata = noticeMetadata("Privacy Policy", TEXT);

export default function PrivacyPage() {
  return (
    <NoticePage
      eyebrow="Legal"
      title="Privacy Policy"
      text={TEXT}
      paragraphs={[
        "Age confirmation is stored in your browser so you are not asked again on this device. You can clear it by clearing this site’s data in your browser.",
        "Choosing Email opens Gmail with your message. Choosing WhatsApp opens WhatsApp. Choosing Phone starts a call. This website does not store the message.",
      ]}
    />
  );
}
