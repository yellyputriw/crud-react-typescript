import React from "react";
import { IChangeElement } from "../hooks/useForm";
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
}

export interface RecordNewProps<Type> {
  FormFields: React.FC<FormFieldsProps<Type>>;
  activeRecord: Type;
}

export interface RecordMutationProps<Type> {
  FormFields: React.FC<FormFieldsProps<Type>>;
  activeRecord: Type;
}
