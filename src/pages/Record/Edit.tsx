import { Record } from "../../interfaces/RecordEntities";
import { RecordEditProps } from "../../interfaces/PagesProps";
import { RecordForm } from "./Form";

export const RecordEdit = <Type extends Record>({
  FormFields,
  activeRecord,
}: RecordEditProps<Type>) => {
  return (
    <div className="edit">
      <h2>Edit</h2>
      <RecordForm FormFields={FormFields} activeRecord={activeRecord} />
    </div>
  );
};
