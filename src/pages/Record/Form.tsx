import { useEffect } from "react";
import { Record } from "../../interfaces/RecordEntities";
import { RecordFormProps } from "../../interfaces/PagesProps";
import { useForm } from "../../hooks/useForm";

export const RecordForm = <Type extends Record>({
  FormFields,
  activeRecord,
  submitAction,
}: RecordFormProps<Type>) => {
  const { formState, setFormState, handleChange, handleSubmit } = useForm<Type>(
    activeRecord,
    submitAction
  );

  useEffect(() => {
    if (activeRecord) {
      setFormState(activeRecord);
    }
  }, [setFormState, activeRecord]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormFields formState={formState} handleChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};
