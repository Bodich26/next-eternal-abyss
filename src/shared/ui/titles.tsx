type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = {
  text: string;
  as: HeadingTag;
};
export const Titles = ({ text, as }: Props) => {
  const Tag = as;
  return (
    <Tag className="font-bold text-[42px] uppercase title-decor">{text}</Tag>
  );
};
