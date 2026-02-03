type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className={`max-w-[1390px] px-3.75 mx-auto`}>{children}</div>;
};
