import { Record } from "../../interfaces/RecordEntities";
import { RecordFormProps } from "../../interfaces/PagesProps";
import { useForm } from "../../hooks/useForm";

export const RecordForm = <Type extends Record>({
  FormFields,
  activeRecord,
}: RecordFormProps<Type>) => {
  const { formState, handleChange } = useForm<Type>(activeRecord);

  return (
    <div>
      <form>
        <FormFields formState={formState} handleChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};
