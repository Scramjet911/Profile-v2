import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export const PostBody = ({ content }: Props) => (
  <div className="max-w-2xl mx-auto">
    <div
      className={markdownStyles.markdown}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);
