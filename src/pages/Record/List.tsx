import { Record } from "../../interfaces/RecordEntities";
import { RecordListProps } from "../../interfaces/PagesProps";
import { usePage } from "../../contexts/Page";

export const RecordList = <Type extends Record>({
  ListItem,
  records,
}: RecordListProps<Type>) => {
  const { page } = usePage();

  return (
    <div className="list">
      <h2>{page}</h2>
      <ul>
        {records.map((record) => (
          <li key={record.id}>
            <ListItem record={record} />
          </li>
        ))}
      </ul>
    </div>
  );
};
