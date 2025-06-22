import styles from "../ButtonShare/ButtonShare.module.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  ViberShareButton,
  TelegramShareButton,
} from "react-share";
import IconFb from "../../../public/images/icons/icon-fb.png";
import IconTwitter from "../../../public/images/icons/icon-twitter.png";
import IconWhatsApp from "../../../public/images/icons/icon-whatsapp.png";
import IconViber from "../../../public/images/icons/icon-viber.png";
import IconTelegram from "../../../public/images/icons/icon-telegram.png";

export const ButtonShare = () => {
  const shareUrl = "https://easywordsapp.com";
  const title =
    "🚀 Изучай английские слова в 3 раза быстрее с EasyWords: флэш-карточки + логическое кодирование!";

  return (
    <div className={styles.ButtonsShare}>
      <TelegramShareButton url={shareUrl} title={title}>
        <img src={IconTelegram} alt="icon"></img>
        <h6>Telegram</h6>
      </TelegramShareButton>
      <FacebookShareButton url={shareUrl} title={title}>
        <img src={IconFb} alt="icon"></img>
        <h6>Facebook</h6>
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <img src={IconTwitter} alt="icon"></img>
        <h6>Twitter</h6>
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl} title={title}>
        <img src={IconWhatsApp} alt="icon"></img>
        <h6>WhatsApp</h6>
      </WhatsappShareButton>
      <ViberShareButton url={shareUrl} title={title}>
        <img src={IconViber} alt="icon"></img>
        <h6>Viber</h6>
      </ViberShareButton>
    </div>
  );
};
