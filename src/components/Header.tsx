import { usePage, Page } from "../contexts/Page";

export const Header: React.FC = () => {
  const { page, setPage } = usePage();

  const pageButton = (pageName: Page) => {
    return (
      <button
        className={pageName === page ? "active" : ""}
        onClick={() => setPage(pageName)}
      >
        {pageName}
      </button>
    );
  };

  return (
    <header className="App-header">
      <div className="header-title">
        <h1 className="title">Typescript CRUD</h1>
        <p className="subtitle">With React and TypeORM</p>
      </div>
      <div className="navigation">
        <div className="internal">
          {pageButton(Page.Articles)}
          {pageButton(Page.Authors)}
        </div>
        <div className="external">
          <a href="/" target="_blank" rel="noreferrer" className="button">
            Github
          </a>
        </div>
      </div>
    </header>
  );
};
