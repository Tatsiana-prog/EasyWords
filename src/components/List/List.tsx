import styles from "../List/List.module.css";

interface ListProps {
  items: string[];
  renderItem: (item: string) => React.ReactNode;
}

export const List: React.FC<ListProps> = ({ items, renderItem }) => {
  return (
    <ul className={styles.List}>
      {items.map((item, index) => (
        <li key={index} className={styles.ListItem}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};
