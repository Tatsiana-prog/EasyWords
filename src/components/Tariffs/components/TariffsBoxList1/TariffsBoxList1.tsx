import { List } from "../../../List/List";

export const TariffsBoxList1: React.FC = () => {
  const items = [
    "Доступ ко всем группам слов",
    "Алгоритм интервального повторения",
    "Отслеживание прогресса",
    "Базовая поддержка",
  ];

  const renderItem = (item: string) => <span>{item}</span>;

  return <List items={items} renderItem={renderItem} iconColor="red" />;
};
