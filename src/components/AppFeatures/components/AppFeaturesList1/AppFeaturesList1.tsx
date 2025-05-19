import { List } from "../../../List/List";

export const AppFeaturesList1: React.FC = () => {
  const items = [
    "Облегчает запоминание",
    "Изображение на обороте способствует ассоциативной памяти",
    "Легко повторять материал",
    "Всегда можно прослушать произношение ",
  ];

  const renderItem = (item: string) => <span>{item}</span>;

  return <List items={items} renderItem={renderItem} />;
};
