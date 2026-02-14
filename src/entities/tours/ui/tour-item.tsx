import Link from "next/link";
import { ITour } from "../model/type";

type Props = {
  item: ITour;
};

export const TourItem = ({ item }: Props) => {
  return (
    <div
      className="flex justify-between flex-col gap-4 main-gradient-90-deg shadow-block p-4 rounded-md
      group
      transition-all
      duration-300
      hover:scale-[1.02]"
    >
      <div className="flex flex-col items-start gap-2">
        <h4 className="font-bold text-[32px]">{item.date}</h4>
        <span className="text-[18px]">{item.time}</span>
      </div>
      <div className="flex flex-col items-end gap-1">
        <Link href={item.ticketsUrl} className="text-accent text-link-hover">
          Билеты
        </Link>
        <p className="text-xl">{item.location}</p>
        <p className="text-xl">
          {item.venue}: <b className="font-bold">{`“${item.venueName}”`}</b>
        </p>
      </div>
    </div>
  );
};
