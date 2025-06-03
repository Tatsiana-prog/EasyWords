import styles from "../JoinCommunity/JoinCommunity.module.css";
import { JoinCommunityCards } from "./components/JoinCommunityCards/JoinCommunityCards";

export const JoinCommunity = () => {
    return (
       <section className={styles.SectionJoinCommunity}>
            <h2>Присоединяйтесь к нашему растущему сообществу</h2>
             <div className={styles.JoinCommunitySubtitle}>
            </div>
            <JoinCommunityCards/>
        </section>
    );
};
