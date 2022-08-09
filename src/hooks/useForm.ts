import React, { useState } from "react";
import { Action } from "./useMutation";

export type IChangeElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export const useForm = <Type>(initialState: Type, handleAction: Function) => {
  const [formState, setFormState] = useState<Type>(initialState);

  const handleChange = (event: React.ChangeEvent<IChangeElement>): void => {
    const { tagName, name, value } = event.target;
    const parsedValue = tagName === "SELECT" && value === "" ? null : value;
    setFormState({ ...formState, [name]: parsedValue });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleAction(formState);
  };

  return { formState, setFormState, handleChange, handleSubmit };
};
