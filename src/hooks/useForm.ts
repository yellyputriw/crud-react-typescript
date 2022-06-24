import React, { useState } from "react";

export type IChangeElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export const useForm = <Type>(initialState: Type) => {
  const [formState, setFormState] = useState<Type>(initialState);

  const handleChange = (event: React.ChangeEvent<IChangeElement>): void => {
    const { tagName, name, value } = event.target;
    const parsedValue = tagName === "SELECT" && value === "" ? null : value;
    setFormState({ ...formState, [name]: parsedValue });
  };

  return { formState, setFormState, handleChange };
};
