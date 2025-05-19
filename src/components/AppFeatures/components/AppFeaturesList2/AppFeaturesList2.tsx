import { List } from "../../../List/List";

export const AppFeaturesList2: React.FC = () => {
  const items = [
    "Легко отследить эффективность изучения",
    "Развивает критическое мышление",
    "Способствует глубокому осмыслению пройденного материала",
    "Легко отслеживать ошибки и верные ответы",
  ];

  const renderItem = (item: string) => <span>{item}</span>;

  return <List items={items} renderItem={renderItem} />;
};
