import React from "react";
import { IChangeElement } from "../hooks/useForm";
import { Action } from "../hooks/useMutation";
export interface RecordIndexProps<Type> {
  ListItem: React.FC<ListItemProps<Type>>;
  apiPath: string;
  apiOptions: {};
  FormFields: React.FC<FormFieldsProps<Type>>;
  emptyRecord: Type;
}

export interface RecordListProps<Type> {
  ListItem: React.FC<ListItemProps<Type>>;
  records: Type[];
  emptyRecord: Type;
  ActiveRecord: Type;
  setActiveRecord: Function;
}

export interface ListItemProps<Type> {
  record: Type;
}

export interface FormFieldsProps<Type> {
  formState: Type;
  handleChange: (event: React.ChangeEvent<IChangeElement>) => void;
}

export interface RecordFormProps<Type> {
  FormFields: React.FC<FormFieldsProps<Type>>;
  activeRecord: Type;
  submitAction: Action<Type>;
}

export interface RecordNewProps<Type> {
  FormFields: React.FC<FormFieldsProps<Type>>;
  activeRecord: Type;
  create: Action<Type>;
}

export interface RecordMutationProps<Type> {
  FormFields: React.FC<FormFieldsProps<Type>>;
  activeRecord: Type;
  apiPath: string;
}

export interface RecordEditProps<Type> {
  FormFields: React.FC<FormFieldsProps<Type>>;
  activeRecord: Type;
  update: Action<Type>;
  remove: Action<Type>;
}
