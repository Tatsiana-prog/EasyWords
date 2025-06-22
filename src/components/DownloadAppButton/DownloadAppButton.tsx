import { Button } from "../Button/button";
import IconDownload from "../../../public/images/icons/icon-download.svg"; // путь к иконке

interface DownloadAppButtonProps {
  systemVersion: "ios" | "android";
}
export const DownloadAppButton: React.FC<DownloadAppButtonProps> = ({
  systemVersion,
}) => {
  const appStoreLink =
    systemVersion === "ios"
      ? "https://apps.apple.com/app/idYOUR_IOS_APP_ID"
      : "https://play.google.com/store/apps/details?id=YOUR_ANDROID_APP_ID";

  return (
    <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
      <Button variant="blue" text="Скачать приложение">
        <img src={IconDownload} alt="icon" />
      </Button>
    </a>
  );
};
