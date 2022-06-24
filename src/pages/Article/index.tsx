import { Article } from "../../interfaces/RecordEntities";
import { RecordIndex } from "../Record";
import { ArticleListItem } from "./ListItem";

export const ArticleIndex: React.FC = () => {
  const apiOptions = { relations: ["authors"] };

  return (
    <RecordIndex<Article>
      ListItem={ArticleListItem}
      apiPath="articles"
      apiOptions={apiOptions}
    />
  );
};
