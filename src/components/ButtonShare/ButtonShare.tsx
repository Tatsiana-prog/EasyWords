import styles from "../ButtonShare/ButtonShare.module.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  ViberShareButton,
  TelegramShareButton,
} from "react-share";
import { Text } from "../Text/Text";
import IconFb from "../../../public/images/icons/icon-fb.png";
import IconTwitter from "../../../public/images/icons/icon-twitter.png";
import IconWhatsApp from "../../../public/images/icons/icon-whatsapp.png";
import IconViber from "../../../public/images/icons/icon-viber.png";
import IconTelegram from "../../../public/images/icons/icon-telegram.png";

export const ButtonShare = () => {
  const shareUrl = "http://localhost:5173/UserProfile";
  const title = "EasyWords";

  return (
    <div className={styles.ButtonsShare}>
      <TelegramShareButton url={shareUrl} title={title}>
        <img src={IconTelegram} alt="icon"></img>
        <Text>Telegram</Text>
      </TelegramShareButton>
      <FacebookShareButton url={shareUrl} title={title}>
        <img src={IconFb} alt="icon"></img>
        <Text>Facebook</Text>
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <img src={IconTwitter} alt="icon"></img>
        <Text>Twitter</Text>
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl} title={title}>
        <img src={IconWhatsApp} alt="icon"></img>
        <Text>WhatsApp</Text>
      </WhatsappShareButton>
      <ViberShareButton url={shareUrl} title={title}>
        <img src={IconViber} alt="icon"></img>
        <Text>Viber</Text>
      </ViberShareButton>
    </div>
  );
};
