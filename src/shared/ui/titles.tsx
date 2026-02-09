type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = {
  text: string;
  as: HeadingTag;
  className?: string;
};
export const Titles = ({ text, as, className }: Props) => {
  const Tag = as;
  return (
    <Tag className={`font-bold text-[42px] uppercase title-decor ${className}`}>
      {text}
    </Tag>
  );
};
