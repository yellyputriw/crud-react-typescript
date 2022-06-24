import { Record } from "../../interfaces/RecordEntities";
import { RecordIndexProps } from "../../interfaces/PagesProps";
import { useFetch } from "../../hooks/useFetch";
import { RecordList } from "./List";
import { RecordMutation } from "./Mutation";

export const RecordIndex = <Type extends Record>({
  ListItem,
  apiPath,
  apiOptions,
  FormFields,
  emptyRecord,
}: RecordIndexProps<Type>) => {
  const { records } = useFetch<Type>(apiPath, apiOptions);

  return (
    <div className="page">
      <div className="content">
        <RecordList<Type> ListItem={ListItem} records={records} />
        <RecordMutation<Type>
          FormFields={FormFields}
          activeRecord={emptyRecord}
        />
      </div>
    </div>
  );
};
