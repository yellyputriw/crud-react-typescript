import { Record } from "../../interfaces/RecordEntities";
import { RecordEditProps } from "../../interfaces/PagesProps";
import { RecordForm } from "./Form";

export const RecordEdit = <Type extends Record>({
  FormFields,
  activeRecord,
  remove,
  update,
}: RecordEditProps<Type>) => {
  return (
    <div className="edit">
      <h2>Edit</h2>
      <button className="bt-remove" onClick={() => remove(activeRecord)}>
        Remove
      </button>
      <RecordForm
        FormFields={FormFields}
        activeRecord={activeRecord}
        submitAction={update}
      />
    </div>
  );
};
