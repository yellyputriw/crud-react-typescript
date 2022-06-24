import { createContext, ReactNode, useContext, useState } from "react";

interface PageProps {
  children: ReactNode;
}

export enum Page {
  Articles = "Articles",
  Authors = "Authors",
}

type ContextType = {
  page: Page;
  setPage: (page: Page) => void;
};

export const usePage = () => useContext(Context);

const Context = createContext<ContextType>({
  page: Page.Articles,
  setPage: (page) => console.warn("no page provider"),
});

export const PageStore: React.FC<PageProps> = ({ children }) => {
  const [page, setPage] = useState(Page.Articles);
  return (
    <Context.Provider value={{ page, setPage }}>{children}</Context.Provider>
  );
};
