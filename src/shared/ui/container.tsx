import { widthContainer } from "../constants/width-container";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <div className={`max-w-[${widthContainer}] px-3.75 mx-auto`}>
      {children}
    </div>
  );
};
