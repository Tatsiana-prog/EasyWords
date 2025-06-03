import { useFormContext } from "../PreOrderOffer/components/FormContext/FormContext";
import { Button } from "../Button/button";
import IconDownload from "../../../public/images/icons/icon-download.svg"; // путь к иконке

export const DownloadAppButton = () => {
  const { formData } = useFormContext();
  const selectedPlatform = formData?.option;

  if (!selectedPlatform) return null;

  const downloadUrl =
    selectedPlatform === "IOS"
      ? "https://apps.apple.com/app"
      : "https://play.google.com/store/apps/details?id=your.app";

  return (
    <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
      <Button variant="blue" text="Скачать приложение">
        <img src={IconDownload} alt="icon" />
      </Button>
    </a>
  );
};
