import { List } from "../../../List/List";

export const UniqueMethodologyList: React.FC = () => {
  const items = [
    "Научно доказано, что улучшает запоминание ",
    "Сокращает время обучения по сравнению с традиционными методами",
    "Настраивается под ваш темп обучения и цели",
    "Больше не будете забывать слова, которые вы уже выучили",
  ];

  const renderItem = (item: string) => <span>{item}</span>;

  return <List items={items} renderItem={renderItem} />;
};
