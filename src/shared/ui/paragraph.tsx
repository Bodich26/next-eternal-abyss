type Props = {
  text: string;
  className?: string;
};
export const Paragraph = ({ text, className }: Props) => {
  return (
    <p className={`text-[18px] tracking-wide max-sm:text-[16px] ${className}`}>
      {text}
    </p>
  );
};
