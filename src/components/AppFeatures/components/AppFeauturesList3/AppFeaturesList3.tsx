import { List } from "../../../List/List";

export const AppFeaturesList3: React.FC = () => {
  const items = [
    "Напомним о повторении в уведомлении",
    "Больше не нужно долго учить слова",
    "Закрепляет материал в долгосрочной памяти",
    "Помощь в преодолении эффекта забывания",
  ];

  const renderItem = (item: string) => <span>{item}</span>;

  return <List items={items} renderItem={renderItem} />;
};
