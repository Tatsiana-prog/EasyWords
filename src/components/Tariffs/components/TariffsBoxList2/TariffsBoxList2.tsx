import { List } from "../../../List/List";

export const TariffsBoxList2: React.FC = () => {
  const items = [
    "Все функции ежемесячного плана",
    "Премиум-группы слов",
    "Приоритетная поддержка",
    "Ранний доступ к новым функциям",
  ];

  const renderItem = (item: string) => <span>{item}</span>;

  return <List items={items} renderItem={renderItem} iconColor="red" />;
};
