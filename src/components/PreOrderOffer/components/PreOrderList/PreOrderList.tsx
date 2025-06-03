import { List } from "../../../List/List";

export const PreOrderList: React.FC = () => {
  const items = [
    "Получите скидку 20% на подписку, когда мы запустим приложение",
    "Участвуйте в нашем розыгрыше бесплатной годовой подписки",
    "Будьте одними из первых, кто получит доступ к приложению",
  ];

  const renderItem = (item: string) => <span>{item}</span>;

  return <List items={items} renderItem={renderItem} iconColor="blue" />;
};
