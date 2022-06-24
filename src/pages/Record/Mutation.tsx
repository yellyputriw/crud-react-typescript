import { Record } from "../../interfaces/RecordEntities";
import { RecordMutationProps } from "../../interfaces/PagesProps";
import { RecordNew } from "./New";

export const RecordMutation = <Type extends Record>({
  FormFields,
  activeRecord,
}: RecordMutationProps<Type>) => {
  return (
    <div className="mutations">
      <RecordNew FormFields={FormFields} activeRecord={activeRecord} />
    </div>
  );
};
