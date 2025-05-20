import styles from "../List/List.module.css";

interface ListProps {
  items: string[];
  renderItem: (item: string) => React.ReactNode;
  iconColor?: "blue" | "red";
}

export const List: React.FC<ListProps> = ({
  items,
  renderItem,
  iconColor = "blue",
}) => {
  return (
    <ul className={styles.List}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`${styles.ListItem} ${
            iconColor === "red" ? styles.RedIcon : styles.BlueIcon
          }`}
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};
