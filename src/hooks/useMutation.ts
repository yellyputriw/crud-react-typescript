import axios from "axios";
import { Record } from "../interfaces/RecordEntities";

export type Action<Type> = (record: Type) => Promise<void>;

export const useMutation = <Type extends Record>(path: string) => {
  const url = `https://62a168a2cd2e8da9b0f0a49a.mockapi.io/${path}`;

  const create: Action<Type> = async (record: Type) => {
    await axios.post(url, record);
  };

  const update: Action<Type> = async (record: Type) => {
    await axios.put(`${url}/${record.id}`, record);
  };

  const remove: Action<Type> = async (record: Type) => {
    await axios.delete(`${url}/${record.id}`);
  };

  return { create, update, remove };
};
