import React from "react";

export interface RecordIndexProps<Type> {
  ListItem: React.FC<ListItemProps<Type>>;
  apiPath: string;
  apiOptions: {};
}

export interface RecordListProps<Type> {
  ListItem: React.FC<ListItemProps<Type>>;
  records: Type[];
}

export interface ListItemProps<Type> {
  record: Type;
}
