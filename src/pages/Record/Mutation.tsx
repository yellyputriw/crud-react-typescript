import { Record } from "../../interfaces/RecordEntities";
import { RecordMutationProps } from "../../interfaces/PagesProps";
import { RecordNew } from "./New";
import { RecordEdit } from "./Edit";

export const RecordMutation = <Type extends Record>({
  FormFields,
  activeRecord,
}: RecordMutationProps<Type>) => {
  return (
    <div className="mutations">
      {activeRecord.id ? (
        <RecordEdit<Type> FormFields={FormFields} activeRecord={activeRecord} />
      ) : (
        <RecordNew<Type> FormFields={FormFields} activeRecord={activeRecord} />
      )}
    </div>
  );
};
