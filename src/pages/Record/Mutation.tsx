import { Record } from "../../interfaces/RecordEntities";
import { RecordMutationProps } from "../../interfaces/PagesProps";
import { RecordNew } from "./New";
import { RecordEdit } from "./Edit";
import { useMutation } from "../../hooks/useMutation";

export const RecordMutation = <Type extends Record>({
  FormFields,
  activeRecord,
  apiPath,
}: RecordMutationProps<Type>) => {
  const { create, update, remove } = useMutation<Type>(apiPath);

  return (
    <div className="mutations">
      {activeRecord.id ? (
        <RecordEdit<Type>
          FormFields={FormFields}
          activeRecord={activeRecord}
          update={update}
          remove={remove}
        />
      ) : (
        <RecordNew<Type>
          FormFields={FormFields}
          activeRecord={activeRecord}
          create={create}
        />
      )}
    </div>
  );
};
