import styles from "../SuccesStories/SuccesStories.module.css";
import Imgsucces from "../../../public/images/image-succes.webp";

import { SuccesStoriesCards } from "../SuccesStories/components/SuccesStoriesCard/SuccesStoriesCards";
import { SuccesStoriesProgress } from "../SuccesStories/components/SuccesStoriesProgress/SuccesStoriesProgress";

export const SuccesStories = () => (
  <section className={styles.SectionSuccesStories}>
    <div className={styles.SuccesStoriesHeader}>
      <h2>Счастливые победители </h2>
      <img src={Imgsucces} alt="image"></img>
    </div>
    <SuccesStoriesCards />
    <SuccesStoriesProgress />
  </section>
);
