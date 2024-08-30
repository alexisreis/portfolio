import ListItem from '@/components/list/ListItem';

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </ul>
  );
};

export default List;
