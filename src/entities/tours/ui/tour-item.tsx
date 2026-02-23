import Link from "next/link";
import { ITour } from "../model/type";
import { EditAdminButton } from "@/features/edit-admin-button";
import { PUBLIC_ROUTES } from "@/../routes";
import { Links } from "@/shared";

type Props = {
  tour: ITour;
  isAdmin?: boolean;
};

export const TourItem = ({ tour, isAdmin }: Props) => {
  return (
    <div
      className="
      group relative overflow-hidden
      rounded-md
      main-gradient-90-deg
      shadow-block
      transition-all duration-300
      hover:scale-[1.02]"
    >
      {isAdmin && (
        <EditAdminButton
          url={`${PUBLIC_ROUTES.ADMIN}/${PUBLIC_ROUTES.TOURS}`}
          idUrl={tour.id}
        />
      )}
      <div
        className="flex justify-between flex-col gap-4 main-gradient-90-deg shadow-block p-4 rounded-md
      group"
      >
        <div className="flex flex-col items-start gap-2">
          <h4 className="font-bold text-[32px]">{tour.date}</h4>
          <span className="text-[18px]">{tour.time}</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <Links text={"Билеты"} href={tour.ticketsUrl} size="16px" />
          <p className="text-xl">{tour.location}</p>
          <p className="text-xl">
            {tour.venue}: <b className="font-bold">{`“${tour.venueName}”`}</b>
          </p>
        </div>
      </div>
    </div>
  );
};
