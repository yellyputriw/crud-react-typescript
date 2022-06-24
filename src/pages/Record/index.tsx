import { Record } from "../../interfaces/RecordEntities";
import { RecordIndexProps } from "../../interfaces/PagesProps";
import { useFetch } from "../../hooks/useFetch";
import { RecordList } from "./List";
import { RecordMutation } from "./Mutation";
import { useState } from "react";

export const RecordIndex = <Type extends Record>({
  ListItem,
  apiPath,
  apiOptions,
  FormFields,
  emptyRecord,
}: RecordIndexProps<Type>) => {
  const [activeRecord, setActiveRecord] = useState<Type>(emptyRecord);
  const { records } = useFetch<Type>(apiPath, apiOptions);

  return (
    <div className="page">
      <div className="content">
        <RecordList<Type>
          ListItem={ListItem}
          records={records}
          emptyRecord={emptyRecord}
          ActiveRecord={activeRecord}
          setActiveRecord={setActiveRecord}
        />
        <RecordMutation<Type>
          FormFields={FormFields}
          activeRecord={activeRecord}
        />
      </div>
    </div>
  );
};
