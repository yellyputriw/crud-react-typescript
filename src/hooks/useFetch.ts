import axios from "axios";
import { useState, useEffect } from "react";
import { Record } from "../interfaces/RecordEntities";

export const useFetch = <Type extends Record>(path: string, options?: {}) => {
  const [records, setRecords] = useState<Type[]>([]);

  const url = `https://62a168a2cd2e8da9b0f0a49a.mockapi.io/${path}`;

  useEffect(() => {
    const callFetchFunction = async () => {
      const res = await axios.get<Type[]>(url, { params: options });
      setRecords(res.data);
    };
    callFetchFunction();
  }, [url, options]);

  return { records };
};
