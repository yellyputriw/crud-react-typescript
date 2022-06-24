import { Record } from "../../interfaces/RecordEntities";
import { RecordIndexProps } from "../../interfaces/PagesProps";
import { useFetch } from "../../hooks/useFetch";
import { RecordList } from "./List";

export const RecordIndex = <Type extends Record>({
  ListItem,
  apiPath,
  apiOptions,
}: RecordIndexProps<Type>) => {
  const { records } = useFetch<Type>(apiPath, apiOptions);

  return (
    <div className="page">
      <div className="content">
        <RecordList<Type> ListItem={ListItem} records={records} />
      </div>
    </div>
  );
};
